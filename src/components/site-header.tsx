// src/components/site-header.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="font-bold">Deepak Bagada</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4">
          {/* Navigation links can be added here if needed */}
        </nav>
        <Button asChild variant="ghost">
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </header>
  );
}
