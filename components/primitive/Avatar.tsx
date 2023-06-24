'use client';
import * as RadixAvatar from '@radix-ui/react-avatar';

interface AvatarProps {
  src: string;
  alt: string;
}

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <RadixAvatar.Root className='rounded-full inline-flex overflow-hidden'>
      <RadixAvatar.Image className="w-[44px] h-[44px] object-cover" src={src} alt="avatar" />
      <RadixAvatar.Fallback>{alt}</RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
}
