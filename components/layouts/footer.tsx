'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, ArrowUp, Mail, Phone } from 'lucide-react'

export function FooterComponent() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="border-t border-primary-foreground my-8" style={{ borderImageSource: 'url("data:image/svg+xml,%3Csvg width="6" height="6" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.4" fill-rule="evenodd"%3E%3Cpath d="M5 0h1L0 6V5zM6 5v1H5z"/%3E%3C/g%3E%3C/svg%3E")', borderImageSlice: '1', borderImageWidth: '1', borderImageOutset: '0', borderImageRepeat: 'round' }}></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gray-500">About Us</h3>
            <p className="text-sm mb-4">{`At Obikels Creations, we craft handmade crochet garments that combine artistry with comfort. Our designs are made with love and tailored for you.`}</p>
            <Link href="/about" className="text-sm underline hover:text-purple-300">{`Read more about us`}</Link>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gray-500">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:text-purple-300">Home</Link>
              <Link href="/gallery" className="text-sm hover:text-purple-300">Gallery</Link>
              <Link href="/about" className="text-sm hover:text-purple-300">About</Link>
              <Link href="/contact" className="text-sm hover:text-purple-300">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gray-500">Stay in Touch</h3>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email address…" 
                className="bg-primary-foreground border-primary text-cream-100 placeholder-purple-300"
              />
              <Button className="w-full bg-primary-foreground hover:bg-primary hover:text-white text-cream-100">
                Subscribe
              </Button>
            </form>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-cream-100 hover:text-purple-300">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-cream-100 hover:text-purple-300">
                <Instagram size={20} />
              </Link>
              {/* <a href="#" className="text-cream-100 hover:text-purple-300">
                <PinterestI size={20} />
              </a> */}
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gray-500">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-sm flex items-center">
                <Mail size={16} className="mr-2" />
                info@obikelscreations.co.uk
              </p>
              <p className="text-sm flex items-center">
                <Phone size={16} className="mr-2" />
                +234 XXX-XXX-XXXX
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © 2023 Obikels Creations. All rights reserved.
          </div>
          <nav className="flex space-x-4">
            <Link href="/privacy" className="text-sm hover:text-purple-300">Privacy Policy</Link>
            <Link href="/terms" className="text-sm hover:text-purple-300">Terms of Service</Link>
          </nav>
        </div>
      </div>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-primary-foreground text-black p-2 rounded-full shadow-lg hover:bg-primary transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className=''/>
        </button>
      )}
    </footer>
  )
}