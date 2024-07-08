// components/BackgroundImage.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface BackgroundImageProps {
  src: string;
  alt: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const img = new window.Image();
      img.src = src;
      img.onload = () => setLoaded(true);
    }
  }, [src]);

  return (
    <div
      className={`relative w-full h-screen lg:bg-cover lg:bg-center flex justify-center items-center text-white transition-opacity duration-500 ${
        loaded ? "lg:opacity-100" : "lg:opacity-0"
      }`}
      style={{ backgroundImage: loaded ? `url(${src})` : "none", zIndex: -2 }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        priority
        className="hidden"
      />
    </div>
  );
};

export default BackgroundImage;
