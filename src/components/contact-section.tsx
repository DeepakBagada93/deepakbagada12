// src/components/contact-section.tsx
"use client";

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useScrollEffect } from '@/hooks/use-scroll-effect';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useScrollEffect(titleRef);
  useScrollEffect(cardRef, { effectClasses: ['fade-in', 'slide-in-from-right-12'], duration: '900ms' });
  useScrollEffect(infoRef, { effectClasses: ['fade-in', 'slide-in-from-left-12'], duration: '900ms' });


  // Placeholder for form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here
    alert("Form submitted! (This is a placeholder)");
  };

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
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          <div ref={infoRef} className="space-y-8 opacity-0 transform">
            <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-card/80 shadow-md">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a href="mailto:deepak.bagada@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    deepak.bagada@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-card/80 shadow-md">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <a href="tel:+910000000000" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 (000) 000-0000 (Placeholder)
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-card/80 shadow-md">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-muted-foreground">Junagadh, Gujarat, India</p>
                </div>
              </div>
            </div>
             <div className="mt-8">
                <h4 className="text-xl font-semibold mb-2 text-foreground">Availability</h4>
                <p className="text-muted-foreground">Open for new projects and collaborations. Let's build something amazing together!</p>
            </div>
          </div>

          <div ref={cardRef} className="opacity-0 transform">
            <Card className="bg-card/80 backdrop-blur-sm shadow-xl p-2">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input id="name" placeholder="Your Name" required className="bg-input placeholder:text-muted-foreground/70"/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required  className="bg-input placeholder:text-muted-foreground/70"/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input id="subject" placeholder="Project Inquiry"  className="bg-input placeholder:text-muted-foreground/70"/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea id="message" placeholder="Your message..." required rows={5} className="bg-input placeholder:text-muted-foreground/70"/>
                  </div>
                  <Button type="submit" className="w-full text-lg py-6 group" size="lg">
                    Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
