"use client";

import { PageHeader } from '@/components/shared/PageHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, MapPin, Clock, Shield Check, Send } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ContactPage() {
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
          title="Get in Touch"
          description="Ready to propel your business forward? Our engineers and consultants are standing by to architect your success."
          className="text-white drop-shadow-2xl border-b border-white/5 bg-transparent"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: The Form */}
            <div className="relative group animate-in fade-in slide-in-from-left duration-700">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Send className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-black tracking-tighter text-white uppercase italic">Send a Message</h2>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Right Column: Info & Imagery */}
            <div className="space-y-8 animate-in fade-in slide-in-from-right duration-700">
              
              {/* Image Fix - Cyber Support Theme */}
              <div className="relative w-full h-80 rounded-[2rem] shadow-2xl overflow-hidden border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" 
                  alt="Digital connection and support" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.4] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-6 left-8">
                    <Badge className="bg-primary/20 text-primary border-primary/50 backdrop-blur-xl px-4 py-1 uppercase tracking-widest text-[10px]">
                        Secure Communication Channel
                    </Badge>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="p-10 bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl space-y-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Contact Details</h2>
                    <p className="text-slate-400 font-medium">Reach out via our encrypted channels for a consultation.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center group cursor-pointer">
                    <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mr-6 group-hover:border-primary/50 transition-all">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email Address</span>
                        <a href="mailto:kchauhan726@gmail.com" className="text-xl text-slate-200 font-bold hover:text-primary transition-colors">
                          kchauhan726@gmail.com
                        </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mr-6 group-hover:border-primary/50 transition-all shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Headquarters</span>
                        <span className="text-xl text-slate-200 font-bold leading-tight">
                          GG15, Casa Homes, Sector 115,<br /> Mohali, Punjab - 140307
                        </span>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="pt-8 border-t border-white/5">
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                        <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <div className="space-y-2">
                            <h4 className="font-black text-white uppercase tracking-tighter">Availability (IST)</h4>
                            <div className="space-y-1">
                                <p className="text-sm text-slate-300 flex justify-between gap-8">
                                    <span>Monday - Friday</span>
                                    <span className="font-bold text-primary">09:00 - 18:00</span>
                                </p>
                                <p className="text-sm text-slate-500 flex justify-between gap-8 italic">
                                    <span>Weekend</span>
                                    <span>Emergency Support Only</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 w-fit border border-white/5">
                        <ShieldCheck className="h-3 w-3 text-emerald-500" />
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">End-to-End Encrypted Inquiry</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/80 backdrop-blur-xl relative z-10">
        <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase font-black">
          © 2026 Karan Techno • Comms Protocol V.1
        </p>
      </footer>
    </div>
  );
}
