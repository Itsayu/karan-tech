
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/services/ServiceCard';
import { services } from '@/data/services';
import Link from 'next/link';
// Removed coreValues import as the section using it is removed
// import { coreValues } from '@/data/services';
// import Image from 'next/image'; // Removed as Image component is no longer used
// import { CheckCircle } from 'lucide-react'; // Removed as CheckCircle is no longer used here

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg z-0"></div>
        {/* Optional: Add a subtle background pattern or image here */}
        {/* <Image src="https://placehold.co/1920x1080.png" alt="Background" layout="fill" objectFit="cover" className="opacity-10 z-0" data-ai-hint="abstract technology" /> */}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering Your <span className="text-primary">Digital Future</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl lg:text-2xl">
            Karan Techno delivers expert IT consultancy and cutting-edge solutions in web development, SEO, mobile applications, and UI/UX design to elevate your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services" passHref>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 interactive-transition transform hover:scale-105 w-full sm:w-auto">
                Explore Our Services
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 interactive-transition transform hover:scale-105 w-full sm:w-auto">
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

      {/* Why Choose Us Section - REMOVED */}
      
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
                className="bg-accent text-accent-foreground hover:bg-accent/90 interactive-transition transform hover:scale-105 shadow-lg"
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
