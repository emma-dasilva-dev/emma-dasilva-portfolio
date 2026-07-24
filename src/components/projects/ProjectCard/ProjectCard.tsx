"use client";

import Image from "next/image";

import {
  useState,
} from "react";

import type {
  Locale,
  Project,
} from "@/types/portfolio";

import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  actionLabel: string;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  locale,
  actionLabel,
  priority = false,
}: ProjectCardProps) {
  const [
    imageError,
    setImageError,
  ] =
    useState(false);

  return (
    <a
      href={
        project.liveUrl
      }
      target="_blank"
      rel="noreferrer"
      className={
        styles.card
      }
      aria-label={`${actionLabel}: ${project.title}`}
    >
      <div
        className={
          styles.visual
        }
      >
        {!imageError ? (
          <Image
            src={
              project.image
            }
            alt={
              project
                .imageAlt[
                locale
              ]
            }
            fill
            priority={
              priority
            }
            sizes="
              (max-width: 720px) calc(100vw - 2.5rem),
              (max-width: 1100px) 46vw,
              31vw
            "
            className={
              styles.image
            }
            onError={() =>
              setImageError(
                true,
              )
            }
          />
        ) : (
          <div
            className={
              styles.placeholder
            }
          >
            <span>
              {
                project.title
              }
            </span>
          </div>
        )}

        <div
          className={
            styles.visualOverlay
          }
        />

        <span
          className={
            styles.liveIndicator
          }
        >
          {actionLabel}

          <span
            aria-hidden="true"
          >
            ↗
          </span>
        </span>
      </div>

      <div
        className={
          styles.content
        }
      >
        <div
          className={
            styles.meta
          }
        >
          <span>
            {
              project
                .type[
                locale
              ]
            }
          </span>

          <span>
            {
              project.year
            }
          </span>
        </div>

        <h3
          className={
            styles.title
          }
        >
          {
            project.title
          }
        </h3>

        <p
          className={
            styles.summary
          }
        >
          {
            project
              .summary[
              locale
            ]
          }
        </p>

        <p
          className={
            styles.role
          }
        >
          {
            project
              .role[
              locale
            ]
          }
        </p>

        <ul
          className={
            styles.technologies
          }
          aria-label="Technologies"
        >
          {project
            .technologies
            .map(
              (
                technology,
              ) => (
                <li
                  key={
                    technology
                  }
                >
                  {
                    technology
                  }
                </li>
              ),
            )}
        </ul>
      </div>
    </a>
  );
}