'use client'

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link"
import { useEffect, useState } from 'react'

const images = [
  '/obikels_creations_1727511218313.jpeg',
  '/obikels_creations_1727511219076.jpeg',
  '/obikels_creations_1727511223092.jpeg',
]

export function GalleryHeroSectionComponent() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slider */}
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          fill
          quality={100}
          alt={`Obikels Creations Crochet design ${index + 1}`}
          style={{ objectFit: 'cover' }}
          priority={index === 0}
          className={`transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div 
        className="absolute inset-0 bg-gray-800 opacity-50 md:bg-gray-800/25 md:opacity-30"

      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl font-serif md:text-6xl font-bold mb-4 shadow-text">
          Discover the Art of Crochet Fashion
        </h1>
        <p className="text-xl md:text-2xl mb-8 shadow-text">
          Handcrafted elegance for every occasion
        </p>
        <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href='https://www.etsy.com/shop/obikelscreations/?etsrc=sdt'>
          Shop All Collection
          </Link>
        </Button>
      </div>
    </div>
  )
}