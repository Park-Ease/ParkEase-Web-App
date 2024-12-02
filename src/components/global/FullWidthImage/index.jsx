import React from 'react';
import Image from 'next/image';

const FullWidthImage = ({ src, alt }) => {
  return (
    <div className="relative w-full h-[70vh] lg:h-screen">
      <Image
        src={src}
        alt={alt}
        layout="fill"      
        objectFit="fill"  
        quality={100}       
      />
    </div>
  );
};

export default FullWidthImage;
