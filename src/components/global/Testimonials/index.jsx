import React from 'react'
import HorizontalScrollCarousel from '@/components/ui/horizontal-scroll'
import testimonials from '@/constants/testimonials'
import GravityTextSwap from '@/components/ui/gravity-text-swap'

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative flex flex-col items-center w-full bg-[#fcd904]/80">
      <h2 className='text-4xl text-center md:text-6xl font-funnel-display font-bold mt-32'>What Our Customers Say</h2>
      <h2 className='text-4xl text-center md:text-6xl font-funnel-display font-bold flex items-center'>
        About Our
        <GravityTextSwap
        textArray={["Team", "Product", "Support"]}
        duration={1}
        pauseDuration={1.5}
        className="text-4xl md:text-6xl font-funnel-display font-bold ml-3 text-center"
        />
      </h2>
      <HorizontalScrollCarousel testimonials={testimonials} />
    </section>
  )
}

export default Testimonials