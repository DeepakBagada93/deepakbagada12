// src/components/site-header.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 md:mr-2"> {/* Adjusted margin for trigger */}
          <SidebarTrigger className="md:hidden" /> {/* Hidden on md and up if sidebar is icon collapsible */}
        </div>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="font-bold">Deepak Bagada</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="outline" size="sm">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
