import { Container } from '@/components/primitive/Container';
import { NavbarItem } from './NavbarItem';
import { Icon } from '@/components/primitive/Icon';
import { MoonIcon, BellIcon, Pencil2Icon } from '@radix-ui/react-icons';
import twColor from 'tailwindcss/colors';
import { Tooltip } from '@/components/primitive/Tooltip';
import { NavbarProfile } from './NavbarProfile';
import { cn } from '@/lib/util';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <Container noMaxWidth className={cn('py-4', className)}>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex gap-8">
          <NavbarItem isActive>Home</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </div>
        <div className="flex gap-8 items-center">
          <Tooltip content="Dark Mode">
            <Icon
              icon={
                <MoonIcon
                  strokeWidth={0.5}
                  stroke={twColor.sky[900]}
                  width={'20px'}
                  height={'20px'}
                />
              }
            />
          </Tooltip>
          <Tooltip content="Notifications">
            <Icon
              icon={
                <BellIcon
                  stroke={twColor.sky[900]}
                  strokeWidth={0.5}
                  width={'20px'}
                  height={'20px'}
                />
              }
            />
          </Tooltip>
          <Tooltip content="Create new post">
            <Icon
              icon={
                <Pencil2Icon
                  strokeWidth={0.5}
                  stroke={twColor.sky[900]}
                  width={'20px'}
                  height={'20px'}
                />
              }
            />
          </Tooltip>
          <NavbarProfile />
        </div>
      </div>
    </Container>
  );
}
