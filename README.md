# Siddharth Behera - Portfolio

Professional, SEO-friendly portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. The project is static-export ready (`next export`), responsive across devices, and optimized for discoverability with structured data, XML sitemap, and semantic markup.

## Stack

- **Framework:** Next.js App Router + React 19
- **Language:** TypeScript with strict settings
- **Styling:** Tailwind CSS 3.4 + custom tokens
- **Tooling:** ESLint (Next core-web-vitals rules), PostCSS, Inter font via `next/font`

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the site locally.

## Quality Checks

```bash
npm run lint
npm run build
npm run export
```

`npm run export` generates a static build inside the `out` directory that can be deployed to any static host (Vercel static export, Netlify, Cloudflare Pages, etc.).

## Project Highlights

- Sticky navigation with scroll-friendly anchor links for each section.
- Hero, expertise, projects, experience, architecture, and contact sections powered by typed data structures in `lib/data.ts`.
- Copy comes directly from `public/Siddharth Behera 1025.pdf`, keeping the site in sync with the résumé.
- Structured data (`Person` JSON-LD), Open Graph, and Twitter metadata for SEO.
- Accessible color contrast, semantic headings, and mobile-first layout.
- Static assets for favicon, Open Graph preview, robots instructions, and XML sitemap included in `public/`.

## Customization

- Update site copy, stats, and project details inside `lib/data.ts`.
- Adjust Tailwind tokens or add new utilities via `tailwind.config.ts` and `app/globals.css`.
- Replace placeholder links (e.g., case studies) with real destinations and tweak metadata in `app/layout.tsx`.
