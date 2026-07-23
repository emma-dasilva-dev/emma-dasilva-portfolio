"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

import styles from "./Thread.module.css";

function getCssColor(variable: string, fallback: string) {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();

  return value || fallback;
}

function createRenderer(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });

  renderer.setClearColor(0x000000, 0);

  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 1.75),
  );

  renderer.outputColorSpace =
    THREE.SRGBColorSpace;

  renderer.toneMapping =
    THREE.ACESFilmicToneMapping;

  renderer.toneMappingExposure = 1.05;

  return renderer;
}

export default function Thread() {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const backCanvasRef =
    useRef<HTMLCanvasElement>(null);

  const frontCanvasRef =
    useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container =
      containerRef.current;

    const backCanvas =
      backCanvasRef.current;

    const frontCanvas =
      frontCanvasRef.current;

    if (
      !container ||
      !backCanvas ||
      !frontCanvas
    ) {
      return;
    }

    /*
     * ------------------------------------------------
     * SCENE
     * ------------------------------------------------
     */

    const scene =
      new THREE.Scene();

    /*
     * ------------------------------------------------
     * CAMERA
     * ------------------------------------------------
     */

    const camera =
      new THREE.PerspectiveCamera(
        38,
        container.clientWidth /
          container.clientHeight,
        0.1,
        100,
      );

    camera.position.set(
      0,
      0,
      9,
    );

    /*
     * ------------------------------------------------
     * TWO RENDERERS
     * ------------------------------------------------
     *
     * Both render the exact same Three.js scene.
     *
     * The CSS determines which parts appear behind
     * or in front of the portrait.
     */

    const backRenderer =
      createRenderer(backCanvas);

    const frontRenderer =
      createRenderer(frontCanvas);

    /*
     * ------------------------------------------------
     * COLORS
     * ------------------------------------------------
     */

    const titaniumColor =
      new THREE.Color(
        getCssColor(
          "--color-titanium",
          "#A7ADB5",
        ),
      );

    const blueColor =
      new THREE.Color(
        getCssColor(
          "--color-blue",
          "#144493",
        ),
      );

    /*
     * ------------------------------------------------
     * THREAD PATH
     * ------------------------------------------------
     */

    const threadPath =
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(
            -0.2,
            3.3,
            -0.8,
          ),

          new THREE.Vector3(
            1.5,
            2.7,
            0.5,
          ),

          new THREE.Vector3(
            2.5,
            1.5,
            -0.3,
          ),

          new THREE.Vector3(
            1.7,
            0.3,
            0.7,
          ),

          new THREE.Vector3(
            2.7,
            -1,
            0,
          ),

          new THREE.Vector3(
            1.9,
            -2.3,
            -0.7,
          ),

          new THREE.Vector3(
            0.4,
            -3.25,
            0.4,
          ),
        ],
        false,
        "centripetal",
      );

    /*
     * ------------------------------------------------
     * GEOMETRY
     * ------------------------------------------------
     */

    const geometry =
      new THREE.TubeGeometry(
        threadPath,
        180,
        0.055,
        12,
        false,
      );

    /*
     * ------------------------------------------------
     * MATERIAL
     * ------------------------------------------------
     */

    const material =
      new THREE.MeshPhysicalMaterial({
        color: titaniumColor,

        metalness: 0.92,

        roughness: 0.25,

        clearcoat: 0.35,

        clearcoatRoughness: 0.3,
      });

    const thread =
      new THREE.Mesh(
        geometry,
        material,
      );

    const threadGroup =
      new THREE.Group();

    threadGroup.add(thread);

    scene.add(threadGroup);

    /*
     * ------------------------------------------------
     * LIGHTING
     * ------------------------------------------------
     */

    const ambientLight =
      new THREE.AmbientLight(
        0xffffff,
        1.3,
      );

    scene.add(ambientLight);

    const mainLight =
      new THREE.DirectionalLight(
        0xffffff,
        3.5,
      );

    mainLight.position.set(
      2,
      5,
      6,
    );

    scene.add(mainLight);

    const blueLight =
      new THREE.PointLight(
        blueColor,
        16,
        12,
        2,
      );

    blueLight.position.set(
      3.5,
      1,
      3,
    );

    scene.add(blueLight);

    const fillLight =
      new THREE.PointLight(
        titaniumColor,
        8,
        10,
        2,
      );

    fillLight.position.set(
      -2,
      -2,
      4,
    );

    scene.add(fillLight);

    /*
     * ------------------------------------------------
     * POINTER MOVEMENT
     * ------------------------------------------------
     */

    const pointerTarget = {
      x: 0,
      y: 0,
    };

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      const normalizedX =
        event.clientX /
          window.innerWidth -
        0.5;

      const normalizedY =
        event.clientY /
          window.innerHeight -
        0.5;

      pointerTarget.x =
        normalizedY * 0.06;

      pointerTarget.y =
        normalizedX * 0.1;
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      },
    );

    /*
     * ------------------------------------------------
     * REDUCED MOTION
     * ------------------------------------------------
     */

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    /*
     * The front depth effect is disabled on smaller
     * screens to avoid unnecessary GPU work.
     */

    let renderFrontLayer =
      container.clientWidth > 820;

    /*
     * ------------------------------------------------
     * RENDER BOTH LAYERS
     * ------------------------------------------------
     */

    const renderScene = () => {
      backRenderer.render(
        scene,
        camera,
      );

      if (renderFrontLayer) {
        frontRenderer.render(
          scene,
          camera,
        );
      }
    };

    /*
     * ------------------------------------------------
     * RESPONSIVE SIZE
     * ------------------------------------------------
     */

    const updateSize = () => {
      const width =
        container.clientWidth;

      const height =
        container.clientHeight;

      if (
        width === 0 ||
        height === 0
      ) {
        return;
      }

      renderFrontLayer =
        width > 820;

      backRenderer.setSize(
        width,
        height,
        false,
      );

      frontRenderer.setSize(
        width,
        height,
        false,
      );

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();

      /*
       * Desktop
       */

      if (width >= 1100) {
        camera.position.z = 9;

        threadGroup.scale.setScalar(
          1,
        );

        threadGroup.position.set(
          1.15,
          0,
          0,
        );
      }

      /*
       * Tablet
       */

      else if (width >= 700) {
        camera.position.z = 9.5;

        threadGroup.scale.setScalar(
          0.92,
        );

        threadGroup.position.set(
          0.85,
          -0.1,
          0,
        );
      }

      /*
       * Mobile
       */

      else {
        camera.position.z = 10;

        threadGroup.scale.setScalar(
          0.78,
        );

        threadGroup.position.set(
          0.55,
          -0.4,
          0,
        );
      }

      renderScene();
    };

    const resizeObserver =
      new ResizeObserver(
        updateSize,
      );

    resizeObserver.observe(
      container,
    );

    updateSize();

    /*
     * ------------------------------------------------
     * ANIMATION
     * ------------------------------------------------
     */

    let animationFrame:
      number | null = null;

    const clock =
      new THREE.Clock();

    const animate = () => {
      const elapsedTime =
        clock.getElapsedTime();

      threadGroup.rotation.x +=
        (
          pointerTarget.x -
          threadGroup.rotation.x
        ) * 0.025;

      threadGroup.rotation.y +=
        (
          pointerTarget.y -
          threadGroup.rotation.y
        ) * 0.025;

      threadGroup.rotation.z =
        Math.sin(
          elapsedTime * 0.16,
        ) * 0.018;

      blueLight.position.x =
        3.5 +
        Math.sin(
          elapsedTime * 0.35,
        ) *
          0.8;

      blueLight.position.y =
        1 +
        Math.cos(
          elapsedTime * 0.28,
        ) *
          0.5;

      renderScene();

      animationFrame =
        window.requestAnimationFrame(
          animate,
        );
    };

    const startAnimation = () => {
      if (
        prefersReducedMotion ||
        animationFrame !== null
      ) {
        return;
      }

      animate();
    };

    const stopAnimation = () => {
      if (
        animationFrame === null
      ) {
        return;
      }

      window.cancelAnimationFrame(
        animationFrame,
      );

      animationFrame = null;
    };

    /*
     * ------------------------------------------------
     * PERFORMANCE
     * ------------------------------------------------
     *
     * Stop rendering when the hero leaves the screen.
     */

    const visibilityObserver =
      new IntersectionObserver(
        ([entry]) => {
          if (prefersReducedMotion) {
            renderScene();

            return;
          }

          if (entry.isIntersecting) {
            startAnimation();
          } else {
            stopAnimation();
          }
        },
        {
          threshold: 0.01,
        },
      );

    visibilityObserver.observe(
      container,
    );

    if (prefersReducedMotion) {
      renderScene();
    }

    /*
     * ------------------------------------------------
     * CLEANUP
     * ------------------------------------------------
     */

    return () => {
      stopAnimation();

      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      resizeObserver.disconnect();

      visibilityObserver.disconnect();

      geometry.dispose();

      material.dispose();

      backRenderer.dispose();

      frontRenderer.dispose();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className={styles.threadBack}
        aria-hidden="true"
      >
        <canvas
          ref={backCanvasRef}
          className={styles.canvas}
        />
      </div>

      <div
        className={styles.threadFront}
        aria-hidden="true"
      >
        <canvas
          ref={frontCanvasRef}
          className={styles.canvas}
        />
      </div>
    </>
  );
}
