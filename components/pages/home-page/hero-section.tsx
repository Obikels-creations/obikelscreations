'use client'

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link"
import { useEffect, useState } from 'react'

const images = [
  '/images/accessories/bucket_hats/IMG_20240428_202448.jpg',
  '/images/ladies/IMG_20240908_121354.jpg',
  '/IMG-20241004-WA0005.jpg',
]

export function HeroSectionComponent() {
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

      {/* Yarn-like Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-slate-900 bg-opacity-15 bg-slate-950/50 md:bg-opacity-30"

      ></div>
      {/* <div className="absolute inset-0 z-0 bg-slate-900 bg-opacity-15  md:bg-slate-950/50 md:bg-opacity-30"></div> */}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl font-serif md:text-6xl font-bold mb-4 shadow-text">
          Discover the Art of Crochet Fashion
        </h1>
        <p className="text-lg md:text-2xl mb-8 shadow-text">
          Handcrafted elegance for every occasion
        </p>
        <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href='/gallery'>
          Explore Our Collection
          </Link>
        </Button>
      </div>


    </div>
  )
}