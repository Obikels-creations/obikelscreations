'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import MaxWidthWrapper from '@/components/layouts/max-width-wrapper'

const collections = [
  {
    id: 'spring',
    title: 'Spring Collection',
    subtitle: 'Bright & Breezy Crochet Wear',
    image: '/images/ladies/IMG_20240723_114315.jpg',
    link: '/collections/spring'
  },
  {
    id: 'winter',
    title: 'Winter Warmth',
    subtitle: 'Cozy Crochet Sweaters',
    image: '/images/ladies/IMG_20240723_114315.jpg',
    link: '/collections/winter'
  },
  {
    id: 'accessories',
    title: 'Handcrafted Accessories',
    subtitle: 'Scarves, Beanies, and More',
    image: '/images/ladies/IMG_20240723_114315.jpg',
    link: '/collections/accessories'
  }
]

export function FeaturedCollectionsComponent() {
  return (
    <MaxWidthWrapper>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="flex flex-col">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-sm mb-4">{collection.subtitle}</p>
                  <Button asChild className="w-full">
                    <Link href={collection.link}>Shop This Collection</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </MaxWidthWrapper>
  )
}