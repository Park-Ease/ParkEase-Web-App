import React from 'react';
import Image from 'next/image';

const FullWidthImage = ({ src, alt }) => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={src}
        alt={alt}
        layout="fill"       // Makes the image fill its container
        objectFit="cover"   // Ensures the image covers the entire div without distortion
        quality={100}       // Optional: Set image quality for better resolution
      />
    </div>
  );
};

export default FullWidthImage;
