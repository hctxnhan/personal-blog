import { cn } from '@/lib/util';
import { Heading } from '../primitive/Heading';

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  inverted?: boolean;
}

export function SectionHeader({
  children,
  subtitle,
  title,
  inverted
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-1 items-baseline mb-12">
      <Heading
        className={cn('text-sky-950 text-6xl uppercase', {
          'text-neutral-50': inverted
        })}
        size={'xl'}
        font={'display'}
      >
        {title ?? children}
      </Heading>
      <Heading className={cn("text-neutral-500", {
        'text-neutral-300': inverted
      })} size={'h4'} font={'serif'}>
        {subtitle}
      </Heading>
    </div>
  );
}
