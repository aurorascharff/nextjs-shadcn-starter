'use client';

import { useState } from 'react';

export function ExpandDemo() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => {
          setExpanded(prev => {
            return !prev;
          });
        }}
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
      >
        {expanded ? 'Show less' : 'Show more'}
      </button>
      <p className="text-muted-foreground text-sm">Content changes height — but the card never shrinks.</p>
      {expanded && (
        <ul className="text-foreground/70 flex flex-col gap-2 text-sm">
          <li>✓ ResizeObserver tracks max height</li>
          <li>✓ min-height ratchets up, never down</li>
          <li>✓ No layout shift for surrounding content</li>
        </ul>
      )}
    </div>
  );
}
