"use client"

import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import Image from 'next/image'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const Hero = () => {

  return (
    <section id="hero" className="p-8 grid w-full h-[50rem] md:h-[70rem] lg:h-[80rem] place-items-stretch">
      <ContainerScroll
        titleComponent={<div className="mx-auto px-4 flex flex-col items-center text-center">
          <HoverBorderGradient containerClassName="rounded-full" as="button" className="bg-white text-black text-xs lg:text-sm flex items-center space-x-2">
            Discover Parkease: Revolutionizing Parking Management <ArrowRightIcon className='w-5 h-5 ml-2' />
          </HoverBorderGradient>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mx-auto my-6 w-full leading-snug !text-4xl md:!text-5xl lg:!text-7xl lg:max-w-4xl lg:leading-snug font-funnel-display font-semibold"
          >
            Experience seamless{" "}
            <span className="text-[#fcd904]/80 leading-none font-funnel-display font-semibold">
              efficiency
            </span>{" "}
            and{" "}
            <span className="leading-none text-[#fcd904]/80 font-funnel-display font-semibold">
              convenience
            </span>{" "}
            in parking.
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 !text-xs md:!text-md md:!leading-4 lg:!text-lg lg:mb-12 font-funnel-sans font-normal"
          >
            Parkease makes finding free street parking effortless. Using GPS and smart camera detection, it identifies free parking spots and alerts you when you're approaching and even directs you to your right parking spot.
          </Typography>
        </div>} >
        <Image
          src={`/parkease-front-banner.png`}
          alt="hero"
          height={720}
          width={1400}
          className="rounded-2xl object-fill h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  )
}

export default Hero