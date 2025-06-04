
// src/components/demo-projects-section.tsx
"use client";

import { useRef } from 'react';
import ProjectCard from './project-card';
import { useScrollEffect } from '@/hooks/use-scroll-effect';

const projectsData = [
  {
    title: "AI WordPress Blog Management Software",
    description: "A smart software solution leveraging AI to automate WordPress blog creation, content scheduling, SEO optimization, and performance tracking. As an AI SaaS expert in Junagadh, I developed this tool for efficient content marketing and management.",
    tags: ["AI Automation", "WordPress", "Content Management", "SaaS"],
    liveLink: "https://dbwp.vercel.app/",
    sourceLink: "#", 
  },
  {
    title: "AI Powered Grammar & Content Suggestion Webapp",
    description: "A sophisticated web application that leverages AI to provide real-time grammar checking and intelligent content suggestions. This tool, developed by a leading AI SaaS expert in Junagadh, helps users create polished and effective written material for various needs.",
    tags: ["AI Automation", "NLP", "Web Application", "SaaS"],
    liveLink: "https://deepakgramai.vercel.app/",
  },
  {
    title: "AI Powered Social Media Post Creation Webapp",
    description: "An innovative web application that utilizes AI to help users generate engaging social media posts, suggest relevant hashtags, and schedule content. Built by a web developer in Junagadh with AI expertise, this SaaS platform streamlines social media management.",
    tags: ["AI Automation", "Social Media", "Content Creation", "SaaS"],
    liveLink: "https://dbsaasnext.vercel.app/",
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
    delay: `${index * 100}ms` 
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
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Here are a few examples of projects I've worked on, showcasing my skills as a web developer in Junagadh and an AI SaaS expert. Each project reflects my commitment to quality and innovation, delivering impactful solutions for clients in Junagadh and worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto pt-8">
          {projectsData.map((project, index) => (
            <div key={index} ref={cardRefs[index]} className="opacity-0 transform group">
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                liveLink={project.liveLink}
                sourceLink={project.sourceLink}
                className="h-full" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

