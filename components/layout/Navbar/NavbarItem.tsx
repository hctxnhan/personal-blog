'use client';
import Link from 'next/link';
import { cn } from '@/lib/util';
import { usePathname } from 'next/navigation';

interface NavbarItemProps {
  label?: string;
  children?: string;
  link: string;
}

export function NavbarItem({ label, children, link }: NavbarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link
      href={link}
      className={cn(
        `group inline-block cursor-pointer text-sky-800 font-medium relative after:transition-all uppercase
        after:block after:absolute after:w-0 after:hover:w-[25px] after:max-w-full after:h-1 after:bg-sky-800`,
        {
          'after:w-full after:hover:w-full': isActive
        }
      )}
    >
      {children ?? label}
    </Link>
  );
}
