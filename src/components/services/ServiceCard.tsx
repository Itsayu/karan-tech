
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Service } from '@/data/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon;
  return (
    <Card className="group flex flex-col h-full overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 border-b-4 border-transparent hover:border-primary">
      <CardHeader className="flex-shrink-0 pt-8 text-center">
        <div className="flex justify-center mb-4">
          <IconComponent className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
        </div>
        <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between text-center">
        <CardDescription className="text-muted-foreground mb-6">
          {service.shortDescription}
        </CardDescription>
        <Link href={`/services#${service.id.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} passHref>
          <Button variant="ghost" className="w-full mt-auto text-primary hover:bg-primary/10 hover:text-primary font-semibold">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
