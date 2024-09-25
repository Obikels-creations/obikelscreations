'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

type Product = {
  id: number
  name: string
  description: string
  image: string
  category: string
}

const products: Product[] = [
  { id: 1, name: "Cozy Sweater", description: "Warm and stylish for chilly days", image: "/placeholder.svg?height=400&width=300", category: "Adult" },
  { id: 2, name: "Elegant Dress", description: "Perfect for special occasions", image: "/placeholder.svg?height=500&width=300", category: "Adult" },
  { id: 3, name: "Cute Baby Booties", description: "Adorable and comfortable", image: "/placeholder.svg?height=300&width=300", category: "Kids" },
  { id: 4, name: "Stylish Scarf", description: "Add a touch of elegance to any outfit", image: "/placeholder.svg?height=400&width=300", category: "Accessories" },
  { id: 5, name: "Colorful Blanket", description: "Brighten up your living space", image: "/placeholder.svg?height=400&width=400", category: "Home" },
  { id: 6, name: "Kids Cardigan", description: "Cute and practical for little ones", image: "/placeholder.svg?height=400&width=300", category: "Kids" },
  { id: 7, name: "Trendy Handbag", description: "Handmade accessory for everyday use", image: "/placeholder.svg?height=300&width=300", category: "Accessories" },
  { id: 8, name: "Lace Shawl", description: "Delicate and beautiful craftsmanship", image: "/placeholder.svg?height=500&width=300", category: "Adult" },
]

const categories = ["All", "Adult", "Kids", "Accessories", "Home"]

export function FeaturedCollectionComponent() {
  const [filter, setFilter] = useState("All")

  const filteredProducts = filter === "All" 
    ? products 
    : products.filter(product => product.category === filter)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Featured Collection</h2>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Explore our best-selling collection of cozy sweaters, stylish accessories, and elegant dresses.
        </p>

        <div className="flex justify-center space-x-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-white text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-200 text-sm">{product.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}