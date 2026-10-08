"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

declare global {
 interface Window { THREE?: any; }
}

function MountainScene({ progress }: { progress: React.MutableRefObject<number> }) {
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
     const angle=-0.36+p*1.35;
     const radius=430-p*150;
     camera.position.set(Math.sin(angle)*radius,115+p*110,Math.cos(angle)*radius);
     camera.lookAt(-55+p*45,110+p*20,-110);
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
 const one=useTransform(smooth,[0,0.16,0.3],[1,1,0]);
 const two=useTransform(smooth,[0.3,0.46,0.63],[0,1,0]);
 const three=useTransform(smooth,[0.62,0.8,1],[0,1,1]);
 return <section ref={section} className="relative h-[310vh] bg-[#0c202b] text-white">
  <div className="sticky top-0 h-[100svh] min-h-[500px] overflow-hidden">
   <MountainScene progress={progress}/>
   <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071a22]/80 via-[#071a22]/25 to-transparent"/>
   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071a22]/70 via-transparent to-[#071a22]/30"/>
   <motion.div style={{opacity:one}} className="absolute inset-0 flex items-center px-6 md:px-16">
    <div className="mx-auto w-full max-w-7xl">
     <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f1d4ac]">Sunday Houses · The Himalayan collection</p>
     <h1 className="mt-7 max-w-5xl font-heading text-[clamp(3.5rem,9vw,9rem)] leading-[0.93] tracking-[-0.06em]">Beyond<br/><span className="font-serif font-normal italic text-[#f1d4ac]">the ordinary.</span></h1>
     <p className="mt-8 max-w-lg text-base leading-8 text-white/90">Beautifully personal mountain stays. Thoughtful journeys. A feeling you'll carry home.</p>
     <Link href="/stays" className="relative z-10 mt-9 inline-block rounded-full bg-[#f1d4ac] px-7 py-3.5 text-sm font-semibold text-[#17362e]">Explore our collection ↗</Link>
    </div>
   </motion.div>
   <motion.div style={{opacity:two}} className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center">
    <div className="max-w-4xl"><p className="text-xs uppercase tracking-[0.32em] text-[#f1d4ac]">A different perspective</p>
     <h2 className="mt-7 font-heading text-[clamp(3.2rem,7vw,7rem)] leading-[1.02]">Move with the mountains.<br/><span className="font-serif italic text-[#f1d4ac]">Find your pace.</span></h2>
    </div>
   </motion.div>
   <motion.div style={{opacity:three}} className="pointer-events-none absolute inset-0 flex items-end px-6 pb-24 md:px-16 md:pb-32">
    <div className="mx-auto w-full max-w-7xl"><p className="text-xs uppercase tracking-[0.32em] text-[#f1d4ac]">Nokdara · Kalimpong</p>
     <h2 className="mt-6 max-w-5xl font-heading text-[clamp(3.2rem,7vw,7rem)] leading-[0.98]">Two beautiful homes.<br/><span className="font-serif italic text-[#f1d4ac]">One warm welcome.</span></h2>
     <p className="mt-7 max-w-xl leading-8 text-white/85">Whistling House and Chaaya Glades. Your first invitation into the Sunday Houses collection.</p>
    </div>
   </motion.div>
   <div className="pointer-events-none absolute bottom-7 right-7 text-[10px] uppercase tracking-[0.3em] text-white/75">Scroll to explore ↓</div>
  </div>
 </section>;
}
