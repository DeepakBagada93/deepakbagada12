
// src/components/how-i-work-section.tsx
"use client";

import { useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollEffect } from '@/hooks/use-scroll-effect';
import { Search, Lightbulb, Palette, CodeXml, ShieldCheck, Rocket, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WorkStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

function WorkStepCard({ icon: Icon, title, description, className }: WorkStepProps) {
  return (
    <Card className={cn("flex flex-col h-full bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-primary/30 transition-shadow duration-300", className)}>
      <CardHeader className="flex flex-row items-center space-x-4 pb-3">
        <div className="p-3 rounded-full bg-primary/20 text-primary">
          <Icon className="h-7 w-7" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

const workProcessData = [
  {
    icon: Lightbulb,
    title: "1. Discovery & Planning",
    description: "We begin by deeply understanding your vision, objectives, target audience, and unique project requirements. This crucial phase involves detailed discussions, market research specific to Junagadh if applicable, and strategic planning to define a clear project scope, feature set, realistic timeline, and key success metrics. As your web developer in Junagadh, I ensure we are aligned from the very start for a successful outcome.",
  },
  {
    icon: Palette,
    title: "2. Design & Prototyping",
    description: "Next, as your creative web developer, I focus on crafting intuitive and engaging user interfaces (UI) and user experiences (UX). This involves creating wireframes, high-fidelity mockups, and interactive prototypes. The goal is a design that's not only visually stunning and user-friendly but also perfectly reflects your brand identity and resonates with your users, whether they are in Junagadh or global.",
  },
  {
    icon: CodeXml,
    title: "3. Development & Coding",
    description: "With a solid plan and design approved, I transition into the development phase. As an expert web developer in Junagadh, I write clean, efficient, and scalable code using modern technologies like Next.js, React, or Laravel, and for AI tasks, Genkit. You'll receive regular progress updates and opportunities for feedback throughout this stage, ensuring transparency and quality.",
  },
  {
    icon: ShieldCheck,
    title: "4. Testing & Quality Assurance",
    description: "Rigorous testing is paramount. I conduct comprehensive quality assurance across various devices, browsers, and screen sizes to ensure your web application is bug-free, secure, performs optimally under load, and provides a seamless, accessible user experience for everyone. My standards as an AI SaaS expert in Junagadh demand thoroughness.",
  },
  {
    icon: Rocket,
    title: "5. Deployment & Launch",
    description: "Once thorough testing is complete and you've given your final approval, I manage the deployment process. This involves launching your web application to a live server, configuring necessary services, and ensuring a smooth transition from development to production. I also provide any necessary training for you and your team to manage your new Junagadh-based or wider-reaching platform.",
  },
  {
    icon: Wrench,
    title: "6. Support & Iteration",
    description: "My commitment as your AI SaaS expert and web developer in Junagadh extends beyond launch. I offer ongoing support, maintenance packages, and can help with future enhancements and iterations based on user feedback and your evolving business needs, ensuring your digital product continues to thrive and deliver value.",
  },
];

export default function HowIWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = workProcessData.map(() => useRef<HTMLDivElement>(null));

  useScrollEffect(titleRef);
  cardRefs.forEach((ref, index) => useScrollEffect(ref, {
     effectClasses: ['fade-in', index % 2 === 0 ? 'slide-in-from-bottom-10' : 'slide-in-from-top-10'],
     duration: '800ms',
     threshold: 0.1
  }));

  return (
    <section id="how-i-work" ref={sectionRef} className="bg-background/70 backdrop-blur-md">
      <div className="container px-4 md:px-6">
        <div
          ref={titleRef}
          className="flex flex-col items-center space-y-4 text-center mb-12 opacity-0 transform"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm">
            My Process
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
            How I Bring Your Ideas to Life
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            As an experienced web developer in Junagadh and AI SaaS expert, I follow a structured and collaborative approach to ensure your project is a success. My process is designed for clarity, efficiency, and delivering high-quality results from initial concept to final launch and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto pt-8">
          {workProcessData.map((step, index) => (
            <div key={index} ref={cardRefs[index]} className="opacity-0 transform group">
              <WorkStepCard {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

