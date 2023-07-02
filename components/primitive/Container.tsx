'use client';
import { cn } from '@/lib/util';
import { PropsWithChildren } from 'react';
import { useCursor } from '@/hooks/useCursor';

interface ContainerProps extends PropsWithChildren<{}> {
  className?: string;
  noMaxWidth?: boolean;
  screenHeight?: boolean;
  includeNavbar?: boolean;
  noCursorTrailer?: boolean;
}

export function Container({
  children,
  className,
  noMaxWidth,
  screenHeight,
  noCursorTrailer = false,
  includeNavbar = false
}: ContainerProps) {
  const ref = useCursor<HTMLDivElement>(false);
  return (
    <div
      ref={noCursorTrailer ? ref : undefined}
      className={cn(
        'py-16 relative',
        {
          'max-w-none w-full': noMaxWidth,
          'h-screen': screenHeight,
          'py-8': includeNavbar
        },
        className
      )}
    >
      <div
        className={cn('container mx-auto max-w-6xl', {
          'pt-[76px]': includeNavbar
        })}
      >
        {children}
      </div>
    </div>
  );
}
