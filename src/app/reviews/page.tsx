"use client";

import { PageHeader } from '@/components/shared/PageHeader';
import { Star, Quote, MessageSquare } from 'lucide-react';
// Import verified here:
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const manualTestimonials = [
  {
    quote: "We were struggling to get our artisanal products noticed online. Karan Techno built us a beautiful e-commerce site and their SEO work has put us on the first page of Google. We've seen a 200% increase in online sales!",
    author: "Ayush Kumar Tiwari",
    company: "Jaipur Handcrafts",
    color: "from-orange-500/20 to-transparent"
  },
  {
    quote: "Our delivery logistics were a mess. Karan Techno developed a custom mobile app for our delivery fleet that has streamlined everything. It's intuitive for our riders and gives us real-time tracking. A game-changer!",
    author: "Vivek Negi",
    company: "Mumbai Tiffin Services",
    color: "from-blue-500/20 to-transparent"
  },
  {
    quote: "As a growing fintech startup, we needed a scalable and secure cloud infrastructure. Karan Techno migrated us to AWS with zero downtime. Their serverless expertise has significantly cut our operational costs.",
    author: "Keshav",
    company: "Bangalore Fintech Solutions",
    color: "from-emerald-500/20 to-transparent"
  }
];

export default function ReviewsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Global Background */}
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
          title="Client Voices"
          description="Real stories of growth and digital transformation from our partners across India."
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          
          {/* Founder Section */}
          <section className="mb-24 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="relative shrink-0">
                  <div className="h-32 w-32 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/50">
                    <span className="text-5xl font-black text-primary">G</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-accent p-2 rounded-lg">
                    <Quote className="h-4 w-4 text-white fill-white" />
                  </div>
                </div>
                <div className="text-center md:text-left space-y-4">
                  <Badge variant="outline" className="border-primary/50 text-primary uppercase tracking-widest text-[10px]">
                    Founder's Note
                  </Badge>
                  <h3 className="text-3xl font-black text-white tracking-tighter">A Message from Our Leadership</h3>
                  <p className="text-xl text-neutral-300 italic leading-relaxed font-medium">
                    "We founded Karan Techno with a simple mission: to empower businesses with technology that drives real growth. Seeing our clients succeed is our greatest reward."
                  </p>
                  <div className="pt-2">
                    <p className="text-primary font-bold tracking-tight">Gyanendra Pratap Chauhan</p>
                    <p className="text-neutral-500 text-sm uppercase tracking-widest">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Grid */}
          <section className="space-y-16">
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
                  <Star className="h-8 w-8 text-primary animate-pulse" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
                Success Stories
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {manualTestimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="bg-neutral-900/50 backdrop-blur-xl border-white/10 overflow-hidden group flex flex-col hover:border-primary/50 transition-all duration-500 rounded-3xl"
                >
                  <CardHeader className={`p-8 bg-gradient-to-b ${testimonial.color}`}>
                    <div className="flex justify-between items-start mb-6">
                      <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                        <span className="text-2xl font-black text-primary tracking-tighter uppercase">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <MessageSquare className="h-6 w-6 text-white/10 group-hover:text-primary/20 transition-colors" />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-8 pt-0 flex-grow">
                    <div className="relative">
                      <Quote className="absolute -top-4 -left-2 h-8 w-8 text-primary/10 -z-0" />
                      <p className="text-neutral-300 text-lg leading-relaxed relative z-10 italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-8 border-t border-white/5 bg-black/20">
                    <div>
                      {/* CardTitle is used here, so it MUST be imported above */}
                      <CardTitle className="text-white font-black text-lg tracking-tight">
                        {testimonial.author}
                      </CardTitle>
                      <p className="text-primary text-xs font-bold uppercase tracking-widest mt-1">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black/60 backdrop-blur-2xl relative z-10">
        <p className="text-neutral-500 text-xs tracking-[0.3em] uppercase font-bold">
          © 2026 Karan Techno • Social Proof Verified
        </p>
      </footer>
    </div>
  );
}
