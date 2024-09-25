'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import MaxWidthWrapper from './layouts/max-width-wrapper'

export function CallToActionComponent() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-slate-950/50 bg-opacity-30"
        style={{
          backgroundImage: "url('/yarn-texture.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
          Join the Crochet Movement
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          {`Experience the Beauty of Crochet – Shop Now or Contact Us for Custom Orders`}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/gallery">Explore Gallery</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}