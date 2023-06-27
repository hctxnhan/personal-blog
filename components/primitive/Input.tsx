import { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <input
        className="bg-transparent border-b-[1px] border-sky-50 pb-3 focus:outline-none placeholder:text-sky-100/80 placeholder:font-normal text-white"
        ref={ref}
        {...props}
      ></input>
    );
  }
);

Input.displayName = 'Input';
