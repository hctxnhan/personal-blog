'use client';
import { Container } from '@/components/primitive/Container';
import { useCursor } from '@/hooks/useCursor';
import { cn } from '@/lib/util';
import { ContactButton } from './ContactButton';
import { NavbarItem } from './NavbarItem';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const ref = useCursor<HTMLDivElement>(false);

  return (
    <Container
      noMaxWidth
      className={cn('py-4 transition-transform center', className)}
    >
      <div
        ref={ref}
        className={cn('flex justify-between items-center max-w-6xl mx-auto')}
      >
        <div className="font-display text-3xl text-sky-950 uppercase">
          phuonglinh.
        </div>
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
