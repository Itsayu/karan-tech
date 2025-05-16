
import { PageHeader } from '@/components/shared/PageHeader';
import { FaqClient } from '@/components/faq/FaqClient';
import { faqs } from '@/data/faq';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our IT services and processes. If you don't find your answer here, feel free to contact us."
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <FaqClient faqs={faqs} />
          </div>
          <div className="md:col-span-1 p-6 bg-secondary/30 rounded-lg shadow-md group">
            <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden shadow-lg interactive-transition group-hover:scale-105">
              <Image 
                src="https://placehold.co/400x300.png" 
                alt="Support illustration"
                layout="fill"
                objectFit="cover"
                data-ai-hint="support helpdesk"
                className="interactive-transition group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              If you can't find the answer you're looking for, please don't hesitate to reach out to our support team.
            </p>
            <Link href="/contact" passHref>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 interactive-transition transform hover:scale-105">
                    Contact Us
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
