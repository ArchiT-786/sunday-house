"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

const vertex = `#version 300 es
in vec2 position;
void main(){gl_Position=vec4(position,0.0,1.0);}
`;
const fragment = `#version 300 es
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_progress;
out vec4 outColor;

float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){
 vec2 i=floor(p), f=fract(p);f=f*f*(3.0-2.0*f);
 return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
}
float terrain(vec2 p){
 float a=noise(p*0.045)*32.0+noise(p*0.12)*13.0+noise(p*0.38)*3.0;
 float peaks=pow(max(0.0,noise(p*0.016)),2.0)*72.0;
 return a+peaks-28.0;
}
vec3 sky(vec3 rd){
 float h=max(rd.y,0.0);
 vec3 color=mix(vec3(0.83,0.71,0.61),vec3(0.075,0.19,0.28),pow(h,0.6));
 vec3 sun=normalize(vec3(0.55,0.31,-0.77));
 float glow=pow(max(dot(rd,sun),0.0),22.0);
 color+=vec3(1.0,0.67,0.34)*glow*0.3;
 color+=vec3(1.0,0.91,0.73)*pow(max(dot(rd,sun),0.0),700.0);
 return color;
}
vec3 render(vec2 uv){
 float p=u_progress;
 float yaw=mix(-0.23,0.45,p);
 vec3 ro=vec3(mix(-28.0,26.0,p),mix(26.0,51.0,p),mix(115.0,34.0,p));
 vec3 target=vec3(0.0,27.0,-80.0);
 vec3 forward=normalize(target-ro);
 vec3 right=normalize(cross(forward,vec3(0,1,0)));
 vec3 up=cross(right,forward);
 vec3 rd=normalize(forward*1.8+right*uv.x+up*uv.y);
 rd.xz=mat2(cos(yaw),-sin(yaw),sin(yaw),cos(yaw))*rd.xz;
 vec3 col=sky(rd);
 float t=0.0;bool hit=false;vec3 pos=ro;
 for(int i=0;i<96;i++){
  pos=ro+rd*t;
  float delta=pos.y-terrain(pos.xz);
  if(delta<0.8){hit=true;break;}
  t+=clamp(delta*0.32,0.9,12.0);
  if(t>440.0)break;
 }
 if(hit){
  float e=1.3;
  vec3 normal=normalize(vec3(terrain(pos.xz-vec2(e,0))-terrain(pos.xz+vec2(e,0)),2.0*e,terrain(pos.xz-vec2(0,e))-terrain(pos.xz+vec2(0,e))));
  vec3 light=normalize(vec3(0.58,0.82,-0.4));
  float shade=0.34+0.66*max(dot(normal,light),0.0);
  float snow=smoothstep(35.0,60.0,pos.y+noise(pos.xz*0.24)*7.0);
  vec3 stone=mix(vec3(0.12,0.22,0.25),vec3(0.38,0.45,0.44),noise(pos.xz*0.08));
  vec3 material=mix(stone,vec3(0.83,0.87,0.84),snow);
  col=mix(material*shade,sky(rd),1.0-exp(-t*0.006));
 }
 col=pow(max(col,0.0),vec3(0.91));
 col=mix(col,vec3(0.04,0.085,0.11),0.13);
 return col;
}
void main(){
 vec2 uv=(gl_FragCoord.xy-0.5*u_resolution)/u_resolution.y;
 vec3 col=render(uv);
 outColor=vec4(col,1.0);
}
`;

