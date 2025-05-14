// src/components/site-footer.tsx
export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {currentYear} Deepak Bagada. All rights reserved.
        </p>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-right">
          <a href="https://saasnext.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            saasnext
          </a>
        </p>
      </div>
    </footer>
  );
}
