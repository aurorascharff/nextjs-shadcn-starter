import 'server-only';

import { cache } from 'react';
// import { prisma } from '@/db';

// Example service function - replace with your own
// Services are for server-side data fetching (queries)

export const getExamples = cache(async () => {
  // return await prisma.example.findMany({
  //   orderBy: { createdAt: 'desc' },
  // });
  return [];
});

export const getExampleById = cache(async () => {
  // return await prisma.example.findUnique({
  //   where: { id },
  // });
  return null;
});
