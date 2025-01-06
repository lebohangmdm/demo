import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .max(10, "Phone numbers must have 10 number")
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/,
      "Invalid phone number format"
    ),
  company: z.string().min(1, "Company name is required"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(300, "Message cannot exceed 300 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
