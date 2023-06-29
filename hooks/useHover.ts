import { useEffect, useState } from 'react';

export function useHover(ref: React.RefObject<HTMLElement>) {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mouseEnter = () => setIsHover(true);
    const mouseLeave = () => setIsHover(false);

    ref.current.addEventListener('mouseenter', mouseEnter);

    ref.current.addEventListener('mouseleave', mouseLeave);

    return () => {
      el.removeEventListener('mouseenter', mouseEnter);
      el.removeEventListener('mouseleave', mouseLeave);
    };
  }, [ref]);

  return isHover;
}
