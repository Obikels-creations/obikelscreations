'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Olufisayo Alabi",
    avatar: "/images/reviews/Olufisayo-Alabi.jpeg",
    review: "Still rocking it till date! I still brought it to the UK with me lol!..",
    rating: 5,
  },
  {
    id: 2,
    name: "Ayodele Oladuti",
    avatar: "/images/reviews/ayodele-oladuti.webp",
    review: "The item is just as described and personalised how I needed it to be. It was made and shipped quickly and my communication with Obikels Creations was easy and efficient.",
    rating: 5,
  },
  {
    id: 3,
    name: "Oritsesan Ebreme",
    avatar: "/images/reviews/oritsesan-ebreme.webp",
    review: "It is beyond beautiful 🤩 Neatly crafted and I could literally feel the love it was made with 😀 Definitely recommend this!",
    rating: 5,
  },
  {
    id: 4,
    name: "Ifeoma Ajaero ",
    avatar: "/images/accessories/bucket_hats/IMG_20240428_202448.jpg",
    review: "The Odumodu hat is everything and more. A special gift for my husband. The African man in him will scream for joy when he sees it. He's going to love it. Neatly done, well crafted and depicts a proud igbo man lol. Igbo kwenu!",
    rating: 5,
  },
  {
    id: 5,
    name: "Ifeoma Ajaero ",
    avatar: "/images/accessories/bucket_hats/IMG_20240428_202448.jpg",
    review: "Great quality, well crafted, I love it. My daughter has already started showing me different ways I can style the hat. I can wait to start rocking it. Thank you for giving me exactly what I requested for.",
    rating: 5,
  },
  {
    id: 6,
    name: "Nene Leke",
    avatar: "/images/reviews/nene-leke.jpg",
    review: "Your work and creativity deserves it all! I admire hrd working beautiful ladies like you. I am very proud of you.",
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
    <section className="py-8 md:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8">What Our Customers Say</h2>
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
              <div className="flex space-x-2 items-center mb-4">
                <div className="h-full w-full">
                <Image
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  width={50}
                  height={50}
                  className="rounded-full object-cover aspect-auto"
                />
                </div>
                <div className=''>
                  <h3 className="font-semibold font-serif">{testimonial.name}</h3>
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