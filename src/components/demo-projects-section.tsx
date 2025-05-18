
// src/components/demo-projects-section.tsx
"use client";

import { useRef } from 'react';
import ProjectCard from './project-card';
import { useScrollEffect } from '@/hooks/use-scroll-effect';

const projectsData = [
  {
    title: "AI-Powered E-commerce Platform",
    description: "Developed a cutting-edge e-commerce solution leveraging Next.js for superior performance and AI-driven product recommendations for personalized shopping. Integrated Stripe for secure payments. This project showcases my ability as a web developer to build complex, scalable online stores.",
    imageUrl: "/deepak demo.png",
    tags: ["Next.js", "React", "AI", "Stripe", "Tailwind CSS", "E-commerce"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "Custom AI Agent for SaaS Support",
    description: "As an AI SaaS expert, I designed and implemented a custom AI agent using Genkit to automate customer support queries for a SaaS product. This significantly improved response times, user satisfaction, and operational efficiency by handling common issues intelligently.",
    imageUrl: "/deepak demo.png",
    tags: ["Genkit", "AI Agent", "NLP", "SaaS", "Node.js", "Customer Support"],
    liveLink: "#",
  },
  {
    title: "Lead Generation Dashboard (Marketing)",
    description: "Created a comprehensive dashboard for a marketing agency to track campaign performance and lead generation metrics effectively. Built with React and data visualization libraries (e.g., Charts.js), providing actionable insights to optimize marketing spend and strategies.",
    imageUrl: "/deepak demo.png",
    tags: ["React", "Marketing Analytics", "Data Visualization", "API Integration"],
    sourceLink: "#",
  },
  {
    title: "WordPress Portfolio for Junagadh Artist",
    description: "Designed and developed a visually compelling portfolio website for a local Junagadh artist using WordPress. Focused on ease of content management for the artist and a responsive design that beautifully showcases their work across all devices. This highlights my skills as a versatile web developer in Junagadh.",
    imageUrl: "/deepak demo.png",
    tags: ["WordPress", "PHP", "CSS", "Responsive Design", "Portfolio"],
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
            Here are some projects showcasing my skills as a web developer in Junagadh and an AI SaaS expert. These examples demonstrate my commitment to delivering impactful digital solutions and innovative applications.
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
