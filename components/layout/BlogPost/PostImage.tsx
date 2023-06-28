'use client';
import { useCursor } from '@/hooks/useCursor';
import Image from 'next/image';
import { useRef } from 'react';

export function PostImage() {
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
        src={
          'https://images.unsplash.com/photo-1686904423955-b928225c6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        }
        alt="Footer Image"
        width={1470}
        height={980}
      />
    </div>
  );
}
