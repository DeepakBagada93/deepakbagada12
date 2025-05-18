
// src/components/expertise-section.tsx
"use client";

import { useRef } from 'react';
import ExpertiseCard from './expertise-card';
import { CodeXml, BrainCircuit, Megaphone, Network, Palette, Rocket } from 'lucide-react';
import { useScrollEffect } from '@/hooks/use-scroll-effect';

const expertiseData = [
  {
    icon: CodeXml,
    title: "Modern Web Development",
    description: "Building responsive, high-performance websites and web applications using Next.js, React, Laravel, PHP, WordPress, HTML, and CSS. As your dedicated web developer in Junagadh, I focus on delivering seamless user experiences and robust, high-performance web applications.",
  },
  {
    icon: BrainCircuit,
    title: "AI & SaaS Solutions",
    description: "Your AI SaaS expert in Junagadh, specializing in intelligent AI-powered SaaS solutions and custom AI agents. Leveraging machine learning (Genkit) and cloud platforms to create applications that drive business growth and efficiency.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Leads",
    description: "Crafting data-driven marketing strategies for brand visibility and customer engagement. As a lead generation expert in Junagadh, I utilize digital marketing, SEO, and content creation for impactful results.",
  },
];


export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = expertiseData.map(() => useRef<HTMLDivElement>(null));

  useScrollEffect(titleRef);
  cardRefs.forEach((ref, index) => useScrollEffect(ref, {
    effectClasses: ['fade-in', index % 2 === 0 ? 'slide-in-from-left-12' : 'slide-in-from-right-12'],
    duration: '900ms'
  }));

  return (
    <section id="expertise" ref={sectionRef} className="bg-background/70 backdrop-blur-md">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <div
              ref={titleRef}
              className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm opacity-0 transform"
            >
              My Expertise
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
              What I Do Best
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As a leading web developer in Junagadh and AI SaaS expert, I blend creativity with technical prowess to deliver outstanding digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl pt-8">
            {expertiseData.map((expertise, index) => (
              <div key={index} ref={cardRefs[index]} className="opacity-0 transform">
                <ExpertiseCard
                  icon={expertise.icon}
                  title={expertise.title}
                  description={expertise.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
