"use client";

import React, { useRef } from "react";
import  NavbarForDropdownWithMultipleLanguages  from "../components/global/NavbarForDropdownWithMultipleLanguages";
import Hero from "@/components/global/Hero";
import { ThemeProvider } from "@material-tailwind/react";
import Features from "@/components/global/Features";
import FullWidthImage from "@/components/global/FullWidthImage";
import Testimonials from "@/components/global/Testimonials";
import ReactLenis, { useLenis } from "@studio-freight/react-lenis";
import Footer from "@/components/global/Footer";
import Faqs from "@/components/global/Faqs";
import ScrollContext from "@/context/ScrollContext";


const HomePage = () => {
  const lenis = useLenis();
  const targetRef = useRef(null);

  const handleScrollToComponent = () => {
    if (targetRef.current) {
      lenis.scrollTo(targetRef.current, {
        offset: -50, // Optional: Offset from the target position
        duration: 1.5, // Optional: Scroll duration
        easing: (t) => t * (2 - t), // Optional: Easing function
      });
    }
  };

  return (
    
      <ScrollContext.Provider value={{ targetRef, handleScrollToComponent }}>
        <ThemeProvider>
          <ReactLenis root>
            <NavbarForDropdownWithMultipleLanguages />
            <Hero />
            <Features />
            <FullWidthImage src="/parkease-ad.png" alt="Parkease Banner" />
            <Testimonials />
            <Faqs />
            <FullWidthImage
              src="/parkease-banner1.png"
              alt="Parkease Advertisement on Wall"
            />
            <Footer />
          </ReactLenis>
        </ThemeProvider>
      </ScrollContext.Provider>
  );
};

export default HomePage;
