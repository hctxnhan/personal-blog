'use client';
import { Carousel } from '@/components/composite/Carousel';
import { constructUrl } from '@/lib/util';
import { Image as ImageType } from '@/types/Single';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryCarouselProps {
  images: Array<
    ImageType & {
      id: number;
    }
  >;
}

export function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Carousel.Container
      currentSlide={activeIndex}
      setCurrentSlide={setActiveIndex}
      totalSlides={4}
      slideSize={700}
    >
      {images.map((image) => (
        <Carousel.Item key={image.id}>
          <Image
            src={constructUrl(image.url, true)}
            alt={image.caption}
            width={image.width}
            height={image.height}
          />
        </Carousel.Item>
      ))}
    </Carousel.Container>
  );
}
