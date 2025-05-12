
"use server";

import { z } from "zod";
import { serviceOptionsForSelect } from "@/data/services";

const serviceIds = serviceOptionsForSelect.map(option => option.value) as [string, ...string[]];

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.enum(serviceIds, { errorMap: () => ({ message: "Please select a valid service." }) }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must be less than 500 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // Simulate sending an email or saving to a database
  console.log("Contact form submitted successfully:");
  console.log("Name:", parsed.data.name);
  console.log("Email:", parsed.data.email);
  console.log("Service:", parsed.data.service);
  console.log("Message:", parsed.data.message);

  // In a real application, you would integrate with an email service (e.g., SendGrid, Resend)
  // or save the inquiry to a database.

  return {
    message: "Thank you for your inquiry! We will get back to you soon.",
    success: true,
  };
}
