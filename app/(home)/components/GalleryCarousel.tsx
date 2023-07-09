'use client';
import { Carousel } from '@/components/composite/Carousel';
import { ZoomImage } from '@/components/layout/ZoomImage/ZoomImage';
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
  const [isOpenZoomImage, setIsOpenZoomImage] = useState(false);

  return (
    <>
      <Carousel.Container
        currentSlide={activeIndex}
        setCurrentSlide={setActiveIndex}
        totalSlides={4}
        slideSize={700}
      >
        {images.map((image, index) => (
          <Carousel.Item
            cursorText="View image"
            selected={index === activeIndex}
            key={image.id}
          >
            <Image
              onClick={() => setIsOpenZoomImage(true)}
              src={constructUrl(image.url, true)}
              alt={image.caption}
              width={image.width}
              height={image.height}
              className="object-cover object-center w-full h-full"
            />
          </Carousel.Item>
        ))}
      </Carousel.Container>
      <ZoomImage
        src={constructUrl(images[activeIndex].url, true)}
        isOpen={isOpenZoomImage}
        setIsOpen={setIsOpenZoomImage}
      />
    </>
  );
}
