
import { PageHeader } from '@/components/shared/PageHeader';
import { services, Service as ServiceType } from '@/data/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Comprehensive IT Solutions"
        description="Discover how Karan Techno can elevate your business with our expert services, tailored to meet your unique needs and drive success."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-16">
          {services.map((service: ServiceType, index: number) => {
            const IconComponent = service.icon;
            const serviceId = service.id.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <section key={service.id} id={serviceId} className={`py-8 scroll-mt-20 ${index % 2 === 1 ? 'bg-secondary/30 rounded-lg p-8' : ''}`}>
                <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-row-dense md:grid-cols-2 md:[&>*:last-child]:col-start-1' : ''}`}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl group">
                    <Image
                      src={service.imagePlaceholder}
                      alt={service.name}
                      layout="fill"
                      objectFit="cover"
                      className="transform transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={service.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-primary-foreground p-2 rounded">
                        <IconComponent className="h-10 w-10 mb-2 text-accent" />
                        <h3 className="text-2xl font-bold">{service.name}</h3>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-semibold text-foreground mb-4 flex items-center">
                       {service.name}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {service.longDescription}
                    </p>
                    <h4 className="text-xl font-medium text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" passHref>
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform transform hover:scale-105">
                            Discuss Your {service.name} Needs
                        </Button>
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
