<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes: APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Rules

## Project

This repository is a Next.js + TypeScript + Tailwind CSS portfolio site for the "1 app per day, 100 days" challenge.

## Before implementation

- Check the design documents in `documents/`.
- Do not introduce a database, CMS, or admin screen unless explicitly requested.
- Keep app records in `src/data/apps.ts` as the single source of truth.
- Add reusable read/query logic in `src/lib/apps.ts` instead of duplicating filtering or sorting in pages.

## Next.js

- The installed Next.js version is `16.2.6`.
- Use the App Router.
- Use the Metadata API for SEO and OGP. Do not manually write `<head>` tags.
- Prefer Server Components. Add Client Components only when interaction requires them.
- For dynamic app detail routes, use static data, `generateStaticParams`, `generateMetadata`, and `notFound()` where appropriate.

## UI

- Keep the UI simple, readable, and responsive.
- Preserve a personal indie-development tone while keeping the site portfolio-ready.
- App cards should show Day number, title, description, tech tags, and status.
- The progress bar should be calculated from app data, not hard-coded.
