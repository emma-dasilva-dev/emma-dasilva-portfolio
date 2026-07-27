"use client";

import {
  useEffect,
  useState,
} from "react";

export function useActiveSection(
  sectionIds: readonly string[],
) {
  const [
    activeSection,
    setActiveSection,
  ] =
    useState("");

  const sectionKey =
    sectionIds.join("|");

  useEffect(() => {
    const ids =
      sectionKey
        .split("|")
        .filter(Boolean);

    if (ids.length === 0) {
      return;
    }

    let animationFrame = 0;

    const updateActiveSection =
      () => {
        const marker =
          window.scrollY +
          window.innerHeight *
            0.34;

        let current = "";

        for (
          const id of ids
        ) {
          const element =
            document.getElementById(
              id,
            );

          if (
            element &&
            marker >=
              element.offsetTop
          ) {
            current = id;
          }
        }

        setActiveSection(
          (
            previous,
          ) =>
            previous === current
              ? previous
              : current,
        );
      };

    const requestUpdate =
      () => {
        cancelAnimationFrame(
          animationFrame,
        );

        animationFrame =
          requestAnimationFrame(
            updateActiveSection,
          );
      };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      requestUpdate,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      requestUpdate,
    );

    return () => {
      cancelAnimationFrame(
        animationFrame,
      );

      window.removeEventListener(
        "scroll",
        requestUpdate,
      );

      window.removeEventListener(
        "resize",
        requestUpdate,
      );
    };
  }, [
    sectionKey,
  ]);

  return activeSection;
}