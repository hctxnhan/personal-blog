'use client';
import { Overlay } from '@/components/primitive/Overlay';
import { Portal } from '@/components/primitive/Portal';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useRef } from 'react';

interface ZoomImageProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  src: string;
}

export function ZoomImage({ isOpen, src, setIsOpen }: ZoomImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  useClickOutside(ref, () => {
    setIsOpen(false);
  });
  return (
    <Portal selector="#image">
      {isOpen && (
        <div className="fixed center w-screen h-screen">
          <Overlay />
          <img ref={ref} src={src} className="max-h-[95vh] max-w-[95vw]" />
        </div>
      )}
    </Portal>
  );
}
