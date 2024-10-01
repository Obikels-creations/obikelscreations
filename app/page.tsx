import { CollaborationSectionComponent } from '@/components/collaboration-section'
import { AboutUsPreviewComponent } from '@/components/pages/home-page/about-us-preview'
import { CallToActionComponent } from '@/components/pages/home-page/call-to-action'
import { CraftsmanshipMaterialsComponent } from '@/components/pages/home-page/craftsmanship-materials'
import { FeaturedCollectionComponent } from '@/components/pages/home-page/featured-collection'
import { HeroSectionComponent } from '@/components/pages/home-page/hero-section'
import { TailoredToYouComponent } from '@/components/pages/home-page/tailored-to-you'
import { TestimonialsComponent } from '@/components/pages/home-page/testimonials'
import { WeatherFriendlyComponent } from '@/components/pages/home-page/weather-friendly'

export default function HomePage() {
  return (
    <>
   <HeroSectionComponent/>
   <AboutUsPreviewComponent/>
   <TailoredToYouComponent/>
   <FeaturedCollectionComponent/>
   <WeatherFriendlyComponent/>
   <CraftsmanshipMaterialsComponent/>
   <TestimonialsComponent/>
   <CollaborationSectionComponent/>
   <CallToActionComponent/>
   </>
  )
}
