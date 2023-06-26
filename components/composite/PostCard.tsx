import Image from 'next/image';
import { Button } from '../primitive/Button';
import { Badge } from '../primitive/Badge';
import { cn } from '@/lib/util';

interface PostCardProps {
  title: string;
  preview?: string;
  imgSrc: string;
  imgAlt: string;
  tag: string;
  estimatedReadTime: string;
  size?: 'big' | 'small';
  direction?: 'row' | 'column';
}

export function PostCard({
  estimatedReadTime,
  tag,
  imgAlt,
  imgSrc,
  preview,
  title,
  size = 'small',
  direction = 'row'
}: PostCardProps) {
  return (
    <div
      className={cn('flex gap-4 transition-transform transform hover:-translate-y-1', {
        'flex-col': direction === 'column'
      })}
    >
      <div
        className={cn('w-[200px] relative', {
          'min-h-[200px] h-full w-full': direction === 'column'
        })}
      >
        <Image
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={imgSrc}
          alt={imgAlt}
          width={500}
          height={500}
        />
      </div>
      <div className="flex gap-2 items-start flex-col">
        <div className="flex gap-2 items-baseline">
          <Badge>{tag}</Badge>
          <span className="text-neutral-400 text-sm">{estimatedReadTime}</span>
        </div>
        <h3
          className={cn('text-2xl font-serif', {
            'text-3xl': size === 'big'
          })}
        >
          {title}
        </h3>
        {preview && <p>{preview}</p>}
      </div>
    </div>
  );
}
