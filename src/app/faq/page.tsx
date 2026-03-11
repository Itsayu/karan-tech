"use client";

import { PageHeader } from '@/components/shared/PageHeader';
import { FaqClient } from '@/components/faq/FaqClient';
import { faqs } from '@/data/faq';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HelpCircle, MessageCircle, ArrowRight, LifeBuoy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function FaqPage() {
  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-primary/30">
      
      {/* 1. FIXED GLOBAL BACKGROUND */}
      <div 
        className="fixed inset-0 w-full h-full -z-50 bg-cover bg-center bg-no-repeat bg-fixed opacity-60"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')` 
        }}
      >
        <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-[2px]" />
      </div>

      <main className="relative z-10">
        <PageHeader
          title="Knowledge Base"
          description="Find answers to common questions about our IT services and delivery processes. We believe in total transparency."
          className="text-white drop-shadow-2xl border-b border-white/5 bg-transparent"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: FAQ Accordion */}
            <div className="lg:col-span-8 space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-black tracking-tighter text-white uppercase italic">General Inquiries</h2>
              </div>
              
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-2 md:p-6 shadow-2xl">
                <FaqClient faqs={faqs} />
              </div>
            </div>

            {/* Right Column: Support Sidebar */}
            <aside className="lg:col-span-4 sticky top-24 space-y-6 animate-in fade-in slide-in-from-right duration-700">
              
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900/50 backdrop-blur-2xl shadow-2xl group">
                {/* Support Illustration/Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop" 
                    alt="Customer Support Technology" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <Badge className="bg-primary text-black font-black tracking-widest text-[10px] uppercase">
                      24/7 Support
                    </Badge>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white tracking-tighter flex items-center">
                      <MessageCircle className="h-6 w-6 mr-3 text-primary" /> Still Curious?
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      If our knowledge base didn't cover your specific use-case, our engineers are ready to chat.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Link href="/contact" passHref>
                      <Button className="w-full h-14 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
                        Open Support Ticket <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4 group/item hover:bg-white/10 transition-colors">
                        <LifeBuoy className="h-5 w-5 text-slate-500 group-hover/item:text-primary transition-colors" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Consultancy Hotline Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Glow decor below sidebar */}
              <div className="h-40 w-full bg-primary/5 rounded-[2.5rem] border border-dashed border-primary/20 flex items-center justify-center p-8 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 leading-relaxed">
                  Trusted by 500+ Digital Enterprises across India
                </p>
              </div>
            </aside>

          </div>
        </div>
      </main>

      {/* Footer Decoration */}
      <footer className="py-12 text-center border-t border-white/5 bg-black/80 backdrop-blur-xl relative z-10">
        <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase font-black">
          © 2026 Karan Techno • Knowledge Systems V.3
        </p>
      </footer>
    </div>
  );
}
