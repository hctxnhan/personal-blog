'use client';
import { cn } from '@/lib/util';
import { PropsWithChildren } from 'react';
import { useCursor } from '@/hooks/useCursor';

interface ContainerProps extends PropsWithChildren<{}> {
  className?: string;
  noMaxWidth?: boolean;
  screenHeight?: boolean;
  noCursorTrailer?: boolean;
}

export function Container({
  children,
  className,
  noMaxWidth,
  screenHeight,
  noCursorTrailer = false
}: ContainerProps) {
  const ref = useCursor<HTMLDivElement>(false);
  return (
    <div
      ref={noCursorTrailer ? ref : undefined}
      className={cn(
        'py-16 relative',
        {
          'max-w-none w-full': noMaxWidth,
          'h-screen': screenHeight
        },
        className
      )}
    >
      <div className={cn('container mx-auto max-w-6xl')}>{children}</div>
    </div>
  );
}
