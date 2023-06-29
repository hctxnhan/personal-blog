'use client';
import { Container } from '@/components/primitive/Container';
import { useCursor } from '@/hooks/useCursor';
import { cn } from '@/lib/util';
import { NavbarItem } from './NavbarItem';
import { NavbarProfile } from './NavbarProfile';
import { Button } from '@/components/primitive/Button';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const ref = useCursor<HTMLDivElement>(false);

  return (
    <Container noMaxWidth className={cn('py-4', className)}>
      <div
        ref={ref}
        className="flex justify-between items-center max-w-6xl mx-auto"
      >
        <div className="flex gap-8 items-center">
          <NavbarItem link="/">Home</NavbarItem>
          <NavbarItem link="/blog">Blog</NavbarItem>
          <NavbarItem link="/about">About</NavbarItem>
          <Button variant={'outline'} tone={'dark'} shape={'circle'} size={'small'} className="text-sm">
            Contact
          </Button>
        </div>
        <div className="flex gap-8 items-center">
          <NavbarProfile />
        </div>
      </div>
    </Container>
  );
}
