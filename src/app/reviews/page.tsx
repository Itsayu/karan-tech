
import { PageHeader } from '@/components/shared/PageHeader';
import { TestimonialGenerator } from '@/components/reviews/TestimonialGenerator';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import Image from 'next/image'; // Not used directly on this page
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'; // AvatarImage will be handled


const manualTestimonials = [
  {
    quote: "We were struggling to get our artisanal products noticed online. Karan Techno built us a beautiful e-commerce site and their SEO work has put us on the first page of Google. We\'ve seen a 200% increase in online sales!",
    author: "Priya Mehta",
    company: "Jaipur Handcrafts",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "smiling woman"
  },
  {
    quote: "Our delivery logistics were a mess. Karan Techno developed a custom mobile app for our delivery fleet that has streamlined everything. It\'s intuitive for our riders and gives us real-time tracking. A game-changer!",
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
        title="Client Voices & AI Showcase"
        description="See what our clients say about us and experience our AI-powered testimonial generator."
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-28 py-12 md:py-16 space-y-16">
        
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-10 flex items-center justify-center">
            <Star className="h-8 w-8 mr-3 text-accent" /> What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {manualTestimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg interactive-transition hover:shadow-xl hover:scale-[1.02] flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12 border-2 border-primary/50 group-hover:border-accent">
                        {/* <AvatarImage 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          data-ai-hint={testimonial.hint}
                        /> */} {/* AvatarImage removed */}
                        <AvatarFallback>{testimonial.author.substring(0,1).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg font-semibold">{testimonial.author}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground italic">\"{testimonial.quote}\"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-12 bg-secondary/30 rounded-lg p-6 md:p-10">
           <h2 className="text-3xl font-bold text-center text-foreground mb-2">
            AI-Powered Testimonial Generator
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Curious about how AI can craft compelling content? Try our testimonial generator. Select a service and see the magic happen!
          </p>
          <TestimonialGenerator />
        </section>

      </div>
    </>
  );
}
