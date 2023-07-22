'use client';
import { cn } from '@/lib/util';
import { useEffect, useMemo, useState } from 'react';

export function IndexNav() {
  const [current, setCurrent] = useState<string>('');
  const [sections, setSections] = useState<string[]>([]);
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              const id = target.dataset['navLabel'];
              setCurrent(id ?? '');
              const isAlternate = target.classList.contains(
                'index-nav-section--alternate'
              );
              setMode(isAlternate ? 'dark' : 'light');
            }
          });
        },
        {
          rootMargin: '-50%'
        }
      ),
    []
  );

  function onClick(section: string) {
    const target = document.querySelector(
      `[data-nav-label="${section}"]`
    ) as HTMLElement;
    target.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const sections = document.querySelectorAll('.index-nav-section');
    let sectionLabels = [] as string[];
    sections.forEach((section) => {
      section = section as HTMLElement;
      const id = (section as HTMLElement).dataset['navLabel'];
      if (id) sectionLabels.push(id);

      observer.observe(section);
    });

    setSections(sectionLabels);

    return () => {
      setSections([]);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [observer]);

  return (
    <div className="group fixed top-0 right-0 h-screen w-16 center flex-col gap-6 z-50">
      {sections.map((section) => (
        <div
          key={section}
          onClick={() => onClick(section)}
          className={cn(
            'w-3 h-3 rounded-full transition-all center relative border cursor-pointer hover:h-4 hover:w-4',
            {
              'h-4 w-4': current === section,
              'border-sky-800': mode === 'light',
              'border-sky-50': mode === 'dark'
            }
          )}
        >
          <div
            className={cn(
              'hidden w-2 h-2 rounded-full transition-all absolute',
              {
                'bg-sky-800': mode === 'light',
                'bg-sky-50': mode === 'dark',
                block: current === section
              }
            )}
          />
        </div>
      ))}
    </div>
  );
}
