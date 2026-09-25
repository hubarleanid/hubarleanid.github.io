# AGENTS.md

Canonical instructions for AI coding agents (Claude Code, OpenAI Codex, GitHub Copilot, Cursor, Gemini CLI, Windsurf, Aider, etc.) working in this repository. Tool-specific files (`CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`) only point here — **edit this file, not those**.

## What this is

Personal portfolio site for Leanid Hubar (Senior .NET engineer / Tech Lead): about, experience, projects, blog. Served at `https://hubarleanid.github.io/` (a GitHub *user* site, so it lives at the domain root — no `basePath`).

- **Framework:** Next.js 14 App Router, `output: 'export'` → fully static HTML in `out/`
- **UI:** React 18, Ant Design 5 (`antd`, `@ant-design/icons`), SCSS modules
- **Language:** TypeScript, `strict: true`, path alias `@/*` → `src/*`
- **Fonts:** `next/font/google` (IBM Plex Sans, JetBrains Mono, Space Grotesk) exposed as `--font-sans`, `--font-mono`, `--font-display`
- **Hosting:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`), Node 20 in CI
- **No** backend, database, env vars, tests, or CMS

## Commands

```bash
npm ci            # install (use npm; package-lock.json is committed)
npm run dev       # dev server at http://localhost:3000
npm run lint      # ESLint (next/core-web-vitals)
npx tsc --noEmit  # typecheck
npm run build     # static export to out/ (also lints + typechecks)
```

There is no test suite. **Definition of done for any change: `npm run lint` and `npm run build` both succeed.** `build` is the real gate, since it's exactly what CI runs.

To preview the exported site, serve `out/` with any static server (e.g. `npx serve out`); `npm start` does not work with `output: 'export'`.

## Project layout

```
src/
  app/                      # App Router: one folder per route
    layout.tsx              # <html>, fonts, ThemeProvider, Nav, Footer, site <title>
    globals.scss            # resets + global utility classes (.container, .mono, .aTag, .dotgrid, .theme)
    page.tsx                # "/"            about: hero, skills grid, education, languages
    experience/page.tsx     # "/experience"  antd Timeline of jobs
    projects/page.tsx       # "/projects"    card grid
    blog/page.tsx           # "/blog"        post list (no individual post pages yet)
    */page.module.scss      # per-page styles
  components/
    ThemeProvider/          # client: dark/light state, antd ConfigProvider, CSS custom properties
    Nav/                    # client: brand, theme switch, route tabs
    Footer/
    Card/, Section/         # LEGACY — unused, see "Known issues"
  data/                     # ALL site content lives here (typed TS objects)
    profile.ts              # profile + skillGroups
    experience.ts           # ExperienceEntry[]
    projects.ts             # Project[]
    posts.ts                # Post[]
  lib/theme.ts              # design tokens (darkTokens / lightTokens), THEME_STORAGE_KEY
  styles/_variables.scss    # LEGACY — only used by the unused Card/Section
