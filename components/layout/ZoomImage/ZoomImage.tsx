'use client';
import { Overlay } from '@/components/primitive/Overlay';
import { Portal } from '@/components/primitive/Portal';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.2 }}
            className="fixed center w-screen h-screen"
          >
            <Overlay />
            <img ref={ref} src={src} className="max-h-[95vh] max-w-[95vw]" />
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
