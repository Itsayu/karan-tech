
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h2>
            <ContactForm />
          </div>
          <div className="p-6 bg-secondary/30 rounded-lg shadow-md">
             <div className="relative w-full h-64 mb-6 rounded-md overflow-hidden">
              <Image 
                src="https://picsum.photos/600/400?random=8" 
                alt="Contact us illustration"
                layout="fill"
                objectFit="cover"
                data-ai-hint="communication technology"
              />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              Alternatively, you can reach us through the following channels. Our team is available to assist you during business hours.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:info@karantechno.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@karantechno.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890 (Placeholder)
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Tech Avenue, Innovation City, CA 90210 (Placeholder)
                </span>
              </li>
            </ul>
             <div className="mt-8 p-4 border border-dashed border-primary/50 rounded-md bg-primary/5">
                <h4 className="font-semibold text-primary mb-1">Business Hours:</h4>
                <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-muted-foreground">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