public/.nojekyll            # disables Jekyll so _next/ is served (safeguard; keep it)
```

## Architecture

### Content is data, pages are views
Every piece of text shown on the site comes from `src/data/*.ts`. Pages import the arrays and map them to antd components. For content changes, **edit only `src/data/`** and keep the exported types satisfied. Add a field to a type only when a page will render it.

### Theming (the most important thing to understand)
`src/lib/theme.ts` is the single source of truth for colors. `ThemeProvider` applies each token set twice:
1. to antd through `ConfigProvider` (`colorPrimary`, `colorBgContainer`, etc. plus `darkAlgorithm`/`defaultAlgorithm`)
2. as CSS custom properties on the `.theme` wrapper div: `--bg`, `--bg2`, `--border`, `--fg`, `--dim`, `--accent`, `--accent-soft`, `--accent-line`, `--dots`

Rules:
- In SCSS, **always use `var(--token)`**. Never hardcode hex colors or use `src/styles/_variables.scss`, because hardcoded values don't switch with the theme.
- To add a token: add it to **both** `darkTokens` and `lightTokens`, then map it in `ThemeProvider` (and to an antd token if relevant).
- Default mode is dark. The user's choice persists in `localStorage` under `THEME_STORAGE_KEY` (`"lh-portfolio-theme"`). Read it via `useThemeMode()` (`{ dark, toggle }`) in client components.

### Server vs client components
Pages and `layout.tsx` are Server Components (rendered at build time). Only `ThemeProvider` and `Nav` are `"use client"`. antd components like `Card`, `Button`, `Timeline` render fine from server pages here. Add `"use client"` only for hooks, event handlers, or browser APIs, and keep it on the smallest component possible.

### Styling conventions
- One `*.module.scss` per page/component, imported as `styles`, with camelCase class names.
- Override antd internals with `:global(.ant-…)` scoped under a module class (e.g. `.card :global(.ant-card-body) { … }`), never with bare global selectors.
- Global utilities from `globals.scss`: `.container` (940px max width), `.mono` (monospace font), `.aTag` (the tag/chip used for skills/stack/tags).
- Aesthetic: dark "terminal" look with mono kickers (`$ whoami`, `// comment`, `01·about`), a dot-grid background, and one blue accent. Keep new UI consistent with that.

### Navigation
Tabs are hardcoded in `src/components/Nav/Nav.tsx` (`tabs` array: `href`, `num`, `label`). A new top-level page needs a tab entry there.

## Static-export constraints (hard rules)

`output: 'export'` means the site is plain files on GitHub Pages. **Do not add:**
- API routes (`app/api/*`, `route.ts`), Server Actions, middleware, `headers()`/`cookies()`, ISR/`revalidate`
- `rewrites`/`redirects`/`headers` in `next.config.mjs`
- `next/image` optimization (it's already `images.unoptimized: true`; plain `<img>` or `next/image` with unoptimized is fine)
- Dynamic routes without `generateStaticParams` (see recipe below)
- Runtime secrets. Anything in the bundle is public.

Routes export as `out/<route>.html` (no `trailingSlash`), and GitHub Pages serves `/blog` from `blog.html`. Keep `public/.nojekyll`.

## Common tasks

**Update profile / skills / education / languages:** edit `src/data/profile.ts`. `profile.title` must stay in the form `"<Role> / <Role>"`, because `app/page.tsx` splits it on `/` to render the subtitle.

**Add a job:** prepend an `ExperienceEntry` to `src/data/experience.ts` (newest first). `period` is free text like `"Sep 2025 – Jun 2026"` (en dash).

**Add a project:** append to `src/data/projects.ts`. `link`/`repo` are optional. Omit them rather than using `"#"`. Once the placeholders are replaced with real projects, also remove the `// placeholder entries` note in `app/projects/page.tsx`.

**Add a blog post to the list:** add a `Post` to `src/data/posts.ts` with a unique kebab-case `slug` and an ISO `date` (`YYYY-MM-DD`).

**Add full blog post pages** (not implemented yet). Create `src/app/blog/[slug]/page.tsx`:
```tsx
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

export const dynamicParams = false; // required for static export

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  return { title: post ? `${post.title} — Leanid Hubar` : "Blog — Leanid Hubar" };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  // render post content
}
```
Then wrap each list item in `app/blog/page.tsx` in a `next/link` to `/blog/${post.slug}`. Post bodies can go in a `body` field on `Post` or in MDX (which would need `@next/mdx` added).

**Add a new page:** create `src/app/<route>/page.tsx` + `page.module.scss`, export `metadata = { title: "<Page> — Leanid Hubar" }`, add a tab in `Nav.tsx`, and put its content in a new `src/data/<route>.ts`.

## Conventions

- TypeScript strict. Type data with exported `type`s, not `interface`s (matches existing code). No `any`.
- Double quotes, semicolons, 2-space indent (Prettier defaults; there's no Prettier config, so match the surrounding code).
- Components: default export, one per folder `Name/Name.tsx` + `Name/Name.module.scss`.
- Imports use the `@/` alias for anything under `src/`.
- External links: `target="_blank" rel="noreferrer"`.
- Stable React `key`s come from data (slug/title/label), not array indices.
- Keep dependencies minimal. Don't add a UI library alongside antd, and don't add Tailwind.
- Commits use Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`).

## Deployment

A push to `main` triggers `.github/workflows/deploy.yml`: `npm ci` → `npm run build` → upload `out/` → deploy to Pages. A broken build on `main` means the site doesn't update (the old version stays live). Repo setting **Pages → Source** must be **GitHub Actions**. Manual re-run: `workflow_dispatch`.

## Known issues / tech debt

Don't "fix" these as a side effect of unrelated work. Mention them if relevant, and fix only when asked.

1. **Unused legacy code:** `src/components/Card/`, `src/components/Section/`, `src/styles/_variables.scss`, and the `.aCard` class in `globals.scss` date from before the antd migration. They hardcode dark colors and ignore the theme, and `Card.tsx` uses a `.tag` class that doesn't exist (the real one is `.aTag`). **Use antd `Card` from `"antd"`**, never `@/components/Card/Card`.
2. **Theme flash:** the static HTML always renders dark. Light-mode users see dark until hydration reads `localStorage`. Fixing it requires an inline pre-hydration script in `layout.tsx`.
3. **antd styles aren't in the exported HTML:** there's no `@ant-design/nextjs-registry`, so antd CSS-in-JS is injected client-side, which can cause a brief unstyled flash. Fix: add `@ant-design/nextjs-registry` and wrap children in `AntdRegistry` in `layout.tsx`.
4. The author name `"Leanid Hubar"` is hardcoded in page `metadata` titles and `Footer.tsx` instead of coming from `profile.name`.
5. `projects.ts` and `posts.ts` contain placeholder entries.
6. No SEO extras: no Open Graph tags, `sitemap.xml`, `robots.txt`, or favicon.

## Content & tone guardrails

The content in `src/data/` is a real person's professional profile. Don't invent employers, dates, metrics, or achievements. When asked to "improve" copy, rephrase what's there and ask before adding claims. Keep the contact email and links unchanged unless asked.
