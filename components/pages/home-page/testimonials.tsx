'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import MaxWidthWrapper from '@/components/layouts/max-width-wrapper'

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    avatar: "/cotton-yarn.jpg",
    review: "The crochet sweater I ordered is absolutely beautiful! The attention to detail is amazing, and it's so comfortable to wear.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/cotton-yarn.jpg",
    review: "I'm impressed by the quality of the crochet scarf. It's warm, stylish, and I receive compliments every time I wear it.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    avatar: "/cotton-yarn.jpg",
    review: "The custom crochet dress exceeded my expectations. It fits perfectly and the craftsmanship is outstanding.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    avatar: "/cotton-yarn.jpg",
    review: "I love my crochet beanie! It's unique, cozy, and perfect for cold days. Will definitely order more items.",
    rating: 3,
  },
  {
    id: 5,
    name: "Olivia Parker",
    avatar: "/cotton-yarn.jpg",
    review: "The crochet blanket I received is a work of art. It's become the centerpiece of my living room. Thank you!",
    rating: 5,
  },
]

export function TestimonialsComponent() {
  const [duplicatedTestimonials, setDuplicatedTestimonials] = useState(testimonials)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setDuplicatedTestimonials([...testimonials, ...testimonials])
  }, [])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const animate = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0
      } else {
        carousel.scrollLeft += 1
      }
    }

    const animationId = setInterval(animate, 50)

    return () => clearInterval(animationId)
  }, [duplicatedTestimonials])

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {`Our customers love their unique, handmade crochet garments. Here's what they have to say about their Obikels Creations experience.`}
        </p>
        <div 
          ref={carouselRef}
          className="flex overflow-x-hidden space-x-6 py-4"
          style={{ width: '200%', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div 
              key={`${testimonial.id}-${index}`}
              className="flex-none w-80 bg-muted p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{`"${testimonial.review}"`}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}