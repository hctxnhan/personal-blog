'use client';
import { useCursor } from '@/hooks/useCursor';
import { useHover } from '@/hooks/useHover';
import { cn } from '@/lib/util';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../primitive/Badge';
import { Overlay } from '../primitive/Overlay';
import { ImageProps } from '@/types/ImageProps';

export interface PostCardProps extends ImageProps {
  id?: number;
  title: string;
  preview?: string;
  tag: string;
  estimatedReadTime: string;
  size?: 'big' | 'small' | 'medium';
  direction?: 'row' | 'column';
  inset?: boolean;
  slug?: string;
}

export function PostCard({
  estimatedReadTime,
  tag,
  src,
  alt,
  height,
  width,
  preview,
  title,
  size = 'small',
  direction = 'row',
  inset = false,
  slug
}: PostCardProps) {
  const cursorRef = useCursor<HTMLAnchorElement>('Read more');
  const isHover = useHover(cursorRef);

  return (
    <Link
      href={`/blog/${slug}`}
      ref={cursorRef}
      className={cn(
        'border border-slate-300 rounded-2xl group flex gap-2 h-full transition-transform ease-out duration-300 transform hover:-translate-y-1 hover:cursor-pointer',
        {
          'flex-col': direction === 'column'
        }
      )}
    >
      <div
        className={cn('w-[200px] relative overflow-hidden', {
          'h-[230px] w-full': direction === 'column',
          'flex-[0.4]': direction === 'row',
          'h-full': inset
        })}
      >
        <div className={cn('m-1 overflow-hidden h-[calc(100%-0.5rem)] relative', {
          'rounded-l-2xl': direction === 'row',
          'rounded-t-2xl': direction === 'column',
        })}>
          <Image
            className="absolute inset-0 w-full h-full -z-20 object-cover object-center"
            src={src}
            alt={alt}
            width={height || 500}
            height={width || 500}
          />
          <Overlay className="transition-all group-hover:opacity-100 opacity-0" />
        </div>
      </div>
      <div
        className={cn('flex gap-2 justify-center flex-col p-4 pt-2', {
          'absolute top-10 left-10 right-10 bottom-10 transition-all group-hover:opacity-100 opacity-0 justify-end':
            inset,
          'flex-[0.5] pt-4': direction === 'row'
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
          className={cn('text-xl font-serif font-medium', {
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
