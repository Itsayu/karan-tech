
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/services/ServiceCard';
import { services, coreValues } from '@/data/services';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="absolute inset-0 opacity-50">
            {/* Optional: Add a subtle background pattern or image here */}
            {/* <Image src="https://picsum.photos/1920/1080" alt="Background" layout="fill" objectFit="cover" className="opacity-20" /> */}
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering Your <span className="text-primary">Digital Future</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl lg:text-2xl">
            Karan Techno delivers expert IT consultancy and cutting-edge solutions in web development, SEO, mobile applications, and UI/UX design to elevate your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services" passHref>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform transform hover:scale-105 w-full sm:w-auto">
                Explore Our Services
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 transition-transform transform hover:scale-105 w-full sm:w-auto">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of IT services designed to meet your unique business challenges and drive growth.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Partner with <span className="text-primary">Karan Techno?</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are dedicated to providing innovative solutions and exceptional service to help your business thrive in the digital landscape.
              </p>
              <ul className="mt-8 space-y-4">
                {coreValues.map((value) => {
                  const Icon = value.icon;
                  return (
                    <li key={value.title} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-foreground">{value.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://picsum.photos/800/600?random=5" 
                alt="Team working" 
                layout="fill" 
                objectFit="cover"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Let's discuss how Karan Techno can help you achieve your goals.
          </p>
          <div className="mt-8">
            <Link href="/contact" passHref>
              <Button
                size="lg"
                variant="default"
                className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform transform hover:scale-105 shadow-lg"
              >
                Request a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
