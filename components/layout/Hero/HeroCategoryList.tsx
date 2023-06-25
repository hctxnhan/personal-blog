import { cn } from '@/lib/util';
import { HeroCategoryItem } from './HeroCategoryItem';

interface HeroCategoryListProps {
  className?: string;
}

export function HeroCategoryList({ className }: HeroCategoryListProps) {
  return (
    <div className={cn('flex flex-1', className)}>
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <HeroCategoryItem key={i} />
        ))}
    </div>
  );
}
