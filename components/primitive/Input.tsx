import { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <input
        className="border-2 border-neutral-300 rounded-lg py-2 px-4"
        ref={ref}
        {...props}
      ></input>
    );
  }
);

Input.displayName = 'Input';
