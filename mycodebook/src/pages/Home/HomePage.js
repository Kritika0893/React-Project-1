
import { Faq } from "./components/Faq"
import { FeaturedProducts } from "./components/FeaturedProduct"
import { Hero } from "./components/Hero"
import { Testimonials } from "./components/Testimonial"

export const HomePage=()=> {
  return (
    <main>
<Hero/>
<FeaturedProducts/>
<Testimonials/>
<Faq/>

    </main>
  )
}
