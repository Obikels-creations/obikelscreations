'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const images = [
  '/images/accessories/bucket_hats/IMG_20240428_205406.jpg',
  '/images/ladies/IMG_20240908_121354.jpg',
  '/images/ladies/1726945990615.jpg',
]

export function HeroSectionComponent() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // const nextImage = () => {
  //   setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  // }

  // const prevImage = () => {
  //   setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)
  // }

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
        className="absolute inset-0 bg-gray-800/25 opacity-30"

      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 shadow-text">
          Discover the Art of Crochet Fashion
        </h1>
        <p className="text-xl md:text-2xl mb-8 shadow-text">
          Handcrafted elegance for every occasion
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Explore Our Collection
        </Button>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button> */}
    </div>
  )
}