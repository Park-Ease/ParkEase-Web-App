"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";

export const TextShine = ({
  text,
  shineColor,
  duration,
}) => {
  const controls = useAnimationControls();
  const textRef = useRef(null);

  const updateAnimation = useCallback(() => {
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      const startPos = textWidth * -0.5;
      const endPos = textWidth * 1.25;

      controls.start({
        backgroundPosition: [`${startPos}px`, `${endPos}px`],
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [controls]);

  useEffect(() => {
    updateAnimation();
    window.addEventListener("resize", updateAnimation);

    return () => {
      window.removeEventListener("resize", updateAnimation);
    };
  }, [updateAnimation]);

  return (
    <motion.span
      ref={textRef}
      className="relative w-fit text-transparent bg-clip-text text-center text-7xl md:text-8xl lg:text-[10rem] font-funnel-display font-bold px-2"
      style={{
        backgroundImage: `linear-gradient(to right, #222 0%, ${shineColor} 10%, #222 20%)`,
        backgroundSize: "200%",
      }}
      animate={controls}
    >
      {text}
    </motion.span>
  );
};