'use client';
import { Button } from '@/components/primitive/Button';
import { useCursor } from '@/hooks/useCursor';
import { cn } from '@/lib/util';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { PropsWithChildren, useCallback, useEffect, useRef } from 'react';

interface CarouselContainerProps extends PropsWithChildren {
  slideSize: number;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  totalSlides: number;
}

export function CarouselContainer({
  slideSize,
  currentSlide,
  setCurrentSlide,
  totalSlides,
  children
}: CarouselContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nextButtonCursorRef = useCursor<HTMLButtonElement>('Next slide');
  const prevButtonCursorRef = useCursor<HTMLButtonElement>('Previous slide');

  function nextSlide() {
    setCurrentSlide(
      currentSlide + 1 < totalSlides ? currentSlide + 1 : totalSlides - 1
    );
  }

  function prevSlide() {
    setCurrentSlide(currentSlide - 1 > 0 ? currentSlide - 1 : 0);
  }

  const getSlidePosition = useCallback(
    (slide: number) => {
      return slide * slideSize;
    },
    [slideSize]
  );

  const centeringSelectedSlide = useCallback(
    (slide: number) => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.clientWidth;
      const slidePosition = getSlidePosition(slide);
      const centerPosition = slidePosition + slideSize / 2 - containerWidth / 2;

      container.scrollTo({
        left: centerPosition,
        behavior: 'smooth'
      });
    },
    [containerRef, slideSize, getSlidePosition]
  );

  useEffect(() => {
    centeringSelectedSlide(currentSlide);
  }, [currentSlide, centeringSelectedSlide]);

  return (
    <div className="relative">
      <Button
        ref={prevButtonCursorRef}
        shape={'circle'}
        iconOnly
        icon={<ChevronLeftIcon height={'35px'} width={'35px'} />}
        className={cn(
          'aspect-square absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10',
          {
            'bg-slate-400 cursor-default': currentSlide == 0
          }
        )}
        onClick={prevSlide}
      />
      <Button
        ref={nextButtonCursorRef}
        shape={'circle'}
        iconOnly
        icon={<ChevronRightIcon height={'35px'} width={'35px'} />}
        className={cn(
          'aspect-square absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10',
          {
            'bg-slate-400 cursor-default': currentSlide == 9
          }
        )}
        onClick={nextSlide}
      />
      <div className="flex overflow-hidden" ref={containerRef}>
        {children}
      </div>
    </div>
  );
}
