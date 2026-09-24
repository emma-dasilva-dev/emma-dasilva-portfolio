# Architecture

## Routing

Next.js App Router with locale-prefixed routes under `src/app/[lang]`.

`src/proxy.ts` redirects locale-less requests to English.

## Internationalization

`src/i18n/config.ts` defines `en` and `fr`.

Content is stored separately:
- `src/content/en`
- `src/content/fr`

React components receive content instead of embedding large translation objects.

## Components

- `components/layout` — persistent Header and Footer
- `components/sections` — homepage sections
- `components/terminal` — optional terminal interaction
- `components/ui` — reusable small UI primitives

## Theme

Theme values are CSS custom properties in `src/styles/tokens.css`.

A small inline script resolves the theme before rendering to reduce light/dark flashing. User choice persists in `localStorage`.

## Terminal

The terminal is optional. It can navigate, change theme/language, or open projects, but normal navigation remains the primary interface.

## Styling

CSS Modules for component-specific styling. Global tokens and accessibility rules live under `src/styles`.
