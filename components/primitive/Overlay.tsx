import { PropsWithChildren } from 'react';

interface OverlayProps extends PropsWithChildren<{}> {}

export function Overlay({ children }: OverlayProps) {
  return <div className="absolute inset-0 bg-sky-900/80">{children}</div>;
}
