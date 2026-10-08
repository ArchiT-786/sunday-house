import { NextRequest, NextResponse } from "next/server";
export const config={matcher:["/((?!_next/|favicon.ico|robots.txt|sitemap.xml|images/|_static/|api/admin/).*)"]};
type Settings={maintenance:boolean;restricted:boolean;allowedIps:string[]};
const defaults:Settings={maintenance:false,restricted:false,allowedIps:[]};
function clientIp(req:NextRequest){return (req.headers.get("x-real-ip")||req.ip||"").replace(/^::ffff:/,"").toLowerCase();}
async function load():Promise<Settings>{
 const token=process.env.SITE_ACCESS_GITHUB_TOKEN;
 if(!token)return defaults;
 const response=await fetch(`https://api.github.com/repos/${process.env.SITE_ACCESS_REPOSITORY||"ArchiT-786/sunday-house"}/contents/site-access.json`,{headers:{Accept:"application/vnd.github.raw+json",Authorization:`Bearer ${token}`,"X-GitHub-Api-Version":"2022-11-28"},cache:"no-store"});
 if(!response.ok)throw new Error("Settings unavailable");
 const value=await response.json();
 return {maintenance:value.maintenance===true,restricted:value.restricted===true,allowedIps:Array.isArray(value.allowedIps)?value.allowedIps:[]};
}
export async function middleware(req:NextRequest){
 const path=req.nextUrl.pathname;
 if(path.startsWith("/admin")||path==="/maintenance")return NextResponse.next();
 let settings:Settings;
 try{settings=await load();}catch{return new NextResponse("Site access settings temporarily unavailable",{status:503,headers:{"Cache-Control":"no-store"}});}
 if(!(settings.maintenance||settings.restricted))return NextResponse.next();
 const ip=clientIp(req);
 if(ip&&settings.allowedIps.some(x=>x.toLowerCase()===ip))return NextResponse.next();
 if(path.startsWith("/api/"))return NextResponse.json({error:"Site temporarily unavailable"},{status:503});
 return NextResponse.rewrite(new URL("/maintenance",req.url),{headers:{"Cache-Control":"no-store"}});
}
