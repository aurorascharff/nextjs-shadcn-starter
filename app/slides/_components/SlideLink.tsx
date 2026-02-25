'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { cn } from '@/lib/utils';

type SlideLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
  exit?: boolean;
};

export function SlideLink({ href, children, className, variant = 'primary', exit = false }: SlideLinkProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();

  function handleExitClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    startTransition(() => {
      router.push(href as never);
    });
  }

  return (
    <Link
      href={href as never}
      onClick={exit ? handleExitClick : undefined}
      className={cn(
        'mt-2 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-opacity hover:opacity-80',
        variant === 'primary' && 'bg-foreground text-background',
        variant === 'ghost' && 'border-border text-muted-foreground border',
        className,
      )}
    >
      {children}
    </Link>
  );
}
