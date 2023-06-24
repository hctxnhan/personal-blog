"use client"
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { PropsWithChildren } from 'react';

interface TooltipProps extends PropsWithChildren {
  content: string;
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className='bg-sky-50 p-2 rounded-md text-xs' sideOffset={4}>
            {content}
            <RadixTooltip.Arrow className='fill-sky-50' />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
