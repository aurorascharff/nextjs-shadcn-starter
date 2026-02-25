import Link from 'next/link';

export default function Demo1Page() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-foreground text-3xl font-semibold tracking-tight">Demo Page</h1>
      <p className="text-muted-foreground max-w-md text-center text-lg">
        This is a regular page at /slides/demo1. It lives inside the slides layout but has its own UI — no deck chrome.
      </p>
      <Link
        href="/slides/5"
        className="bg-foreground text-background mt-2 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-opacity hover:opacity-80"
      >
        ← Back to slides
      </Link>
    </div>
  );
}
