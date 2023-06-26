'use client';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/util';
import * as Separator from '@radix-ui/react-separator';

const buttonVariants = cva(['transition-all center'], {
  variants: {
    variant: {
      outline: 'border-2 border-sky-800',
      solid: 'bg-sky-800 text-sky-50',
      underline: 'border-b-8 border-sky-800 p-0'
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
    }
  ],
  defaultVariants: {
    variant: 'solid',
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
  uppercase?: boolean;
}

export function Button({
  className,
  variant,
  weight,
  tone,
  shape,
  icon,
  uppercase,
  iconOnly,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({ shape, variant, weight, tone }),
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

// variant: outline, solid, withIcon, underline, link, ghost
// size: sm, md, lg
