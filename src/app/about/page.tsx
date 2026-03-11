"use client";

import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { coreValues } from '@/data/services';
import { Zap, Target, Eye, Users } from 'lucide-react';

const teamMembers = [
  { name: 'Gyanendra Pratap Chauhan', role: 'Founder & CEO' },
  { name: 'Aisha Khan', role: 'Lead Cloud Architect' },
  { name: 'Rohan Verma', role: 'Lead Full-Stack Developer' },
  { name: 'Priya Desai', role: 'Head of UX/UI Design' },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-primary/30">
      
      {/* 1. FIXED BACKGROUND DECOR */}
      <div className="fixed inset-0 -z-20 bg-neutral-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
        </div>
      </div>

      <PageHeader
        title="About Karan Techno"
        description="Driving innovation and digital transformation for businesses across India."
      />

      <main className="relative z-10">
        
        {/* Who We Are Section */}
        <section className="py-16 md:py-28 bg-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              {/* IMAGE COLUMN FIX */}
              <div className="relative group z-10">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative w-full h-80 md:h-[500px] rounded-2xl shadow-2xl overflow-hidden border border-white/10 bg-neutral-900">
                  {/* Standard img tag to bypass Next.js Image optimization blocks */}
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                    alt="Modern collaborative workspace" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* TEXT COLUMN */}
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white flex items-center">
                  <Zap className="h-12 w-12 mr-4 text-primary fill-primary/20 animate-pulse" /> 
                  Who We Are
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 text-xl leading-relaxed font-medium">
                    Karan Techno is a dynamic IT consultancy firm based in India, dedicated to providing cutting-edge solutions that empower businesses to thrive in the digital age.
                  </p>
                  <div className="p-6 rounded-2xl bg-white/[0.03] border-l-4 border-primary backdrop-blur-sm">
                    <p className="text-slate-400 text-lg leading-relaxed italic">
                      "Our team of passionate experts brings together diverse skills in web development, mobile app creation, SEO strategy, and cloud architecture to foster growth."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white/[0.02] backdrop-blur-md border-y border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { 
                  title: "Our Mission", 
                  icon: <Target className="h-10 w-10 text-primary" />, 
                  desc: "To empower businesses with innovative and effective IT solutions, fostering growth and success in an ever-evolving digital landscape." 
                },
                { 
                  title: "Our Vision", 
                  icon: <Eye className="h-10 w-10 text-blue-400" />, 
                  desc: "To be a leading Indian IT consultancy recognized for our creativity, technical expertise, and unwavering commitment to client satisfaction." 
                }
              ].map((card, i) => (
                <Card key={i} className="bg-neutral-900/40 border-white/10 shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden relative group">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-3xl font-black text-white tracking-tighter">
                      {card.icon} <span className="ml-5 uppercase italic">{card.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-lg leading-relaxed font-medium">{card.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-black text-center text-white mb-20 tracking-tighter uppercase italic underline decoration-primary decoration-8 underline-offset-8">
              Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="text-center bg-white/[0.02] border-white/5 backdrop-blur-xl shadow-2xl hover:border-primary/40 transition-all duration-500 group py-8">
                    <CardHeader>
                      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10 text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-all duration-700 transform group-hover:rotate-12 shadow-xl shadow-primary/5">
                        <Icon className="h-12 w-12" />
                      </div>
                      <CardTitle className="text-2xl font-black text-white tracking-tight uppercase italic">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 leading-relaxed font-bold text-sm tracking-tight px-4">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-32 bg-primary/5 backdrop-blur-xl border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 space-y-6">
              <h2 className="text-5xl font-black text-white tracking-tighter flex items-center justify-center uppercase italic">
                <Users className="h-12 w-12 mr-6 text-primary" /> The Leadership
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto font-bold text-lg uppercase tracking-widest opacity-60">The architects of Karan Techno's success.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {teamMembers.map((member) => (
                <div key={member.name} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-b from-primary/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 blur-md"></div>
                  <Card className="relative text-center bg-neutral-900 border-white/10 p-10 rounded-[2.5rem] hover:shadow-[0_0_50px_-10px_rgba(var(--primary-rgb),0.4)] transition-all duration-700 flex flex-col items-center">
                    
                    <div className="w-24 h-24 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500 shadow-inner">
                      <span className="text-3xl font-black text-primary tracking-tighter italic">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-black text-white tracking-tight leading-tight mb-3">
                      {member.name}
                    </h3>
                    <div className="h-1 w-12 bg-primary/40 mb-4 group-hover:w-20 transition-all duration-700 rounded-full" />
                    <p className="text-xs text-primary font-black uppercase tracking-[0.2em]">
                      {member.role}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
