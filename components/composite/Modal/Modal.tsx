'use client';
import { Icon } from '@/components/primitive/Icon';
import { Overlay } from '@/components/primitive/Overlay';
import { Portal } from '@/components/primitive/Portal';
import { useClickOutside } from '@/hooks/useClickOutside';
import { PropsWithChildren, useRef } from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  maxWidth?: number;
}

export function Modal({
  children,
  isOpen,
  setIsOpen,
  maxWidth = 400
}: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleClickOutside() {
    setIsOpen(false);
  }

  useClickOutside(ref, handleClickOutside);
  return (
    isOpen && (
      <Portal selector="#modal">
        <div className="fixed center top-0 left-0 w-screen h-screen">
          <Overlay />
          <div
            ref={ref}
            className="bg-white px-12 pt-14 pb-16 relative overflow-hidden rounded-md"
            style={{
              maxWidth: `${maxWidth}px`,
              overflow: 'auto'
            }}
          >
            {children}
            <Icon
              icon={<Cross1Icon />}
              className="h-[4px] w-[4px] fixed top-0 left-full"
            />
          </div>
        </div>
      </Portal>
    )
  );
}
