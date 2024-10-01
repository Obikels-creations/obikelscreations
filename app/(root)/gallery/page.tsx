import { FeaturedCollectionsComponent } from '@/components/pages/gallery-page/featured-collections'
import { FilterableGalleryComponent } from '@/components/pages/gallery-page/filterable-gallery'
import { GalleryHeroSectionComponent } from '@/components/pages/gallery-page/gallery-hero-section'

export default function GalleryPage() {
  return (
    <>
    <GalleryHeroSectionComponent/>
    <FeaturedCollectionsComponent/>
    <FilterableGalleryComponent/>
    </>
  )
}
