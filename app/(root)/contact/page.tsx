import { ContactFormComponent } from '@/components/pages/contact-page/contact-form'
import { ContactHeroSectionComponent } from '@/components/pages/contact-page/contact-hero-section'
import { ContactInformationComponent } from '@/components/pages/contact-page/contact-information'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Whether you have a question about our products, a custom order inquiry, or simply want to connect, we are here to help.',
  metadataBase: new URL ('https://www.obikelscreations.com/contact'),
  alternates: {
    canonical: '/contact',
    languages: {
      'en-UK' : '/en-UK',
      'de-DE' : '/de-DE',
    },
  },
  openGraph: {
    title:  'Contact Us',
      description: 'Whether you have a question about our products, a custom order inquiry, or simply want to connect, we are here to help.',
      url: 'https://www.obikelscreations.com/contact',
      siteName: 'Obikels Creations',
      images: '/WhatsApp Image 2024-09-28 at 9.31.42 AM.jpeg'
  }
}



export default function ContactPage() {
  return (
    <>
    <ContactHeroSectionComponent/>
    <ContactInformationComponent/>
    <ContactFormComponent/>
    </>
  )
}
