"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { generateTestimonial, type GenerateTestimonialInput } from '@/ai/flows/generate-testimonial';
import { serviceOptionsForSelect, type ServiceId } from '@/data/services';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Loader2, Quote, Copy, Check, RefreshCw } from 'lucide-react';

export function TestimonialGenerator() {
  const [selectedService, setSelectedService] = useState<ServiceId | undefined>(undefined);
  const [testimonial, setTestimonial] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerateTestimonial = async () => {
    if (!selectedService) return;

    setIsLoading(true);
    setCopied(false);

    try {
      const input: GenerateTestimonialInput = { service: selectedService };
      const result = await generateTestimonial(input);
      if (result?.testimonial) {
        setTestimonial(result.testimonial);
      } else {
        throw new Error("Empty response from AI.");
      }
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "The AI is taking a break. Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!testimonial) return;
    navigator.clipboard.writeText(testimonial);
    setCopied(true);
    toast({ title: "Copied!", description: "Testimonial saved to clipboard." });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden border-t-4 border-t-primary shadow-2xl">
      <CardHeader className="bg-muted/30 pb-8">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              Testimonial Engine
            </CardTitle>
            <CardDescription className="text-base">
              Craft compelling social proof in seconds using specialized AI.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-8 pt-8">
        {/* Input Section */}
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="service-select" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              What service did they use?
            </Label>
            <Select
              value={selectedService}
              onValueChange={(value) => setSelectedService(value as ServiceId)}
            >
              <SelectTrigger id="service-select" className="h-12 text-md focus:ring-2 ring-primary/20">
                <SelectValue placeholder="Choose a service category..." />
              </SelectTrigger>
              <SelectContent>
                {serviceOptionsForSelect.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="py-3">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleGenerateTestimonial}
            disabled={isLoading || !selectedService}
            size="lg"
            className="w-full font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.98]"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Engineering Magic...
              </>
            ) : testimonial ? (
              <>
                <RefreshCw className="mr-2 h-5 w-5" />
                Regenerate Version
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Testimonial
              </>
            )}
          </Button>
        </div>

        {/* Output Section */}
        <div className="relative group">
          {isLoading && !testimonial ? (
            <div className="h-40 flex flex-col items-center justify-center border-2 border-dashed rounded-xl bg-muted/20 animate-in fade-in zoom-in duration-300">
              <Loader2 className="h-10 w-10 animate-spin text-primary/40 mb-3" />
              <p className="text-sm text-muted-foreground font-medium">Analyzing service benefits...</p>
            </div>
          ) : testimonial ? (
            <div className="relative animate-in slide-in-from-bottom-4 duration-500">
              <div className="absolute -top-3 -left-3">
                <Quote className="h-10 w-10 text-primary/10 fill-primary/10" />
              </div>
              
              <div className="p-8 rounded-xl border bg-gradient-to-br from-background to-muted/30 shadow-inner relative overflow-hidden">
                <p className="text-lg md:text-xl font-medium italic leading-relaxed text-foreground relative z-10">
                  {testimonial}
                </p>
                
                <div className="flex justify-end mt-6 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={copyToClipboard}
                    className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                    {copied ? "Copied" : "Copy Text"}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-32 flex items-center justify-center border-2 border-dashed rounded-xl opacity-40">
              <p className="text-sm">Your generated testimonial will appear here</p>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="bg-muted/20 border-t py-4">
        <div className="flex items-center justify-center w-full gap-2 text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
          <span className="h-1 w-1 rounded-full bg-primary" />
          AI Demonstration Mode
          <span className="h-1 w-1 rounded-full bg-primary" />
        </div>
      </CardFooter>
    </Card>
  );
}
