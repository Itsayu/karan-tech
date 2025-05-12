
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, submitContactForm, type ContactFormState } from "@/lib/actions";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { serviceOptionsForSelect } from "@/data/services";
import { Loader2 } from "lucide-react";

type Inputs = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 transform hover:scale-105">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? "Submitting..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<Inputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: state.fields?.name || "",
      email: state.fields?.email || "",
      service: (state.fields?.service as Inputs['service']) || undefined,
      message: state.fields?.message || "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        form.reset(); // Reset form on successful submission
      } else if (state.issues && state.issues.length > 0) {
        // Focus on the first field with an error
        const firstErrorField = state.issues[0].includes("Name") ? "name"
                               : state.issues[0].includes("email") ? "email"
                               : state.issues[0].includes("service") ? "service"
                               : state.issues[0].includes("Message") ? "message"
                               : undefined;

        if(firstErrorField) {
            // @ts-ignore
            form.setError(firstErrorField, { message: state.issues[0] });
        }
        
        toast({
          title: "Error",
          description: state.issues.join("\n") || state.message,
          variant: "destructive",
        });

      } else if (!state.success && state.message) {
         toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form]);
  
  const onSelectChange = (value: string) => {
    form.setValue("service", value as Inputs['service']);
    form.clearErrors("service");
  };


  return (
    <form action={formAction} className="space-y-6 max-w-xl mx-auto p-6 sm:p-8 bg-card shadow-xl rounded-lg border">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium text-foreground">Full Name</Label>
        <Input
          id="name"
          {...form.register("name")}
          className="mt-1 block w-full"
          aria-invalid={form.formState.errors.name ? "true" : "false"}
        />
        {form.formState.errors.name && (
          <p className="mt-1 text-sm text-destructive">{form.formState.errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-foreground">Email Address</Label>
        <Input
          id="email"
          type="email"
          {...form.register("email")}
          className="mt-1 block w-full"
          aria-invalid={form.formState.errors.email ? "true" : "false"}
        />
        {form.formState.errors.email && (
          <p className="mt-1 text-sm text-destructive">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="service" className="block text-sm font-medium text-foreground">Service of Interest</Label>
         <Select
            onValueChange={onSelectChange}
            defaultValue={form.getValues("service")}
            {...form.register("service")}
          >
          <SelectTrigger 
            id="service" 
            className="mt-1 block w-full"
            aria-invalid={form.formState.errors.service ? "true" : "false"}
          >
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptionsForSelect.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {form.formState.errors.service && (
          <p className="mt-1 text-sm text-destructive">{form.formState.errors.service.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium text-foreground">Your Message</Label>
        <Textarea
          id="message"
          {...form.register("message")}
          rows={5}
          className="mt-1 block w-full"
          aria-invalid={form.formState.errors.message ? "true" : "false"}
        />
        {form.formState.errors.message && (
          <p className="mt-1 text-sm text-destructive">{form.formState.errors.message.message}</p>
        )}
      </div>
      
      <SubmitButton />
    </form>
  );
}
