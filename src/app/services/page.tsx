"use client";

import { PageHeader } from '@/components/shared/PageHeader';
import { services, Service as ServiceType } from '@/data/services';
import { CheckCircle, ArrowRight, Layers, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      {/* 1. GLOBAL BACKGROUND */}
      <div 
        className="fixed inset-0 w-full h-full -z-20 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')` 
        }}
      >
        <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-[2px]" />
      </div>

      <main className="relative z-10">
        <PageHeader
          title="Engineered for Impact"
          description="We deliver high-performance IT solutions designed to scale your business and outpace the competition."
          className="bg-transparent border-b border-white/5"
        />

        {/* Quick Nav Bar */}
        <div className="sticky top-16 z-30 bg-black/60 backdrop-blur-xl border-b border-white/10 py-4 hidden md:block">
            <div className="mx-auto max-w-7xl px-4 flex justify-center gap-6">
                {services.map((s) => (
                    <a 
                      key={s.id} 
                      href={`#${s.id.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-primary transition-colors"
                    >
                        {s.name}
                    </a>
                ))}
            </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-32">
            {services.map((service: ServiceType, index: number) => {
              const IconComponent = service.icon;
              const serviceId = service.id.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              
              // DEFINED ONLINE IMAGES
              const serviceImages: Record<string, string> = {
                'web-development': 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop',
                'seo-optimization': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
                'cloud-solutions': 'https://images.unsplash.com/photo-1558494949-ef010ccdcc32?q=80&w=2000&auto=format&fit=crop',
                'ui-ux-design': 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000&auto=format&fit=crop'
              };

              const imageUrl = serviceImages[service.id] || `https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop`;

              return (
                <section 
                  key={service.id} 
                  id={serviceId} 
                  className="scroll-mt-32 group"
                >
                  <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.05]">
                    
                    <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                      
                      {/* Text Content */}
                      <div className={`p-8 md:p-16 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                <IconComponent className="h-8 w-8" />
                            </div>
                            <Badge variant="outline" className="border-primary/30 text-primary uppercase tracking-tighter">
                                Service 0{index + 1}
                            </Badge>
                          </div>

                          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
                            {service.name}
                          </h2>

                          <p className="text-neutral-400 text-lg leading-relaxed italic border-l-2 border-primary/20 pl-6">
                            {service.longDescription}
                          </p>

                          <div className="space-y-4 pt-4">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 flex items-center">
                                <Layers className="h-4 w-4 mr-2" /> Core Features
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {service.details.map((detail, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                  <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                                  <span className="text-sm text-neutral-300 font-medium leading-tight">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-8">
                            <Link href="/contact" passHref>
                              <Button size="lg" className="rounded-full px-8 font-black uppercase tracking-widest text-xs h-14 group/btn bg-primary hover:bg-primary/90">
                                Discuss Requirements 
                                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* FIXED Image Section */}
                      <div className="relative min-h-[450px] lg:min-h-full overflow-hidden bg-neutral-900">
                        <img 
                          src={imageUrl} 
                          alt={service.name} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                          loading="lazy"
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/20 to-transparent lg:hidden" />
                        
                        {/* Floating Interaction Hint */}
                        <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center animate-pulse">
                                    <MousePointer2 className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Industry Standard Execution</p>
                                    <p className="text-neutral-400 text-xs tracking-tight uppercase">Proprietary Workflow</p>
                                </div>
                            </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-24 bg-primary/10 backdrop-blur-xl border-t border-white/10 text-center">
            <div className="mx-auto max-w-3xl px-4 space-y-8">
                <h3 className="text-4xl font-black text-white tracking-tighter">Ready to start your digital journey?</h3>
                <p className="text-neutral-400 text-lg">Our experts are standing by to transform your vision into a market-leading reality.</p>
                <Link href="/contact">
                    <Button size="lg" variant="outline" className="h-16 px-12 rounded-full border-2 text-white font-bold text-lg hover:bg-white/10 transition-all border-white/20">
                        Schedule a Free Strategy Call
                    </Button>
                </Link>
            </div>
        </section>
      </main>
    </div>
  );
}
