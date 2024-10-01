'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const partners = [
  { name: 'Mudvii', logo: '/images/brands/IMG_20240926_115630.jpg' },
  { name: 'Tu-La-Roo', logo: '/images/brands/IMG_20240926_115720.jpg' },
  { name: 'Iamteejaybee', logo: '/images/brands/IMG-20240918-WA0004.jpg' },
  { name: 'Iamteejaybee', logo: '/images/brands/IMG-20240918-WA0006.jpg' },

]

export function CollaborationSectionComponent() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Trusted By</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          {`We're proud to work with these amazing brands and organizations who share our passion for quality craftsmanship and sustainable fashion.`}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={200}
                height={100}
                className="max-w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}