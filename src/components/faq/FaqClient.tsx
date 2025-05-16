
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from '@/data/faq';

interface FaqClientProps {
  faqs: FaqItem[];
}

export function FaqClient({ faqs }: FaqClientProps) {
  if (!faqs || faqs.length === 0) {
    return <p className="text-center text-muted-foreground">No FAQs available at the moment.</p>;
  }

  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id} className="border-b border-border interactive-transition hover:bg-secondary/50 rounded-md mb-1">
          <AccordionTrigger className="py-6 text-left text-lg font-medium text-foreground hover:text-primary interactive-transition px-4 [&[data-state=open]>svg]:text-primary [&[data-state=open]>svg]:rotate-180">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base text-muted-foreground leading-relaxed px-4">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
