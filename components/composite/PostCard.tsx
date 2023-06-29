'use client';
import Image from 'next/image';
import { Badge } from '../primitive/Badge';
import { cn } from '@/lib/util';
import { Overlay } from '../primitive/Overlay';
import { useCursor } from '@/hooks/useCursor';
import Link from 'next/link';
import { useHover } from '@/hooks/useHover';

export interface PostCardProps {
  title: string;
  preview?: string;
  imgSrc: string;
  imgAlt: string;
  tag: string;
  estimatedReadTime: string;
  size?: 'big' | 'small' | 'medium';
  direction?: 'row' | 'column';
  inset?: boolean;
}

export function PostCard({
  estimatedReadTime,
  tag,
  imgAlt,
  imgSrc,
  preview,
  title,
  size = 'small',
  direction = 'row',
  inset = false
}: PostCardProps) {
  const cursorRef = useCursor<HTMLAnchorElement>('Read more');
  const isHover = useHover(cursorRef);

  return (
    <Link
      href={'/blog/postId'}
      ref={cursorRef}
      className={cn(
        'group flex gap-4 h-full transition-transform ease-out duration-300 transform hover:-translate-y-1 hover:cursor-pointer',
        {
          'flex-col': direction === 'column'
        }
      )}
    >
      <div
        className={cn('w-[200px] relative', {
          'min-h-[230px] h-full w-full': direction === 'column'
        })}
      >
        <Image
          className="absolute inset-0 w-full h-full -z-20 object-cover object-center"
          src={imgSrc}
          alt={imgAlt}
          width={500}
          height={500}
        />
        <Overlay className="transition-all group-hover:opacity-100 opacity-0" />
      </div>
      <div
        className={cn('flex gap-2 items-start flex-col', {
          'absolute top-10 left-10 right-10 bottom-10 transition-all group-hover:opacity-100 opacity-0 justify-end':
            inset
        })}
      >
        {!inset && (
          <div className="flex gap-2 items-baseline">
            <Badge>{tag}</Badge>
            <span className="text-neutral-400 text-xs font-medium">
              {estimatedReadTime}
            </span>
          </div>
        )}
        <h3
          className={cn('text-xl font-serif', {
            'text-3xl': size === 'big',
            'text-2xl': size === 'medium',
            'text-white font-bold': inset,
            'text-sky-800': isHover && !inset
          })}
        >
          {title}
        </h3>
        {preview && <p className="text-neutral-500 text-sm">{preview}</p>}
      </div>
    </Link>
  );
}
