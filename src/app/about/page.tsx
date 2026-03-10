
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { coreValues } from '@/data/services';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Zap, Target, Eye } from 'lucide-react';

const teamMembers = [
  { 
    name: 'Karan Sharma', 
    role: 'Founder & CEO', 
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hint: "professional headshot of the CEO, Karan Sharma"
  },
  { 
    name: 'Aisha Khan', 
    role: 'Lead Cloud Architect', 
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    hint: "professional headshot of Aisha Khan, lead cloud architect"
  },
  { 
    name: 'Rohan Verma', 
    role: 'Lead Full-Stack Developer', 
    avatar: 'https://images.unsplash.com/photo-1624846433221-5a5c6a8a6b6c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hint: "professional headshot of Rohan Verma, lead full-stack developer"
  },
  { 
    name: 'Priya Desai', 
    role: 'Head of UX/UI Design', 
    avatar: 'https://images.unsplash.com/photo-1557555187-23d685287d39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hint: "professional headshot of Priya Desai, head of UX/UI design"
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Karan Techno"
        description="Driving innovation and digital transformation for businesses across India."
      />

      <section className="py-12 md:px-28 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative w-full h-80 md:h-96 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <Image 
                    src="https://images.unsplash.com/photo-1593349480503-685d3a4c07a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="A modern Indian office with a collaborative environment" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center">
                <Zap className="h-8 w-8 mr-3 text-primary" /> Who We Are
              </h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Karan Techno is a dynamic IT consultancy firm based in India, dedicated to providing cutting-edge solutions that empower businesses to thrive in the digital age. We believe in the transformative power of technology and strive to create impactful digital experiences.
              </p>
              <p className="text-muted-foreground text-lg">
                Our team of passionate experts brings together diverse skills in web development, mobile app creation, SEO strategy, and cloud architecture. We work collaboratively with our clients to understand their unique challenges and deliver tailored solutions that drive real results and foster growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:px-28 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg border-l-4 border-primary bg-background transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold">
                  <Target className="h-7 w-7 mr-3 text-primary" /> Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base">
                  To empower businesses with innovative and effective IT solutions, fostering growth and success in an ever-evolving digital landscape. We are committed to delivering excellence and building long-lasting partnerships with our clients.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-l-4 border-primary bg-background transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold">
                  <Eye className="h-7 w-7 mr-3 text-primary" /> Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base">
                  To be a leading Indian IT consultancy recognized for our creativity, technical expertise, and unwavering commitment to client satisfaction. We aim to shape the future of digital experiences through continuous learning and adaptation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:px-28 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      <Icon className="h-8 w-8" />
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

      <section className="py-12 md:px-28 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 flex items-center justify-center">
            <Users className="h-8 w-8 mr-3 text-primary" /> Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center shadow-lg p-6 transform hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <Avatar className="w-28 h-28 mx-auto mb-4 border-4 border-primary/50">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-md text-primary font-medium">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
