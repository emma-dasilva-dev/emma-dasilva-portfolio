<<<<<<< HEAD
# Emma Da Silva — Portfolio

> **From concept to code, I build thoughtful digital experiences.**

A bilingual personal portfolio presenting my selected work, product-thinking principles, development process, and the experiences that shape how I build.

The portfolio combines a restrained monochrome editorial design with a custom Three.js titanium thread that moves through the website as its signature visual element.

---

## Live Website

**Portfolio:** Add the final Vercel URL here after deployment.

---

## Overview

This portfolio was designed and developed as more than a collection of project links.

Its purpose is to communicate:

- who I am as a developer;
- what I have built;
- how I approach product and interface decisions;
- the standards that guide my work;
- how my experience has shaped the way I build.

The website is available in English and French and includes responsive layouts for laptop, tablet, and mobile devices.

---

## Core Statement

> **Good enough is never the final version.**

I do not consider a product complete simply because it works. I refine its structure, responsiveness, interactions, spacing, and visual details until the experience feels deliberate.

---

## Features

- Responsive design for desktop, tablet, and mobile
- English and French language support
- Persistent light and dark themes
- Custom Three.js titanium thread animation
- Scroll-based visual progression
- Accessible mobile navigation
- Project cards linked to live applications
- Black-and-white editorial portrait treatment
- Subtle viewport reveal animations
- Keyboard-accessible navigation and controls
- Reduced-motion support
- Semantic and reusable component architecture

---

## Selected Work

### STAY

A full-stack hospitality and reservation platform for discovering and managing premium stays.

**Responsibilities**

- Product and interface design
- Front-end development
- Back-end API development
- Database design
- Authentication and authorization
- Reservation-management workflows
- Deployment

**Technologies**

`React` `Node.js` `Express` `MySQL` `JWT`

