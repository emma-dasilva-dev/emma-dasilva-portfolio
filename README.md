# Emma Da Silva Portfolio — Terminal Redesign

A bilingual developer portfolio built with Next.js 16, React 19, TypeScript, CSS Modules, and the App Router.

## Design direction

- English by default with French switch
- Dark/light theme
- `#C6FF33` controlled accent
- Space Grotesk + IBM Plex Mono
- Editorial layout with restrained terminal language
- Optional interactive terminal commands
- Normal menu navigation always available
- Two text-led project case studies
- Mobile-first responsive behavior
- No project screenshots

## Routes

- `/` → redirects to `/en`
- `/en`
- `/fr`
- `/en/work/stay`
- `/fr/work/stay`
- `/en/work/bandit-learning-journal`
- `/fr/work/bandit-learning-journal`

## Portrait

Add the real portrait at:

`public/images/portrait/emma-portrait.jpg`

If it is missing, the About section renders a clean `ED` fallback instead of breaking.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Then open `http://localhost:3000`.

## Validate

```powershell
npm.cmd run lint
npm.cmd run build
```

## Notes

This package intentionally introduces no new runtime dependency. It uses the dependencies already present in the existing portfolio repository.
