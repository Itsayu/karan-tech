
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { coreValues } from '@/data/services';
// import Image from 'next/image'; // Image component removed from "Who We Are"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // AvatarImage will be conditionally removed or handled
import { Users, Zap, Target, Eye } from 'lucide-react';

const teamMembers = [
  { name: 'Karan Sharma', role: 'Founder & CEO', avatar: 'https://placehold.co/200x200.png', hint: "professional headshot" },
  { name: 'Priya Singh', role: 'Lead Developer', avatar: 'https://placehold.co/200x200.png', hint: "developer coding" },
  { name: 'Raj Patel', role: 'UX Design Lead', avatar: 'https://placehold.co/200x200.png', hint: "designer smiling" },
  { name: 'Aisha Khan', role: 'Marketing Strategist', avatar: 'https://placehold.co/200x200.png', hint: "marketer presenting" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Karan Techno"
        description="Driving innovation and digital transformation for businesses worldwide."
        className="animated-gradient-bg"
      />

      <section className="py-12 md:px-28 md:py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 items-center"> {/* Changed to grid-cols-1 */}
            {/* Image div removed */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <Zap className="h-7 w-7 mr-2 text-primary" /> Who We Are
              </h2>
              <p className="text-muted-foreground mb-4">
                Karan Techno is a dynamic IT consultancy firm dedicated to providing cutting-edge solutions that empower businesses to thrive in the digital age. We believe in the transformative power of technology and strive to create impactful digital experiences.
              </p>
              <p className="text-muted-foreground">
                Our team of passionate experts brings together diverse skills in web development, mobile app creation, SEO strategy, and UI/UX design. We work collaboratively with our clients to understand their unique challenges and deliver tailored solutions that drive results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:px-28 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg interactive-transition hover:shadow-xl hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  <Target className="h-6 w-6 mr-2 text-primary" /> Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower businesses with innovative and effective IT solutions, fostering growth and success in an ever-evolving digital landscape. We are committed to delivering excellence and building long-lasting partnerships with our clients.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg interactive-transition hover:shadow-xl hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  <Eye className="h-6 w-6 mr-2 text-primary" /> Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a leading global IT consultancy recognized for our creativity, technical expertise, and unwavering commitment to client satisfaction. We aim to shape the future of digital experiences through continuous learning and adaptation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:px-28 md:py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center shadow-lg interactive-transition hover:shadow-xl hover:scale-[1.03] transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4 interactive-transition group-hover:bg-accent">
                      <Icon className="h-6 w-6 interactive-transition group-hover:scale-110" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:px-28 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10 flex items-center justify-center">
            <Users className="h-8 w-8 mr-3 text-primary" /> Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center shadow-md p-6 interactive-transition hover:shadow-xl hover:scale-105">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary interactive-transition group-hover:border-accent">
                  {/* <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} /> */} {/* AvatarImage removed */}
                  <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
