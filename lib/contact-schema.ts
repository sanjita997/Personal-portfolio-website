import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Enter your full name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(6, "Enter a valid phone number."),
  service: z.string().min(2, "Choose a service."),
  message: z.string().optional()
});

export type ContactFormData = z.infer<typeof contactSchema>;
