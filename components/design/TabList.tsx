'use client';

import { useOptimistic, useTransition } from 'react';

import { Tabs, TabsList as BaseTabsList, TabsTrigger, tabsListVariants } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

type Tab = {
  label: string;
  value: string;
};

type TabListProps = {
  tabs: Tab[];
  activeTab: string;
  changeAction: (_value: string) => void | Promise<void>;
  className?: string;
  children?: React.ReactNode;
};

/**
 * A design component that wraps shadcn Tabs with built-in
 * transition and optimistic update handling.
 *
 * The `changeAction` prop signals that the function will run
 * inside a transition, enabling optimistic updates.
 */
export function TabList({ tabs, activeTab, changeAction, className, children }: TabListProps) {
  const [optimisticTab, setOptimisticTab] = useOptimistic(activeTab);
  const [isPending, startTransition] = useTransition();

  function handleTabChange(value: string) {
    startTransition(async () => {
      setOptimisticTab(value);
      await changeAction(value);
    });
  }

  return (
    <div className={cn(isPending && 'opacity-70 transition-opacity', className)}>
      <Tabs value={optimisticTab}>
        <BaseTabsList>
          {tabs.map(tab => {
            return (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => {
                  handleTabChange(tab.value);
                }}
              >
                {tab.label}
              </TabsTrigger>
            );
          })}
        </BaseTabsList>
        {children}
      </Tabs>
    </div>
  );
}

export { Tabs, TabsTrigger, tabsListVariants };
export { TabsList as BaseTabsList } from '@/components/ui/tabs';
