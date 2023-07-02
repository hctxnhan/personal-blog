'use client';
import { cn } from '@/lib/util';
import { useCallback, useEffect, useRef, useState } from 'react';

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState('');
  const [isInteracting, setIsInteracting] = useState(false);
  const [show, setShow] = useState(false);

  const transform = useCallback(
    (x: number, y: number) => {
      const keyframes = {
        top: `${y}px`,
        left: `${x}px`,
        transform: isInteracting ? 'scale(1)' : 'scale(0.2)'
      };

      if (ref.current) {
        ref.current.animate([keyframes], {
          duration: 500,
          fill: 'forwards'
        });
      }
    },
    [isInteracting]
  );

  useEffect(() => {
    window.onmousemove = (e: MouseEvent) => {
      if (ref.current) {
        setShow(true);

        const x = e.clientX;
        const y = e.clientY;

        const container = (e.target as HTMLElement).closest('[data-cursor]');
        if (container) {
          setIsInteracting(true);
          setText(container.getAttribute('data-cursor-text') || '');
        } else {
          setIsInteracting(false);
        }

        const turnOffCursor = (e.target as HTMLElement).closest(
          '[data-cursor-off]'
        );
        if (turnOffCursor) {
          setShow(false);
        }

        transform(x, y);
      }
    };

    window.onscroll = () => {
      setShow(false);
      setIsInteracting(false);
    };
  }, [transform]);

  return (
    <div
      className={cn(
        'aspect-square opacity-0 center p-4 absolute rounded-full bg-sky-700/95 pointer-events-none whitespace-nowrap transition-opacity transform scale-[0.2] top-0 left-0',
        {
          'opacity-100': show
        }
      )}
      ref={ref}
    >
      <span
        className={cn(
          'font-display uppercase text-white opacity-0 text-lg font-thin transition-opacity',
          {
            'opacity-100': isInteracting && show
          }
        )}
      >
        {text || 'Placeholder'}
      </span>
    </div>
  );
}
