"use client";

import { useEffect, useId, useRef, useState } from "react";
import * as THREE from "three";

import styles from "./PapaleHero.module.css";

interface WebGLHeroGradientProps {
  ariaLabel: string;
}

const vertexShader = `
  uniform float uTime;
  uniform float uScrollProgress;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 displaced = position;
    float edge = sin(uv.y * 3.14159265);
    displaced.x += sin(uv.y * 8.0 + uTime * 0.35) * 0.006 * edge;
    displaced.y += cos(uv.x * 7.0 + uTime * 0.28) * 0.004 * edge;
    displaced.y -= uScrollProgress * 0.035;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform float uScrollProgress;
  varying vec2 vUv;

  float noise(vec2 point) {
    return fract(sin(dot(point, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    float flow = sin(vUv.y * 5.0 + uTime * 0.22) * 0.08;
    float position = clamp(vUv.x + flow, 0.0, 1.0);
    float grain = (noise(vUv * 180.0 + uTime * 0.015) - 0.5) * 0.025;
    position = clamp(position + grain + uScrollProgress * 0.035, 0.0, 1.0);

    vec3 navy = vec3(0.12, 0.22, 0.38);
    vec3 mediumNavy = vec3(0.24, 0.39, 0.63);
    vec3 icyBlue = vec3(0.60, 0.73, 0.90);
    vec3 pale = vec3(0.92, 0.93, 0.91);
    vec3 color = mix(navy, mediumNavy, smoothstep(0.0, 0.28, position));
    color = mix(color, icyBlue, smoothstep(0.25, 0.58, position));
    color = mix(color, pale, smoothstep(0.55, 0.78, position));
    color = mix(color, mediumNavy, smoothstep(0.82, 1.0, position));

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function WebGLHeroGradient({ ariaLabel }: WebGLHeroGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const maskId = `emma-name-mask-${useId().replace(/:/g, "")}`;
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas, powerPreference: "high-performance" });
    } catch {
      setFallback(true);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2, 8, 8);
    const uniforms = { uTime: { value: 0 }, uScrollProgress: { value: 0 } };
    const material = new THREE.ShaderMaterial({ fragmentShader, uniforms, vertexShader });
    scene.add(new THREE.Mesh(geometry, material));

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const resizeObserver = new ResizeObserver(() => {
      const bounds = wrapper.getBoundingClientRect();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(bounds.width, bounds.height, false);
      renderer.render(scene, camera);
    });
    resizeObserver.observe(wrapper);

    let frame = 0;
    let scrollProgress = 0;
    let lastTime = performance.now();
    const render = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;
      const target = Math.min(Math.max(window.scrollY / Math.max(window.innerHeight * 0.8, 1), 0), 1);
      scrollProgress += (target - scrollProgress) * Math.min(delta * 8, 1);
      uniforms.uTime.value = time / 1000;
      uniforms.uScrollProgress.value = scrollProgress;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };

    const initialBounds = wrapper.getBoundingClientRect();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(initialBounds.width, initialBounds.height, false);
    renderer.render(scene, camera);
    if (!reduced) frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <span ref={wrapperRef} className={`${styles.webglName} ${fallback ? styles.webglFallback : ""}`}>
      <svg className={styles.webglSvg} aria-hidden="true" viewBox="0 0 1200 500" preserveAspectRatio="none">
        <defs><mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="1200" height="500"><rect width="1200" height="500" fill="black" /><text x="72" y="350" fill="white">EMMA</text><text x="620" y="350" fill="white">DASILVA</text></mask></defs>
        <foreignObject x="0" y="0" width="1200" height="500" mask={`url(#${maskId})`}>
          <canvas aria-hidden="true" ref={canvasRef} />
        </foreignObject>
      </svg>
      {fallback ? <span className={styles.fallbackName} aria-label={ariaLabel}>EMMA DASILVA</span> : null}
    </span>
  );
}
