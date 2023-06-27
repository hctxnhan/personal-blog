import { cn } from '@/lib/util';
import { PropsWithChildren } from 'react';

interface OverlayProps extends PropsWithChildren<{}> {
  className?: string;
}

export function Overlay({ children, className }: OverlayProps) {
  return (
    <div className={cn('absolute inset-0 bg-sky-900/80 -z-10', className)}>
      {children}
    </div>
  );
}
