import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge
              variant="outline"
              className="text-sm font-bold text-primary border-primary"
            >
              Your Growth Partner in the Digital World
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl mt-4">
              Propel Your Business with Expert IT Solutions
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              Welcome to Karan Techno, a premier Indian consultancy offering
              bespoke IT services. From stunning websites to strategic SEO and
              robust cloud solutions, we are committed to your success.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/services" passHref>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 interactive-transition transform hover:scale-105 w-full sm:w-auto"
                >
                  Explore Our Services
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 interactive-transition transform hover:scale-105 w-full sm:w-auto"
                >
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:px-28 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Core Services
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                We offer a comprehensive suite of IT services designed to meet
                your unique business challenges and drive growth in the Indian
                market.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.slice(0, 4).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/services" passHref>
                <Button variant="outline" size="lg">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
