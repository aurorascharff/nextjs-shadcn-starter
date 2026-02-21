# Next.js Starter

A [Next.js 16](https://nextjs.org/) starter with [Prisma](https://www.prisma.io/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/) (built on [Base UI](https://base-ui.com/)), with modern patterns for building demos and applications.

Features opt-in caching with [`"use cache"`](https://nextjs.org/docs/app/api-reference/directives/use-cache) and Partial Pre-Rendering via [`cacheComponents`](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents).

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Prisma Setup

This project uses SQLite with a local database file (`dev.db`). No environment configuration needed.

```bash
bun run prisma.generate   # Generate the Prisma client
bun run prisma.push       # Push schema to database
bun run prisma.seed       # Seed initial data
bun run prisma.studio     # View data in Prisma Studio
```

**Using Prisma Postgres instead:** Change the provider in `prisma/schema.prisma` to `postgresql`, update `db.ts` to use `@prisma/adapter-pg`, and set your connection string in `.env`:

```env
DATABASE_URL="postgres://..."
```

## Project Structure

```plaintext
app/                      # Pages and layouts
  _components/            # Route-local components
  design/                 # Action prop components
  ui/                     # shadcn/ui primitives
data/
  actions/                # Server Actions
  queries/                # Data fetching with cache()
lib/
  fetcher.ts              # Shared SWR fetcher
```

- **components/ui** — [shadcn/ui](https://ui.shadcn.com/) components. Add with `bunx shadcn@latest add <component-name>`
- **components/design** — Components that expose [Action props](https://react.dev/reference/react/useTransition#exposing-action-props-from-components) and handle optimistic state and loading internally via `useOptimistic` + `useTransition`

Every page folder should contain everything it needs. Components and functions live at the nearest shared space in the hierarchy.

**Naming:** PascalCase for components, kebab-case for files/folders, camelCase for functions/hooks.

## Development Flow

This project uses [Cache Components](https://nextjs.org/docs/app/getting-started/cache-components) ([`cacheComponents: true`](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents)) — data fetching is **dynamic by default**, and routes are prerendered into a static HTML shell with dynamic content streaming in via `<Suspense>`. Push dynamic data access (`searchParams`, `cookies()`, `headers()`, uncached fetches) as deep as possible in the component tree to maximize the static shell.

- **Fetching data** — Create queries in `data/queries/`, call in Server Components. Wrap with `cache()` for deduplication. Client components use SWR for dependent or interactive fetches.
- **Mutating data** — Create Server Actions in `data/actions/` with `"use server"`. Invalidate with `updateTag()` or `revalidateTag()`. Use `useTransition` or `useFormStatus` for pending states, `useOptimistic` for instant feedback.
- **Navigation** — Wrap state changes in `useTransition` to keep old content visible while loading.
- **Caching** — Add [`"use cache"`](https://nextjs.org/docs/app/api-reference/directives/use-cache) with [`cacheLife()`](https://nextjs.org/docs/app/api-reference/functions/cacheLife) to pages, components, or functions you want included in the static shell or cached across requests.

## Development Tools

Uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) with format-on-save in VS Code. Configuration in `eslint.config.mjs` and `.prettierrc`. Open the `.code-workspace` file to ensure correct extensions are set.

## Deployment

```bash
bun run build
```

Deploy to [Vercel](https://vercel.com) for the easiest experience. Use a production database instead of SQLite.

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
