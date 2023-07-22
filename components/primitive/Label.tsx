import { PropsWithChildren } from 'react';

interface LabelProps extends PropsWithChildren {}

export function Label({ children }: LabelProps) {
  return (
    <label className="text-neutral-900 uppercase tracking-wide font-medium">
      {children}
    </label>
  );
}
