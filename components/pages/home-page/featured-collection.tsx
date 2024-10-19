'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import MaxWidthWrapper from '@/components/layouts/max-width-wrapper'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  category: string
  imageUrl: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: "The Oc. Crop top brallets",
    category: "Crop-Top",
    imageUrl: "/images/ladies/IMG_20240723_114315.jpg",
    description: "The Oc crochet ballet crop top is hand made specially from acrylic yarn."
  },
  {
    id: 2,
    name: "The Oc. Crop top brallets",
    category: "Crop-Top",
    imageUrl: "/images/ladies/IMG_20240723_114049.jpg",
    description: "The Oc crochet ballet crop top is hand made specially from acrylic yarn."
  },
  {
    id: 3,
    name: "The Oc. ola shrug",
    category: "Shrugs",
    imageUrl: "/images/ladies/Snapchat-2041477342.jpg",
    description: "Light and airy, perfect for those warm summer days."
  },
  {
    id: 4,
    name: "OC color-wave bucket hat",
    category: "Bucket Hats",
    imageUrl: "/images/accessories/bucket_hats/_storage_emulated_0_DCIM_.convert_tmp_files_IMG20240427114639_20240921202424.jpg",
    description: "Hand made crochet bucket-hat made from 100% acrylic yarn."
  },
  {
    id: 5,
    name: "OC odumodu blc bucket hat",
    category: "Bucket Hats",
    imageUrl: "/images/accessories/bucket_hats/IMG_20240428_202448.jpg",
    description: "Hand made crochet bucket hat made from 100% acrylic yarn."
  },
  {
    id: 6,
    name: "The OC berets",
    category: "Berets",
    imageUrl: "/images/accessories/beret/Snapchat-2052450638.jpg",
    description: "Our crochet berets are uniqly designed and can be customised to your taste and style."
  }
]

export function FeaturedCollectionComponent() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <MaxWidthWrapper>
    <section className="py-4 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8">For Every Age and Style</h2>
        <p className="text-lg text-muted-foreground w-full md:w-1/2 mx-auto text-center mb-12">
          {`Our collection features design for both adults and children, catering to men and
women of all ages. Whether you're seeking a cozy sweater for a chilly day or a
stylish accessory to complete your outfit, we have something to suit your taste.`}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onFocus={() => setHoveredProduct(product.id)}
              onBlur={() => setHoveredProduct(null)}
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={500}
                className="w-full h-[400px] object-cover"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute inset-0 flex flex-col justify-center text-center items-center p-6 text-white">
                  <h3 className="text-xl font-serif font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm mb-4 text-center">{product.description}</p>
                  <Button variant="outline" asChild className=" border-whit text-black">
                    <Link href='https://www.obikelscreations.etsy.com'>
                    Shop Now
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 bg-primary text-primary-foreground px-3 py-1 text-sm">
                {product.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </MaxWidthWrapper>
  )
}