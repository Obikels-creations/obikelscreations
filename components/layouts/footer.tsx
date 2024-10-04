'use client'

import { useState, useEffect, useTransition } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, ArrowUp, Mail, Phone, Loader, Youtube } from 'lucide-react'
import { NewsletterSubcription } from '@/actions/newsletter'

export function FooterComponent() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | undefined>(undefined);
	const [success, setSuccess] = useState<string| undefined>(undefined);
	const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    startTransition(async () => {


			try {

				const result = await NewsletterSubcription({email});
				if (result.error) {
					setError(result.error);
				} else {
					setSuccess(result.success);
					setEmail("");
				}
			}catch (error) {
				console.error('Error subscribing to newsletter:', error);
				setError('An error occurred while subscribing. Please try again.');
			}
			})
  }

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
            <h3 className="font-serif text-xl font-semibold mb-4 text-gray-500">About Us</h3>
            <p className="text-base mb-4">{`At Obikels Creations, we craft handmade crochet garments that combine artistry with comfort. Our designs are made with love and tailored for you.`}</p>
            <Link href="/about" className="text-base underline hover:text-purple-300">{`Read more about us`}</Link>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-gray-500">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="https://www.etsy.com/shop/obikelscreations/?etsrc=sdt" className="text-base hover:text-purple-300">Shop</Link>
              <Link href="/gallery" className="text-base hover:text-purple-300">Gallery</Link>
              <Link href="/about" className="text-base hover:text-purple-300">About</Link>
              <Link href="/contact" className="text-base hover:text-purple-300">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-gray-500">Stay in Touch</h3>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <Input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address…" 
                className="bg-primary-foreground border-primary text-gray-900 placeholder-purple-300"
              />

              <Button type='submit' variant='outline' disabled={isPending || !email} className="w-full bg-primary-foreground hover:bg-primary hover:text-white text-gray-900">
                {isPending ? <Loader className='w-6 h-6 animate-spin'/> : 'Subscribe'}
                
              </Button>
            </form>
            {success && <p className='text-emerald-600 mt-4'>{success}</p>}
            {error && <p className='text-destructive mt-4'>{error}</p>}
            <div className="flex space-x-4 mt-6">
            <Link href="https://www.instagram.com/obikels_creations" target="_blank" rel="noopener noreferrer" className="text-background hover:text-primary">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://www.facebook.com/Obikelscrochet" target="_blank" rel="noopener noreferrer" className="text-background hover:text-primary">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="https://www.tiktok.com/@obikel_creations?_t=8qFEnxWFJE9&_r=1" target="_blank" rel="noopener noreferrer" className="text-background hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" className="w-6 h-6 bg-background  hover:bg-primary rounded-full">
            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
            </svg>
            </Link>
            <Link href="https://uk.pinterest.com/obikels/" target="_blank" rel="noopener noreferrer" className="text-background  hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className="w-6 h-6 bg-background hover:bg-primary rounded-full">
            <path d="M25,2C12.3178711,2,2,12.3178711,2,25c0,9.8841553,6.2675781,18.3302612,15.036377,21.5769653	c-0.2525635-2.2515869-0.2129517-5.9390259,0.2037964-7.7243652c0.3902588-1.677002,2.5212402-10.6871338,2.5212402-10.6871338	s-0.6433105-1.2883301-0.6433105-3.1911011c0-2.9901733,1.7324219-5.2211914,3.8898315-5.2211914	c1.8349609,0,2.7197876,1.3776245,2.7197876,3.0281982c0,1.8457031-1.1734619,4.6026611-1.78125,7.1578369	c-0.506897,2.1409302,1.0733643,3.8865356,3.1836548,3.8865356c3.821228,0,6.7584839-4.0296021,6.7584839-9.8453369	c0-5.147583-3.697998-8.7471924-8.9795532-8.7471924c-6.1167603,0-9.7072754,4.588562-9.7072754,9.3309937	c0,1.8473511,0.7111816,3.8286743,1.6000977,4.9069824c0.175293,0.2133179,0.2009277,0.3994141,0.1488647,0.6160278	c-0.1629028,0.678894-0.5250854,2.1392822-0.5970459,2.4385986c-0.0934448,0.3944702-0.3117676,0.4763184-0.7186279,0.2869263	c-2.685791-1.2503052-4.364502-5.1756592-4.364502-8.3295898c0-6.7815552,4.9268188-13.0108032,14.206543-13.0108032	c7.4588623,0,13.2547607,5.3138428,13.2547607,12.4179077c0,7.4100342-4.6729126,13.3729858-11.1568604,13.3729858	c-2.178894,0-4.2263794-1.132019-4.9267578-2.4691772c0,0-1.0783081,4.1048584-1.3404541,5.1112061	c-0.4524536,1.7404175-2.3892822,5.3460083-3.3615723,6.9837036C20.1704712,47.6074829,22.5397949,48,25,48	c12.6826172,0,23-10.3173828,23-23C48,12.3178711,37.6826172,2,25,2z"></path>
            </svg>
            </Link>
            <Link href="https://www.youtube.com/@obikels_creations?si=RcTWAO-7FQTw5hJZ" target="_blank" rel="noopener noreferrer" className="text-background hover:text-primary">
              <Youtube className="w-6 h-6" />
            </Link>
              
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-gray-500">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-base flex items-center">
                <Mail size={16} className="mr-2" />
                info@obikelscreations.co.uk
              </p>
              <p className="text-base flex items-center">
                <Phone size={16} className="mr-2" />
                (+44)776-3640-657
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground flex flex-col md:flex-row justify-between items-center">
          <div className="text-base mb-4 md:mb-0">
            © 2023 Obikels Creations. All rights reserved.
          </div>
          <nav className="flex space-x-4">
            <Link href="/" className="text-base hover:text-purple-300">Privacy Policy</Link>
            <Link href="/" className="text-base hover:text-purple-300">Terms of Service</Link>
          </nav>
        </div>
      </div>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 z-50 right-4 bg-primary-foreground text-black p-2 rounded-full shadow-lg hover:bg-primary transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className=''/>
        </button>
      )}
    </footer>
  )
}