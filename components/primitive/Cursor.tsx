'use client';
import { cn } from '@/lib/util';
import { useCallback, useEffect, useRef, useState } from 'react';

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState('');
  const [isInteracting, setIsInteracting] = useState(false);

  const transform = useCallback(
    (x: number, y: number) => {
      const keyframes = {
        top: `${y}px`,
        left: `${x}px`,
        transform: isInteracting ? 'scale(1)' : 'scale(0.2)'
      };

      if (ref.current) {
        ref.current.animate([keyframes], {
          duration: 800,
          fill: 'forwards'
        });
      }
    },
    [isInteracting]
  );

  useEffect(() => {
    window.onmousemove = (e: MouseEvent) => {
      if (ref.current) {
        const x = e.clientX;
        const y = e.clientY;

        if (e.target instanceof HTMLElement) {
          const container = e.target.closest('[data-cursor]');
          if (container) {
            setIsInteracting(true);
            setText(container.getAttribute('data-cursor-text') || '');
          } else {
            setIsInteracting(false);
          }
        }

        transform(x, y);
      }
    };
  }, [transform]);

  return (
    <div
      className={cn(
        'aspect-square center p-4 absolute rounded-full bg-blue-400/95 z-10 transform pointer-events-none whitespace-nowrap',
      )}
      ref={ref}
    >
      <span
        className={cn(
          'font-display uppercase text-white opacity-0 text-lg font-thin transition-opacity',
          {
            'opacity-100': isInteracting
          }
        )}
      >
        {text}
      </span>
    </div>
  );
}
