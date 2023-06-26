import { cn } from '@/lib/util';

interface NavbarItemProps {
  label?: string;
  children?: string;
  isActive?: boolean;
}

export function NavbarItem({
  label,
  children,
  isActive = false
}: NavbarItemProps) {
  return (
    <p
      className={cn(
        `group inline-block font-serif cursor-pointer text-sky-800 font-semibold relative after:transition-all uppercase
        after:block after:absolute after:w-0 after:hover:w-[25px] after:max-w-full after:h-1 after:bg-sky-800`,
        {
          'after:w-full after:hover:w-full': isActive
        }
      )}
    >
      {children ?? label}
    </p>
  );
}
