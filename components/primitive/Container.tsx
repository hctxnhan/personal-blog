import { cn } from '@/lib/util';
import { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren<{}> {
  className?: string;
  noMaxWidth?: boolean;
  screenHeight?: boolean;
}

export function Container({
  children,
  className,
  noMaxWidth,
  screenHeight,
}: ContainerProps) {
  return (
    <div
      className={cn(
        'container mx-auto py-16 max-w-6xl',
        {
          'max-w-none': noMaxWidth,
          'h-screen': screenHeight
        },
        className
      )}
    >
      {children}
    </div>
  );
}
