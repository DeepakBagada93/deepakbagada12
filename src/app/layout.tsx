import type { Metadata } from 'next';
// Import GeistSans from 'geist/font/sans' not 'geist'
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Deepak Bagada | Web App Developer, AI Agent Expert & Lead Generation Specialist in Junagadh',
  description: 'Deepak Bagada: Your expert webapp developer and AI agent specialist in Junagadh, Gujarat. I build high-performance Next.js, React, and Laravel applications, custom AI SaaS solutions, and AI agents. Specializing in lead generation strategies to grow your business. Contact me at deeepakbagada25@gmail.com or +91 7016179234.',
  keywords: ['webapp developer junagadh', 'ai agent expert junagadh', 'lead generation expert junagadh', 'Next.js developer', 'React developer', 'Laravel developer', 'AI solutions', 'SaaS expert', 'PHP', 'WordPress', 'web app developer', 'ai solutions provider', 'custom ai agent'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(GeistSans.variable, 'dark')}>
      <body className={cn('font-sans', 'antialiased', 'flex', 'flex-col', 'min-h-screen')}>
        <SiteHeader />
        <main className="flex-grow">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
