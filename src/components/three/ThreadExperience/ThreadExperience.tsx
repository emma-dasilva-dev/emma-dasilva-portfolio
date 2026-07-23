"use client";

import {
  useEffect,
  useRef,
} from "react";

import * as THREE from "three";

import styles from "./ThreadExperience.module.css";

function readColor(
  variable:
    string,
  fallback:
    string,
) {
  const value =
    getComputedStyle(
      document.documentElement,
    )
      .getPropertyValue(
        variable,
      )
      .trim();

  return (
    value ||
    fallback
  );
}

export default function ThreadExperience() {
  const canvasRef =
    useRef<HTMLCanvasElement>(
      null,
    );

  useEffect(() => {
    const canvas =
      canvasRef.current;

    if (!canvas) {
      return;
    }

    const scene =
      new THREE.Scene();

    const camera =
      new THREE.PerspectiveCamera(
        38,
        window.innerWidth /
          window.innerHeight,
        0.1,
        100,
      );

    camera.position.z =
      10;

    const renderer =
      new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference:
          "high-performance",
      });

    renderer.setClearColor(
      0x000000,
      0,
    );

    renderer.outputColorSpace =
      THREE.SRGBColorSpace;

    renderer.toneMapping =
      THREE.ACESFilmicToneMapping;

    renderer.toneMappingExposure =
      1;

    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio,
        1.6,
      ),
    );

    /*
     * The curve is deliberately longer
     * than one viewport.
     *
     * Scroll movement exposes different
     * parts of it over time.
     */

    const curve =
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(
            0.5,
            6,
            -0.6,
          ),

          new THREE.Vector3(
            2.3,
            4.8,
            0.25,
          ),

          new THREE.Vector3(
            1.4,
            3.4,
            -0.1,
          ),

          new THREE.Vector3(
            2.8,
            2,
            0.5,
          ),

          new THREE.Vector3(
            1.7,
            0.4,
            -0.3,
          ),

          new THREE.Vector3(
            2.5,
            -1.3,
            0.4,
          ),

          new THREE.Vector3(
            0.8,
            -2.9,
            -0.4,
          ),

          new THREE.Vector3(
            1.8,
            -4.5,
            0.2,
          ),

          new THREE.Vector3(
            -0.8,
            -6.2,
            -0.5,
          ),
        ],
        false,
        "centripetal",
      );

    const geometry =
      new THREE.TubeGeometry(
        curve,
        260,
        0.048,
        12,
        false,
      );

    const material =
      new THREE.MeshPhysicalMaterial({
        color:
          readColor(
            "--color-thread",
            "#4b5055",
          ),

        metalness: 0.94,

        roughness: 0.3,

        clearcoat: 0.22,

        clearcoatRoughness:
          0.35,

        transparent: true,

        opacity: 0.9,
      });

    const thread =
      new THREE.Mesh(
        geometry,
        material,
      );

    const group =
      new THREE.Group();

    group.add(thread);

    scene.add(group);

    const ambientLight =
      new THREE.AmbientLight(
        0xffffff,
        1.25,
      );

    const keyLight =
      new THREE.DirectionalLight(
        0xffffff,
        3.3,
      );

    keyLight.position.set(
      3,
      5,
      6,
    );

    const fillLight =
      new THREE.DirectionalLight(
        0xffffff,
        1.35,
      );

    fillLight.position.set(
      -4,
      -2,
      4,
    );

    scene.add(
      ambientLight,
      keyLight,
      fillLight,
    );

    /*
     * Scroll values.
     */

    let targetProgress = 0;
    let currentProgress = 0;

    /*
     * Pointer movement stays extremely
     * restrained.
     */

    let pointerX = 0;
    let pointerY = 0;

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    let baseX = 1.2;
    let baseScale = 1;

    const calculateScroll =
      () => {
        const total =
          document.documentElement
            .scrollHeight -
          window.innerHeight;

        targetProgress =
          total > 0
            ? Math.min(
                1,
                Math.max(
                  0,
                  window.scrollY /
                    total,
                ),
              )
            : 0;
      };

    const handlePointerMove =
      (
        event:
          PointerEvent,
      ) => {
        if (
          reducedMotion
        ) {
          return;
        }

        pointerX =
          event.clientX /
            window.innerWidth -
          0.5;

        pointerY =
          event.clientY /
            window.innerHeight -
          0.5;
      };

    const updateTheme =
      () => {
        material.color.set(
          readColor(
            "--color-thread",
            "#4b5055",
          ),
        );
      };

    const handleResize =
      () => {
        const width =
          window.innerWidth;

        const height =
          window.innerHeight;

        renderer.setSize(
          width,
          height,
          false,
        );

        camera.aspect =
          width /
          height;

        camera.updateProjectionMatrix();

        if (
          width >= 1100
        ) {
          camera.position.z =
            10;

          baseX = 1.35;
          baseScale = 1;
        } else if (
          width >= 700
        ) {
          camera.position.z =
            10.8;

          baseX = 0.8;
          baseScale =
            0.92;
        } else {
          camera.position.z =
            11.6;

          baseX = 0.4;
          baseScale =
            0.78;
        }

        group.scale.setScalar(
          baseScale,
        );
      };

    const themeObserver =
      new MutationObserver(
        updateTheme,
      );

    themeObserver.observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: [
          "data-theme",
        ],
      },
    );

    window.addEventListener(
      "scroll",
      calculateScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      handleResize,
    );

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      },
    );

    calculateScroll();
    handleResize();
    updateTheme();

    let frameId = 0;

    const animate =
      () => {
        currentProgress +=
          (
            targetProgress -
            currentProgress
          ) *
          0.055;

        /*
         * The Thread moves through the
         * document according to scroll.
         */

        group.position.x =
          baseX +
          Math.sin(
            currentProgress *
              Math.PI *
              1.7,
          ) *
            0.42;

        group.position.y =
          -0.5 +
          currentProgress *
            5.2;

        /*
         * Small depth and direction
         * changes as the visitor scrolls.
         */

        group.rotation.z =
          -0.08 +
          currentProgress *
            0.32;

        if (
          !reducedMotion
        ) {
          group.rotation.x +=
            (
              pointerY *
                0.045 -
              group.rotation.x
            ) *
            0.025;

          group.rotation.y +=
            (
              pointerX *
                0.07 -
              group.rotation.y
            ) *
            0.025;
        }

        /*
         * Fade quietly near the footer.
         */

        if (
          currentProgress >
          0.84
        ) {
          material.opacity =
            Math.max(
              0.12,
              0.9 -
                (
                  currentProgress -
                  0.84
                ) *
                  4.5,
            );
        } else {
          material.opacity =
            0.9;
        }

        renderer.render(
          scene,
          camera,
        );

        frameId =
          requestAnimationFrame(
            animate,
          );
      };

    animate();

    return () => {
      cancelAnimationFrame(
        frameId,
      );

      window.removeEventListener(
        "scroll",
        calculateScroll,
      );

      window.removeEventListener(
        "resize",
        handleResize,
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      themeObserver.disconnect();

      geometry.dispose();

      material.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div
      className={
        styles.thread
      }
      aria-hidden="true"
    >
      <canvas
        ref={
          canvasRef
        }
        className={
          styles.canvas
        }
      />
    </div>
  );
}
