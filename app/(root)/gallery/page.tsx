import { FeaturedCollectionsComponent } from '@/components/pages/gallery-page/featured-collections'
import { FilterableGalleryComponent } from '@/components/pages/gallery-page/filterable-gallery'
import { GalleryHeroSectionComponent } from '@/components/pages/gallery-page/gallery-hero-section'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Our Gallery',
  description: 'Discover the Art of Crochet Fashion by exploring our gallery.',
  metadataBase: new URL ('https://www.obikelscreations.co.uk/gallery'),
  alternates: {
    canonical: '/gallery',
    languages: {
      'en-UK' : '/en-UK',
      'de-DE' : '/de-DE',
    },
  },
  openGraph: {
    title:  'Our Gallery',
      description: 'Discover the Art of Crochet Fashion by exploring our gallery.',
      url: 'https://www.obikelscreations.co.uk/gallery',
      siteName: 'Obikels Creations',
      images: '/obikels_creations_1727511218313.jpeg'
  }
}


export default function GalleryPage() {
  return (
    <>
    <GalleryHeroSectionComponent/>
    <FeaturedCollectionsComponent/>
    <FilterableGalleryComponent/>
    </>
  )
}
