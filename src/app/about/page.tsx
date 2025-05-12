
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { coreValues } from '@/data/services';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Zap, Target, Eye, CheckCircle } from 'lucide-react';

const teamMembers = [
  { name: 'Karan Sharma', role: 'Founder & CEO', avatar: 'https://picsum.photos/200/200?random=10', hint: "professional headshot" },
  { name: 'Priya Singh', role: 'Lead Developer', avatar: 'https://picsum.photos/200/200?random=11', hint: "developer coding" },
  { name: 'Raj Patel', role: 'UX Design Lead', avatar: 'https://picsum.photos/200/200?random=12', hint: "designer smiling" },
  { name: 'Aisha Khan', role: 'Marketing Strategist', avatar: 'https://picsum.photos/200/200?random=13', hint: "marketer presenting" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Karan Techno"
        description="Driving innovation and digital transformation for businesses worldwide."
      />

      <section className="py-12 md:py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/800/600?random=6"
                alt="Karan Techno office"
                layout="fill"
                objectFit="cover"
                data-ai-hint="modern office"
              />
            </div>
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

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg">
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
            <Card className="shadow-lg">
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

      <section className="py-12 md:py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      <Icon className="h-6 w-6" />
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

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10 flex items-center justify-center">
            <Users className="h-8 w-8 mr-3 text-primary" /> Meet Our Team (Placeholder)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center shadow-md p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
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
