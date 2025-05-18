
// src/components/contact-section.tsx
"use client";

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, Twitter, Instagram, MessageSquare } from 'lucide-react';
import { useScrollEffect } from '@/hooks/use-scroll-effect';
import Link from 'next/link';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useScrollEffect(titleRef);
  useScrollEffect(infoRef, { effectClasses: ['fade-in', 'slide-in-from-bottom-12'], duration: '900ms' });

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/deepakbagada',
      ariaLabel: 'Deepak Bagada on LinkedIn',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/deepakbagada',
      ariaLabel: 'Deepak Bagada on GitHub',
    },
    {
      name: 'Twitter / X',
      icon: Twitter,
      url: 'https://x.com/deepakbagada',
      ariaLabel: 'Deepak Bagada on Twitter X',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/deepakbagada_dev',
      ariaLabel: 'Deepak Bagada on Instagram',
    },
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      url: 'https://wa.me/917016179234',
      ariaLabel: 'Chat with Deepak Bagada on WhatsApp',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="bg-gradient-to-b from-background/70 to-background backdrop-blur-md">
      <div className="container px-4 md:px-6">
        <div
          ref={titleRef}
          className="flex flex-col items-center space-y-4 text-center mb-12 opacity-0 transform"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm">
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
            Let's Connect
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            As your go-to web developer in Junagadh and AI SaaS expert, I'm always excited to discuss new projects. Reach out and let's build something amazing together!
          </p>
        </div>

        <div ref={infoRef} className="max-w-4xl mx-auto space-y-12 opacity-0 transform">
          {/* Contact Details */}
          <div>
            <h3 className="text-3xl font-semibold text-foreground mb-6 text-center lg:text-left">Contact Details</h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-6 rounded-lg bg-card/80 shadow-lg hover:shadow-primary/20 transition-shadow">
                <Mail className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl text-foreground mb-1">Email</h4>
                  <a href="mailto:deeepakbagada25@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    deeepakbagada25@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 rounded-lg bg-card/80 shadow-lg hover:shadow-primary/20 transition-shadow">
                <Phone className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl text-foreground mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+917016179234" className="text-muted-foreground hover:text-primary transition-colors block">
                    +91 70161 79234 (Call)
                  </a>
                   <a href="https://wa.me/917016179234" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors block">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="pt-6">
            <h3 className="text-3xl font-semibold text-foreground mb-8 text-center lg:text-left">Follow My Work</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="lg"
                  className="p-0 h-14 w-14 sm:h-16 sm:w-16 rounded-full  hover:bg-primary/10 group"
                  asChild
                >
                  <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.ariaLabel}>
                    <social.icon className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="mt-10 pt-10 border-t border-border/30 text-center lg:text-left">
            <h4 className="text-2xl font-semibold mb-3 text-foreground">Open to Opportunities</h4>
            <p className="text-muted-foreground md:text-lg">
              Currently accepting new projects and exploring collaborations. If you have an idea or a challenge, as a web developer and AI SaaS expert in Junagadh, I'd love to hear about it. Available for remote work globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
