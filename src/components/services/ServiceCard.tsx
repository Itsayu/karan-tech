"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Service } from '@/data/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon;
  
  // Dynamic image keywords based on common IT services
  const imageKeyword = service.name.toLowerCase().includes('web') ? 'software' : 
                       service.name.toLowerCase().includes('seo') ? 'analytics' : 
                       service.name.toLowerCase().includes('cloud') ? 'server' : 'technology';

  return (
    <Card className="group relative flex flex-col h-full overflow-hidden border-none bg-card shadow-sm hover:shadow-2xl transition-all duration-500 rounded-3xl">
      {/* Top Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
        <Image
          src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop&sig=${service.id}`}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
        />
        <div className="absolute top-4 left-4 z-20">
          <div className="p-3 rounded-2xl bg-background/90 backdrop-blur-md shadow-xl border border-white/20">
            <IconComponent className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <CardHeader className="relative z-20 -mt-8 pb-2">
        <CardTitle className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">
          {service.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col justify-between">
        <CardDescription className="text-muted-foreground leading-relaxed text-base mb-6">
          {service.shortDescription}
        </CardDescription>

        <div className="pt-4 border-t border-border/50">
          <Link href={`/services#${service.id.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} passHref className="block">
            <Button 
              variant="ghost" 
              className="w-full justify-between px-0 hover:bg-transparent text-foreground group/btn font-bold tracking-tight"
            >
              <span className="group-hover/btn:mr-2 transition-all">Explore Solution</span>
              <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
