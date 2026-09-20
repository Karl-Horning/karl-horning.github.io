# KarlHorning.dev

Personal portfolio and blog — a statically exported Next.js site with Playwright + axe-core accessibility testing built in.

**Live site:** [KarlHorning.dev](https://www.karlhorning.dev)

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **CSS Modules**
- **React Icons**
- Deployed to **GitHub Pages** via GitHub Actions with a custom domain

## Notable decisions

**Routes** — `lib/routes.ts` drives the sitemap and Playwright smoke tests. Add a route here when a new page is created.

**Projects** — `lib/projects.ts` exports `PROJECTS`. Each project has a `meta.ts` alongside its `page.tsx`; `ProjectLayout` handles the sidebar, links, and prev/next navigation automatically.

**Blog pipeline** — Posts live under `app/blog/<slug>/` with a `meta.ts` and `page.tsx`. `generate:posts` regenerates `lib/posts.ts` from those files; `build:posts` produces `public/data/posts.json`; `build:rss` produces `public/rss.xml`. All three run via `prebuild` before every build.

**Syntax highlighting** — [`shiki`](https://shiki.style) server-side with dual light/dark themes via `prefers-color-scheme`.

**SEO** — Typed metadata, Open Graph, Twitter cards, canonical URLs, Google Search Console.

**Accessibility** — Playwright + `@axe-core/playwright` across desktop and mobile viewports, plus manual screen reader and keyboard testing.

**CSS** — CSS Modules for component styles; `globals.css` for design tokens and shared utilities.

**CI/CD** — GitHub Actions deploys to GitHub Pages on merge to main.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
| --- | --- |
| `dev` | Start the development server |
| `build` | Production build (static export); runs `prebuild` automatically |
| `start` | Start the Next.js server (run `build` first) |
| `lint` | Run ESLint |
| `test` | Run Playwright tests |
| `test:ui` | Run Playwright tests with the interactive UI |
| `check-links` | Check for broken links on the live site |
| `check-links:local` | Check for broken links on the local server |
| `generate:posts` | Regenerate `lib/posts.ts` from each post's `meta.ts` |
| `build:posts` | Generate `public/data/posts.json` from `lib/posts.ts` |
| `build:rss` | Generate `public/rss.xml` from `public/data/posts.json` |
| `prebuild` | Runs `generate:posts`, `build:posts`, and `build:rss` in sequence |

## License

Released under the [MIT License](./LICENSE) by [Karl Horning](https://github.com/Karl-Horning).
