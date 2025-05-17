
import { PageHeader } from '@/components/shared/PageHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
// import Image from 'next/image'; // Image component removed

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        description="We're here to help and answer any question you might have. We look forward to hearing from you!"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-28 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Send us a message</h2>
            <ContactForm />
          </div>
          <div className="p-6 bg-secondary/30 rounded-lg shadow-md mt-[3.4rem]">
             {/* Image div removed */}
            <h2 className="text-2xl font-semibold text-foreground mb-6 mt-6 lg:mt-0">Contact Information</h2> {/* Added margin top for spacing */}
            <p className="text-muted-foreground mb-6">
              Alternatively, you can reach us through the following channels. Our team is available to assist you during business hours.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center group">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0 interactive-transition group-hover:text-accent" />
                <a href="mailto:info@karantechno.com" className="text-muted-foreground interactive-transition hover:text-primary group-hover:text-accent">
                  kchauhan726@gmail.com
                </a>
              </li>
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0 interactive-transition group-hover:text-accent" />
                <span className="text-muted-foreground interactive-transition group-hover:text-foreground">
                  GG15, Casa Homes, Sector 115, Mohali, Punjab - 140307
                </span>
              </li>
            </ul>
             <div className="mt-8 p-4 border border-dashed border-primary/50 rounded-md bg-primary/5 interactive-transition hover:shadow-lg">
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
