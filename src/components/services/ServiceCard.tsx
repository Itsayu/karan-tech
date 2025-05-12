
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Service } from '@/data/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon;
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image 
          src={service.imagePlaceholder} 
          alt={service.name} 
          layout="fill" 
          objectFit="cover"
          data-ai-hint={service.imageHint}
        />
      </div>
      <CardHeader className="flex-shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <IconComponent className="h-8 w-8 text-primary" />
          <CardTitle className="text-xl font-semibold">{service.name}</CardTitle>
        </div>
        <CardDescription className="text-sm text-muted-foreground min-h-[3em] line-clamp-2">
          {service.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        <Link href={`/services#${service.id.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} passHref>
          <Button variant="outline" className="w-full mt-auto transition-colors duration-300 hover:bg-accent hover:text-accent-foreground">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
