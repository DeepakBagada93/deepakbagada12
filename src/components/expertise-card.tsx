// src/components/expertise-card.tsx
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function ExpertiseCard({ icon: Icon, title, description, className }: ExpertiseCardProps) {
  return (
    <Card className={cn("flex flex-col h-full bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-primary/30 transition-shadow duration-300", className)}>
      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
        <div className="p-3 rounded-full bg-primary/20 text-primary">
          <Icon className="h-8 w-8" />
        </div>
        <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
