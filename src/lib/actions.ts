
"use server";

import { contactFormSchema, type ContactFormState } from "./form-schemas";

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