function MountainCanvas({progress}: {progress: React.MutableRefObject<number>}) {
 const canvasRef=useRef<HTMLCanvasElement>(null);
 const [failed,setFailed]=useState(false);
 useEffect(()=>{
  const canvas=canvasRef.current;
  if(!canvas)return;
  const gl=canvas.getContext("webgl2",{antialias:false,alpha:false,powerPreference:"high-performance"});
  if(!gl){setFailed(true);return;}
  const shader=(type:number,source:string)=>{
   const s=gl.createShader(type);if(!s)return null;
   gl.shaderSource(s,source);gl.compileShader(s);
   if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){console.error("Mountain shader",gl.getShaderInfoLog(s));gl.deleteShader(s);return null;}
   return s;
  };
  const v=shader(gl.VERTEX_SHADER,vertex),f=shader(gl.FRAGMENT_SHADER,fragment);
  if(!v||!f){setFailed(true);return;}
  const program=gl.createProgram();
  if(!program){setFailed(true);return;}
  gl.attachShader(program,v);gl.attachShader(program,f);gl.linkProgram(program);
  if(!gl.getProgramParameter(program,gl.LINK_STATUS)){setFailed(true);return;}
  const buffer=gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
  const attribute=gl.getAttribLocation(program,"position");
  const resolution=gl.getUniformLocation(program,"u_resolution");
  const time=gl.getUniformLocation(program,"u_time");
  const amount=gl.getUniformLocation(program,"u_progress");
  gl.useProgram(program);gl.enableVertexAttribArray(attribute);gl.vertexAttribPointer(attribute,2,gl.FLOAT,false,0,0);
  let raf=0;let last=-1;
  const render=(now:number)=>{
   const w=Math.max(1,Math.floor(canvas.clientWidth*Math.min(devicePixelRatio||1,1.3)*0.75));
   const h=Math.max(1,Math.floor(canvas.clientHeight*Math.min(devicePixelRatio||1,1.3)*0.75));
   if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);last=-1;}
   const next=progress.current;
   if(Math.abs(next-last)>0.0001){
    gl.uniform2f(resolution,w,h);gl.uniform1f(time,now*0.001);gl.uniform1f(amount,next);
    gl.drawArrays(gl.TRIANGLES,0,6);last=next;
   }
   raf=requestAnimationFrame(render);
  };
  raf=requestAnimationFrame(render);
  return ()=>{cancelAnimationFrame(raf);gl.deleteBuffer(buffer);gl.deleteProgram(program);gl.deleteShader(v);gl.deleteShader(f);};
 },[progress]);
 return failed ? <div className="absolute inset-0 bg-[linear-gradient(135deg,#102e3c,#506c74_52%,#c0a48a)]"/> :
 <canvas ref={canvasRef} aria-label="Interactive three-dimensional mountain landscape" className="absolute inset-0 h-full w-full"/>;
}

export default function MountainStory(){
 const ref=useRef<HTMLElement>(null);
 const progress=useRef(0);
 const reduced=useReducedMotion();
 const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
 const smooth=useSpring(scrollYProgress,{stiffness:70,damping:24,mass:0.6});
 useEffect(()=>smooth.on("change",value=>{progress.current=reduced?0:value;}),[smooth,reduced]);
 const first=useTransform(smooth,[0,0.16,0.3],[1,1,0]);
 const second=useTransform(smooth,[0.29,0.44,0.6],[0,1,0]);
 const third=useTransform(smooth,[0.6,0.79,1],[0,1,1]);
 return <section ref={ref} className="relative h-[320vh] bg-[#081b23] text-white">
  <div className="sticky top-0 h-screen overflow-hidden">
   <MountainCanvas progress={progress}/>
   <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05141b]/75 via-[#05141b]/15 to-transparent"/>
   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05141b]/75 via-transparent to-[#05141b]/25"/>
   <motion.div style={{opacity:first}} className="absolute inset-0 flex items-center px-6 md:px-16">
    <div className="mx-auto w-full max-w-7xl">
     <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e9c79b]">Sunday Houses · Curated mountain escapes</p>
     <h1 className="mt-7 max-w-5xl font-heading text-[clamp(3.4rem,9vw,9rem)] leading-[0.92] tracking-[-0.06em]">Beyond<br/><span className="font-serif font-normal italic text-[#f0d9b8]">the ordinary.</span></h1>
     <p className="mt-8 max-w-md text-base leading-8 text-white/85">A collection of intimate mountain homes and extraordinary moments. Begin your journey in Nokdara.</p>
     <Link href="/stays" className="mt-9 inline-block rounded-full bg-[#f0d9b8] px-7 py-3.5 text-sm font-semibold text-[#142b30]">Discover our homestays ↗</Link>
    </div>
   </motion.div>
   <motion.div style={{opacity:second}} className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center">
    <div className="max-w-4xl"><p className="text-xs uppercase tracking-[0.35em] text-[#e9c79b]">A new perspective</p>
     <h2 className="mt-7 font-heading text-[clamp(3rem,7vw,7rem)] leading-[1.02]">Go further.<br/><span className="font-serif italic text-[#f0d9b8]">Slow down.</span></h2>
     <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/85">The mountains move around you as a new chapter unfolds.</p>
    </div>
   </motion.div>
   <motion.div style={{opacity:third}} className="pointer-events-none absolute inset-0 flex items-end px-6 pb-28 md:px-16">
    <div className="mx-auto w-full max-w-7xl"><p className="text-xs uppercase tracking-[0.35em] text-[#e9c79b]">Nokdara · Kalimpong</p>
     <h2 className="mt-7 max-w-5xl font-heading text-[clamp(3rem,7vw,7rem)] leading-[1.02]">Two mountain homes.<br/><span className="font-serif italic text-[#f0d9b8]">One beautiful beginning.</span></h2>
     <p className="mt-7 max-w-xl leading-8 text-white/85">Whistling House and Chaaya Glades. Discover the first destinations in our collection.</p>
    </div>
   </motion.div>
   <div className="pointer-events-none absolute bottom-7 right-7 text-[10px] uppercase tracking-[0.25em] text-white/70">Scroll to explore ↓</div>
  </div>
 </section>;
}
