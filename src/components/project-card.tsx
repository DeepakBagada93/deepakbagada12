// src/components/project-card.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string; // Added for data-ai-hint
  tags: string[];
  liveLink?: string;
  sourceLink?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  imageHint,
  tags,
  liveLink,
  sourceLink,
  className,
}: ProjectCardProps) {
  return (
    <Card className={cn("flex flex-col h-full bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-primary/30 transition-shadow duration-300 overflow-hidden group", className)}>
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out group-hover:scale-110"
          data-ai-hint={imageHint || "project image"}
        />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pb-4">
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {(liveLink || sourceLink) && (
        <CardFooter className="pt-0 pb-4 px-6 border-t border-border/20 mt-auto">
          <div className="flex w-full justify-end space-x-3">
            {liveLink && (
              <Button variant="outline" size="sm" asChild className="hover:bg-primary/10 hover:border-primary hover:text-primary">
                <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
            )}
            {sourceLink && (
              <Button variant="ghost" size="sm" asChild className="hover:bg-accent/10 hover:text-accent-foreground">
                <Link href={sourceLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Source
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
