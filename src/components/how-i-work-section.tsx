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
    description: "We start by thoroughly understanding your vision, objectives, target audience, and project requirements. This phase involves detailed discussions, research, and strategic planning to define the project scope, features, timeline, and success metrics.",
  },
  {
    icon: Palette,
    title: "2. Design & Prototyping",
    description: "Next, I create intuitive and engaging user interfaces (UI) and user experiences (UX). This includes wireframes, mockups, and interactive prototypes, ensuring the design is visually appealing, user-friendly, and aligned with your brand identity.",
  },
  {
    icon: CodeXml,
    title: "3. Development & Coding",
    description: "With a solid plan and design, I move to the development phase. I write clean, efficient, and scalable code using modern technologies and best practices. You'll receive regular updates and opportunities for feedback throughout this stage.",
  },
  {
    icon: ShieldCheck,
    title: "4. Testing & Quality Assurance",
    description: "Rigorous testing is crucial. I conduct comprehensive QA across various devices and browsers to ensure your web app is bug-free, secure, performs optimally, and provides a seamless user experience.",
  },
  {
    icon: Rocket,
    title: "5. Deployment & Launch",
    description: "Once everything is tested and approved, I handle the deployment process, launching your web application to a live server. I ensure a smooth transition and provide any necessary training for you and your team.",
  },
  {
    icon: Wrench,
    title: "6. Support & Iteration",
    description: "My commitment doesn't end at launch. I offer ongoing support, maintenance, and can help with future enhancements based on user feedback and evolving business needs, ensuring your web app continues to thrive.",
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
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I follow a structured and collaborative approach to ensure your project is a success, from initial concept to final launch and beyond.
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
