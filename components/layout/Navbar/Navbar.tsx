'use client';
import { Container } from '@/components/primitive/Container';
import { useCursor } from '@/hooks/useCursor';
import { cn } from '@/lib/util';
import { ContactButton } from './ContactButton';
import { NavbarItem } from './NavbarItem';
import { useEffect, useState } from 'react';

interface NavbarProps {
  className?: string;
}

let prevScrollPos = 0;

export function Navbar({ className }: NavbarProps) {
  const ref = useCursor<HTMLDivElement>(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  useEffect(() => {
    const fakeBody = document.querySelector('#fake-body') as HTMLElement;
    if (fakeBody) {
      fakeBody.addEventListener('scroll', (e) => {
        const currentScrollPos = fakeBody.scrollTop;

        if (prevScrollPos > currentScrollPos) {
          setIsNavbarOpen(true);
        } else {
          setIsNavbarOpen(false);
        }

        prevScrollPos = currentScrollPos;
      });
    }
  }, []);

  return (
    <Container
      noMaxWidth
      className={cn('py-4 transition-transform', className, {
        '-translate-y-[76px]': !isNavbarOpen
      })}
    >
      <div
        ref={ref}
        className={cn('flex justify-between items-center max-w-6xl mx-auto')}
      >
        <div className='font-display text-3xl text-sky-950 uppercase leading-none'>phuonglinh.</div>
        <div className="flex gap-8 items-baseline">
          <NavbarItem link="/">Home</NavbarItem>
          <NavbarItem link="/blog">Blog</NavbarItem>
          <NavbarItem link="/about">About</NavbarItem>
          <ContactButton />
        </div>
      </div>
    </Container>
  );
}
