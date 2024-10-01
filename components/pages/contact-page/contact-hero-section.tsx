'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
  '/contactus.png',
  '/contact.png',
]

export function ContactHeroSectionComponent() {
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
        className="absolute inset-0 z-0 bg-slate-950/30 bg-opacity-30"

      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl font-serif md:text-6xl font-bold mb-4 shadow-text">
        {`Get In Touch With Us`}
        </h1>
        <p className="text-lg md:text-2xl mb-8 shadow-text">
        {`We appreciate your interest in Obikels Creations!`}
        </p>
      </div>

    </div>
  )
}