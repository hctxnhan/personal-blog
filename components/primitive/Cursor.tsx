'use client';
import { cn } from '@/lib/util';
import { useCallback, useEffect, useRef, useState } from 'react';

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState('Placeholder');
  const [isInteracting, setIsInteracting] = useState(false);
  const [show, setShow] = useState(true);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const strokeDashoffset = 120 - (120 * scrollPercentage) / 100;

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
      setShow(true);
      if (ref.current) {
        const x = e.clientX;
        const y = e.clientY;

        if (e.target instanceof HTMLElement) {
          const container = e.target.closest('[data-cursor]');
          if (container) {
            setIsInteracting(true);
            console.log(container);
            setText(
              container.getAttribute('data-cursor-text') || 'Placeholder'
            );
          } else {
            setIsInteracting(false);
          }
        }

        transform(x, y);
      }
    };

    window.onscroll = () => {
      setShow(false);
      setIsInteracting(false);

      const scrollPercentage =
        (document.documentElement.scrollTop /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100;

      setScrollPercentage(scrollPercentage);
    };
  }, [transform]);

  return (
    <>
      <div
        className={cn(
          'aspect-square center p-4 absolute rounded-full bg-blue-400/95 transform pointer-events-none whitespace-nowrap transition-opacity',
          {
            'opacity-0': !show
          }
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
      {/* <div
        className={cn(
          'aspect-square  h-[20px] w-[20px] p-4 absolute rounded-full bg-blue-400/95 ',
          
        )}
      ></div> */}
      <svg
        className={cn('absolute opacity-0 top-4 left-4 transition-all pointer-events-none', {
          'opacity-100': !show
        })}
      >
        <circle
          className={cn(
            'stroke-blue-400/95 stroke-[4px] fill-none'
          )}
          style={{
            strokeDasharray: '120px',
            strokeDashoffset: `${strokeDashoffset}px`
          }}
          r="18"
          cx="20"
          cy="20"
        ></circle>
      </svg>
    </>
  );
}
