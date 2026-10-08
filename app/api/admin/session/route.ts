import { NextRequest, NextResponse } from "next/server";
import { passwordMatches, signSession, validSession, COOKIE_NAME } from "@/lib/admin-session";
export const runtime="nodejs";
export async function GET(req:NextRequest){return NextResponse.json({authenticated:validSession(req.cookies.get(COOKIE_NAME)?.value),configured:Boolean(process.env.SITE_ADMIN_PASSWORD_HASH&&process.env.SITE_ADMIN_SESSION_SECRET&&process.env.SITE_ACCESS_GITHUB_TOKEN)});}
export async function POST(req:NextRequest){
 const {email,password}=await req.json().catch(()=>({}));
 if(typeof email!=="string"||typeof password!=="string"||email!==process.env.SITE_ADMIN_EMAIL||!passwordMatches(password)||!process.env.SITE_ADMIN_SESSION_SECRET||process.env.SITE_ADMIN_SESSION_SECRET.length<32)return NextResponse.json({error:"Invalid credentials or admin is not configured"},{status:401});
 const res=NextResponse.json({authenticated:true});
 res.cookies.set(COOKIE_NAME,signSession(email),{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"strict",path:"/",maxAge:43200});
 return res;
}
export async function DELETE(){const res=NextResponse.json({authenticated:false});res.cookies.set(COOKIE_NAME,"",{httpOnly:true,path:"/",maxAge:0});return res;}
