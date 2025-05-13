// src/components/expertise-section.tsx
"use client";

import { useRef } from 'react';
import ExpertiseCard from './expertise-card';
import { CodeXml, BrainCircuit, Megaphone } from 'lucide-react';
import { useScrollEffect } from '@/hooks/use-scroll-effect';

const expertiseData = [
  {
    icon: CodeXml,
    title: "Web Development",
    description: "Building responsive, high-performance websites and web applications using modern technologies. Proficient in front-end and back-end development, ensuring seamless user experiences and robust functionality.",
  },
  {
    icon: BrainCircuit,
    title: "AI SaaS Expert",
    description: "Specializing in the development and integration of AI-powered SaaS solutions. Leveraging machine learning and cloud platforms to create intelligent applications that drive business growth and efficiency.",
  },
  {
    icon: Megaphone,
    title: "Marketing Expert",
    description: "Crafting data-driven marketing strategies to enhance brand visibility and customer engagement. Experienced in digital marketing, SEO, content creation, and campaign management to achieve impactful results.",
  },
];

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = expertiseData.map(() => useRef<HTMLDivElement>(null));

  useScrollEffect(titleRef);
  cardRefs.forEach(ref => useScrollEffect(ref, { effectClasses: ['fade-in', 'slide-in-from-bottom-12'], duration: '900ms' }));

  return (
    <section id="expertise" ref={sectionRef} className="bg-background/70 backdrop-blur-md">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <div 
              ref={titleRef}
              className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm"
            >
              My Expertise
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
              What I Do Best
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I blend creativity with technical prowess to deliver outstanding digital experiences across development, AI, and marketing.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl pt-8">
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
