'use client';
import { ImageProps } from '@/types/ImageProps';
import Image from 'next/image';
import { useRef } from 'react';

interface PostImageProps extends ImageProps {}

export function PostImage({ src, alt, height, width }: PostImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  function scrollToEndOfImage() {}

  return (
    <div
      onClick={scrollToEndOfImage}
      className="grid grid-cols-container cursor-pointer"
    >
      <Image
        ref={imageRef}
        className="inset-0 w-full h-[800px] object-cover pt-8 pb-16 -z-20 col-span-2"
        src={src}
        alt={alt}
        width={height}
        height={width}
      />
    </div>
  );
}
