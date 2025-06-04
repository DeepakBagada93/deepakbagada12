// src/components/demo-projects-section.tsx
"use client";

import { useRef } from 'react';
import ProjectCard from './project-card';
import { useScrollEffect } from '@/hooks/use-scroll-effect';
import { Layers, ShoppingCart, MessageSquare } from 'lucide-react'; // Example icons, can adjust

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website with product listings, cart functionality, and secure checkout. Built with Next.js and Stripe integration.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe", "TypeScript"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "AI Customer Support Chatbot",
    description: "An intelligent chatbot for customer service, leveraging Genkit for natural language understanding and providing instant responses.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "chatbot interface",
    tags: ["Genkit", "AI", "SaaS", "Next.js", "Firebase"],
    liveLink: "#",
  },
  {
    title: "Project Management Tool",
    description: "A collaborative project management application with task tracking, team communication, and progress visualization features.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dashboard interface",
    tags: ["Laravel", "PHP", "Vue.js", "MySQL", "Bootstrap"],
    sourceLink: "#",
  },
];

export default function DemoProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = projectsData.map(() => useRef<HTMLDivElement>(null));

  useScrollEffect(titleRef);
  cardRefs.forEach((ref, index) => useScrollEffect(ref, {
    effectClasses: ['fade-in', index % 2 === 0 ? 'slide-in-from-left-12' : 'slide-in-from-right-12'],
    duration: '900ms',
    delay: `${index * 100}ms` // Stagger animation
  }));

  return (
    <section id="projects" ref={sectionRef} className="bg-background/70 backdrop-blur-md">
      <div className="container px-4 md:px-6">
        <div
          ref={titleRef}
          className="flex flex-col items-center space-y-4 text-center mb-12 opacity-0 transform"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm">
            Featured Projects
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
            My Creative Work
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are a few examples of projects I've worked on, showcasing my skills as a web developer in Junagadh and an AI SaaS expert. Each project reflects my commitment to quality and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto pt-8">
          {projectsData.map((project, index) => (
            <div key={index} ref={cardRefs[index]} className="opacity-0 transform group">
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                liveLink={project.liveLink}
                sourceLink={project.sourceLink}
                className="h-full" // Ensure cards in a row have same height
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
