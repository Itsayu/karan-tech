
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Service } from '@/data/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import Image from 'next/image'; // Image component removed

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon;
  return (
    <Card className="group flex flex-col h-full overflow-hidden shadow-lg interactive-transition hover:shadow-2xl hover:scale-[1.02]">
      {/* Image placeholder div removed */}
      <CardHeader className="flex-shrink-0 pt-6"> {/* Added pt-6 for spacing since image is gone */}
        <div className="flex items-center gap-3 mb-2">
          <IconComponent className="h-8 w-8 text-primary interactive-transition group-hover:text-accent" />
          <CardTitle className="text-xl font-semibold">{service.name}</CardTitle>
        </div>
        <CardDescription className="text-sm text-muted-foreground min-h-[3em] line-clamp-2">
          {service.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        <Link href={`/services#${service.id.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} passHref>
          <Button variant="outline" className="w-full mt-auto interactive-transition border-primary/50 text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
