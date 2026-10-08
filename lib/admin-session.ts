import { createHmac, timingSafeEqual, scryptSync } from "node:crypto";
export const COOKIE_NAME="sunday_admin_session";
export function passwordMatches(password:string){
 const hash=process.env.SITE_ADMIN_PASSWORD_HASH||"";
 const [salt,expected]=hash.split(":");
 if(!salt||!expected||!/^[a-f0-9]{128}$/i.test(expected))return false;
 const actual=scryptSync(password,salt,64);
 const target=Buffer.from(expected,"hex");
 return actual.length===target.length&&timingSafeEqual(actual,target);
}
export function signSession(email:string){
 const expires=Date.now()+12*60*60*1000;
 const payload=`${email}|${expires}`;
 const sig=createHmac("sha256",process.env.SITE_ADMIN_SESSION_SECRET||"").update(payload).digest("hex");
 return `${payload}|${sig}`;
}
export function validSession(token?:string){
 if(!token||!process.env.SITE_ADMIN_SESSION_SECRET||process.env.SITE_ADMIN_SESSION_SECRET.length<32)return false;
 const [email,expires,sig]=token.split("|");
 if(email!==process.env.SITE_ADMIN_EMAIL||!expires||!sig||Number(expires)<Date.now()||!/^[a-f0-9]{64}$/.test(sig))return false;
 const expected=createHmac("sha256",process.env.SITE_ADMIN_SESSION_SECRET).update(`${email}|${expires}`).digest("hex");
 return timingSafeEqual(Buffer.from(sig,"hex"),Buffer.from(expected,"hex"));
}
