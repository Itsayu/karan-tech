"use client";

import { PageHeader } from '@/components/shared/PageHeader';
import { services, Service as ServiceType } from '@/data/services';
import { CheckCircle, ArrowRight, Layers, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-neutral-950">
      
      {/* 1. UNDERLAY: THE BACKGROUND IMAGE */}
      <div 
        className="fixed inset-0 w-full h-full -z-50 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')` 
        }}
      >
        {/* The Black Glass Overlay */}
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
      </div>

      {/* 2. MAIN CONTENT WRAPPER - Elevated to z-10 */}
      <main className="relative z-10 w-full">
        
        {/* HEADING FIX: Ensure PageHeader is white and high-contrast */}
        <div className="relative py-10 border-b border-white/10">
          <PageHeader
            title="Engineered for Impact"
            description="High-performance IT solutions designed to scale your business and outpace the competition."
            className="text-white drop-shadow-2xl" 
          />
        </div>

        {/* Quick Nav Bar */}
        <div className="sticky top-16 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 hidden md:block">
            <div className="mx-auto max-w-7xl px-4 flex justify-center gap-8">
                {services.map((s) => (
                    <a 
                      key={s.id} 
                      href={`#${s.id.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-primary transition-colors"
                    >
                        {s.name}
                    </a>
                ))}
            </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="space-y-40">
            {services.map((service: ServiceType, index: number) => {
              const IconComponent = service.icon;
              const serviceId = service.id.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              
              // HIGH CONTRAST TECH IMAGES
              const serviceImages: Record<string, string> = {
                'web-development': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000',
                'seo-optimization': 'https://images.unsplash.com/photo-1551288049-bbbda546697a?q=80&w=1000',
                'cloud-solutions': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000',
                'ui-ux-design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000'
              };

              const imageUrl = serviceImages[service.id] || `https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000`;

              return (
                <section 
                  key={service.id} 
                  id={serviceId} 
                  className="scroll-mt-40 group relative"
                >
                  <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-neutral-900/40 backdrop-blur-xl transition-all duration-700 hover:border-primary/50">
                    
                    <div className="grid lg:grid-cols-2 gap-0">
                      
                      {/* TEXT SIDE */}
                      <div className={`p-10 md:p-20 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-last border-l border-white/5' : 'border-r border-white/5'}`}>
                        <div className="space-y-8">
                          <div className="flex items-center gap-6">
                            <div className="h-20 w-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 transform group-hover:-rotate-6">
                                <IconComponent className="h-10 w-10" />
                            </div>
                            <Badge variant="outline" className="border-primary/40 text-primary px-4 py-1 text-xs font-bold tracking-widest uppercase">
                                Capability 0{index + 1}
                            </Badge>
                          </div>

                          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                            {service.name}
                          </h2>

                          <p className="text-neutral-400 text-xl leading-relaxed font-medium">
                            {service.longDescription}
                          </p>

                          <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            {service.details.map((detail, i) => (
                              <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-primary/20 transition-all">
                                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-sm text-neutral-200 font-bold tracking-tight">{detail}</span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-10">
                            <Link href="/contact">
                              <Button size="lg" className="rounded-full px-10 font-black uppercase tracking-widest text-xs h-16 shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                                Discuss Project 
                                <ArrowRight className="ml-3 h-5 w-5" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* IMAGE SIDE - Forced Visibility */}
                      <div className="relative min-h-[500px] lg:min-h-full overflow-hidden z-20">
                        <img 
                          src={imageUrl} 
                          alt={service.name} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          style={{ filter: 'brightness(0.8) contrast(1.2)' }}
                        />
                        {/* High-Contrast Gradient for Mobile Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent lg:hidden" />
                        
                        <div className="absolute top-8 right-8 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                           <Layers className="h-6 w-6 text-primary" />
                        </div>
                      </div>

                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <section className="py-32 bg-primary/5 border-t border-white/10 text-center relative z-10">
            <div className="mx-auto max-w-4xl px-4 space-y-10">
                <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Ready to <span className="text-primary italic">Transform?</span></h3>
                <p className="text-neutral-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                  Join the elite businesses leveraging Karan Techno's engineering excellence to dominate the Indian digital market.
                </p>
                <Link href="/contact">
                    <Button size="lg" variant="outline" className="h-20 px-16 rounded-full border-2 text-white font-black text-xl hover:bg-primary hover:text-black hover:border-primary transition-all duration-500">
                        BOOK A CONSULTATION
                    </Button>
                </Link>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/5 bg-black/80 backdrop-blur-2xl relative z-20">
        <p className="text-neutral-500 text-xs tracking-[0.4em] uppercase font-black">
          © 2026 Karan Techno • Digital Engineering Lab
        </p>
      </footer>
    </div>
  );
}
