import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2, {
      message: "Please enter your name (at least 2 characters).",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    subject: z.string().min(5, {
      message: "Please enter a subject (at least 5 characters).",
    }),
    inquiryType: z.enum(["general", "custom", "collaboration", "partnership", "other"], {
      required_error: "Please select an inquiry type.",
    }),
    message: z.string().min(10, {
      message: "Please enter your message (at least 10 characters).",
    }),
  });

export const SubscribeSchema = z.object({
  email: z.string().email({
      message: 'Email is required',
  }),
});
  