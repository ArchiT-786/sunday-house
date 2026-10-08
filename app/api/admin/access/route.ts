import { NextRequest, NextResponse } from "next/server";
import { validSession, COOKIE_NAME } from "@/lib/admin-session";
import { readSettings, sanitizeSettings, writeSettings } from "@/lib/site-access";
export const runtime="nodejs";
export const dynamic="force-dynamic";
function unauthorized(){return NextResponse.json({error:"Unauthorized"},{status:401});}
export async function GET(req:NextRequest){
 if(!validSession(req.cookies.get(COOKIE_NAME)?.value))return unauthorized();
 try{return NextResponse.json((await readSettings()).settings,{headers:{"Cache-Control":"no-store"}});}catch{return NextResponse.json({error:"Settings storage unavailable"},{status:503});}
}
export async function PUT(req:NextRequest){
 if(!validSession(req.cookies.get(COOKIE_NAME)?.value))return unauthorized();
 const data=await req.json().catch(()=>null);
 if(!data||typeof data.maintenance!=="boolean"||typeof data.restricted!=="boolean"||!Array.isArray(data.allowedIps)||data.allowedIps.length>100||data.allowedIps.some((ip:unknown)=>typeof ip!=="string")||(data.launchAt!==null&&data.launchAt!==undefined&&typeof data.launchAt!=="string")||(data.showCountdown!==undefined&&typeof data.showCountdown!=="boolean"))return NextResponse.json({error:"Invalid settings"},{status:400});
 const settings=sanitizeSettings(data);
 if(settings.allowedIps.length!==new Set(data.allowedIps).size)return NextResponse.json({error:"Invalid or duplicate IP address"},{status:400});
 try{await writeSettings(settings);return NextResponse.json(settings,{headers:{"Cache-Control":"no-store"}});}catch{return NextResponse.json({error:"Unable to save. Check GitHub token permissions and repository access."},{status:503});}
}
