'use client';
import { ImageProps } from '@/types/ImageProps';
import Image from 'next/image';
import { useRef } from 'react';

interface PostImageProps extends ImageProps {}

export function PostImage({ src, alt, height, width }: PostImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <div className="grid grid-cols-container cursor-pointer">
      <Image
        ref={imageRef}
        className="inset-0 w-full h-[500px] object-cover pb-16 -z-20 col-start-2 rounded-2xl"
        src={src}
        alt={alt}
        width={height}
        height={width}
      />
    </div>
  );
}
