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

  return (
    <Card className="border-2 shadow-2xl bg-card/50 backdrop-blur-sm overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center bg-muted/30">
        <div className="flex items-center gap-2 font-bold text-sm tracking-tight">
          <History className="h-4 w-4 text-primary" />
          GENERATION HISTORY
        </div>
        <Badge variant="outline" className="bg-background/50">{history.length} Reviews</Badge>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Target Service</Label>
          <div className="flex gap-2">
            <Select onValueChange={(v) => setSelectedService(v as ServiceId)}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select service..." />
              </SelectTrigger>
              <SelectContent>
                {serviceOptionsForSelect.map((s) => (
                  <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={handleGenerate} disabled={isLoading || !selectedService} className="shrink-0">
              {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <ScrollArea className="h-[300px] pr-4">
          {history.length === 0 && !isLoading ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-10">
              <MessageSquareQuote className="h-12 w-12 mb-2" />
              <p className="text-xs font-bold uppercase tracking-tighter">No reviews yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {isLoading && (
                <div className="animate-pulse p-4 border rounded-xl bg-muted/20 space-y-2">
                  <div className="h-2 w-20 bg-muted rounded" />
                  <div className="h-2 w-full bg-muted rounded" />
                </div>
              )}
              {history.map((item) => (
                <div key={item.id} className="p-4 border rounded-xl bg-background group relative hover:border-primary/50 transition-colors">
                   <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-primary uppercase">{item.service}</span>
                    <button onClick={() => copyToClipboard(item.text, item.id)} className="text-muted-foreground hover:text-primary">
                      {copiedId === item.id ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                  <p className="text-sm italic leading-snug">"{item.text}"</p>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
    </Card>
  );
}
