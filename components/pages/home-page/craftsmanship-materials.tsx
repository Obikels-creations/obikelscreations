'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import MaxWidthWrapper from '@/components/layouts/max-width-wrapper'

const materials = [
  { name: 'Acrylic Yarn', image: '/Acrylic-Yarn.jpg', description: 'Known for its durability and versatility' },
  { name: 'Cotton Yarn', image: '/cotton-yarn.jpg', description: 'Soft, breathable, and perfect for all seasons' },
  { name: 'Artisan Craftsmanship', image: '/artician-craftmanship.jpg', description: 'Each piece meticulously handcrafted by skilled artisans' },
]

export function CraftsmanshipMaterialsComponent() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <MaxWidthWrapper>
    <section ref={containerRef} className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Craftsmanship & Materials</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          {`We pride ourselves on using only the highest quality materials. Our designs primarily
          feature 100% acrylic yarn and cotton yarn, known for their durability, softness, and
          versatility. Each piece is meticulously handcrafted by skilled artisans, ensuring that
          every stitch is perfect.`}
        </p>

        {materials.map((material, index) => (
          <ParallaxSection key={material.name} index={index} {...material} />
        ))}
      </div>
    </section>
    </MaxWidthWrapper>
  )
}

function ParallaxSection({ name, image, description, index }: { name: string, image: string, description: string, index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index % 2 === 0 ? 100 : -100]
  )

  return (
    <div ref={sectionRef} className="mb-24  last:mb-0">
      <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
        <div className="w-full md:w-1/2">
          <motion.div 
            className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden"
            style={{ y }}
          >
            <Image
              src={image}
              alt={name}
              fill
              quality={100}
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-serif font-bold mb-4">{name}</h3>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}