import { cn } from '@/lib/util';
import { Heading } from '../primitive/Heading';

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  inverted?: boolean;
  className?: string;
}

export function SectionHeader({
  children,
  subtitle,
  title,
  inverted,
  className
}: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-4 items-baseline mb-6', className)}>
      <Heading
        className={cn('text-sky-950 text-4xl uppercase font-semibold', {
          'text-neutral-50': inverted
        })}
        size={'xl'}
        font={'display'}
      >
        {title ?? children}
      </Heading>
      {subtitle && (
        <Heading
          className={cn('text-slate-600 font-bold', {
            'text-slate-200': inverted
          })}
          size={'h4'}
          font={'serif'}
        >
          {subtitle}
        </Heading>
      )}
    </div>
  );
}
