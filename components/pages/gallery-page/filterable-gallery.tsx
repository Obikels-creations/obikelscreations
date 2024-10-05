'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import MaxWidthWrapper from '@/components/layouts/max-width-wrapper'
import { products } from '@/lib/consts'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'ladies', name: 'Ladies Fashion' },
  { id: 'ponchos', name: 'Ladies Ponchos' },
  { id: 'kids', name: 'Kids' },
  { id: 'accessories', name: 'Accessories' },
  // { id: 'custom', name: 'Custom Designs' },
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
        <h2 className=" text-xl md:text-3xl font-bold font-serif text-center mb-8">Our Crochet Collection</h2>
        
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
                <p className="text-white font-serif text-center text-lg font-semibold p-4">
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