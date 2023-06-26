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
  screenHeight
}: ContainerProps) {
  return (
    <div
      className={cn(
        'py-16',
        {
          'max-w-none w-full': noMaxWidth,
          'h-screen': screenHeight
        },
        className
      )}
    >
      <div className="container mx-auto max-w-6xl">{children}</div>
    </div>
  );
}
