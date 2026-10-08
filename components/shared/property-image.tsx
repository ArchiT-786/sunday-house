"use client";
import Image from "next/image";
import { useState } from "react";

const assets = {
 "whistling-house": { src: "/images/properties/whistling-house/exterior.png", fallback: "/images/hero.webp", alt: "Whistling House exterior in Nokdara" },
 "chaaya-glades": { src: "/images/properties/chaaya-glades/Vibrant Mountain Homestay Courtyard.png", fallback: "/images/our-story.jpg", alt: "Courtyard and mountain homestay at Chaaya Glades" },
} as const;

export type PropertySlug = keyof typeof assets;
export default function PropertyImage({slug,priority=false,className="",sizes="(max-width: 768px) 100vw, 50vw"}:{
 slug:PropertySlug;priority?:boolean;className?:string;sizes?:string;
}){
 const asset=assets[slug];
 const [failed,setFailed]=useState(false);
 return <Image src={failed?asset.fallback:asset.src} alt={failed?`Illustrative landscape for ${slug.replaceAll("-"," ")}`:asset.alt}
  fill priority={priority} sizes={sizes} className={className} onError={()=>setFailed(true)}/>;
}
