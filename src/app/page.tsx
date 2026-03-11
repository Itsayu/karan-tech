"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Quote, Sparkles, MoveDown, Globe, Shield, Cpu, BrainCircuit } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden text-foreground">
      
      {/* 1. GLOBAL BACKGROUND IMAGE (The Universe/Tech Background) */}
      <div 
        className="fixed inset-0 w-full h-full -z-50 bg-cover bg-center bg-no-repeat bg-fixed opacity-60"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')` 
        }}
      >
        {/* Dark overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-[2px]" />
      </div>

      <main className="flex-grow relative z-10">
        
        {/* 2. HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
          {/* Subtle Glow behind content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -z-10 opacity-50" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left space-y-8 z-20 animate-in fade-in slide-in-from-left duration-1000">
              <Badge variant="outline" className="px-4 py-1 text-sm font-semibold tracking-widest uppercase border-primary/50 text-primary bg-primary/10 backdrop-blur-xl">
                ✨ Premium IT Consultancy
              </Badge>
              <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl leading-[1.05]">
                Empowering <span className="text-primary drop-shadow-[0_0_20px_rgba(var(--primary),0.6)]">Digital</span> Evolution
              </h1>
              <p className="max-w-xl mx-auto lg:mx-0 text-xl text-muted-foreground leading-relaxed">
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

            {/* Right Column: FIXED IMAGE LAYERING & SOURCE */}
            <div className="relative group perspective-1000 z-30 hidden md:block">
               {/* Glow Effect behind image */}
               <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-[100px] opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
               
               {/* The Hero Image Container - Cyber Security/Digital Theme */}
               <div className="relative h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-black backdrop-blur-sm transform group-hover:scale-[1.02] transition-all duration-700">
                <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                    alt="Cyber Security Network"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:brightness-110"
                    loading="priority"
                />
                
                {/* Decorative Overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Floating Badge on Image */}
                <div className="absolute bottom-8 left-8 right-8 p-5 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                            <Cpu className="h-6 w-6 text-primary animate-pulse" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm tracking-tight">AI & Cloud Integrated Solutions</p>
                            <p className="text-muted-foreground text-xs uppercase tracking-widest mt-1">Global Standard Architecture</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 z-10">
            <MoveDown className="h-6 w-6 text-white" />
          </div>
        </section>

        {/* 3. SERVICES SECTION */}
        <section id="services" className="py-24 bg-black/40 backdrop-blur-xl border-y border-white/5 relative z-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl mb-4 uppercase leading-[0.9]">
                  Our <span className="text-primary italic">Expertise</span>
                </h2>
                <div className="h-2 w-20 bg-primary rounded-full mb-6" />
                <p className="text-lg text-muted-foreground">
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
        <section className="py-32 relative z-20 overflow-hidden bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            
            {/* Glow décor behind image/content */}
            <div className="absolute inset-0 w-full h-full -z-10">
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px]" />
                <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
            </div>

            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Text Content */}
              <div className="space-y-8 lg:col-span-7">
                <Badge className="bg-accent/10 text-accent border-accent/30 backdrop-blur-xl px-4 py-1 uppercase tracking-widest text-xs">
                  <Sparkles className="h-3.5 w-3.5 mr-2 fill-accent" /> 
                  Innovation Engine
                </Badge>
                <h2 className="text-4xl font-black tracking-tight sm:text-6xl text-white leading-[1.05]">
                  Intelligent <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/50 drop-shadow-[0_0_15px_rgba(var(--accent),0.3)]">Automation</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  We don't just build software; we build intelligence. We leverage advanced LLMs and context-aware NLP to automate complex content and data workflows. 
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  {[
                    { icon: <Shield className="h-7 w-7 text-white" />, title: "Secure Deployment", desc: "Enterprise-grade guardrails for AI models." },
                    { icon: <Globe className="h-7 w-7 text-white" />, title: "Context Aware", desc: "Generating high-relevance, domain-specific output." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-6 rounded-[2rem] border border-white/5 bg-white/[0.03] backdrop-blur-md">
                      <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/40">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{item.title}</h4>
                        <p className="text-sm text-neutral-400 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMAGE COLUMN FIX & SOURCE - Brain/AI Theme */}
              <div className="relative group lg:col-span-5 aspect-square lg:aspect-auto lg:h-[600px] z-10">
                <div className="absolute -inset-2 bg-gradient-to-br from-accent to-primary rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-neutral-900 flex items-center justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2069&auto=format&fit=crop"
                        alt="AI and Digital Brain Concept"
                        className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                    
                    {/* Centered Brain Icon Decor */}
                    <div className="relative z-20 p-6 rounded-full bg-background/20 border-2 border-accent/40 backdrop-blur-sm shadow-2xl transform hover:scale-110 transition-transform">
                        <BrainCircuit className="h-20 w-20 text-accent animate-pulse" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- END AI SECTION --- */}

      </main>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-white/5 bg-black/60 backdrop-blur-2xl relative z-30">
        <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-bold">
          © 2026 Karan Techno • Engineering the Future
        </p>
      </footer>
    </div>
  );
}
