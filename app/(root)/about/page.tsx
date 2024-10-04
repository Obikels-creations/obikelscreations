import { AboutHeroSectionComponent } from '@/components/pages/about-page/about-hero-section'
import { TimelineDemo } from '@/components/pages/about-page/timeline-data'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Our commitment to sustainability and ethical practices will remain at the core of our business.',
  metadataBase: new URL ('https://www.obikelscreations.com/about'),
  alternates: {
    canonical: '/about',
    languages: {
      'en-UK' : '/en-UK',
      'de-DE' : '/de-DE',
    },
  },
  openGraph: {
    title:  'About Us',
      description: 'Our commitment to sustainability and ethical practices will remain at the core of our business.',
      url: 'https://www.obikelscreations.com/about',
      siteName: 'Obikels Creations',
      images: '/IMG-20190619-WA0005.jpg'
  }
}

export default function AboutPage() {
  return (
    <>
    <AboutHeroSectionComponent/> 
    <TimelineDemo/>
    </>
  )
}
