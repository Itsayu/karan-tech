"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Quote, Sparkles, MoveDown } from "lucide-react";
import Image from "next/image";
import { TestimonialGenerator } from "@/components/TestimonialGenerator";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* GLOBAL BACKGROUND IMAGE WRAPPER */}
      <div 
        className="fixed inset-0 w-full h-full -z-20 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')` 
        }}
      >
        {/* Deep Overlay for readability */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] transition-colors duration-500" />
      </div>

      <main className="flex-grow relative z-10">
        
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <Badge variant="outline" className="px-4 py-1 text-sm font-semibold tracking-widest uppercase border-primary text-primary bg-primary/10 backdrop-blur-md">
                ✨ Digital Excellence in India
              </Badge>
              <h1 className="text-5xl font-black tracking-tighter text-foreground sm:text-7xl leading-[1.05]">
                Architecting <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">Tomorrow's</span> Digital Reality
              </h1>
              <p className="max-w-xl mx-auto md:mx-0 text-xl text-muted-foreground leading-relaxed">
                Karan Techno blends creative vision with robust engineering. We don't just build websites; we engineer growth engines.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <Link href="/services">
                  <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all rounded-full">
                    Explore Solutions
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold border-2 bg-background/20 backdrop-blur-md hover:bg-background/40 rounded-full">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group perspective-1000 hidden md:block">
               <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
               <div className="relative h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 backdrop-blur-sm transform group-hover:rotate-y-3 transition-transform duration-700">
                <Image
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                    alt="Cyber Security Technology"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <MoveDown className="h-6 w-6 text-primary" />
          </div>
        </section>

        {/* Services Section with Glassmorphism */}
        <section id="services" className="py-24 bg-background/40 backdrop-blur-md border-y border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <div className="max-w-2xl text-left">
                <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-6xl mb-4">
                  Core Expertise
                </h2>
                <div className="h-1.5 w-24 bg-primary rounded-full mb-4" />
                <p className="text-lg text-muted-foreground">
                  Bespoke IT strategies optimized for the rapidly evolving global market.
                </p>
              </div>
              <Link href="/services">
                <Button variant="link" className="text-primary font-bold text-lg group">
                  View Full Catalog <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
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

        {/* AI Showcase Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <Badge className="bg-primary/20 text-primary border-primary/50 backdrop-blur-xl px-4 py-1">
                  <Sparkles className="h-3 w-3 mr-2 fill-primary" /> 
                  AI Innovation Lab
                </Badge>
                <h2 className="text-4xl font-black tracking-tight sm:text-6xl text-white">
                  The Future is <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Self-Generating</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We integrate advanced LLMs to help businesses automate social proof. Try our live engine to generate industry-specific testimonials in real-time.
                </p>
                
                <div className="grid gap-4">
                  {[
                    { icon: <Star className="h-5 w-5 text-primary" />, title: "NLP Integration", desc: "Context-aware generation" },
                    { icon: <Quote className="h-5 w-5 text-accent" />, title: "Sentiment Analysis", desc: "Perfectly balanced tone" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors">
                      <div className="h-12 w-12 rounded-xl bg-background/50 flex items-center justify-center shrink-0 border border-white/10">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
                <div className="relative">
                   <TestimonialGenerator />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Decoration */}
      <footer className="py-10 text-center border-t border-white/5 bg-black/40 backdrop-blur-xl relative z-10">
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          © 2024 Karan Techno • Crafted with AI Precision
        </p>
      </footer>
    </div>
  );
}
