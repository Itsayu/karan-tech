import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <Badge
                variant="outline"
                className="text-sm font-bold text-primary border-primary shadow-md"
              >
                Your Growth Partner in the Digital World
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl mt-4 drop-shadow-lg">
                Propel Your Business with Expert IT Solutions
              </h1>
              <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg text-muted-foreground">
                Welcome to Karan Techno, a premier Indian consultancy offering
                bespoke IT services. From stunning websites to strategic SEO and
                robust cloud solutions, we are committed to your success.
              </p>
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <Link href="/services" passHref>
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg interactive-transition transform hover:scale-105 w-full sm:w-auto"
                  >
                    Explore Our Services
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 shadow-lg interactive-transition transform hover:scale-105 w-full sm:w-auto"
                  >
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-80 w-full md:h-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="A modern office with a team working collaboratively"
                  layout="fill"
                  objectFit="cover"
                  className="interactive-transition"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:px-28 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl drop-shadow-md">
                Our Core Services
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                We offer a comprehensive suite of IT services designed to meet
                your unique business challenges and drive growth in the Indian
                market.
              </p>
            </div>
            <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {services.slice(0, 4).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            <div className="mt-16 text-center">
              <Link href="/services" passHref>
                <Button variant="outline" size="lg" className="shadow-md transform hover:scale-105 transition-transform duration-300">
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
