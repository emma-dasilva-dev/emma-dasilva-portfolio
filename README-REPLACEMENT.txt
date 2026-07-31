# Emma Da Silva Portfolio — Complete Replacement

This package contains a full responsive replacement for the portfolio.

## Replace these folders/files in your repository

Copy these items into:

C:\Users\AD\emma-dasilva-portfolio

- src
- public
- package.json
- package-lock.json
- next.config.ts
- tsconfig.json
- postcss.config.mjs
- eslint.config.mjs

Do not copy any node_modules or .next folders.

## After copying

Run:

npm.cmd install
npm.cmd run lint
npm.cmd run build
npm.cmd run dev

Open http://localhost:3000

## Important

French copy is stored directly as UTF-8 in:
src/content/site.ts

Do not rewrite that file through PowerShell.

The contact route requires these environment variables:

RESEND_API_KEY
CONTACT_TO_EMAIL
CONTACT_FROM_EMAIL
