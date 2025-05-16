
import { PageHeader } from '@/components/shared/PageHeader';
import { services, Service as ServiceType } from '@/data/services';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Card components not directly used here anymore
// import Image from 'next/image'; // Image component removed
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Comprehensive IT Solutions"
        description="Discover how Karan Techno can elevate your business with our expert services, tailored to meet your unique needs and drive success."
        className="animated-gradient-bg"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-16">
          {services.map((service: ServiceType, index: number) => {
            const IconComponent = service.icon;
            const serviceId = service.id.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <section 
                key={service.id} 
                id={serviceId} 
                className={`py-8 scroll-mt-20 group ${index % 2 === 1 ? 'bg-secondary/30 rounded-lg' : ''}`}
              >
                <div className={`interactive-transition group-hover:bg-card/10 p-6 md:p-8 rounded-lg shadow-lg border border-border/20 hover:border-primary/30 hover:shadow-xl`}>
                  <div className="flex items-center mb-6">
                    <IconComponent className="h-10 w-10 md:h-12 md:w-12 mr-4 text-primary group-hover:text-accent interactive-transition" />
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                       {service.name}
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {service.longDescription}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-medium text-foreground mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start group/item interactive-transition p-2 rounded hover:bg-primary/5">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0 interactive-transition group-hover/item:text-accent" />
                          <span className="text-muted-foreground interactive-transition group-hover/item:text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/contact" passHref>
                      <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 interactive-transition transform hover:scale-105">
                          Discuss Your {service.name} Needs
                      </Button>
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
