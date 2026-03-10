
import { PageHeader } from '@/components/shared/PageHeader';
import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const manualTestimonials = [
  {
    quote: "We were struggling to get our artisanal products noticed online. Karan Techno built us a beautiful e-commerce site and their SEO work has put us on the first page of Google. We've seen a 200% increase in online sales!",
    author: "Ayush Kumar Tiwari",
    company: "Jaipur Handcrafts",
    image: "https://images.unsplash.com/photo-1599423300020-83232693df94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageHint: "artisanal pottery"
  },
  {
    quote: "Our delivery logistics were a mess. Karan Techno developed a custom mobile app for our delivery fleet that has streamlined everything. It's intuitive for our riders and gives us real-time tracking. A game-changer!",
    author: "Vivek Negi",
    company: "Mumbai Tiffin Services",
    image: "https://images.unsplash.com/photo-1621972750749-0f836155d640?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageHint: "food delivery boxes"
  },
  {
    quote: "As a growing fintech startup, we needed a scalable and secure cloud infrastructure. Karan Techno migrated us to AWS with zero downtime. Their serverless expertise has significantly cut our operational costs.",
    author: "Keshav",
    company: "Bangalore Fintech Solutions",
    image: "https://images.unsplash.com/photo-1601597111158-2f9635247c4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageHint: "mobile banking app"
  }
];


export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        title="Client Voices"
        description="See what our clients say about us."
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <section className="mb-16 bg-background p-8 rounded-2xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Gyanendra pratap chahuan"
                    data-ai-hint="professional man in a suit"
                    width={150}
                    height={150}
                    className="rounded-lg object-cover shadow-lg"
                />
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground">A Message from Our Founder</h3>
                    <p className="text-lg text-muted-foreground mt-2 italic">
                    "We founded Karan Techno with a simple mission: to empower businesses with technology that drives real growth. Seeing our clients succeed is our greatest reward."
                    </p>
                    <p className="text-right text-foreground font-semibold mt-4">- Gyanendra Pratap Chauhan, Founder</p>
                </div>
            </div>
        </section>

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
                className="bg-secondary/30 border-l-4 border-accent overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
              >
                <CardHeader className="p-0">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.imageHint}
                        data-ai-hint={testimonial.imageHint}
                        width={400}
                        height={250}
                        className="object-cover w-full h-48"
                    />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <p className="text-muted-foreground italic text-lg">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="bg-secondary/50 p-6 flex flex-col items-center justify-center text-center">
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
