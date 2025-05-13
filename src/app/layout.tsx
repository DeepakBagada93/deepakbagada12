import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // GeistSans is an object with .variable and .className properties
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Deepak Bagada | Web Developer, AI SaaS & Marketing Expert',
  description: 'Portfolio of Deepak Bagada, a skilled Web Developer, AI SaaS Specialist, and Marketing Expert based in Junagadh, Gujarat.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply GeistSans.variable (which is a class name that sets the CSS var --font-geist-sans) to the html tag.
    // Also keep the "dark" class.
    <html lang="en" className={cn(GeistSans.variable, 'dark')}>
      {/*
        The body tag uses font-sans from Tailwind.
        Tailwind's font-sans is configured to use var(--font-geist-sans).
        The --font-geist-sans CSS variable is defined by the GeistSans.variable class applied to the html tag.
      */}
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
