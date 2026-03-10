
import { PageHeader } from '@/components/shared/PageHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        description="We're here to help and answer any question you might have. We look forward to hearing from you!"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-28 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="bg-background p-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Send us a message</h2>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div className="relative w-full h-80 rounded-2xl shadow-2xl overflow-hidden">
                <Image 
                    src="https://images.unsplash.com/photo-1587560699334-cc426240169f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="A person's hands using a laptop and a phone to contact support"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-8 bg-secondary/30 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                Alternatively, you can reach us through the following channels. Our team is available to assist you during business hours.
              </p>
              <ul className="space-y-6">
                <li className="flex items-center group">
                  <Mail className="h-6 w-6 text-primary mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <a href="mailto:info@karantechno.com" className="text-lg text-muted-foreground transition-colors duration-300 hover:text-primary group-hover:text-primary">
                    kchauhan726@gmail.com
                  </a>
                </li>
                <li className="flex items-start group">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-lg text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  GG15, Casa Homes, Sector 115, Mohali, Punjab - 140307
                  </span>
                </li>
              </ul>
               <div className="mt-8 p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                  <h4 className="font-bold text-lg text-primary mb-2">Business Hours:</h4>
                  <p className="text-base text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                  <p className="text-base text-muted-foreground">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
