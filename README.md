# hubarleanid.github.io

Personal site: about, experience, projects/investigations, and a blog. Built with Next.js (static export) and SCSS, deployed to GitHub Pages via GitHub Actions.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `out/`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repo settings, set **Settings → Pages → Source** to **GitHub Actions** (one-time setup).

## Editing content

All content lives in `src/data/`, no JSX editing required for routine updates:

- `profile.ts` — name, bio, contact links, skills
- `experience.ts` — work history
- `projects.ts` — projects/investigations shown on `/projects`
- `posts.ts` — blog post list shown on `/blog`

To add full blog post pages, create `src/app/blog/[slug]/page.tsx` and render content per `slug` (see the recipe in `AGENTS.md`).

## Working with AI coding agents

Architecture, conventions, constraints, and common-task recipes for AI assistants are in [`AGENTS.md`](AGENTS.md), the single source of truth. Tool-specific entry points only reference it:

| Tool | File it reads |
| --- | --- |
| OpenAI Codex, Cursor, Windsurf, Zed, Jules, GitHub Copilot coding agent, and other AGENTS.md-aware tools | `AGENTS.md` |
| Aider | `AGENTS.md` via `read: AGENTS.md` in `.aider.conf.yml` (or `aider --read AGENTS.md`) |
| Claude Code | `CLAUDE.md` (imports `AGENTS.md`) |
| Gemini CLI | `GEMINI.md` (imports `AGENTS.md`) |
| GitHub Copilot Chat / code review | `.github/copilot-instructions.md` (condensed rules + link) |

When the project changes (new route, token, constraint, or convention), update `AGENTS.md`, and also `.github/copilot-instructions.md` if one of its rules changed.
