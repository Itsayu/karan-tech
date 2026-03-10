"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Quote, Sparkles } from "lucide-react";
import Image from "next/image";
import { TestimonialGenerator } from "@/components/TestimonialGenerator"; // Import our new component

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden">
          {/* Animated Background Decor */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent blur-[120px]" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-6">
              <Badge variant="secondary" className="px-4 py-1 text-sm font-semibold tracking-wide uppercase">
                ✨ Your Growth Partner in the Digital World
              </Badge>
              <h1 className="text-5xl font-black tracking-tighter text-foreground sm:text-6xl md:text-7xl leading-[1.1]">
                Propel Your Business with <span className="text-primary">Expert IT</span> Solutions
              </h1>
              <p className="max-w-xl mx-auto md:mx-0 text-xl text-muted-foreground leading-relaxed">
                Welcome to Karan Techno. From stunning websites to strategic SEO, we build the digital infrastructure your success demands.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <Link href="/services">
                  <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">
                    Explore Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold border-2 hover:bg-secondary">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
               <div className="relative h-96 w-full md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border bg-card">
                <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="Collaborative Team"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <div className="max-w-2xl text-left">
                <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl mb-4">
                  Our Core Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive IT solutions designed to drive growth in the Indian market.
                </p>
              </div>
              <Link href="/services">
                <Button variant="link" className="text-primary font-bold text-lg group">
                  View All Services <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.slice(0, 4).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* --- NEW: AI TESTIMONIAL ENGINE SECTION --- */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="bg-primary/10 text-primary border-none mb-4">
                  <Sparkles className="h-3 w-3 mr-2 fill-primary" /> 
                  AI Innovation Lab
                </Badge>
                <h2 className="text-4xl font-black tracking-tight mb-6">
                  Experience Our <span className="text-primary italic underline decoration-wavy">AI Capabilities</span> Firsthand
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We don't just talk about AI—we build it. Try our **Testimonial Engine** to see how we leverage Large Language Models to generate hyper-realistic social proof. 
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 p-4 rounded-xl border bg-card/50">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Star className="h-5 w-5 text-primary fill-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Natural Language Processing</h4>
                      <p className="text-sm text-muted-foreground">Generating context-aware content for your specific industry.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-xl border bg-card/50">
                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Quote className="h-5 w-5 text-accent fill-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold">Dynamic Personalization</h4>
                      <p className="text-sm text-muted-foreground">Adjusting tone and style based on service categories.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Dashboard Generator we created earlier */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
                <TestimonialGenerator />
              </div>
            </div>
          </div>
        </section>
        {/* --- END AI SECTION --- */}

      </main>
    </div>
  );
}
