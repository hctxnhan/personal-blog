'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const variants = {
  enter: {
    y: -40,
    scale: 0.8,
    opacity: 0
  },
  center: {
    zIndex: 1,
    y: 0,
    scale: 1,
    opacity: 1
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    scale: 0.8,
    y: 40
  }
};

interface HeroSubtitleLoopProps {
  items: string[];
  changeInterval?: number;
}

export function HeroSubtitleLoop({
  items,
  changeInterval = 3000
}: HeroSubtitleLoopProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = current + 1;
      if (next === items.length) {
        next = 0;
      }
      setCurrent(next);
    }, changeInterval);
  }, [current, setCurrent, changeInterval, items.length]);

  return (
    <div className="flex items-center lowercase text-xl">
      <AnimatePresence>
        <motion.span
          className="text-white absolute font-medium"
          variants={variants}
          key={current}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: 'just' },
            opacity: { duration: 0.3 },
            ease: 'linear'
          }}
        >
          {items[current]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
