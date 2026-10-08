import { NextRequest, NextResponse } from "next/server";
import { passwordMatches, signSession, validSession, COOKIE_NAME } from "@/lib/admin-session";
export const runtime="nodejs";
export async function GET(req:NextRequest){
 const hash=process.env.SITE_ADMIN_PASSWORD_HASH||"";
 const secret=process.env.SITE_ADMIN_SESSION_SECRET||"";
 const email=process.env.SITE_ADMIN_EMAIL||"";
 const checks={
  adminEmailConfigured:email.length>0,
  passwordHashFormatValid:/^[a-f0-9]+:[a-f0-9]{128}$/i.test(hash),
  sessionSecretValid:secret.length>=32,
  githubTokenConfigured:Boolean(process.env.SITE_ACCESS_GITHUB_TOKEN),
 };
 return NextResponse.json({authenticated:validSession(req.cookies.get(COOKIE_NAME)?.value),configured:Object.values(checks).every(Boolean),checks},{headers:{"Cache-Control":"no-store"}});
}
export async function POST(req:NextRequest){
 const {email,password}=await req.json().catch(()=>({}));
 if(typeof email!=="string"||typeof password!=="string"||email!==process.env.SITE_ADMIN_EMAIL||!passwordMatches(password)||!process.env.SITE_ADMIN_SESSION_SECRET||process.env.SITE_ADMIN_SESSION_SECRET.length<32)return NextResponse.json({error:"Invalid credentials or admin is not configured"},{status:401});
 const res=NextResponse.json({authenticated:true});
 res.cookies.set(COOKIE_NAME,signSession(email),{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"strict",path:"/",maxAge:43200});
 return res;
}
export async function DELETE(){const res=NextResponse.json({authenticated:false});res.cookies.set(COOKIE_NAME,"",{httpOnly:true,path:"/",maxAge:0});return res;}
