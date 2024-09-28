import { ContactFormComponent } from '@/components/pages/contact-page/contact-form'
import { ContactHeroSectionComponent } from '@/components/pages/contact-page/contact-hero-section'
import { ContactInformationComponent } from '@/components/pages/contact-page/contact-information'
import React from 'react'

export default function ContactPage() {
  return (
    <>
    <ContactHeroSectionComponent/>
    <ContactInformationComponent/>
    <ContactFormComponent/>
    </>
  )
}
