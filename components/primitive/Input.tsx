import { cn } from '@/lib/util';
import { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  dark?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ dark = false, ...rest }, ref) => {
    return (
      <input
        className={cn(
          'bg-transparent border-b-[1px] border-sky-50 pb-3 focus:outline-none placeholder:text-sky-100/80 placeholder:font-normal text-white',
          {
            'border-sky-900 text-sky-950 placeholder:text-grey-800/80': dark
          }
        )}
        ref={ref}
        {...rest}
      ></input>
    );
  }
);

Input.displayName = 'Input';
