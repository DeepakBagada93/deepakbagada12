
// src/components/demo-projects-section.tsx
"use client";

import { useRef } from 'react';
import ProjectCard from './project-card';
import { useScrollEffect } from '@/hooks/use-scroll-effect';

const projectsData = [
  {
    title: "AI-Powered E-commerce Platform",
    description: "A modern e-commerce solution with AI-driven product recommendations and personalized shopping experiences. Built with Next.js and integrated with Stripe.",
    imageUrl: "/deepak demo.png", // Updated path
    tags: ["Next.js", "React", "AI", "Stripe", "Tailwind CSS"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "Custom AI Agent for Customer Support",
    description: "Developed an AI agent using Genkit to automate customer support queries, improving response times and user satisfaction for a SaaS product.",
    imageUrl: "/deepak demo.png", // Updated path
    tags: ["Genkit", "AI Agent", "NLP", "SaaS", "Node.js"],
    liveLink: "#",
  },
  {
    title: "Lead Generation Dashboard (Marketing)",
    description: "A comprehensive dashboard for tracking marketing campaign performance and lead generation metrics. Built with React and data visualization libraries.",
    imageUrl: "/deepak demo.png", // Updated path
    tags: ["React", "Marketing Analytics", "Charts.js", "API Integration"],
    sourceLink: "#",
  },
  {
    title: "WordPress Portfolio Site for Artist",
    description: "Designed and developed a visually appealing portfolio website for a local artist using WordPress, focusing on ease of content management.",
    imageUrl: "/deepak demo.png", // Updated path
    tags: ["WordPress", "PHP", "CSS", "Responsive Design"],
    liveLink: "#",
  },
];

export default function DemoProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = projectsData.map(() => useRef<HTMLDivElement>(null));

  useScrollEffect(titleRef);
  cardRefs.forEach((ref, index) => useScrollEffect(ref, {
     effectClasses: ['fade-in', index % 2 === 0 ? 'slide-in-from-bottom-12' : 'slide-in-from-top-12'],
     duration: '900ms',
     threshold: 0.1
  }));

  return (
    <section id="projects" ref={sectionRef} className="bg-background/70 backdrop-blur-md">
      <div className="container px-4 md:px-6">
        <div
          ref={titleRef}
          className="flex flex-col items-center space-y-4 text-center mb-12 opacity-0 transform"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm">
            My Work
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
            Featured Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some projects showcasing my skills as a web developer in Junagadh and an AI SaaS expert, delivering impactful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full max-w-5xl mx-auto pt-8">
          {projectsData.map((project, index) => (
            <div key={index} ref={cardRefs[index]} className="opacity-0 transform group">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
