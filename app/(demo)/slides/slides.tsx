import {
  Slide,
  SlideBadge,
  SlideCode,
  SlideHeaderBadge,
  SlideLink,
  SlideList,
  SlideListItem,
  SlideSpeaker,
  SlideSpeakerGrid,
  SlideSplitLayout,
  SlideStatement,
  SlideStatementList,
  SlideSubtitle,
  SlideTitle,
} from 'nextjs-slides';

export const slides: React.ReactNode[] = [
  <Slide key="title" align="left">
    <SlideHeaderBadge>Next.js Demo Kit</SlideHeaderBadge>
    <SlideTitle className="font-pixel">Welcome everyone. Build Demos Fast.</SlideTitle>
    <SlideSubtitle>
      A toolkit for interactive demos with React 19, Next.js 16, and modern patterns.
    </SlideSubtitle>
    <SlideSpeakerGrid className="mt-8">
      <SlideSpeaker name="Your Name" title="Your Title" />
    </SlideSpeakerGrid>
  </Slide>,

  <SlideSplitLayout
    key="stack"
    left={
      <>
        <SlideBadge>Stack</SlideBadge>
        <SlideTitle className="mt-6 text-3xl sm:text-4xl md:text-5xl">What&apos;s included</SlideTitle>
        <SlideSubtitle className="mt-4">
          Next.js 16, React 19, Tailwind v4, shadcn/ui, Prisma. Walk through the structure. app/, components/design/
          for Action props, components/ui/ for shadcn, data/queries/ with cache(), data/actions/ with updateTag or
          revalidateTag.
        </SlideSubtitle>
      </>
    }
    right={
      <SlideStatementList>
        <SlideStatement title="app/" description="Pages, layouts, route-local _components" />
        <SlideStatement title="components/design/" description="Action props (TabList, Select, EditableText)" />
        <SlideStatement title="components/ui/" description="shadcn primitives on Base UI" />
        <SlideStatement title="data/queries/" description="React.cache() for server-side fetching" />
        <SlideStatement title="data/actions/" description="Server Actions with updateTag / revalidateTag" />
      </SlideStatementList>
    }
  />,

  <SlideSplitLayout
    key="action-props"
    left={
      <>
        <SlideBadge>Action Props</SlideBadge>
        <SlideTitle className="mt-6 text-3xl sm:text-4xl md:text-5xl">Async coordination</SlideTitle>
        <SlideSubtitle className="mt-4">
          Components own useOptimistic and useTransition. Consumers pass changeAction with their async handler.
        </SlideSubtitle>
        <SlideList className="mt-6">
          <SlideListItem>activeTab, changeAction</SlideListItem>
          <SlideListItem>tabs config</SlideListItem>
          <SlideListItem>click tab, instant feedback, pending spinner</SlideListItem>
        </SlideList>
      </>
    }
    right={
      <SlideCode title="usage.tsx">{`const [activeTab, setActiveTab] = useState('overview');

<TabList
  tabs={[
    { label: 'Overview', value: 'overview' },
    { label: 'Analytics', value: 'analytics' },
    { label: 'Settings', value: 'settings' },
  ]}
  activeTab={activeTab}
  changeAction={async (value) => {
    await updateTab(value);
    setActiveTab(value);
  }}
/>`}</SlideCode>
    }
  />,

  <Slide key="data" align="left">
    <SlideBadge>Data</SlideBadge>
    <SlideTitle className="text-3xl sm:text-4xl md:text-5xl">Queries and mutations</SlideTitle>
    <SlideSubtitle>
      Queries use cache() for deduplication. Mutations use Server Actions with updateTag for read-your-own-writes. The
      code shows getPosts and createPostAction.
    </SlideSubtitle>
    <SlideCode title="data/queries/posts.ts + data/actions/posts.ts">{`// Query: cache() for deduplication
import { cache } from 'react';
export const getPosts = cache(async () => {
  return db.post.findMany();
});

// Action: updateTag after mutate (read-your-own-writes)
'use server';
import { updateTag } from 'next/cache';
export async function createPostAction(formData: FormData) {
  const post = await db.post.create({ data: { ... } });
  updateTag('posts');
  updateTag(\`post-\${post.id}\`);
}`}</SlideCode>
  </Slide>,

  <Slide key="cache" align="left">
    <SlideBadge>Performance</SlideBadge>
    <SlideTitle className="text-3xl sm:text-4xl md:text-5xl">cacheComponents</SlideTitle>
    <SlideSubtitle>
      Stable in Next.js 16. Add it to next.config with reactCompiler and typedRoutes. Static shell means server
      components without dynamic data get cached. Push dynamic data into Suspense boundaries. cacheComponents and
      &apos;use cache&apos; are the same; cache() is separate.
    </SlideSubtitle>
    <SlideCode title="next.config.ts">{`const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  typedRoutes: true,
};`}</SlideCode>
  </Slide>,

  <Slide key="slides">
    <SlideBadge>This deck</SlideBadge>
    <SlideTitle className="text-3xl sm:text-4xl md:text-5xl">nextjs-slides</SlideTitle>
    <SlideSubtitle>
      Composable primitives, ViewTransitions, keyboard nav. Define slides in an array. Each slide is a Slide with
      SlideTitle, SlideCode, etc. Open /notes on your phone to sync presenter notes.
    </SlideSubtitle>
    <SlideCode title="app/(demo)/slides/slides.tsx">{`export const slides = [
  <Slide key="intro">
    <SlideTitle>Hello</SlideTitle>
    <SlideCode title="x.ts">{\`const x = 1;\`}</SlideCode>
  </Slide>,
];`}</SlideCode>
  </Slide>,

  <Slide key="end">
    <SlideTitle className="font-pixel">Start building.</SlideTitle>
    <SlideSubtitle>
      Clone the repo, bun install, bun run dev. Point them to Explore demo and the GitHub link.
    </SlideSubtitle>
    <SlideCode title="setup.ts">{`// git clone https://github.com/aurorascharff/nextjs-demo-kit
// bun install && bun run dev`}</SlideCode>
    <div className="mt-6 flex items-center gap-4">
      <SlideLink href="/">Explore demo</SlideLink>
      <SlideLink href="https://github.com/aurorascharff/nextjs-demo-kit" variant="ghost">
        GitHub
      </SlideLink>
    </div>
  </Slide>,
];
