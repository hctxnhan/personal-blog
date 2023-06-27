import { cn } from '@/lib/util';
import { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren<{}> {
  className?: string;
  noMaxWidth?: boolean;
  screenHeight?: boolean;
  includeNavbar?: boolean;
}

export function Container({
  children,
  className,
  noMaxWidth,
  screenHeight,
  includeNavbar = false
}: ContainerProps) {
  return (
    <div
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
