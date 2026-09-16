"use client";

import { useEffect, useRef } from "react";
import styles from "./TerminalPortfolio.module.css";

type Point3D={x:number;y:number;z:number};
const POINT_COUNT=132;
const CONNECTION_DISTANCE=46;
const goldenAngle=Math.PI*(3-Math.sqrt(5));
const spherePoints:Point3D[]=Array.from({length:POINT_COUNT},(_,index)=>{const y=1-(index/(POINT_COUNT-1))*2;const radius=Math.sqrt(1-y*y);const theta=goldenAngle*index;return{x:Math.cos(theta)*radius,y,z:Math.sin(theta)*radius}});

export function TerminalVoiceOrb({isSpeaking}:{isSpeaking:boolean}){
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const frameRef=useRef<number|null>(null);

  useEffect(()=>{
    const canvas=canvasRef.current;if(!canvas)return;
    const context=canvas.getContext("2d");if(!context)return;
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    const resize=()=>{const b=canvas.getBoundingClientRect();canvas.width=Math.max(1,Math.floor(b.width*dpr));canvas.height=Math.max(1,Math.floor(b.height*dpr));context.setTransform(dpr,0,0,dpr,0,0)};
    const observer=new ResizeObserver(resize);observer.observe(canvas);resize();
    const draw=(time:number)=>{
      const width=canvas.clientWidth,height=canvas.clientHeight,cx=width/2,cy=height/2,base=Math.min(width,height)*.34;
      const pulse=isSpeaking?1+Math.sin(time*.013)*.045+Math.sin(time*.031)*.018:1+Math.sin(time*.0018)*.012;
      const radius=base*pulse,ry=reduced?.55:time*(isSpeaking?.00034:.00012),rx=reduced?-.16:-.16+Math.sin(time*.00055)*.08;
      context.clearRect(0,0,width,height);
      const projected=spherePoints.map((point,index)=>{const cyy=Math.cos(ry),sy=Math.sin(ry),x1=point.x*cyy-point.z*sy,z1=point.x*sy+point.z*cyy,cxx=Math.cos(rx),sx=Math.sin(rx),y2=point.y*cxx-z1*sx,z2=point.y*sx+z1*cxx,distortion=isSpeaking?1+Math.sin(time*.018+index*.62)*.035:1,perspective=1+z2*.14;return{x:cx+x1*radius*distortion*perspective,y:cy+y2*radius*distortion*perspective,z:z2}});
      for(let aIndex=0;aIndex<projected.length;aIndex++){const a=projected[aIndex];for(let bIndex=aIndex+1;bIndex<projected.length;bIndex++){const b=projected[bIndex],dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);if(d>CONNECTION_DISTANCE||Math.abs(a.z-b.z)>.42)continue;const depth=Math.max(.12,((a.z+b.z)/2+1)/2),alpha=(1-d/CONNECTION_DISTANCE)*depth*(isSpeaking?.19:.1);context.beginPath();context.moveTo(a.x,a.y);context.lineTo(b.x,b.y);context.strokeStyle=`rgba(0,149,166,${alpha})`;context.lineWidth=.55;context.stroke()}}
      projected.forEach((point,index)=>{const depth=(point.z+1)/2,flicker=isSpeaking?.8+Math.sin(time*.025+index)*.2:1,size=.8+depth*1.7+(isSpeaking?.25:0),alpha=Math.max(.22,(.28+depth*.72)*flicker);context.beginPath();context.arc(point.x,point.y,size,0,Math.PI*2);context.fillStyle=`rgba(0,225,225,${alpha})`;context.fill()});
      const glow=context.createRadialGradient(cx,cy,0,cx,cy,radius*1.15);glow.addColorStop(0,`rgba(0,225,225,${isSpeaking?.055:.025})`);glow.addColorStop(.55,`rgba(0,149,166,${isSpeaking?.025:.012})`);glow.addColorStop(1,"rgba(0,0,0,0)");context.fillStyle=glow;context.fillRect(0,0,width,height);
      if(!reduced)frameRef.current=requestAnimationFrame(draw);
    };
    draw(0);if(!reduced)frameRef.current=requestAnimationFrame(draw);
    return()=>{observer.disconnect();if(frameRef.current!==null)cancelAnimationFrame(frameRef.current)};
  },[isSpeaking]);

  return <canvas ref={canvasRef} className={`${styles.voiceOrbCanvas} ${isSpeaking?styles.voiceOrbSpeaking:""}`} aria-hidden="true"/>;
}
