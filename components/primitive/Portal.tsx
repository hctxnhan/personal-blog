"use client";
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps extends PropsWithChildren {
  selector?: string;
}

export function Portal({ children, selector = '#portal' }: PortalProps) {
  const portalRoot = document.querySelector(selector);
  console.log(portalRoot)
  if (!portalRoot) return null;
  return createPortal(children, portalRoot);
}
