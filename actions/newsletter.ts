'use server'
import { SubscribeSchema } from "@/schemas/input";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY)

export const NewsletterSubcription = async (values: z.infer<typeof SubscribeSchema>) => {
    const validatedFields = SubscribeSchema.safeParse(values);

    if(!validatedFields.success){
        return {error: 'Invalid Field!..'};

    }
    const {email} = validatedFields.data

    try {
        const EmailContent = `
        Subcriber Email: ${email}
        `;

        await resend.emails.send({
            from: process.env.FROM_EMAIL_ADDRESS!,
            to: process.env.TO_EMAIL_ADDRESS!,
            subject: 'Obikels Creations Ltd Contact Form',
            text: EmailContent,
        });

        return {success: 'Subscribed Succeessfully!'};
    } catch (error) {
        console.error('Error sending form:', error)
        return {error: 'An error occurred while submitting. Please try again.'}
    }
}