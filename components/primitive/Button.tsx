'use client';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/util';
import * as Separator from '@radix-ui/react-separator';
import { forwardRef } from 'react';
import styles from './Button.module.css';

const buttonVariants = cva(['transition-all center'], {
  variants: {
    variant: {
      outline: 'border-2 border-sky-800 text-sky-800',
      solid: 'bg-sky-800 text-sky-50',
      underline: 'border-b-8 border-sky-800 p-0'
    },
    size: {
      small: 'text-sm px-3 py-2',
      medium: 'text-base px-4 py-2'
    },
    tone: {
      dark: '',
      light: ''
    },
    weight: {
      normal: 'font-normal',
      bold: 'font-bold'
    },
    shape: {
      rounded: 'rounded-md',
      default: 'rounded-none',
      circle: 'rounded-full'
    }
  },
  compoundVariants: [
    {
      variant: 'outline',
      tone: 'light',
      className: ['border-sky-50/90 text-sky-50/90 hover:bg-sky-50/10']
    },
    {
      variant: 'outline',
      tone: 'dark',
      className: [
        styles.btnOutlineDark,
        'hover:text-sky-50 disabled:pointer-events-none disabled:text-gray-300 disabled:border-gray-300'
      ]
    }
  ],
  defaultVariants: {
    variant: 'solid',
    weight: 'normal',
    tone: 'dark',
    shape: 'default',
    size: 'medium'
  }
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  iconOnly?: boolean;
  uppercase?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      weight,
      tone,
      shape,
      icon,
      size,
      uppercase,
      iconOnly,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ shape, variant, weight, tone, size }),
          uppercase && 'uppercase',
          className
        )}
        {...props}
      >
        {!iconOnly && props.children}
        {icon && (
          <>
            {!iconOnly && (
              <Separator.Root orientation="vertical" className="h-4" />
            )}
            <div>{icon}</div>
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
