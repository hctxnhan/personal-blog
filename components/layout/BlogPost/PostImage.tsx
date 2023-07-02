'use client';
import { useCursor } from '@/hooks/useCursor';
import Image from 'next/image';
import { useRef } from 'react';

interface PostImageProps {
  imgSrc: string;
  imgAlt: string;
  height: number;
  width: number;
}

export function PostImage({ imgSrc, imgAlt, height, width }: PostImageProps) {
  const cursorRef = useCursor<HTMLDivElement>('Start reading');
  const imageRef = useRef<HTMLImageElement>(null);

  function scrollToEndOfImage() {
    if (!imageRef.current) return;

    window.scrollTo({
      top: imageRef.current.offsetTop + imageRef.current.clientHeight - 76,
      behavior: 'smooth'
    });
  }

  return (
    <div
      onClick={scrollToEndOfImage}
      className="grid grid-cols-container cursor-pointer"
      ref={cursorRef}
    >
      <Image
        ref={imageRef}
        className="inset-0 w-full h-[800px] object-cover pt-8 pb-16 -z-20 col-span-2"
        src={imgSrc}
        alt={imgAlt}
        width={height}
        height={width}
      />
    </div>
  );
}
