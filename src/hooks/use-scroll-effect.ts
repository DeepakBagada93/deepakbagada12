
// src/hooks/use-scroll-effect.ts
"use client";

import type { RefObject } from 'react';
import { useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  animationClass?: string; // Base animation class, e.g., "animate-in"
  effectClasses?: string[]; // e.g., ["fade-in", "slide-in-from-bottom-10"]
  duration?: string; // e.g., "800ms"
}

export function useScrollEffect(
  ref: RefObject<HTMLElement>,
  options?: ScrollAnimationOptions
) {
  const {
    threshold = 0.15, // A bit more visibility before triggering
    triggerOnce = true,
    animationClass = 'animate-in',
    effectClasses = ['fade-in', 'slide-in-from-bottom-8', 'zoom-in-95'], // Adjusted slide distance and added zoom
    duration = '800ms', // Adjusted duration
  } = options || {};

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Initialize with opacity-0 for reveal animations
    element.classList.add('opacity-0');
    element.classList.add('transform'); // Ensure transform is enabled for slide effects

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove('opacity-0');
          element.classList.add(animationClass, ...effectClasses);
          if (duration) {
            element.style.setProperty('--animate-duration', duration);
          }
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else {
          if (!triggerOnce) {
            // Optional: Reset if not triggerOnce
            // element.classList.remove(animationClass, ...effectClasses);
            // element.classList.add('opacity-0');
          }
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, triggerOnce, animationClass, effectClasses, duration]);
}
