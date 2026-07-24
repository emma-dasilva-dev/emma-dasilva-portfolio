"use client";

import {
  useEffect,
  useState,
} from "react";

export function useActiveSection(
  sectionIds: readonly string[],
  defaultSection = "",
) {
  const [
    activeSection,
    setActiveSection,
  ] = useState(defaultSection);

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

    let frameId = 0;

    const updateActiveSection =
      () => {
        const targetLine =
          window.innerHeight *
          0.38;

        let bestId =
          ids[0];

        let bestDistance =
          Number.POSITIVE_INFINITY;

        for (
          const id of ids
        ) {
          const element =
            document.getElementById(
              id,
            );

          if (!element) {
            continue;
          }

          const rect =
            element.getBoundingClientRect();

          if (
            rect.top <=
              targetLine &&
            rect.bottom >=
              targetLine
          ) {
            bestId = id;
            bestDistance = 0;
            break;
          }

          const distance =
            Math.min(
              Math.abs(
                rect.top -
                  targetLine,
              ),

              Math.abs(
                rect.bottom -
                  targetLine,
              ),
            );

          if (
            distance <
            bestDistance
          ) {
            bestDistance =
              distance;

            bestId = id;
          }
        }

        setActiveSection(
          (
            current,
          ) =>
            current ===
            bestId
              ? current
              : bestId,
        );
      };

    const requestUpdate =
      () => {
        cancelAnimationFrame(
          frameId,
        );

        frameId =
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
        frameId,
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