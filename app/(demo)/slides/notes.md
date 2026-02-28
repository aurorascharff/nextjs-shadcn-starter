Welcome everyone. Build Demos Fast. A toolkit for interactive demos with React 19, Next.js 16, and modern patterns.

---

What's included: Next.js 16, React 19, Tailwind v4, shadcn/ui, Prisma. Walk through the structure. app/, components/design/ for Action props, components/ui/ for shadcn, data/queries/ with cache(), data/actions/ with updateTag or revalidateTag.

---

Action Props. Async coordination. Components own useOptimistic and useTransition. Consumers pass changeAction with their async handler.
Demo: activeTab, changeAction, tabs config, click tab, instant feedback, pending spinner

---

Data slide. Queries use cache() for deduplication. Mutations use Server Actions with updateTag for read-your-own-writes. The code shows getPosts and createPostAction.

---

cacheComponents. Stable in Next.js 16. Add it to next.config with reactCompiler and typedRoutes. Static shell means server components without dynamic data get cached. Push dynamic data into Suspense boundaries. cacheComponents and 'use cache' are the same; cache() is separate.

---

This deck uses nextjs-slides. Composable primitives, ViewTransitions, keyboard nav. Define slides in an array. Each slide is a Slide with SlideTitle, SlideCode, etc. Open /notes on your phone to sync presenter notes.

---

Start building. Clone the repo, bun install, bun run dev. Point them to Explore demo and the GitHub link.

---

**Demo 1**
- Open /
- Component showcase: Card, Form
- TabList at /slides/demo1
- Design components in components/design/ (TabList, Select, EditableText)

---

**Demo 2**
- Open app/(demo)/slides/slides.tsx
- Import primitives, add Slide with key to array
- Compose with SlideTitle, SlideCode
- Save and refresh

---

**Demo 3**
- components/design/TabList.tsx
- Add console.log in handleChange
- Optimistic update, pending state
- Action Props keeps UI responsive during async call
