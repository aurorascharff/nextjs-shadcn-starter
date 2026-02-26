import { SlideLink } from 'nextjs-slides';
import { TabListDemo } from '@/app/slides/_components/TabListDemo';

export default function Demo1Page() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center gap-6 p-8">
      <div className="border-foreground/10 pointer-events-none absolute inset-4 border sm:inset-6" aria-hidden />
      <h1 className="text-foreground text-3xl font-extrabold tracking-tight">Breakout Page</h1>
      <p className="text-muted-foreground max-w-md text-center text-lg">
        This is a breakout route at /slides/demo1. It renders without deck chrome — useful for live demos.
      </p>
      <div className="border-foreground/10 bg-foreground/[0.02] w-full max-w-sm border p-6">
        <p className="text-muted-foreground mb-4 text-center text-sm font-medium tracking-wider uppercase">
          Action Props Demo
        </p>
        <TabListDemo />
      </div>
      <SlideLink href="/slides/5">← Back to slides</SlideLink>
    </div>
  );
}
