import { cn } from '@/lib/util';
import { PropsWithChildren } from 'react';

interface CarouselItemProps extends PropsWithChildren {
  className?: string;
  selected?: boolean;
}

export function CarouselItem({
  className,
  children,
  selected
}: CarouselItemProps) {
  return (
    <div
      className={cn('transition-all h-[400px] min-w-[700px] center relative transform', {
        'opacity-1': selected,
        'opacity-50': !selected
      })}
    >
      <div
        className={cn('transition-all w-full h-full bg-pink-100', className)}
      >
        {children}
      </div>
    </div>
  );
}
