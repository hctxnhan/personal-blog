'use client';
import { Button } from '@/components/primitive/Button';
import { useCursor } from '@/hooks/useCursor';
import { useRouter } from 'next/navigation';

interface PaginationProps {
  pages: number;
  currentPage: number;
  nextPageUrl: string;
  prevPageUrl: string;
}

export function Pagination({
  pages,
  currentPage,
  prevPageUrl,
  nextPageUrl
}: PaginationProps) {
  const nextBtnRef = useCursor<HTMLButtonElement>(false);
  const prevBtnRef = useCursor<HTMLButtonElement>(false);
  const router = useRouter();

  function canGoNext() {
    return !(currentPage >= pages);
  }

  function canGoPrev() {
    return !(currentPage <= 1);
  }

  function handleNextPage() {
    if (!canGoNext()) return;
    router.push(nextPageUrl);
  }

  function handlePrevPage() {
    if (!canGoPrev()) return;
    router.push(prevPageUrl);
  }

  return (
    pages > 1 && (
      <div className="center gap-6 w-[250px] mx-auto">
        <Button
          ref={prevBtnRef}
          variant={'outline'}
          size={'small'}
          tone="dark"
          shape={'circle'}
          className="flex-1"
          onClick={handlePrevPage}
          disabled={!canGoPrev()}
        >
          Previous
        </Button>
        <p className="font-medium text-sm text-gray-400">
          {currentPage} / {pages}
        </p>
        <Button
          ref={nextBtnRef}
          size={'small'}
          variant={'outline'}
          tone="dark"
          shape={'circle'}
          className="flex-1"
          onClick={handleNextPage}
          disabled={!canGoNext()}
        >
          Next
        </Button>
      </div>
    )
  );
}
