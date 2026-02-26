import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { ComponentExample } from './_components/ComponentExample';
import type { Route } from 'next';

export default function Page() {
  return (
    <>
      <div className="fixed top-4 right-4 z-60">
        <Link href={'/slides/1' as Route} className={buttonVariants({ size: 'default', variant: 'default' })}>
          Start Slides →
        </Link>
      </div>
      <ComponentExample />
    </>
  );
}
