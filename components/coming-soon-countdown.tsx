"use client";
import { useEffect, useState } from "react";
export default function ComingSoonCountdown({launchAt}:{launchAt:string}){
 const [remaining,setRemaining]=useState<number|null>(null);
 useEffect(()=>{const tick=()=>setRemaining(Math.max(0,new Date(launchAt).getTime()-Date.now()));tick();const id=setInterval(tick,1000);return()=>clearInterval(id);},[launchAt]);
 if(remaining===null)return <div className="mt-10 h-28"/>;
 const seconds=Math.floor(remaining/1000);
 const parts=[{label:"Days",value:Math.floor(seconds/86400)},{label:"Hours",value:Math.floor(seconds%86400/3600)},{label:"Minutes",value:Math.floor(seconds%3600/60)},{label:"Seconds",value:seconds%60}];
 return <div className="mt-10"><p className="mb-5 text-xs font-semibold uppercase tracking-[.24em] text-[#d5c6a9]">{remaining===0?"The wait is over":"Our doors open in"}</p><div className="grid grid-cols-4 gap-2 sm:gap-5">{parts.map(part=><div key={part.label} className="rounded-xl border border-white/20 bg-white/10 px-2 py-5 backdrop-blur-md sm:px-5"><div className="font-serif text-3xl tabular-nums sm:text-5xl">{String(part.value).padStart(2,"0")}</div><div className="mt-2 text-[10px] uppercase tracking-[.16em] text-[#d9d6c9] sm:text-xs">{part.label}</div></div>)}</div><p className="mt-5 text-xs text-[#d9d6c9]">{new Date(launchAt).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",dateStyle:"long",timeStyle:"short"})} IST</p></div>;
}
