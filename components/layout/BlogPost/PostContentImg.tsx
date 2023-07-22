'use client';
import Image from 'next/image';
import { useCursor } from '@/hooks/useCursor';
import { useState } from 'react';
import { ZoomImage } from '../ZoomImage/ZoomImage';
export interface PostContentImgProps {
  src: string;
  alt: string;
}

export function PostContentImg({ src, alt }: PostContentImgProps) {
  const [isZoomImageOpen, setIsZoomImageOpen] = useState(false);
  const cursorRef = useCursor<HTMLSpanElement>('Zoom');
  return (
    <>
      <span
        className="relative block w-full h-[450px] cursor-pointer my-12"
        onClick={() => setIsZoomImageOpen(true)}
        ref={cursorRef}
      >
        <Image
          src={src}
          alt={alt}
          fill={true}
          className="object-cover object-center w-full h-full rounded-xl"
        />
      </span>
      <ZoomImage
        src={src}
        isOpen={isZoomImageOpen}
        setIsOpen={setIsZoomImageOpen}
      />
    </>
  );
}
