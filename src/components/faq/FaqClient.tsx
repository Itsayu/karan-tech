"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from '@/data/faq';
import { HelpCircle, Sparkles } from 'lucide-react';

interface FaqClientProps {
  faqs: FaqItem[];
}

export function FaqClient({ faqs }: FaqClientProps) {
  if (!faqs || faqs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 opacity-30">
        <Sparkles className="h-12 w-12 mb-4" />
        <p className="text-center font-black uppercase tracking-widest text-xs">Terminal Empty: No FAQs Found</p>
      </div>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq) => (
        <AccordionItem 
          key={faq.id} 
          value={faq.id} 
          className="border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-[1.5rem] overflow-hidden transition-all duration-300 data-[state=open]:border-primary/40 data-[state=open]:bg-white/[0.05] data-[state=open]:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.2)]"
        >
          <AccordionTrigger className="py-6 text-left text-lg font-bold text-slate-200 hover:text-primary transition-all px-6 hover:no-underline group">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                <HelpCircle className="h-4 w-4 text-slate-500 group-data-[state=open]:text-primary transition-colors" />
              </div>
              <span className="leading-tight tracking-tight">{faq.question}</span>
            </div>
          </AccordionTrigger>
          
          <AccordionContent className="px-6 pb-6 text-base text-slate-400 leading-relaxed border-t border-white/5 pt-4 bg-black/20">
            <div className="pl-12 relative">
              {/* Decorative vertical line for the answer */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
              {faq.answer}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
