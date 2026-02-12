import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  description: 'A Next.js 16 starter with React 19, Prisma, Tailwind CSS, and shadcn/ui',
  title: 'Next.js Starter',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable} suppressHydrationWarning>
      <NuqsAdapter>
        <body className={`${geistMono.variable} antialiased`}>
          <ThemeProvider>
            <main>{children}</main>
            <ThemeToggle />
            <Toaster />
          </ThemeProvider>
        </body>
      </NuqsAdapter>
    </html>
  );
}
