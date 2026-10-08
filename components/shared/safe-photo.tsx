"use client";
import Image, {type ImageProps} from "next/image";
import {useState} from "react";
export default function SafePhoto({fallback="/images/hero.webp",src,alt,...props}:ImageProps&{fallback?:string}){
 const [failed,setFailed]=useState(false);
 return <Image {...props} src={failed?fallback:src} alt={alt} onError={()=>setFailed(true)}/>;
}