
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
