"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AsciiOrb.module.css";

interface AsciiOrbProps { locale: "en" | "fr"; }
interface Point3D { x:number; y:number; z:number; }
type OrbState = "idle" | "speaking" | "complete";

const CANVAS_SIZE=480, POINT_COUNT=150, CONNECTION_DISTANCE=58;
const FEMALE_VOICE_HINTS=["jenny","aria","denise","hortense","amelie","audrey","zira","ava","serena","samantha","victoria","karen","moira","tessa","susan","female"];

function createSpherePoints(count:number):Point3D[]{
  const points:Point3D[]=[]; const goldenAngle=Math.PI*(3-Math.sqrt(5));
  for(let index=0;index<count;index+=1){const y=1-(index/(count-1))*2;const radius=Math.sqrt(1-y*y);const theta=goldenAngle*index;points.push({x:Math.cos(theta)*radius,y,z:Math.sin(theta)*radius});}
  return points;
}
const spherePoints=createSpherePoints(POINT_COUNT);
function pickPreferredVoice(locale:"en"|"fr"){
  const voices=window.speechSynthesis.getVoices(); const prefix=locale==="fr"?"fr":"en"; const localized=voices.filter(v=>v.lang.toLowerCase().startsWith(prefix));
  return localized.find(v=>FEMALE_VOICE_HINTS.some(h=>v.name.toLowerCase().includes(h)))??localized[0]??null;
}

export function AsciiOrb({locale}:AsciiOrbProps){
  const canvasRef=useRef<HTMLCanvasElement>(null); const animationRef=useRef<number|null>(null); const speakingRef=useRef(false); const completeTimerRef=useRef<number|null>(null);
  const [orbState,setOrbState]=useState<OrbState>("idle");
  const copy=useMemo(()=>locale==="fr"?{play:"Écouter l’accueil",stop:"Arrêter",idle:"PRÊT",speaking:"EN COURS",complete:"TERMINÉ",speech:"Bienvenue sur le portfolio d’Emma. Je suis Emma, étudiante en cybersécurité et génie informatique. Je développe mes compétences en systèmes, réseaux, Linux, sécurité et développement logiciel. Découvre mon parcours, mes projets et les technologies avec lesquelles je travaille."}:{play:"Hear welcome",stop:"Stop",idle:"IDLE",speaking:"SPEAKING",complete:"COMPLETE",speech:"Welcome to Emma's portfolio. I'm Emma, a cybersecurity and computer engineering student building strong foundations in systems, networks, Linux, security and software development. Explore my work, experience and the technologies I use."},[locale]);

  useEffect(()=>()=>{if("speechSynthesis" in window)window.speechSynthesis.cancel();if(completeTimerRef.current!==null)window.clearTimeout(completeTimerRef.current);},[locale]);
  useEffect(()=>{speakingRef.current=orbState==="speaking";},[orbState]);
  useEffect(()=>{
    const canvas=canvasRef.current;if(!canvas)return;const context=canvas.getContext("2d");if(!context)return;const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let disposed=false;
    const draw=(time:number)=>{if(disposed)return;const speaking=speakingRef.current,width=CANVAS_SIZE,height=CANVAS_SIZE,cx=width/2,cy=height/2,base=155;const pulse=speaking?1+Math.sin(time*.014)*.045+Math.sin(time*.029)*.018:1+Math.sin(time*.0018)*.012;const radius=base*pulse,ry=reduced?.5:time*(speaking?.00035:.00012),rx=reduced?-.14:-.14+Math.sin(time*.0005)*.07;context.clearRect(0,0,width,height);
      const projected=spherePoints.map((point,index)=>{const cosY=Math.cos(ry),sinY=Math.sin(ry),x1=point.x*cosY-point.z*sinY,z1=point.x*sinY+point.z*cosY,cosX=Math.cos(rx),sinX=Math.sin(rx),y2=point.y*cosX-z1*sinX,z2=point.y*sinX+z1*cosX,dist=speaking?1+Math.sin(time*.018+index*.57)*.04:1,persp=1+z2*.15;return{x:cx+x1*radius*dist*persp,y:cy+y2*radius*dist*persp,z:z2};});
      for(let a=0;a<projected.length;a+=1){for(let b=a+1;b<projected.length;b+=1){const p=projected[a],q=projected[b],dx=p.x-q.x,dy=p.y-q.y,d=Math.sqrt(dx*dx+dy*dy);if(d>CONNECTION_DISTANCE||Math.abs(p.z-q.z)>.4)continue;const depth=Math.max(.12,((p.z+q.z)/2+1)/2),alpha=(1-d/CONNECTION_DISTANCE)*depth*(speaking?.22:.12);context.beginPath();context.moveTo(p.x,p.y);context.lineTo(q.x,q.y);context.strokeStyle=`rgba(0,149,166,${alpha})`;context.lineWidth=.7;context.stroke();}}
      projected.forEach((p,index)=>{const depth=(p.z+1)/2,flicker=speaking?.82+Math.sin(time*.025+index)*.18:1,size=1.15+depth*2.1+(speaking?.35:0),alpha=Math.max(.28,(.34+depth*.66)*flicker);context.beginPath();context.arc(p.x,p.y,size,0,Math.PI*2);context.fillStyle=`rgba(0,225,225,${alpha})`;context.fill();});
      const glow=context.createRadialGradient(cx,cy,0,cx,cy,radius*1.25);glow.addColorStop(0,`rgba(0,225,225,${speaking?.07:.035})`);glow.addColorStop(.58,`rgba(0,149,166,${speaking?.035:.018})`);glow.addColorStop(1,"rgba(0,0,0,0)");context.fillStyle=glow;context.fillRect(0,0,width,height);if(!reduced)animationRef.current=window.requestAnimationFrame(draw);};
    draw(0);return()=>{disposed=true;if(animationRef.current!==null)window.cancelAnimationFrame(animationRef.current);};
  },[]);

  const finish=()=>{speakingRef.current=false;setOrbState("complete");completeTimerRef.current=window.setTimeout(()=>setOrbState("idle"),1800);};
  const stopSpeech=()=>{if(!("speechSynthesis" in window))return;window.speechSynthesis.cancel();speakingRef.current=false;setOrbState("idle");};
  const speak=()=>{if(!("speechSynthesis" in window)||!("SpeechSynthesisUtterance" in window))return;if(completeTimerRef.current!==null)window.clearTimeout(completeTimerRef.current);window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(copy.speech);utterance.lang=locale==="fr"?"fr-FR":"en-US";utterance.rate=.93;utterance.pitch=1.08;const voice=pickPreferredVoice(locale);if(voice)utterance.voice=voice;utterance.onstart=()=>{speakingRef.current=true;setOrbState("speaking");};utterance.onend=finish;utterance.onerror=()=>{speakingRef.current=false;setOrbState("idle");};window.speechSynthesis.speak(utterance);};

  return <div className={styles.root}>
    <div className={styles.canvasWrap}>
      <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} className={`${styles.orbCanvas} ${orbState==="speaking"?styles.speaking:""}`} aria-hidden="true" />
      <span className={`${styles.state} ${orbState==="speaking"?styles.stateActive:""}`}>{copy[orbState]}</span>
    </div>
    <button type="button" onClick={orbState==="speaking"?stopSpeech:speak} className={styles.voiceButton}><span className={styles.voiceIcon} aria-hidden="true">{orbState==="speaking"?"■":"◌"}</span>{orbState==="speaking"?copy.stop:copy.play}</button>
  </div>;
}
