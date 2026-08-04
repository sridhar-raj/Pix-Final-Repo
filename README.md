# Pix — Portfolio Site

A Next.js (App Router) rebuild of the [Pix Framer template](https://pix.framer.website/), matching the original layout, typography, colors, spacing, and interactions.

## Pages

- `/` — Home
- `/about` — About
- `/contact` — Contact

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll-reveal animations)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Assets

Images and fonts live in `public/images` and `public/fonts`, sourced from the original Framer project. `src/lib/asset-manifest.json` maps Framer asset IDs to local file paths; regenerate it with:

```bash
node scripts/build-asset-manifest.mjs
```
