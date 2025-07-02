'use client'
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/img1.png", alt: "Main Room" }, // Large
  { src: "/img2.png", alt: "Office" },    // Top right
  { src: "/img3.png", alt: "Pool" },      // Bottom right
  { src: "/img4.png", alt: "Yellow Room" },
  { src: "/img5.png", alt: "Classic Room" },
  { src: "/img6.png", alt: "Mountain View" },
  { src: "/img7.png", alt: "Room Top" },
  { src: "/img8.png", alt: "Bed" },
  { src: "/img9.png", alt: "Curtains" },
];

export default function ImageCollage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // For medium screens, calculate which 2 images to show
  const getMediumScreenImages = () => {
    const firstImageIndex = Math.floor(currentImageIndex / 2) * 2;
    return [
      images[firstImageIndex],
      images[firstImageIndex + 1] || images[0] // Wrap around if needed
    ];
  };

  const nextMediumScreen = () => {
    setCurrentImageIndex((prev) => {
      const newIndex = prev + 2;
      return newIndex >= images.length ? 0 : newIndex;
    });
  };

  const prevMediumScreen = () => {
    setCurrentImageIndex((prev) => {
      const newIndex = prev - 2;
      return newIndex < 0 ? Math.max(0, images.length - 2) : newIndex;
    });
  };

  return (
    <div>
      <div className="rounded-2xl mx-auto overflow-hidden">
        <div className="
          hidden lg:grid
          grid-cols-3 grid-rows-2 gap-2
          h-[500px]
        ">
          {/* Large image (left, spans 2x2) */}
          <div className="relative col-span-2 row-span-2">
            <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" />
          </div>
          {/* Top right image */}
          <div className="relative col-span-1 row-span-1">
            <Image src={images[1].src} alt={images[1].alt} fill className="object-cover " />
          </div>
          {/* Bottom right image */}
          <div className="relative col-span-1 row-span-1">
            <Image src={images[2].src} alt={images[2].alt} fill className="object-cover " />
          </div>
          {/* Bottom row: 6 images in a single row, spanning all 3 columns */}
          <div className="relative col-span-3 row-span-1">
            <div className="grid grid-cols-6 gap-2">
              {images.slice(3).map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3]">
                  <Image src={img.src} alt={img.alt} fill className="object-cover " />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Medium screens: 2 images at a time */}
      <div className="hidden md:block lg:hidden">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {getMediumScreenImages().map((img, idx) => (
              <div key={idx} className="relative aspect-[4/3]">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover rounded-lg" 
                />
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevMediumScreen}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Previous images"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextMediumScreen}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Next images"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Image counter for medium screens */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {Math.floor(currentImageIndex / 2) + 1} / {Math.ceil(images.length / 2)}
          </div>
        </div>
        
        {/* Dots indicator for medium screens */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: Math.ceil(images.length / 2) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx * 2)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentImageIndex / 2) === idx ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to images ${idx * 2 + 1}-${Math.min(idx * 2 + 2, images.length)}`}
            />
          ))}
        </div>
      </div>
      
      {/* Small screens: single image with navigation */}
      <div className="md:hidden">
        <div className="relative">
          <div className="relative aspect-[4/3] w-full">
            <Image 
              src={images[currentImageIndex].src} 
              alt={images[currentImageIndex].alt} 
              fill 
              className="object-cover rounded-lg" 
            />
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Image counter */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
