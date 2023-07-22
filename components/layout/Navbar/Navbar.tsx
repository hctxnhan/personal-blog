'use client';
import { Container } from '@/components/primitive/Container';
import { useCursor } from '@/hooks/useCursor';
import { cn } from '@/lib/util';
import { NavbarItem } from './NavbarItem';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const ref = useCursor<HTMLDivElement>(false);

  return (
    <Container
      noMaxWidth
      className={cn('transition-transform center py-16', className)}
    >
      <div
        ref={ref}
        className={cn('flex flex-col gap-2 justify-between items-center max-w-6xl mx-auto')}
      >
        <div className="font-display text-4xl font-black text-sky-800 uppercase">
          phuonglinh
        </div>
        <div className="flex gap-8 items-baseline">
          <NavbarItem link="/">Home</NavbarItem>
          <NavbarItem link="/blog">Blog</NavbarItem>
          {/* <NavbarItem link="/about">About</NavbarItem> */}
        </div>
      </div>
    </Container>
  );
}
