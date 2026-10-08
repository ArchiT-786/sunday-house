export type SiteAccessSettings = { maintenance: boolean; restricted: boolean; allowedIps: string[] };
export const DEFAULT_SETTINGS: SiteAccessSettings = { maintenance: false, restricted: false, allowedIps: [] };
export const SETTINGS_PATH = "site-access.json";
export function normalizeIp(input: string) {
 const ip = input.trim().replace(/^::ffff:/, "");
 if (!ip || ip.length > 45 || !/^[a-fA-F0-9:.]+$/.test(ip)) return "";
 if (ip.includes(":")) return /^[a-fA-F0-9:]+$/.test(ip) ? ip.toLowerCase() : "";
 const parts=ip.split(".");
 return parts.length===4 && parts.every(p=>/^\d{1,3}$/.test(p)&&Number(p)<=255) ? parts.map(Number).join(".") : "";
}
export function sanitizeSettings(value: unknown): SiteAccessSettings {
 if(!value || typeof value!=="object") return DEFAULT_SETTINGS;
 const v=value as Record<string,unknown>;
 return { maintenance:v.maintenance===true, restricted:v.restricted===true, allowedIps:Array.isArray(v.allowedIps)?Array.from(new Set(v.allowedIps.filter((x):x is string=>typeof x==="string").map(normalizeIp).filter(Boolean))).slice(0,100):[] };
}
export function githubHeaders(){return {Accept:"application/vnd.github+json",Authorization:`Bearer ${process.env.SITE_ACCESS_GITHUB_TOKEN||""}`,"X-GitHub-Api-Version":"2022-11-28"};}
export function settingsUrl(){return `https://api.github.com/repos/${process.env.SITE_ACCESS_REPOSITORY||"ArchiT-786/sunday-house"}/contents/${SETTINGS_PATH}`;}
export async function readSettings(): Promise<{settings:SiteAccessSettings;sha?:string}>{
 if(!process.env.SITE_ACCESS_GITHUB_TOKEN) return {settings:DEFAULT_SETTINGS};
 const response=await fetch(settingsUrl(),{headers:githubHeaders(),cache:"no-store"});
 if(response.status===404) return {settings:DEFAULT_SETTINGS};
 if(!response.ok) throw new Error("Cannot load site access settings");
 const file=await response.json();
 const content=Buffer.from(String(file.content).replace(/\s/g,""),"base64").toString("utf8");
 return {settings:sanitizeSettings(JSON.parse(content)),sha:file.sha};
}
export async function writeSettings(settings:SiteAccessSettings){
 if(!process.env.SITE_ACCESS_GITHUB_TOKEN) throw new Error("SITE_ACCESS_GITHUB_TOKEN is not configured");
 const current=await readSettings();
 const response=await fetch(settingsUrl(),{method:"PUT",headers:{...githubHeaders(),"Content-Type":"application/json"},body:JSON.stringify({message:"admin: update site access settings",content:Buffer.from(JSON.stringify(settings,null,2)+"\n").toString("base64"),branch:"main",...(current.sha?{sha:current.sha}:{})}),cache:"no-store"});
 if(!response.ok) throw new Error("Unable to save settings to GitHub");
}
