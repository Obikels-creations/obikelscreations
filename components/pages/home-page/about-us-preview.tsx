'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, } from 'lucide-react'
import MaxWidthWrapper from '@/components/layouts/max-width-wrapper'

const carouselImages = [
  '/images/ladies/IMG_20240817_101439.jpg',
  '/images/ladies/IMG_20240622_130853.jpg',
  '/images/ladies/IMG20240531234406_01.jpg',
]

export function AboutUsPreviewComponent() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <MaxWidthWrapper>
    <section
      ref={sectionRef}
      className={`py-16 bg-background transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex flex-col text-left items-left mb-4">
              <h2 className="text-3xl font-bold">{`Welcome to Obikels Creations`}</h2>
              <h3 className='text-xl font-semibold'>{`Where Crochet Meets Couture`}</h3>
            </div>
            <p className="text-lg w-full pr-6 text-muted-foreground mb-6">
              {`Your destination for exquisite, handmade crochet
apparel. Our passion lies in transforming yarn into stunning garments that are both
comfortable and stylish. Whether you're looking for a unique piece for yourself or a
special gift, our collection offers something for everyone.`}
            </p>
            <Button asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[400px]">
              {carouselImages.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Obikels Creations Crochet process ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className={`rounded-lg transition-opacity duration-1000 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
    </MaxWidthWrapper>
  )
}