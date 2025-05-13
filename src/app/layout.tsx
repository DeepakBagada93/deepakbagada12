import type { Metadata } from 'next';
// Import GeistSans from 'geist/font/sans' not 'geist'
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Deepak Bagada | Best Web Developer, AI Expert & Lead Generation Specialist in Junagadh',
  description: 'Deepak Bagada: Your expert web developer and AI agent specialist in Junagadh, Gujarat. I build high-performance Next.js, React, and Laravel applications, custom AI SaaS solutions, and AI agents. Specializing in lead generation strategies to grow your business. Contact me at deeepakbagada25@gmail.com or +91 7016179234.',
  keywords: [
    'best web developer in junagadh', 
    'ai expert in junagadh', 
    'ai agent developer in junagadh', 
    'lead generation expert in junagadh', 
    'Next.js developer junagadh', 
    'React developer junagadh', 
    'Laravel developer junagadh', 
    'AI solutions junagadh', 
    'SaaS expert junagadh', 
    'PHP developer junagadh', 
    'WordPress developer junagadh', 
    'custom AI agent junagadh'
  ],
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
