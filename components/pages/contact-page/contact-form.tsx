'use client'

import { useState,  useTransition } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2 } from "lucide-react"
import { Loader } from 'lucide-react';
import { formSchema } from '@/schemas/input'
import MaxWidthWrapper from '@/components/layouts/max-width-wrapper'
import { ContactForm } from '@/actions/contact-form'



export function ContactFormComponent() {
  const [error, setError] = useState<string | undefined>('');
	const [success, setSuccess] = useState<string | undefined>('');
	const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      inquiryType: undefined,
      message: "",
    },
    mode: 'onChange'
  })

  function onSubmit(values: z.infer<typeof formSchema>) {



    setError('');
		setSuccess('');

		startTransition(() => {
			ContactForm(values)
				.then((data) => {
					setError(data.error);
					setSuccess(data.success);

					if (data.success) {
						setTimeout(() => {
						}, 2000 );
						form.reset();
					}
				})
				.catch((error) => {
					console.error(
						'Error occured while submitting your form. Please try again!',
						error
					);
				});
      });
  };

  return (
    <MaxWidthWrapper>
    <section className="py-16 bg-background">
      <div className=" mx-auto items-center justify-center px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Send Us a Message</h2>
        <p className='w-full md:w-1/2 text-center pt-2 pb-4 mx-auto'>
          {`We'd love to hear from you! Whether you have a question about our products, a
          custom order inquiry, or simply want to connect, we're here to help.`}</p>
        {success ? (
          <Alert className="max-w-md mx-auto">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              {`Thank you! Your message has been sent. We'll get back to you as soon as possible.`}
            </AlertDescription>
          </Alert>
        ) : (
          <>
          {error && (
                <Alert className="max-w-md mx-auto" variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
        
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-full mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='font-serif'>Name</FormLabel>
                        <FormControl>
                          <Input disabled={isPending} placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='font-serif'>Email</FormLabel>
                        <FormControl>
                          <Input type="email" disabled={isPending} placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='font-serif'>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Message subject" {...field} disabled={isPending} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="inquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='font-serif'>Inquiry Type</FormLabel>
                        <Select onValueChange={field.onChange} disabled={isPending} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="custom">Custom Order Request</SelectItem>
                            <SelectItem value="collaboration">Collaboration</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-8">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='font-serif'>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Type your message here" 
                            className="min-h-[250px]"
                            {...field} 
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    {isPending ? (
								<Loader className='w-6 h-6 animate-spin' />
							)  : ( "Send Message"
              
              )}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
          </>
        )}
      </div>
    </section>
    </MaxWidthWrapper>
  )
}