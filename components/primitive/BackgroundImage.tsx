import { cn } from '@/lib/util';
import { ImageProps } from '@/types/ImageProps';
import Image from 'next/image';

interface BackgroundImageProps extends ImageProps {
  className?: string;
}

export function BackgroundImage({
  className,
  alt,
  src,
  height,
  width
}: BackgroundImageProps) {
  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
      <Image
        className="object-cover object-fit"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
}
