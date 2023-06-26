"use client";
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/util';
import * as Separator from '@radix-ui/react-separator';

const buttonVariants = cva(['transition-all center'], {
  variants: {
    variant: {
      outline: 'border-2 border-sky-800',
      solid: 'bg-sky-800 text-sky-50',
      underline: 'border-b-8 border-sky-800 rounded-none'
    },
    tone: {
      dark: '',
      light: ''
    },
    size: {
      sm: 'px-4 py-2',
      none: ''
    },
    weight: {
      normal: 'font-normal',
      bold: 'font-bold'
    },
    shape: {
        default: 'rounded-md',
        rounded: 'rounded-full'
    }
  },
  compoundVariants: [
    {
      variant: 'outline',
      tone: 'light',
      className: ['border-sky-50/90 text-sky-50/90 hover:bg-sky-50/10']
    }
  ],
  defaultVariants: {
    variant: 'solid',
    size: 'sm',
    weight: 'normal',
    tone: 'dark',
    shape: 'default'
  }
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  iconOnly?: boolean;
}

export function Button({
  className,
  variant,
  size,
  weight,
  tone,
  shape,
  icon,
  iconOnly,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, weight, tone, shape }), className)}
      {...props}
    >
      {!iconOnly && props.children}
      {icon && (
        <>
          {!iconOnly && <Separator.Root orientation="vertical" className="h-4" />}
          <div>{icon}</div>
        </>
      )}
    </button>
  );
}

// variant: outline, solid, withIcon, underline, link, ghost
// size: sm, md, lg
