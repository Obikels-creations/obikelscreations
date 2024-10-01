'use server'
import { formSchema } from '@/schemas/input';
import {Resend} from 'resend';
import { z } from 'zod';


const resend = new Resend(process.env.RESEND_API_KEY)

export const ContactForm =  async (values: z.infer<typeof formSchema>) => {
    const validatedFields = formSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error: 'Invalid Fields!..'};
    }

    const {name, email, subject, inquiryType, message} = validatedFields.data

    try {
        const formContent = `
        Customer Name: ${name}
        Customer Email: ${email}
        Subject: ${subject}
        Inqury Type: ${inquiryType}
        Message: ${message}
        `;

        await resend.emails.send({
            from: process.env.FROM_EMAIL_ADDRESS!,
            to: process.env.TO_EMAIL_ADDRESS!,
            subject: 'Obikels Creations Ltd Contact Form',
            text: formContent,
        });

        return {success: 'Form Submited Succeessfully!'};
    } catch (error) {
        console.error('Error sending form:', error)
        return {error: 'An error occurred while submitting. Please try again.'}
    }
}
