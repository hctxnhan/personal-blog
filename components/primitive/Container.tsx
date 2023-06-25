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
        'container mx-auto py-10 max-w-6xl',
        {
          'max-w-none': noMaxWidth,
          'min-h-screen': screenHeight
        },
        className
      )}
    >
      {children}
    </div>
  );
}
