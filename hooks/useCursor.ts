import { useEffect, useRef } from 'react';

export function useCursor<T extends HTMLElement>(text: string | false) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (text === false) {
      el.setAttribute('data-cursor-off', true.toString());
      return;
    }

    el.setAttribute('data-cursor', true.toString());
    el.setAttribute('data-cursor-text', text);
  }, [text, ref]);

  return ref;
}
