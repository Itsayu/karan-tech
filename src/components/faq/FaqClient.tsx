
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
        <AccordionItem key={faq.id} value={faq.id} className="border-b border-border">
          <AccordionTrigger className="py-6 text-left text-lg font-medium text-foreground hover:text-primary transition-colors [&[data-state=open]>svg]:text-primary">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base text-muted-foreground leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
