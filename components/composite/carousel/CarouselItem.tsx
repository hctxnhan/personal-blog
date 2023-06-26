import { cn } from '@/lib/util';
import { PropsWithChildren } from 'react';

interface CarouselItemProps extends PropsWithChildren {
  className?: string;
  selected?: boolean;
}

export function CarouselItem({
  className,
  children,
}: CarouselItemProps) {
  return (
    <div className="h-[300px] min-w-[700px] center relative">
      <div
        className={cn('transition-all w-full h-full bg-pink-100', className)}
      >
        {children}
      </div>
    </div>
  );
}
