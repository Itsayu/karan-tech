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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { generateTestimonial, type GenerateTestimonialInput } from '@/ai/flows/generate-testimonial';
import { serviceOptionsForSelect, type ServiceId } from '@/data/services';
import { useToast } from '@/hooks/use-toast';
import { 
  Sparkles, 
  Loader2, 
  Quote, 
  Copy, 
  History, 
  Trash2, 
  MessageSquareQuote,
  Zap,
  Check
} from 'lucide-react';

interface TestimonialRecord {
  id: string;
  text: string;
  service: string;
  timestamp: Date;
}

export function TestimonialGenerator() {
  const [selectedService, setSelectedService] = useState<ServiceId | undefined>(undefined);
  const [history, setHistory] = useState<TestimonialRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!selectedService) return;

    setIsLoading(true);
    try {
      const input: GenerateTestimonialInput = { service: selectedService };
      const result = await generateTestimonial(input);
      
      if (result?.testimonial) {
        const newRecord: TestimonialRecord = {
          id: Math.random().toString(36).substr(2, 9),
          text: result.testimonial,
          service: serviceOptionsForSelect.find(s => s.value === selectedService)?.label || 'Service',
          timestamp: new Date(),
        };
        setHistory([newRecord, ...history]);
      }
    } catch (error) {
      toast({ title: "Error", description: "Generation failed.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
    toast({ title: "Copied to clipboard" });
  };

  const clearHistory = () => setHistory([]);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-4">
      
      {/* Left Column: Controls */}
      <div className="lg:col-span-4 space-y-6">
        <Card className="border-none shadow-none bg-transparent">
          <CardHeader className="px-0 pt-0">
            <Badge variant="outline" className="w-fit mb-2 border-primary/30 text-primary">
              <Zap className="h-3 w-3 mr-1 fill-primary" /> AI Powered
            </Badge>
            <CardTitle className="text-3xl font-black tracking-tight">Review Studio</CardTitle>
            <CardDescription>
              Select a service and let our AI craft high-converting social proof for your brand.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 space-y-4">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Service Category</Label>
              <Select onValueChange={(v) => setSelectedService(v as ServiceId)}>
                <SelectTrigger className="h-12 bg-background border-2 transition-all focus:ring-primary/20">
                  <SelectValue placeholder="Choose a service..." />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptionsForSelect.map((s) => (
                    <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleGenerate} 
              disabled={isLoading || !selectedService}
              className="w-full h-12 text-md font-bold transition-all hover:scale-[1.02]"
            >
              {isLoading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 h-4 w-4" />}
              {isLoading ? "Writing..." : "Generate Review"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Right Column: Feed/History */}
      <div className="lg:col-span-8">
        <Card className="h-full min-h-[600px] flex flex-col border-2 shadow-sm relative overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center bg-muted/20">
            <div className="flex items-center gap-2 font-semibold">
              <History className="h-4 w-4 text-primary" />
              Recent Generations
            </div>
            {history.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearHistory} className="text-muted-foreground hover:text-destructive">
                <Trash2 className="h-4 w-4 mr-2" /> Clear All
              </Button>
            )}
          </div>

          <ScrollArea className="flex-1 p-6">
            {history.length === 0 && !isLoading ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center opacity-30">
                <MessageSquareQuote className="h-16 w-16 mb-4" />
                <p className="text-lg font-medium italic">No reviews generated yet.<br />Select a service to begin.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {isLoading && (
                   <div className="animate-pulse space-y-3 p-6 border rounded-2xl bg-muted/10">
                    <div className="h-4 w-24 bg-muted rounded" />
                    <div className="h-4 w-full bg-muted rounded" />
                    <div className="h-4 w-3/4 bg-muted rounded" />
                   </div>
                )}
                
                {history.map((item) => (
                  <div key={item.id} className="group relative p-6 border-2 rounded-2xl bg-background transition-all hover:border-primary/50 hover:shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="font-mono text-[10px] uppercase">
                        {item.service}
                      </Badge>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => copyToClipboard(item.text, item.id)}
                      >
                        {copiedId === item.id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                    
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/10 -z-0" />
                      <p className="text-foreground text-lg leading-relaxed relative z-10 italic">
                        "{item.text}"
                      </p>
                    </div>
                    
                    <div className="mt-4 flex items-center text-[10px] text-muted-foreground uppercase tracking-tighter">
                      Generated at {item.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
          
          <div className="p-4 bg-muted/10 border-t">
            <p className="text-[10px] text-center text-muted-foreground uppercase font-bold tracking-[0.2em]">
               End of Session History
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
