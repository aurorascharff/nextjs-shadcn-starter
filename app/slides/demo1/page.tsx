import { SlideLink } from '../_components/SlideLink';

export default function Demo1Page() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-foreground text-3xl font-semibold tracking-tight">Demo Page</h1>
      <p className="text-muted-foreground max-w-md text-center text-lg">
        This is a regular page at /slides/demo1. It lives inside the slides layout but has its own UI — no deck chrome.
      </p>
      <SlideLink href="/slides/5" back>
        ← Back to slides
      </SlideLink>
    </div>
  );
}
