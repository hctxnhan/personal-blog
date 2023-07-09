'use client';
import { cn } from '@/lib/util';
import * as Separator from '@radix-ui/react-separator';
import { useRouter, useSearchParams } from 'next/navigation';

interface FilterProps {
  options: {
    value: string;
    label: string;
  }[];
}

export function Filter({ options }: FilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get('filter') ?? '';

  function onSelectFilter(value: string) {
    const URLParams = new URLSearchParams(Array.from(searchParams.entries()));
    URLParams.set('filter', value);

    if (value === '') {
      URLParams.delete('filter');
    }

    router.push(`blog?${URLParams.toString()}`);
  }

  return (
    <div>
      <div className="flex h-5 items-center">
        {[
          {
            label: 'All',
            value: ''
          },
          ...options
        ].map((item, index) => (
          <>
            <div
              onClick={() => onSelectFilter(item.value)}
              className={cn(
                'font-medium text-gray-400 hover:text-sky-950 transition cursor-pointer',
                {
                  'text-sky-950': item.value === selectedValue
                }
              )}
            >
              {item.label}
            </div>
            {index !== options.length && (
              <Separator.Root
                className="bg-gray-300 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[16px]"
                decorative
                orientation="vertical"
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
