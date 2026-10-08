"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

declare global {
 interface Window { THREE?: any; }
}

export function MountainScene({ progress }: { progress: React.MutableRefObject<number> }) {
 const mount = useRef<HTMLDivElement>(null);
 const [ready, setReady] = useState(false);
 useEffect(() => {
  const node = mount.current;
  if (!node) return;
  let cancelled = false;
  let dispose: (() => void) | undefined;
  const init = () => {
   if (cancelled || !window.THREE || !node) return;
   const T = window.THREE;
   let renderer: any;
   try { renderer = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" }); }
   catch { return; }
   renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
   renderer.setSize(node.clientWidth, node.clientHeight);
   renderer.setClearColor(0x0c202b, 1);
   renderer.outputEncoding = T.sRGBEncoding;
   node.appendChild(renderer.domElement);
   const scene = new T.Scene();
   scene.background = new T.Color(0x92aab2);
   scene.fog = new T.FogExp2(0x8aa2aa, 0.00155);
   const camera = new T.PerspectiveCamera(49, 1, 1, 2300);
   const light = new T.DirectionalLight(0xffe9cb, 2.0);
   light.position.set(-200, 380, -180);
   scene.add(light, new T.HemisphereLight(0xe0efff, 0x273e39, 1.7));
   const geometry = new T.PlaneGeometry(1250, 1250, 175, 175);
   geometry.rotateX(-Math.PI / 2);
   const positions = geometry.attributes.position;
   const colors: number[] = [];
   const snow = new T.Color(0xe3e9e6), rock = new T.Color(0x657c7b), forest = new T.Color(0x193d3b);
   for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i), z = positions.getZ(i);
    const peakA = 255 * Math.exp(-((x+130)*(x+130)/48000 + (z+120)*(z+120)/55000));
    const peakB = 205 * Math.exp(-((x-165)*(x-165)/30000 + (z+200)*(z+200)/40000));
    const peakC = 155 * Math.exp(-((x+310)*(x+310)/27000 + (z-110)*(z-110)/48000));
    const ridges = Math.abs(Math.sin(x*0.023 + Math.cos(z*0.018)*2))*24 + Math.sin(z*0.027+x*0.009)*14;
    const detail = Math.sin(x*0.12)*Math.cos(z*0.1)*6 + Math.sin(x*0.28+z*0.21)*3;
    const h = Math.max(-22, peakA + peakB + peakC + ridges + detail - 65);
    positions.setY(i,h);
    const snowy = Math.max(0,Math.min(1,(h-112+detail*1.5)/64));
    const rocky = Math.max(0,Math.min(1,(h-36)/85));
    const col = forest.clone().lerp(rock,rocky).lerp(snow,snowy);
    colors.push(col.r,col.g,col.b);
   }
   geometry.setAttribute("color",new T.Float32BufferAttribute(colors,3));
   geometry.computeVertexNormals();
   const material = new T.MeshStandardMaterial({vertexColors:true,roughness:1,metalness:0,side:T.DoubleSide});
   const mountain = new T.Mesh(geometry,material);
   scene.add(mountain);
   const resize = () => {
    if (!node) return;
    const w=Math.max(1,node.clientWidth),h=Math.max(1,node.clientHeight);
    camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);
   };
   resize();
   const observer = new ResizeObserver(resize);
   observer.observe(node);
   let frame=0;
   let last=-1;
   const draw = () => {
    const p=progress.current;
    if(Math.abs(last-p)>0.0001){
     // Seven deliberately bounded camera states: no uncontrolled orbital spin.
     // All points remain outside the terrain and look toward the mountain massif.
     const stops = [
      { x: -120, y: 190, z: 460, tx: -70, ty: 105, tz: -110 },
      { x: -50, y: 180, z: 425, tx: -65, ty: 110, tz: -125 },
      { x:  35, y: 155, z: 390, tx: -45, ty: 100, tz: -140 },
      { x: 100, y: 160, z: 370, tx: -35, ty: 105, tz: -145 },
      { x: 150, y: 175, z: 410, tx: -35, ty: 115, tz: -145 },
      { x:  50, y: 205, z: 455, tx: -55, ty: 115, tz: -130 },
      { x: -95, y: 215, z: 470, tx: -65, ty: 115, tz: -110 },
     ];
     const segment=Math.min(stops.length-2,Math.floor(Math.max(0,Math.min(0.999999,p))*(stops.length-1)));
     const local=Math.max(0,Math.min(1,p*(stops.length-1)-segment));
     const t=local*local*(3-2*local);
     const a=stops[segment],b=stops[segment+1];
     const mix=(v:number,w:number)=>v+(w-v)*t;
     camera.position.set(mix(a.x,b.x),mix(a.y,b.y),mix(a.z,b.z));
     camera.lookAt(mix(a.tx,b.tx),mix(a.ty,b.ty),mix(a.tz,b.tz));
     renderer.render(scene,camera);
     last=p;
    }
    frame=requestAnimationFrame(draw);
   };
   draw();
   setReady(true);
   dispose=()=>{cancelAnimationFrame(frame);observer.disconnect();geometry.dispose();material.dispose();renderer.dispose();renderer.domElement.remove();};
  };
  if(window.THREE){init();}
  else {
   const existing=document.querySelector<HTMLScriptElement>('script[data-three-mountain="true"]');
   const script=existing||document.createElement("script");
   if(!existing){script.src="https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.min.js";script.async=true;script.dataset.threeMountain="true";document.head.appendChild(script);}
   script.addEventListener("load",init,{once:true});
  }
  return ()=>{cancelled=true;dispose?.();};
 },[progress]);
 return <div className="absolute inset-0">
  <div className="absolute inset-0 bg-[url('/images/luxury/natural-view.webp')] bg-cover bg-center" />
  <div ref={mount} aria-label="Three.js interactive mountain terrain" className={`absolute inset-0 transition-opacity duration-1000 ${ready?"opacity-100":"opacity-0"}`}/>
 </div>;
}

