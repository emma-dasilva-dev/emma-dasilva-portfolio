"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight, false);

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uScroll: { value: 0 },
      uResolution: {
        value: new THREE.Vector2(
          window.innerWidth * Math.min(window.devicePixelRatio, 1.75),
          window.innerHeight * Math.min(window.devicePixelRatio, 1.75)
        ),
      },
    };

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms,
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        varying vec2 vUv;

        uniform float uTime;
        uniform float uScroll;
        uniform vec2 uMouse;
        uniform vec2 uResolution;

        float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);

          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));

          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        void main() {
          vec2 uv = vUv;
          vec2 aspectUv = uv;
          aspectUv.x *= uResolution.x / max(uResolution.y, 1.0);

          float t = uTime * 0.055;
          float scroll = uScroll * 0.00035;

          vec2 drift = vec2(
            sin(t + scroll) * 0.11,
            cos(t * 0.8 - scroll) * 0.08
          );

          float n1 = noise(aspectUv * 1.35 + drift);
          float n2 = noise(aspectUv * 2.7 - drift * 1.6 + 3.2);
          float field = mix(n1, n2, 0.32);

          vec2 mouse = uMouse;
          float mouseDist = distance(uv, mouse);
          float mouseGlow = smoothstep(0.62, 0.0, mouseDist) * 0.16;

          float edge = smoothstep(0.95, 0.15, distance(uv, vec2(0.5)));
          float alpha = (0.035 + field * 0.085 + mouseGlow) * edge;

          vec3 navy = vec3(0.20, 0.26, 0.40);
          vec3 slate = vec3(0.33, 0.38, 0.50);
          vec3 color = mix(navy, slate, field);

          gl_FragColor = vec4(color, alpha);
        }
      `,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();
    let frame = 0;

    const render = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };

    render();

    const onPointerMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = 1 - event.clientY / window.innerHeight;

      gsap.to(uniforms.uMouse.value, {
        x,
        y,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    const onResize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio, 1.75);
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      uniforms.uResolution.value.set(
        window.innerWidth * pixelRatio,
        window.innerHeight * pixelRatio
      );
    };

    const onScroll = () => {
      uniforms.uScroll.value = window.scrollY;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    let gsapContext: gsap.Context | undefined;

    if (!reduceMotion) {
      gsapContext = gsap.context(() => {
        const heroTimeline = gsap.timeline({
          defaults: { ease: "power4.out" },
        });

        heroTimeline
          .from(".site-header", {
            y: -18,
            opacity: 0,
            duration: 0.8,
          })
          .from(
            ".hero-kicker > span",
            {
              y: 18,
              opacity: 0,
              stagger: 0.08,
              duration: 0.65,
            },
            "-=0.35"
          )
          .from(
            ".hero-name > span",
            {
              yPercent: 115,
              opacity: 0,
              stagger: 0.12,
              duration: 1.15,
            },
            "-=0.3"
          )
          .from(
            ".hero-footer",
            {
              y: 20,
              opacity: 0,
              duration: 0.75,
            },
            "-=0.6"
          );

        gsap.utils.toArray<HTMLElement>(".section").forEach((section) => {
          const meta = section.querySelector(".section-meta");
          const title = section.querySelector(
            ".section-title, .contact-title"
          );

          if (meta) {
            gsap.from(meta, {
              y: 20,
              opacity: 0,
              duration: 0.7,
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
              },
            });
          }

          if (title) {
            gsap.from(title, {
              y: 60,
              opacity: 0,
              duration: 1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: title,
                start: "top 86%",
              },
            });
          }
        });

        gsap.from(".about-copy > p", {
          y: 28,
          opacity: 0,
          stagger: 0.1,
          duration: 0.75,
          scrollTrigger: {
            trigger: ".about-copy",
            start: "top 82%",
          },
        });

        gsap.from(".project", {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".project",
            start: "top 85%",
          },
        });

        gsap.from(".project-main h3", {
          xPercent: -8,
          scrollTrigger: {
            trigger: ".project",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.utils
          .toArray<HTMLElement>(
            ".expertise-item, .quality, .playground-item"
          )
          .forEach((row) => {
            gsap.from(row, {
              y: 26,
              opacity: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 90%",
              },
            });
          });

        gsap.to(".hero-name", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);

      gsapContext?.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="webgl-canvas"
      aria-hidden="true"
    />
  );
}
