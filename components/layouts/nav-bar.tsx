'use client'
import Link from 'next/link';
import React, {  useState } from 'react';
import { Menu, MenuItem, ProductItem } from '../ui/navbar-menu';
import Image from 'next/image';
import { FiMenu, FiX, FiHome, FiInfo, FiImage, FiPhone } from 'react-icons/fi'; // Import icons from react-icons
import { XIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

export function NavbarComponent() {
  // State to track active menu item and sidebar visibility
  const [active, setActive] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Determine the active menu item based on the current route
  const getActiveState = (path: string) => {
    return pathname === path ? 'text-gray-900 font-extrabold' : 'text-base';
  };

  return (
    <div className="flex flex-col font-serif">
      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="md:container flex h-16 items-center justify-between px-6">
          {/* Hamburger Menu for Small Screens */}
          <div className="flex items-center md:hidden">
            <Button onClick={toggleSidebar} aria-label="Toggle Sidebar">
              {sidebarOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </Button>
          </div>

          {/* Logo Centered */}
          <div className="flex items-center justify-center flex-1">
            <Link href="/" className="flex items-start w-[50px]  mx-auto h-[50px] md:w-full md:h-full shrink-0 space-x-6">
              <Image
                width={80}
                height={80}
                src='/assets/Black_and_White_Logo.png'
                alt='Obikels Creation Logo'
              />
            </Link>
          </div>

          {/* Primary Navigation Links for Large Screens */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link href="/" className={`font-medium transition-colors hover:text-primary ${getActiveState('/')}`}>
              <FiHome className="inline mr-2" /> Home
            </Link>
            <Link href="/about" className={`font-medium transition-colors hover:text-primary ${getActiveState('/about')}`}>
              <FiInfo className="inline mr-2" /> About
            </Link>

            {/* Gallery Menu - Only visible on large screens */}
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

            <Link href="/contact" className={`font-medium transition-colors hover:text-primary ${getActiveState('/contact')}`}>
              <FiPhone className="inline mr-2" /> Contact
            </Link>
          </nav>
        </div>

        {/* Sidebar for Small Screens */}
        <div
          className={`fixed items-center justify-center mx-auto top-0 left-0 w-64 h-screen bg-background backdrop-blur supports-[backdrop-filter]:bg-background shadow-lg transition-transform transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        >
          <div className="flex items-center justify-center py-6 border-b">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setSidebarOpen(false)}>
              <Image width={80} height={80} src='/assets/Black_and_White_Logo.png' alt='Obikels Creation Logo' />
            </Link>
          </div>
          <nav className="flex mx-auto justify-center items-center gap-6 text-black flex-col p-6 space-y-4">
            <Link href="/" className={`font-medium flex items-center space-x-2 hover:text-primary ${getActiveState('/')}`} onClick={() => setSidebarOpen(false)}>
              <FiHome className="text-lg" /> <span>Home</span>
            </Link>
            <Link href="/about" className={`font-medium flex items-center space-x-2 hover:text-primary ${getActiveState('/about')}`} onClick={() => setSidebarOpen(false)}>
              <FiInfo className="text-lg" /> <span>About</span>
            </Link>
            <Link href="/gallery" className={`font-medium flex items-center space-x-2 hover:text-primary ${getActiveState('/gallery')}`} onClick={() => setSidebarOpen(false)}>
              <FiImage className="text-lg" /> <span>Gallery</span>
            </Link>
            <Link href="/contact" className={`font-medium flex items-center space-x-2 hover:text-primary ${getActiveState('/contact')}`} onClick={() => setSidebarOpen(false)}>
              <FiPhone className="text-lg" /> <span>Contact</span>
            </Link>
          </nav>

          <XIcon
					className='absolute top-5 right-8'
					onClick={() => setSidebarOpen(false)}
				/>
        </div>

      </header>
    </div>
  );
}
