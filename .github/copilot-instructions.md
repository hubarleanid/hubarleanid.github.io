# Copilot instructions

The full, canonical guide is [`AGENTS.md`](../AGENTS.md) at the repo root. Read it before non-trivial changes. The essentials:

- **Stack:** Next.js 14 App Router with `output: 'export'` (static site on GitHub Pages), React 18, TypeScript strict, Ant Design 5, SCSS modules. Path alias `@/*` → `src/*`.
- **Content is data:** all site text lives in `src/data/*.ts` (`profile`, `experience`, `projects`, `posts`). Content edits go there, not in JSX.
- **Theming:** colors come from `src/lib/theme.ts` and are exposed as CSS vars (`--bg`, `--bg2`, `--border`, `--fg`, `--dim`, `--accent`, `--accent-soft`, `--accent-line`, `--dots`). In SCSS always use `var(--…)`, never hex values. New tokens go in both `darkTokens` and `lightTokens`.
- **Static export, so never add:** API routes, Server Actions, middleware, rewrites/redirects, ISR, or dynamic routes without `generateStaticParams` + `dynamicParams = false`.
- **Use antd `Card` from `"antd"`.** `src/components/Card`, `src/components/Section`, and `src/styles/_variables.scss` are unused legacy code that ignores the theme.
- Only `ThemeProvider` and `Nav` are client components. Add `"use client"` only when hooks or browser APIs are needed.
- Override antd internals via `.moduleClass :global(.ant-…)`. Use the global `.aTag` class for tags and `.mono` for monospace.
- New page: `src/app/<route>/page.tsx` + `page.module.scss`, `metadata` title `"<Page> — Leanid Hubar"`, and a tab entry in `src/components/Nav/Nav.tsx`.
- Done means `npm run lint` and `npm run build` pass. There are no tests.
- Don't invent facts in the profile/experience data. It's a real person's CV.
