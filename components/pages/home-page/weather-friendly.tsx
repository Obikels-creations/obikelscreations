'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sun, Snowflake, Cloud, Wind } from 'lucide-react'
import MaxWidthWrapper from '@/components/layouts/max-width-wrapper'

const weatherInfo = [
  { 
    icon: Sun, 
    title: 'Warm Weather', 
    description: 'Breathable and lightweight for hot summer days.' 
  },
  { 
    icon: Snowflake, 
    title: 'Cold Weather', 
    description: 'Cozy and insulating for chilly winter nights.' 
  },
  { 
    icon: Cloud, 
    title: 'Mild Weather', 
    description: 'Versatile pieces for transitional seasons.' 
  },
  { 
    icon: Wind, 
    title: 'Windy Weather', 
    description: 'Flexible and layerable for unpredictable breezes.' 
  },
]

const yarnTextures = [
  'bg-gradient-to-r from-red-100 to-red-200',
  'bg-gradient-to-r from-blue-100 to-blue-200',
  'bg-gradient-to-r from-green-100 to-green-200',
  'bg-gradient-to-r from-yellow-100 to-yellow-200',
  'bg-gradient-to-r from-purple-100 to-purple-200',
]

export function WeatherFriendlyComponent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, yarnTextures.length - 1]
  )

  const currentBackgroundClass = useTransform(
    backgroundIndex,
    (latest) => yarnTextures[Math.round(latest)]
  )

  return (
    <MaxWidthWrapper>
    <section ref={containerRef} className="py-16 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ backgroundClip: currentBackgroundClass }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Weather-Friendly and Skin-Kind</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          {`Our crochet garments are designed to be both comfortable and functional. We
carefully select materials that are suitable for various weather conditions, ensuring
that you stay warm, cool, or stylish, no matter the season. Additionally, our pieces
are crafted with soft, skin-friendly yarns, providing exceptional comfort and
wearability.`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {weatherInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center bg-white bg-opacity-80 p-6 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <info.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              <p className="text-muted-foreground">{info.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold">
            Experience the comfort of our skin-friendly yarns in any weather!
          </p>
        </div>
      </div>
    </section>
    </MaxWidthWrapper>
  )
}