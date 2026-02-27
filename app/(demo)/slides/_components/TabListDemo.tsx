'use client';

import { useState } from 'react';
import { TabList } from '@/components/design/TabList';

const tabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Settings', value: 'settings' },
];

export function TabListDemo() {
  const [activeTab, setActiveTab] = useState('overview');

  async function simulateAction(value: string) {
    await new Promise(resolve => {
      return setTimeout(resolve, 500);
    });
    setActiveTab(value);
  }

  return <TabList tabs={tabs} activeTab={activeTab} changeAction={simulateAction} />;
}
