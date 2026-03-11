"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Quote, Sparkles, MoveDown, Globe, Shield, Cpu } from "lucide-react";
import { TestimonialGenerator } from "@/components/TestimonialGenerator";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden text-foreground">
      
      {/* 1. GLOBAL BACKGROUND IMAGE (The Universe/Tech Background) */}
      <div 
        className="fixed inset-0 w-full h-full -z-50 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')` 
        }}
      >
        {/* Dark overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-[2px]" />
      </div>

      <main className="flex-grow relative z-10">
        
        {/* 2. HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-20 pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left space-y-8 z-20 animate-in fade-in slide-in-from-left duration-1000">
              <Badge variant="outline" className="px-4 py-1 text-sm font-semibold tracking-widest uppercase border-primary/50 text-primary bg-primary/10 backdrop-blur-xl">
                ✨ Premium IT Consultancy
              </Badge>
              <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl leading-[1.05]">
                Empowering <span className="text-primary drop-shadow-[0_0_20px_rgba(var(--primary),0.6)]">Digital</span> Evolution
              </h1>
              <p className="max-w-xl mx-auto lg:mx-0 text-xl text-neutral-300 leading-relaxed">
                Karan Techno delivers high-performance IT solutions. We bridge the gap between complex technology and your business goals.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Link href="/services">
                  <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all rounded-full bg-primary text-primary-foreground">
                    Get Started
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold border-2 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white rounded-full border-white/20">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: THE MISSING IMAGE FIX */}
            <div className="relative group perspective-1000 z-30">
               {/* Glow Effect behind image */}
               <div className="absolute -inset-4 bg-primary/20 rounded-full blur-[100px] opacity-50 group-hover:opacity-100 transition duration-1000"></div>
               
               {/* The Hero Image Container */}
               <div className="relative h-[400px] sm:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 bg-neutral-900/50 backdrop-blur-sm transform group-hover:scale-[1.02] transition-all duration-700">
                <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                    alt="Consultancy and Technology"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110"
                />
                {/* Decorative Overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
                
                {/* Floating Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <Cpu className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-white font-bold text-sm tracking-tight">AI & Cloud Integrated Solutions</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
            <MoveDown className="h-6 w-6 text-white" />
          </div>
        </section>

        {/* 3. SERVICES SECTION */}
        <section id="services" className="py-24 bg-black/40 backdrop-blur-xl border-y border-white/5 relative z-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl mb-4 uppercase">
                  Our Expertise
                </h2>
                <div className="h-2 w-20 bg-primary rounded-full mb-6" />
                <p className="text-lg text-neutral-400">
                  Specialized IT services designed for scalability and global impact.
                </p>
              </div>
              <Link href="/services">
                <Button variant="link" className="text-primary font-bold text-lg group hover:no-underline">
                  Browse All <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
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

        {/* 4. AI CAPABILITIES SECTION */}
        <section className="py-32 relative z-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <Badge className="bg-primary/20 text-primary border-primary/50 backdrop-blur-xl px-4 py-1">
                  <Sparkles className="h-3 w-3 mr-2 fill-primary" /> 
                  Innovation Engine
                </Badge>
                <h2 className="text-4xl font-black tracking-tight sm:text-6xl text-white">
                  Intelligent <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Automation</span>
                </h2>
                <p className="text-xl text-neutral-400 leading-relaxed">
                  We don't just build software; we build intelligence. Our Testimonial Engine below is a live demonstration of how we can automate complex content workflows for your business.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex gap-4 p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl">
                    <Shield className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Secure</h4>
                      <p className="text-sm text-neutral-500">Enterprise-grade cloud security.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl">
                    <Globe className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Global</h4>
                      <p className="text-sm text-neutral-500">Infrastructure built for scale.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TESTIMONIAL GENERATOR COMPONENT */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                <TestimonialGenerator />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-white/5 bg-black/60 backdrop-blur-2xl relative z-30">
        <p className="text-neutral-500 text-xs tracking-[0.3em] uppercase font-bold">
          © 2026 Karan Techno • Engineering the Future
        </p>
      </footer>
    </div>
  );
}
