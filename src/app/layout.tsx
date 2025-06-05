
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { cn } from '@/lib/utils';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/app-sidebar';
import { SidebarInset } from '@/components/ui/sidebar';

export const metadata: Metadata = {
  title: 'Deepak Bagada | Web Developer & AI SaaS Expert in Junagadh',
  description: 'Deepak Bagada: Your dedicated web developer in Junagadh and AI SaaS expert in Junagadh. I build high-performance Next.js, React, and Laravel applications, custom AI SaaS solutions, and intelligent AI agents. Specializing in lead generation strategies to grow your business. Contact me at deeepakbagada25@gmail.com or +91 7016179234.',
  keywords: [
    'best web developer in junagadh',
    'ai expert in junagadh',
    'ai agent developer in junagadh',
    'lead generation expert in junagadh',
    'web developer in junagadh',
    'AI SaaS expert in junagadh',
    'Next.js developer junagadh',
    'React developer junagadh',
    'Laravel developer junagadh',
    'AI solutions junagadh',
    'SaaS expert junagadh',
    'PHP developer junagadh',
    'WordPress developer junagadh',
    'custom AI agent junagadh',
    'webapp developer in junagadh',
    'freelance web developer junagadh',
    'e-commerce website developer junagadh',
    'custom software development junagadh',
    'AI business solutions junagadh',
    'Genkit AI developer junagadh',
    'local SEO expert junagadh'
  
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(GeistSans.variable, 'dark')}>
      <body className={cn('font-sans', 'antialiased')}>
        <SidebarProvider defaultOpen={true}>
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-col min-h-screen">
              <SiteHeader />
              <main className="flex-grow">
                {children}
              </main>
              <SiteFooter />
            </div>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
