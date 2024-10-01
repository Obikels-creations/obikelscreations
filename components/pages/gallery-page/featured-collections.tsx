'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import MaxWidthWrapper from '@/components/layouts/max-width-wrapper'

const collections = [
  {
    id: 'spring',
    title: 'Spring Collection',
    subtitle: 'Babies Crochet Wear',
    image: '/images/kids/IMG-20240927-WA0066.jpg',
    link: 'https://www.etsy.com/shop/obikelscreations/?etsrc=sdt'
  },
  {
    id: 'winter',
    title: 'Winter Warmth',
    subtitle: 'Cozy Crochet Sweaters',
    image: '/images/ladies/IMG20240608005915_01.jpg',
    link: 'https://www.etsy.com/shop/obikelscreations/?etsrc=sdt&section_id=49041127'
  },
  {
    id: 'accessories',
    title: 'Handcrafted Accessories',
    subtitle: 'Bucket Hats, Berets, and More',
    image: '/images/accessories/bucket_hats/_storage_emulated_0_DCIM_.convert_tmp_files_IMG20240427123755_20240921202424.jpg',
    link: 'https://www.etsy.com/listing/1732328218/the-cotton-candy-bucket-hat?click_key=43d65f01ba3285747e4f41e9b470009ddb78b0da%3A1732328218&click_sum=4237805f&ref=shop_home_feat_4'
  }
]

export function FeaturedCollectionsComponent() {
  return (
    <MaxWidthWrapper>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-bold font-serif text-center mb-12">Featured Collections</h2>
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