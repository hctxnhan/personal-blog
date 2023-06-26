'use client';
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { CarouselItem } from './CarouselItem';
import { Button } from '@/components/primitive/Button';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/util';

interface CarouselContainerProps extends PropsWithChildren {
  className?: string;
}

export function CarouselContainer() {
  const slideSize = 700;
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function nextSlide() {
    setCurrentSlide(currentSlide + 1 < 10 ? currentSlide + 1 : 9);
  }

  function prevSlide() {
    setCurrentSlide(currentSlide - 1 > 0 ? currentSlide - 1 : 0);
  }

  function getSlidePosition(slide: number) {
    return slide * slideSize;
  }

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
    [containerRef]
  );

  useEffect(() => {
    centeringSelectedSlide(currentSlide);
  }, [currentSlide, centeringSelectedSlide]);

  return (
    <div className="relative">
      <Button
        shape={'rounded'}
        iconOnly
        icon={<ChevronLeftIcon width={'24px'} />}
        className={cn(
          'aspect-square absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10',
          {
            'bg-slate-400 cursor-default': currentSlide == 0
          }
        )}
        onClick={prevSlide}
      />
      <Button
        shape={'rounded'}
        iconOnly
        icon={<ChevronRightIcon width={'24px'} />}
        className={cn(
          'aspect-square absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10',
          {
            'bg-slate-400 cursor-default': currentSlide == 9
          }
        )}
        onClick={nextSlide}
      />
      <div className="flex overflow-hidden" ref={containerRef}>
        {Array.from({ length: 10 }).map((_, i) => (
          <CarouselItem key={i}>
            Alo {i} {currentSlide === i ? 'selected' : ''}
          </CarouselItem>
        ))}
      </div>
    </div>
  );
}
