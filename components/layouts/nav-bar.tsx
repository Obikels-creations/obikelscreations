'use client'

import Link from 'next/link'
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from '../ui/navbar-menu';
import Image from 'next/image';
// import { Yarn } from 'lucide-react'

export function NavbarComponent() {
  
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="flex flex-col font-serif">
      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="md:container flex h-16 items-center">
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link
              href="/"
              className="text-base font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-base font-medium  transition-colors hover:text-primary"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center  justify-center flex-1">
            <Link href="/" className="flex items-center shrink-0 space-x-6">
              <Image
                width={80}
                height={80}
                src='/assets/logo_trans.png'
                alt='Obikels Creation Logo'
              />
            </Link>
          </div>
          {/* Secondary Navigation Links with Menu */}
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            {/* Gallery Menu - Visible only on md screens and above */}
            <div className="hidden md:block">
              <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Gallery">
                  <div className="items-center justify-center mx-auto text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
                    <ProductItem
                      title="OC odumodu blc bucket hat"
                      href="/gallery"
                      src="/images/accessories/bucket_hats/IMG_20240428_202448.jpg"
                      description="Hand made crochet bucket hat made from 100% acrylic yarn"
                    />
                    <ProductItem
                      title="The Oc hoodie mesh short sleeved blouse"
                      href="/gallery"
                      src="/images/ladies/_storage_emulated_0_DCIM_.convert_tmp_files_IMG20240819202426_20240921202140.jpg"
                      description="Hand made crochet fashion statement designed from 100% acrylic yarn. sustainable crochet fashion. Ethical crochet fashion"
                    />
                    <ProductItem
                      title="OC crop top brallets"
                      href="/gallery"
                      src="/images/ladies/IMG_20240723_114049.jpg"
                      description="The Oc crochet ballet crop top is hand made specially from acrylic yarn."
                    />
                    <ProductItem
                      title="The Mesh bucket hat"
                      href="/gallery"
                      src="/images/accessories/bucket_hats/_storage_emulated_0_DCIM_.convert_tmp_files_IMG20240426125728_20240921202424.jpg"
                      description="Our Mesh crochet bucket hats are limited edition and specially crafted with the unique acrylic yarn"
                    />
                  </div>
                </MenuItem>
              </Menu>
            </div>

            {/* Gallery Link - Visible only on small screens */}
            <Link href="/gallery" className="text-base font-medium transition-colors hover:text-primary md:hidden">
              Gallery
            </Link>

            {/* Contact Link */}
            <Link href="/contact" className="text-base font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  )
}