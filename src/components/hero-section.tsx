
// src/components/hero-section.tsx
"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (heroRef.current) {
      const scrollPosition = window.pageYOffset;
      const heroTop = heroRef.current.offsetTop;
      // Only apply parallax if scrolling within or just past the hero section
      if (scrollPosition < window.innerHeight * 1.5) {
         setOffsetY(scrollPosition);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative flex h-screen min-h-[600px] w-full flex-col items-center justify-center overflow-hidden text-center">
      {/* Background elements for parallax depth - optional */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900 opacity-50"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      ></div>

      <div className="container z-10 flex flex-col items-center px-4 md:px-6">
        <div
          className="mb-8"
          style={{ transform: `translateY(${offsetY * 0.3}px) scale(${1 - offsetY * 0.0005 < 0.5 ? 0.5 : 1 - offsetY * 0.0005})`, opacity: `${1 - offsetY * 0.0015 < 0 ? 0 : 1 - offsetY * 0.0015}` }}
        >
          <Image
            src="/deepak bagada.png" // Updated to use image from public folder
            alt="Deepak Bagada - Web Developer in Junagadh, AI SaaS Expert"
            width={240} // Increased size
            height={240} // Increased size
            className="rounded-full border-4 border-primary shadow-2xl shadow-primary/50 aspect-square object-cover" // Added shadow-primary/50 for glow
            data-ai-hint="professional indian man"
            priority
          />
        </div>
        <h1
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-400 to-sky-300"
          style={{ transform: `translateY(${offsetY * 0.2}px)`, opacity: `${1 - offsetY * 0.001 < 0 ? 0 : 1 - offsetY * 0.001}` }}
        >
          Deepak Bagada
        </h1>
        <p
          className="mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl"
          style={{ transform: `translateY(${offsetY * 0.15}px)`, opacity: `${1 - offsetY * 0.0008 < 0 ? 0 : 1 - offsetY * 0.0008}` }}
        >
          Web Developer | AI SaaS Expert | Marketing Specialist
        </p>
        <p
          className="mt-2 max-w-[700px] text-md text-muted-foreground"
          style={{ transform: `translateY(${offsetY * 0.1}px)`, opacity: `${1 - offsetY * 0.0007 < 0 ? 0 : 1 - offsetY * 0.0007}` }}
        >
          Your trusted web developer in Junagadh and AI SaaS expert, crafting innovative digital solutions.
        </p>
        <Button
          asChild
          className="mt-8 animate-bounce"
          variant="outline"
          size="lg"
          style={{ opacity: `${1 - offsetY * 0.002 < 0 ? 0 : 1 - offsetY * 0.002}` }}
          >
          <a href="#expertise" aria-label="Scroll to expertise section">
            Explore My Skills <ArrowDown className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
       {/* Subtle animated shapes for visual interest */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse" style={{ transform: `translateY(${offsetY * 0.05}px) translateX(${offsetY * 0.03}px)` }}></div>
      <div className="absolute top-20 right-10 w-16 h-16 border-2 border-accent/20 rounded-lg animate-spin-slow" style={{ transform: `translateY(${offsetY * -0.05}px) translateX(${offsetY * -0.02}px)` }}></div>
    </section>
  );
}