export default function MountainStory() {
 const section=useRef<HTMLElement>(null);
 const progress=useRef(0);
 const reduced=useReducedMotion();
 const {scrollYProgress}=useScroll({target:section,offset:["start start","end end"]});
 const smooth=useSpring(scrollYProgress,{stiffness:80,damping:28,mass:0.5});
 useEffect(()=>smooth.on("change",v=>{progress.current=reduced?0:v;}),[smooth,reduced]);

 const chapters = [
  {eyebrow:"01 / The arrival",title:"A different kind of altitude.",accent:"Welcome to the mountains.",description:"Begin above the noise. A cinematic journey through the Himalayan-inspired landscape and the homes that await.",href:"/stays",cta:"Discover our stays"},
  {eyebrow:"02 / The destination",title:"Find the slower side of life.",accent:"Nokdara, Kalimpong.",description:"Village trails, quiet mornings and the soft rhythm of the hills. Our journey begins in Nokdara.",href:"/nokdara",cta:"Explore Nokdara"},
  {eyebrow:"03 / The collection",title:"Two homes. One feeling.",accent:"Stay a little longer.",description:"Discover our thoughtfully hosted retreats in the Kalimpong hills.",href:"/stays",cta:"Meet the collection"},
  {eyebrow:"04 / Whistling House",title:"Let the mountains in.",accent:"Whistling House.",description:"A welcoming hillside retreat where each day begins at your own pace.",href:"/stays/whistling-house",cta:"Explore Whistling House"},
  {eyebrow:"05 / Chaaya Glades",title:"A place to simply be.",accent:"Chaaya Glades.",description:"Slow moments, thoughtful hospitality and room to reconnect.",href:"/stays/chaaya-glades",cta:"Explore Chaaya Glades"},
  {eyebrow:"06 / Our story",title:"Made for moments that matter.",accent:"Sunday Houses.",description:"Personal mountain homes, rooted in warmth and a love of the hills.",href:"/our-story",cta:"Read our story"},
  {eyebrow:"07 / Your escape",title:"Your next story begins here.",accent:"Come stay with us.",description:"Ask about our homes, plan your journey and find your place in the hills.",href:"/contact",cta:"Plan your stay"}
 ];
 const ranges = [0,0.15,0.30,0.45,0.60,0.75,0.88,1];
 return <section ref={section} className="relative h-[520svh] bg-[#0c202b] text-white md:h-[620svh]" aria-label="Seven chapter mountain journey">
  <div className="sticky top-0 h-[100svh] min-h-[360px] overflow-hidden">
   <MountainScene progress={progress}/>
   <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071a22]/85 via-[#071a22]/25 to-transparent"/>
   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071a22]/75 via-transparent to-[#071a22]/20"/>
   {chapters.map((chapter,i)=><Chapter key={chapter.eyebrow} chapter={chapter} index={i} progress={smooth} start={ranges[i]} end={ranges[i+1]}/>)}
   <div className="pointer-events-none absolute bottom-8 left-6 right-6 flex items-center justify-between gap-6 md:left-16 md:right-16">
    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">Scroll to journey through the hills</span>
    <div className="hidden items-center gap-2 sm:flex">{chapters.map((_,i)=><div key={i} className="h-[2px] w-7 bg-white/30"/> )}</div>
    <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">01 — 07</span>
   </div>
  </div>
 </section>;
}

function Chapter({chapter,index,progress,start,end}:{chapter:{eyebrow:string;title:string;accent:string;description:string;href:string;cta:string};index:number;progress:any;start:number;end:number}){
 const fade=useTransform(progress,index===0?[0,0.015,Math.max(0.03,end-0.035),end]:[Math.max(0,start-0.025),start+0.025,Math.max(start+0.03,end-0.045),Math.min(1,end+0.02)],index===0?[1,1,1,0]:[0,1,1,0]);
 const rise=useTransform(progress,[start,Math.min(1,end)],[28,-22]);
 return <motion.div style={{opacity:fade,y:rise}} className="pointer-events-none absolute inset-0 flex items-center px-5 py-16 sm:px-8 md:px-16" aria-label={chapter.eyebrow}>
  <div className="pointer-events-auto mx-auto w-full max-w-7xl">
   <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f1d4ac]">{chapter.eyebrow} · Sunday Houses</p>
   <h2 className="mt-7 max-w-5xl font-heading text-[clamp(2.4rem,6.8vw,7.4rem)] leading-[0.96] tracking-[-0.06em]">{chapter.title}<br/><span className="font-serif font-normal italic text-[#f1d4ac]">{chapter.accent}</span></h2>
   <p className="mt-5 max-w-lg text-sm leading-6 text-white/90 sm:mt-8 sm:text-base sm:leading-8">{chapter.description}</p>
   <Link href={chapter.href} tabIndex={0} className="mt-6 inline-flex items-center rounded-full border border-[#f1d4ac] bg-[#f1d4ac] px-7 py-3.5 text-sm font-semibold text-[#17362e] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{chapter.cta} ↗</Link>
  </div>
 </motion.div>;
}
