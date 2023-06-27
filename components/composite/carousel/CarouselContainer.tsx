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
import { PostCard } from '../PostCard';
import { useCursor } from '@/hooks/useCursor';

interface CarouselContainerProps extends PropsWithChildren {
  className?: string;
}

export function CarouselContainer() {
  const slideSize = 700;
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const nextButtonCursorRef = useCursor<HTMLButtonElement>('Next slide');
  const prevButtonCursorRef = useCursor<HTMLButtonElement>('Previous slide');

  function nextSlide() {
    setCurrentSlide(currentSlide + 1 < 10 ? currentSlide + 1 : 9);
  }

  function prevSlide() {
    setCurrentSlide(currentSlide - 1 > 0 ? currentSlide - 1 : 0);
  }

  function getSlidePosition(slide: number) {
    return slide * slideSize;
  }

  function isSelected(slide: number) {
    return currentSlide === slide;
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
        ref={prevButtonCursorRef}
        shape={'circle'}
        iconOnly
        icon={<ChevronLeftIcon width={'64px'} />}
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
        icon={<ChevronRightIcon width={'64px'} />}
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
          <CarouselItem selected={isSelected(i)} key={i}>
            <PostCard
              key={i}
              direction="column"
              estimatedReadTime="1 min"
              size='medium'
              tag="Lifestyle"
              title="Invest more time in planning your projects in order to deliver on time"
              imgAlt="A picture of a dog"
              inset
              imgSrc="https://images.unsplash.com/photo-1687702720985-48faa9c4ab7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            />
          </CarouselItem>
        ))}
      </div>
    </div>
  );
}
