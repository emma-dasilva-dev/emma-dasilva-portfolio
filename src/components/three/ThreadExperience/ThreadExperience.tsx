"use client";

import {
  useEffect,
  useRef,
} from "react";

import * as THREE from "three";

import {
  THREAD_MILESTONES,
} from "@/content/home";

import {
  useLocale,
} from "@/components/providers/LocaleProvider/LocaleProvider";

import {
  useActiveSection,
} from "@/hooks/useActiveSection";

import styles from "./ThreadExperience.module.css";

const SECTION_IDS =
  THREAD_MILESTONES.map(
    (
      milestone,
    ) =>
      milestone.id,
  );

function readColor(
  variable: string,
  fallback: string,
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

  const {
    locale,
  } =
    useLocale();

  const activeSection =
    useActiveSection(
      SECTION_IDS,
      "home",
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
      1.05;

    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio,
        1.6,
      ),
    );

    const curve =
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(
            2.8,
            4.3,
            -0.6,
          ),

          new THREE.Vector3(
            4,
            3.3,
            0.25,
          ),

          new THREE.Vector3(
            3.05,
            2.2,
            -0.25,
          ),

          new THREE.Vector3(
            4.25,
            1.2,
            0.5,
          ),

          new THREE.Vector3(
            3,
            0.1,
            -0.2,
          ),

          new THREE.Vector3(
            4,
            -1.1,
            0.4,
          ),

          new THREE.Vector3(
            2.8,
            -2.2,
            -0.4,
          ),

          new THREE.Vector3(
            3.8,
            -3.3,
            0.2,
          ),

          new THREE.Vector3(
            2.6,
            -4.5,
            -0.5,
          ),
        ],

        false,

        "centripetal",
      );

    const geometry =
      new THREE.TubeGeometry(
        curve,
        320,
        0.06,
        14,
        false,
      );

    const maximumDrawCount =
      geometry.index
        ?.count ??
      geometry.attributes
        .position.count;

    const material =
      new THREE.MeshPhysicalMaterial({
        color:
          readColor(
            "--color-thread",
            "#4b5055",
          ),

        metalness: 0.95,

        roughness: 0.28,

        clearcoat: 0.24,

        clearcoatRoughness:
          0.34,

        transparent: true,

        opacity: 0.94,
      });

    const thread =
      new THREE.Mesh(
        geometry,
        material,
      );

    const group =
      new THREE.Group();

    group.add(
      thread,
    );

    scene.add(
      group,
    );

    const ambientLight =
      new THREE.AmbientLight(
        0xffffff,
        1.4,
      );

    const keyLight =
      new THREE.DirectionalLight(
        0xffffff,
        3.6,
      );

    keyLight.position.set(
      4,
      5,
      6,
    );

    const fillLight =
      new THREE.DirectionalLight(
        0xffffff,
        1.5,
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

    let targetProgress =
      0;

    let currentProgress =
      0;

    let pointerX = 0;

    let pointerY = 0;

    let baseX = 0;

    let baseScale = 1;

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    const finePointer =
      window.matchMedia(
        "(pointer: fine)",
      ).matches;

    const updateScroll =
      () => {
        const scrollHeight =
          document.documentElement
            .scrollHeight -
          window.innerHeight;

        targetProgress =
          scrollHeight > 0
            ? THREE.MathUtils.clamp(
                window.scrollY /
                  scrollHeight,
                0,
                1,
              )
            : 0;
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

    const handlePointerMove =
      (
        event:
          PointerEvent,
      ) => {
        if (
          reducedMotion ||
          !finePointer
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

          baseScale = 1;

          baseX = 0;
        } else if (
          width >= 700
        ) {
          camera.position.z =
            10.5;

          baseScale = 0.68;

          baseX = -0.45;
        } else {
          camera.position.z =
            10.8;

          baseScale = 0.58;

          baseX = -1;
        }

        group.scale.setScalar(
          baseScale,
        );

        group.position.x =
          baseX;

        updateScroll();
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
      updateScroll,
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

    handleResize();

    updateTheme();

    updateScroll();

    let animationFrame =
      0;

    const animate =
      () => {
        currentProgress +=
          (
            targetProgress -
            currentProgress
          ) *
          0.055;

        const revealProgress =
          THREE.MathUtils.clamp(
            0.18 +
              currentProgress *
                0.82,
            0,
            1,
          );

        const visibleCount =
          Math.floor(
            (
              maximumDrawCount *
              revealProgress
            ) /
              6,
          ) *
          6;

        geometry.setDrawRange(
          0,
          visibleCount,
        );

        group.position.x =
          baseX +
          Math.sin(
            currentProgress *
              Math.PI *
              1.5,
          ) *
            0.14;

        group.position.y =
          THREE.MathUtils.lerp(
            0.45,
            -0.55,
            currentProgress,
          );

        group.rotation.z =
          THREE.MathUtils.lerp(
            -0.05,
            0.17,
            currentProgress,
          );

        if (
          !reducedMotion &&
          finePointer
        ) {
          group.rotation.x +=
            (
              pointerY *
                0.035 -
              group.rotation.x
            ) *
            0.025;

          group.rotation.y +=
            (
              pointerX *
                0.055 -
              group.rotation.y
            ) *
            0.025;
        }

        material.opacity =
          currentProgress >
          0.9
            ? THREE.MathUtils.lerp(
                0.94,
                0.4,
                (
                  currentProgress -
                  0.9
                ) /
                  0.1,
              )
            : 0.94;

        renderer.render(
          scene,
          camera,
        );

        animationFrame =
          requestAnimationFrame(
            animate,
          );
      };

    animate();

    return () => {
      cancelAnimationFrame(
        animationFrame,
      );

      window.removeEventListener(
        "scroll",
        updateScroll,
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
    <>
      <div
        className={
          styles.threadLayer
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

      <div
        className={
          styles.milestones
        }
        aria-hidden="true"
      >
        {THREAD_MILESTONES.map(
          (
            milestone,
          ) => {
            const active =
              milestone.id ===
              activeSection;

            return (
              <div
                key={
                  milestone.id
                }
                className={`${styles.milestone} ${
                  active
                    ? styles.active
                    : ""
                }`}
              >
                <span
                  className={
                    styles.dot
                  }
                />

                <span
                  className={
                    styles.milestoneLabel
                  }
                >
                  {
                    milestone
                      .label[
                      locale
                    ]
                  }
                </span>
              </div>
            );
          },
        )}
      </div>
    </>
  );
}