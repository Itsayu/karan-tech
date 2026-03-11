"use client";

import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { coreValues } from '@/data/services';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Zap, Target, Eye, Rocket, Award, ShieldCheck } from 'lucide-react';

const teamMembers = [
  { 
    name: 'Gyanendra Pratap Chauhan', 
    role: 'Founder & CEO', 
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    hint: "professional headshot of the CEO"
  },
  { 
    name: 'Aisha Khan', 
    role: 'Lead Cloud Architect', 
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop', 
    hint: "professional headshot of Aisha Khan, lead cloud architect"
  },
  { 
    name: 'Rohan Verma', 
    role: 'Lead Full-Stack Developer', 
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
    hint: "professional headshot of Rohan Verma, lead full-stack developer"
  },
  { 
    name: 'Priya Desai', 
    role: 'Head of UX/UI Design', 
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1887&auto=format&fit=crop',
    hint: "professional headshot of Priya Desai, head of UX/UI design"
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Background Decor inherited from Home */}
      <div className="fixed inset-0 -z-10 bg-neutral-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10">
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary blur-[120px]" />
        </div>
      </div>

      <PageHeader
        title="About Karan Techno"
        description="Driving innovation and digital transformation for businesses across India."
      />

      {/* Who We Are Section */}
      <section className="py-12 md:py-24 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
               <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
               <div className="relative w-full h-80 md:h-[450px] rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                  <Image 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                    alt="Modern collaborative workspace" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
               </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-black tracking-tighter text-white flex items-center">
                <Zap className="h-10 w-10 mr-4 text-primary fill-primary/20" /> Who We Are
              </h2>
              <div className="space-y-4">
                <p className="text-neutral-300 text-lg leading-relaxed">
                  Karan Techno is a dynamic IT consultancy firm based in India, dedicated to providing cutting-edge solutions that empower businesses to thrive in the digital age.
                </p>
                <p className="text-neutral-400 text-lg leading-relaxed border-l-4 border-primary pl-6 py-2 bg-white/5 backdrop-blur-sm rounded-r-xl">
                  Our team of passionate experts brings together diverse skills in web development, mobile app creation, SEO strategy, and cloud architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/5 backdrop-blur-md border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { 
                title: "Our Mission", 
                icon: <Target className="h-8 w-8 text-primary" />, 
                desc: "To empower businesses with innovative and effective IT solutions, fostering growth and success in an ever-evolving digital landscape." 
              },
              { 
                title: "Our Vision", 
                icon: <Eye className="h-8 w-8 text-accent" />, 
                desc: "To be a leading Indian IT consultancy recognized for our creativity, technical expertise, and unwavering commitment to client satisfaction." 
              }
            ].map((card, i) => (
              <Card key={i} className="bg-black/40 border-white/10 shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-black text-white">
                    {card.icon} <span className="ml-4 uppercase tracking-tighter">{card.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-400 text-lg leading-relaxed">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-white mb-16 tracking-tighter uppercase italic underline decoration-primary decoration-4 underline-offset-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center bg-white/5 border-white/5 backdrop-blur-xl shadow-xl hover:border-primary/50 transition-all group">
                  <CardHeader>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                      <Icon className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-primary/5 backdrop-blur-sm border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-white tracking-tighter flex items-center justify-center uppercase">
              <Users className="h-10 w-10 mr-4 text-primary" /> Meet Our Leadership
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">The minds behind the innovation at Karan Techno.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-b from-primary to-transparent rounded-[2rem] opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <Card className="text-center bg-black/40 border-white/10 p-8 rounded-[2rem] hover:shadow-2xl transition-all duration-500">
                  <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20 group-hover:border-primary transition-all duration-500 ring-offset-4 ring-offset-black group-hover:ring-2 ring-primary/50">
                    <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                    <AvatarFallback className="bg-primary/20 text-primary font-bold">
                      {member.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-black text-white tracking-tight">{member.name}</h3>
                  <p className="text-sm text-primary font-bold uppercase tracking-widest mt-2">{member.role}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
