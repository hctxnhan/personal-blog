'use client';
import { Button } from '@/components/primitive/Button';
import { useCursor } from '@/hooks/useCursor';

interface PaginationProps {
  pages: number;
  currentPage: number;
}

export function Pagination({ pages, currentPage }: PaginationProps) {
  const nextBtnRef = useCursor<HTMLButtonElement>(false);
  const prevBtnRef = useCursor<HTMLButtonElement>(false);

  return (
    <div className="center gap-6 w-[250px] mx-auto">
      <Button
        ref={prevBtnRef}
        variant={'outline'}
        size={'small'}
        tone="dark"
        shape={'circle'}
        className="flex-1"
      >
        Previous
      </Button>
      <Button
        ref={nextBtnRef}
        size={'small'}
        variant={'outline'}
        tone="dark"
        shape={'circle'}
        className="flex-1"
      >
        Next
      </Button>
    </div>
  );
}
