# Next.js Demo Kit — Speaker Notes

---

Welcome everyone. This demo kit is built for interactive presentations and live coding sessions. It combines Next.js 16, React 19, and modern patterns.

---

The stack: Next.js 16 with App Router, React 19, Tailwind v4, shadcn/ui on Base UI, and Prisma. Folder structure: app/ for pages, components/design for Action props, components/ui for shadcn, data/queries and data/actions for server-side logic.

---

Action Props is the key pattern. Components own useOptimistic and useTransition — consumers just pass a changeAction. The TabList demo shows instant feedback plus a pending spinner. Try clicking the tabs.

---

Data patterns: Use cache() from React for queries. Server Actions for mutations with revalidatePath or updateTag. The project also supports 'use cache' with cacheTag for Next.js 16.

---

cacheComponents in next.config caches server components that don't access dynamic data. Keep pages non-async and push dynamic data into Suspense boundaries to maximize the static shell.

---

This deck uses nextjs-slides — composable primitives with ViewTransitions and keyboard navigation. Add slides in slides.tsx. Open /notes on your phone to see these notes and sync with the deck.

---

Thanks. Clone from github.com/aurorascharff/nextjs-demo-kit, run bun install && bun run dev, and start building.

---

**Demo 1** — Open the main demo at /. Explore the dashboard, charts, and component showcase. Point out the design components (TabList, Select, EditableText) in action.

---

**Demo 2** — Go to app/slides/slides.tsx. Show how to add a slide: import primitives, add a Slide with key, compose with SlideTitle, SlideCode, etc. Save and refresh to see it live.

---

**Demo 3** — Live-edit a component. Open components/design/TabList.tsx. Add a console.log in handleChange. Show how the Action Props pattern keeps the UI responsive during the async call.