**Live project:** [staybj.vercel.app](https://staybj.vercel.app)

---

### ByteRush

An interactive game designed to introduce beginners to HTML, CSS, and JavaScript through coding challenges and playful learning experiences.

**Responsibilities**

- Game concept
- Interface design
- Front-end development
- Learning-flow design
- Responsive implementation

**Technologies**

`HTML` `CSS` `JavaScript`

**Live project:** [azatoys.com](https://azatoys.com)

---

### Bandit Redline Journal

A visual learning journal documenting my progress through OverTheWire Bandit, including terminal commands, solutions, security concepts, and problem-solving notes.

**Responsibilities**

- Learning-system design
- Interface development
- Technical documentation
- Cybersecurity research and practice

**Technologies**

`Linux` `Bash` `HTML` `CSS` `Cybersecurity`

**Live project:** [Bandit Redline Journal](https://emma-dasilva-dev.github.io/bandit-redline-journal/)

---

## How I Think

The portfolio presents three principles that guide my work.

### Detail is part of the product

Interactions, spacing, responsiveness, and visual decisions determine whether a product merely works or feels complete.

### Design must serve a purpose

Every element should improve clarity, usability, or identity. Visual complexity without purpose is simply clutter with better marketing.

### I build beyond the first version

My process includes testing, restructuring, and improving until the experience works across devices and real usage conditions.

---

## Technology Stack

### Core

- Next.js
- React
- TypeScript

### Visual Experience

- Three.js
- CSS Modules
- Tailwind CSS
- Responsive CSS
- Intersection Observer API

### Architecture

- Next.js App Router
- Reusable React components
- Typed content models
- Context-based localization
- Persistent browser theme preferences

### Deployment

- GitHub
- Vercel

---

## Project Structure

```text
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── home/
│   │   ├── Hero/
│   │   ├── SelectedWork/
│   │   ├── HowIThink/
│   │   ├── Stories/
│   │   └── Contact/
│   │
│   ├── layout/
│   │   ├── Header/
│   │   ├── MobileMenu/
│   │   └── Footer/
│   │
│   ├── projects/
│   │   └── ProjectCard/
│   │
│   ├── providers/
│   │   └── LocaleProvider/
│   │
│   ├── three/
│   │   └── ThreadExperience/
│   │
│   └── ui/
│       ├── LanguageSwitcher/
│       ├── ThemeToggle/
│       ├── SectionLabel/
│       └── Reveal/
│
├── content/
│   ├── home.ts
│   └── projects.ts
│
├── hooks/
│   └── useActiveSection.ts
│
├── styles/
│   └── tokens.css
│
└── types/
    └── portfolio.ts
```

Project assets are stored in:

```text
public/
└── images/
    ├── portrait/
    │   └── emma-portrait.jpg
    │
    └── projects/
        ├── stay/
        ├── byterush/
        └── bandit/
```

---

## Installation

### 1. Clone the repository
=======
# Emma Da Silva Portfolio

Personal portfolio of Emma Da Silva, a full-stack developer and software engineer building responsive, reliable, and thoughtfully designed web applications.

## Overview

The portfolio presents selected projects, my development process, and ways to contact me.

It uses a focused black, white, and lime visual identity with support for English and French.

## Features

- Responsive desktop, tablet, and mobile layouts
- English and French language support
- Persistent light and dark themes
- Theme-aware browser interface
- Interactive project cards
- Accessible mobile navigation
- Keyboard navigation and visible focus states
- Reduced-motion support

## Selected Projects

### STAY

Full-stack hospitality platform for booking and internal reservation management.

**Technologies:** React, Node.js, Express, MySQL

[View STAY](https://staybj.vercel.app)

### ByteRush

Interactive coding game introducing beginners to HTML, CSS, and JavaScript through challenges.

**Technologies:** HTML, CSS, JavaScript

[View ByteRush](https://azatoys.com)

### Bandit Redline Journal

Cybersecurity learning project documenting Linux commands, security concepts, and OverTheWire Bandit solutions.

**Technologies:** Linux, Bash, HTML, CSS

[View Bandit Redline Journal](https://emma-dasilva-dev.github.io/bandit-redline-journal/)

## Technology Stack

- Next.js
- React
- TypeScript
- CSS Modules
- Tailwind CSS
- Vercel

## Installation

Clone the repository:
>>>>>>> aaf6aef (rebuild portfolio with focused lime design)

```bash
git clone https://github.com/emma-dasilva-dev/emma-dasilva-portfolio.git
```

<<<<<<< HEAD
### 2. Enter the project directory
=======
Enter the project directory:
>>>>>>> aaf6aef (rebuild portfolio with focused lime design)

```bash
cd emma-dasilva-portfolio
```

<<<<<<< HEAD
### 3. Install dependencies
=======
Install the dependencies:
>>>>>>> aaf6aef (rebuild portfolio with focused lime design)

```bash
npm install
```

<<<<<<< HEAD
On Windows PowerShell systems that block `npm.ps1`, use:

```powershell
npm.cmd install
```

### 4. Start the development server
=======
Start the development server:
>>>>>>> aaf6aef (rebuild portfolio with focused lime design)

```bash
npm run dev
```

<<<<<<< HEAD
Or on restricted PowerShell systems:

```powershell
npm.cmd run dev
```

Open:
=======
On Windows PowerShell, use `npm.cmd` when standard npm commands are blocked:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the portfolio locally at:
>>>>>>> aaf6aef (rebuild portfolio with focused lime design)

```text
http://localhost:3000
```

<<<<<<< HEAD
---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the local Next.js development server.

### Production build

```bash
npm run build
```

Creates and validates the optimized production build.

### Production server

```bash
npm run start
```

Runs the compiled production application.

### Linting

```bash
npm run lint
```

Checks the project for linting and code-quality issues.

---

## Deployment

The project is configured for deployment on Vercel.

### Vercel settings

```text
Framework Preset: Next.js
Root Directory: ./
Build Command: Default
Output Directory: Default
Environment Variables: None currently required
```

A Dockerfile is not required.

Every push to the connected `main` branch can trigger a new Vercel deployment automatically.

Before deployment, verify the production build locally:

```bash
npm run build
```

---

## Design System

The visual system uses a restrained monochrome palette.

### Light theme

- Warm off-white background
- Near-black typography
- Cool-grey borders
- Smoked titanium thread

### Dark theme

- Near-black background
- Cool-white typography
- Dark titanium surfaces
- Polished silver thread

The interface deliberately avoids neon colours, excessive gradients, and unnecessary decorative effects.

---

## Responsive Design

The website is designed for:

- Desktop and laptop screens
- Tablets in portrait and landscape orientation
- Mobile devices
- Touch and pointer-based interaction
- Reduced-motion preferences

The Three.js thread uses device-specific positioning and scaling so it remains visible without obstructing content on smaller screens.

---

## Accessibility

The project includes:

- Semantic HTML sections
- Keyboard-accessible links and buttons
- Visible focus states
- Accessible navigation labels
- Alternative text for images
- Reduced-motion handling
- Responsive touch targets
- Theme-aware contrast

Accessibility remains an ongoing part of the refinement process rather than a box added five minutes before deployment.

---

## Current Limitations

- Project cover images may still require final optimization
- French content may continue to be refined
- The Three.js experience may be adjusted further for lower-powered devices
- Automated tests have not yet been added
- The portfolio currently presents live projects rather than detailed case-study pages

---

## Future Improvements

- Add detailed case studies for selected projects
- Add automated component and accessibility testing
- Improve image loading and asset optimization
- Add project-specific process documentation
- Add analytics with privacy-conscious configuration
- Continue performance testing across real mobile devices

---
=======
## Available Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

- `npm run dev` starts the development server.
- `npm run lint` checks the code for linting issues.
- `npm run build` creates the production build.
- `npm run start` runs the production build locally.

## Deployment

The portfolio is deployed through Vercel.

New pushes to the `main` branch trigger a new production deployment automatically.
>>>>>>> aaf6aef (rebuild portfolio with focused lime design)

## Author

**Emma Da Silva**

<<<<<<< HEAD
Front-end developer and emerging software engineer focused on building refined, responsive, and purposeful digital products.
=======
Full-stack developer and software engineer focused on building complete, high-performance digital products.
>>>>>>> aaf6aef (rebuild portfolio with focused lime design)

- [GitHub](https://github.com/emma-dasilva-dev)
- [LinkedIn](https://www.linkedin.com/in/emmadasilvadev/)
- [Email](mailto:emma.dasilva.dev@gmail.com)

<<<<<<< HEAD
---

© 2026 Emma Da Silva. All rights reserved.
=======
© 2026 Emma Da Silva
>>>>>>> aaf6aef (rebuild portfolio with focused lime design)
