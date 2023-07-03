'use client';
import { PropsWithChildren } from 'react';

interface ModalBodyProps extends PropsWithChildren {}

export function ModalBody({ children }: ModalBodyProps) {
  return <div className="flex flex-col gap-4 center w-full">{children}</div>;
}
