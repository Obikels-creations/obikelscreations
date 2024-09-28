'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import MaxWidthWrapper from '@/components/layouts/max-width-wrapper'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'ladies', name: 'Ladies Fashion' },
  { id: 'gents', name: 'Gents Fashion' },
  { id: 'kids', name: 'Kids' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'custom', name: 'Custom Designs' },
]

const products = [
  {
    id: 1,
    name: "Handmade Crochet Sweater",
    category: "ladies",
    image: "/images/ladies/IMG_20240723_114315.jpg",
    description: "A cozy and stylish sweater perfect for chilly days.",
    yarn: "100% Merino Wool",
    colors: ["Cream", "Navy", "Burgundy"],
  },
  {
    id: 2,
    name: "Men's Crochet Vest",
    category: "gents",
    image: "/images/ladies/IMG_20240723_114315.jpg",
    description: "A versatile vest that adds a touch of sophistication to any outfit.",
    yarn: "Cotton Blend",
    colors: ["Charcoal", "Olive", "Tan"],
  },
  {
    id: 3,
    name: "Children's Crochet Cardigan",
    category: "kids",
    image: "/images/ladies/IMG_20240723_114315.jpg",
    description: "A adorable and warm cardigan for little ones.",
    yarn: "Soft Acrylic",
    colors: ["Pastel Rainbow", "Sky Blue", "Soft Pink"],
  },
  {
    id: 4,
    name: "Crochet Bucket Hat",
    category: "accessories",
    image: "/images/ladies/IMG_20240723_114315.jpg",
    description: "A trendy and comfortable bucket hat for all seasons.",
    yarn: "Cotton",
    colors: ["White", "Black", "Sage Green"],
  },
  {
    id: 5,
    name: "Custom Crochet Dress",
    category: "custom",
    image: "/images/ladies/IMG_20240723_114315.jpg",
    description: "A unique, made-to-measure dress for special occasions.",
    yarn: "Customizable",
    colors: ["Any color of your choice"],
  },
  // Add more products here...
]

export function FilterableGalleryComponent() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [visibleProducts, setVisibleProducts] = useState(6)
  
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
    yarn: string;
    colors: string[];
  } | null>(null);

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  )

  const handleLoadMore = () => {
    setVisibleProducts(prevVisible => prevVisible + 6)
  }

  return (
    <MaxWidthWrapper>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Crochet Collection</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.slice(0, visibleProducts).map(product => (
            <div 
              key={product.id} 
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedProduct(product)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center text-lg font-semibold p-4">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {visibleProducts < filteredProducts.length && (
          <div className="text-center mt-8">
            <Button onClick={handleLoadMore}>Load More</Button>
          </div>
        )}

        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{selectedProduct?.name}</DialogTitle>
              <DialogDescription>
                {selectedProduct?.description}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Image
                src={selectedProduct?.image || ""}
                alt={selectedProduct?.name || ""}
                width={300}
                height={400}
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <div>
                <p className="font-semibold">Yarn:</p>
                <p>{selectedProduct?.yarn}</p>
              </div>
              <div>
                <p className="font-semibold">Available Colors:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProduct?.colors.map(color => (
                    <Badge key={color} variant="secondary">{color}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
    </MaxWidthWrapper>
  )
}