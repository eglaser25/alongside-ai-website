# Repository Guidelines

## Project Structure & Module Organization
Source lives under `src`. App Router entries sit in `src/app` (for example `src/app/services`), reusable UI belongs in `src/components`, and shared helpers go in `src/lib`. Static assets stay in `public`, while Tailwind base styles live in `src/app/globals.css`. Use the `@/*` alias (see `tsconfig.json`) instead of deep relative imports.

## Build, Test, and Development Commands
- `npm run dev` launches the Next.js dev server with hot reload.
- `npm run dev:turbo` enables Turbopack when you need faster refresh loops.
- `npm run build` produces the production bundle; Vercel uses the same command.
- `npm run build:static` compiles and exports static assets for non-Node hosting.
- `npm run start` serves the last production build locally.
- `npm run lint` runs the Next.js ESLint suite; fix reported issues before committing.

## Coding Style & Naming Conventions
Stick to TypeScript. Use `.tsx` for components, `.ts` for utilities, and two-space indents. Keep components functional and server-first where practical. Name components with PascalCase (`HeroSection`), hooks with `use` prefixes, and helpers with camelCase. Default to Tailwind utility classes; co-locate extra styles sparingly. `npm run lint` enforces the `next/core-web-vitals` ruleset—leave overrides in pull requests, not per-file ignores.

## Testing Guidelines
No automated runner ships today. When adding coverage, prefer Jest with Testing Library and place specs alongside modules (`Component.test.tsx`) or under `src/__tests__`. Keep scenarios deterministic and focused on rendering logic or key flows. Run `npm run lint` and verify manually in `npm run dev` until a test command is formalized.

## Commit & Pull Request Guidelines
Write imperative, concise commit subjects (`Add hero animation`) with optional wrapped body text for context. Reference issues with `Fixes #123` when applicable. Pull requests should include a short summary, screenshots or recordings for UI changes, reproduction steps for fixes, and flagged risk areas or review requests. Ensure lint passes and split large diffs into reviewable pieces.

## Preview & Deployment
Deployments run through Vercel (`vercel.json` mirrors production). Validate production builds locally with `npm run build` followed by `npm run start` when touching routing, server logic, or headers. Security headers ship from `vercel.json`; highlight any changes to them in your PR notes.
