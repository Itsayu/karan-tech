
import { PageHeader } from '@/components/shared/PageHeader';
import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';


const manualTestimonials = [
  {
    quote: "We were struggling to get our artisanal products noticed online. Karan Techno built us a beautiful e-commerce site and their SEO work has put us on the first page of Google. We've seen a 200% increase in online sales!",
    author: "Priya Mehta",
    company: "Jaipur Handcrafts",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "smiling woman"
  },
  {
    quote: "Our delivery logistics were a mess. Karan Techno developed a custom mobile app for our delivery fleet that has streamlined everything. It's intuitive for our riders and gives us real-time tracking. A game-changer!",
    author: "Rohan Joshi",
    company: "Mumbai Tiffin Services",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "man with glasses"
  },
  {
    quote: "As a growing fintech startup, we needed a scalable and secure cloud infrastructure. Karan Techno migrated us to AWS with zero downtime. Their serverless expertise has significantly cut our operational costs.",
    author: "Anjali Rao",
    company: "Bangalore Fintech Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "professional woman"
  }
];


export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        title="Client Voices"
        description="See what our clients say about us."
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-28 py-12 md:py-16">
        
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center">
              <Star className="h-8 w-8 mr-3 text-accent" /> What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">We are proud to have partnered with amazing businesses.</p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {manualTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-secondary/30 border-l-4 border-accent overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground italic text-lg mb-6">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="bg-secondary/50 p-6 flex flex-col items-center justify-center">
                  <Avatar className="w-20 h-20 mb-4 border-4 border-background group-hover:border-accent transition-colors duration-300">
                      <AvatarImage 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        data-ai-hint={testimonial.hint}
                        className="object-cover"
                      />
                      <AvatarFallback>{testimonial.author.substring(0,1).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl font-bold">{testimonial.author}</CardTitle>
                  <p className="text-md text-muted-foreground">{testimonial.company}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
