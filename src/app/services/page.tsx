"use client";

import { PageHeader } from '@/components/shared/PageHeader';
import { services, Service as ServiceType } from '@/data/services';
import { CheckCircle, ArrowRight, Layers } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-foreground selection:bg-primary/30">
      
      {/* 1. FIXED BACKGROUND UNDERLAY */}
      <div 
        className="fixed inset-0 w-full h-full -z-50 bg-cover bg-center bg-no-repeat bg-fixed opacity-60"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')` 
        }}
      >
        <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-[1px]" />
      </div>

      <main className="relative z-10 w-full">
        
        <div className="relative py-12 md:py-16 border-b border-white/5">
          <PageHeader
            title="Engineered for Impact"
            description="High-performance IT solutions designed to scale your business and outpace the competition."
            className="text-white drop-shadow-2xl" 
          />
        </div>

        {/* Quick Nav Bar */}
        <div className="sticky top-16 z-40 bg-black/70 backdrop-blur-xl border-b border-white/10 py-5 hidden md:block">
            <div className="mx-auto max-w-7xl px-4 flex justify-center gap-8">
                {services.map((s) => (
                    <a 
                      key={s.id} 
                      href={`#${s.id.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-primary transition-colors"
                    >
                        {s.name}
                    </a>
                ))}
            </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="space-y-40 md:space-y-52">
            {services.map((service: ServiceType, index: number) => {
              const IconComponent = service.icon;
              const serviceId = service.id.toLowerCase();
              const serviceName = service.name.toLowerCase();
              
              /** * IMAGE LOGIC FIX: 
               * We check the ID and the Name for keywords to ensure unique images.
               */
              let imageUrl = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000"; // Default

              if (serviceId.includes('web') || serviceName.includes('web')) {
                imageUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000";
              } else if (serviceId.includes('seo') || serviceName.includes('seo') || serviceName.includes('marketing')) {
                imageUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000";
              } else if (serviceId.includes('cloud') || serviceName.includes('cloud') || serviceId.includes('server')) {
                imageUrl = "https://images.unsplash.com/photo-1558494949-ef010ccdcc32?q=80&w=2000";
              } else if (serviceId.includes('design') || serviceName.includes('ux') || serviceName.includes('ui')) {
                imageUrl = "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2000";
              } else if (serviceId.includes('app') || serviceName.includes('mobile')) {
                imageUrl = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000";
              }

              const anchorId = service.id.toLowerCase().replace(/[^a-z0-9]+/g, '-');

              return (
                <section 
                  key={service.id} 
                  id={anchorId} 
                  className="scroll-mt-40 group relative"
                >
                  <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-neutral-900 backdrop-blur-sm transition-all duration-700 hover:border-primary/50 hover:shadow-2xl">
                    
                    <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                      
                      {/* TEXT COLUMN */}
                      <div className={`p-10 md:p-20 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-last border-l border-white/5' : 'border-r border-white/5'}`}>
                        <div className="space-y-8 relative z-20">
                          <div className="flex items-center gap-6">
                            <div className="h-20 w-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl shadow-primary/5">
                                <IconComponent className="h-10 w-10" />
                            </div>
                            <Badge variant="outline" className="border-primary/40 text-primary px-5 py-1.5 text-[11px] font-black tracking-widest uppercase rounded-full">
                                Capability 0{index + 1}
                            </Badge>
                          </div>

                          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">
                            {service.name}
                          </h2>

                          <p className="text-neutral-400 text-xl leading-relaxed font-medium italic border-l-2 border-primary/30 pl-6">
                            {service.longDescription}
                          </p>

                          <div className="grid sm:grid-cols-2 gap-5 pt-4">
                            {service.details.map((detail, i) => (
                              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all duration-300">
                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-neutral-300 font-bold tracking-tight leading-snug">{detail}</span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-10">
                            <Link href="/contact">
                              <Button size="lg" className="rounded-full px-12 font-black uppercase tracking-widest text-xs h-16 shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
                                Discuss Project 
                                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* IMAGE COLUMN - Fixed Visibility */}
                      <div className="relative min-h-[450px] lg:min-h-full overflow-hidden z-10 bg-neutral-900 border-t lg:border-t-0 border-white/5">
                        <img 
                          src={imageUrl} 
                          alt={service.name} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 lg:hidden" />
                        
                        <div className="absolute top-10 right-10 p-5 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-2xl">
                           <Layers className="h-7 w-7 text-primary" />
                        </div>
                      </div>

                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        {/* Global CTA */}
        <section className="py-32 md:py-40 bg-primary/5 border-t border-white/10 text-center relative z-10">
            <div className="absolute inset-0 w-full h-full -z-10 opacity-10">
                <div className="absolute top-0 left-0 w-[40%] h-[40%] rounded-full bg-primary blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[40%] h-[40%] rounded-full bg-blue-600 blur-[120px]" />
            </div>
            
            <div className="mx-auto max-w-4xl px-4 space-y-12">
                <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">Ready to <span className="text-primary italic">Transform?</span></h3>
                <p className="text-neutral-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                  Join the elite businesses leveraging Karan Techno's engineering excellence to dominate the Indian digital market.
                </p>
                <Link href="/contact">
                    <Button size="lg" variant="outline" className="h-20 px-16 rounded-full border-2 text-white font-black text-xl hover:bg-primary hover:text-black hover:border-primary transition-all duration-500 shadow-2xl shadow-primary/5">
                        BOOK A FREE CONSULTATION
                    </Button>
                </Link>
            </div>
        </section>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/80 backdrop-blur-xl relative z-20">
        <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase font-black">
          © 2026 Karan Techno • Digital Engineering Lab
        </p>
      </footer>
    </div>
  );
}
