
import { PageHeader } from '@/components/shared/PageHeader';
import { FaqClient } from '@/components/faq/FaqClient';
import { faqs } from '@/data/faq';
import Image from 'next/image';

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
          <div className="md:col-span-1 p-6 bg-secondary/30 rounded-lg shadow-md">
            <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
              <Image 
                src="https://picsum.photos/400/300?random=7" 
                alt="Support illustration"
                layout="fill"
                objectFit="cover"
                data-ai-hint="support helpdesk"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              If you can't find the answer you're looking for, please don't hesitate to reach out to our support team.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
