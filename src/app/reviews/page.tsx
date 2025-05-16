
import { PageHeader } from '@/components/shared/PageHeader';
import { TestimonialGenerator } from '@/components/reviews/TestimonialGenerator';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';


// Sample manual testimonials
const manualTestimonials = [
  {
    quote: "Karan Techno transformed our online presence with a stunning website and effective SEO. Our traffic has skyrocketed!",
    author: "Sunita Sharma",
    company: "Blossom Boutique",
    avatar: "https://placehold.co/100x100.png",
    hint: "smiling woman"
  },
  {
    quote: "The mobile app developed by Karan Techno is flawless and user-friendly. Their team was professional and highly skilled.",
    author: "Rajesh Kumar",
    company: "QuickTask Ltd.",
    avatar: "https://placehold.co/100x100.png",
    hint: "man with glasses"
  },
  {
    quote: "Outstanding UI/UX design work! Karan Techno understood our vision perfectly and delivered beyond expectations.",
    author: "Anita Desai",
    company: "Innovate Solutions",
    avatar: "https://placehold.co/100x100.png",
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        
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
                        <AvatarImage 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          data-ai-hint={testimonial.hint}
                        />
                        <AvatarFallback>{testimonial.author.substring(0,1)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg font-semibold">{testimonial.author}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
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
