import { cn } from '@/lib/util';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva('', {
  variants: {
    size: {
      xl: 'text-5xl',
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl'
    },
    font: {
      sans: 'font-sans',
      serif: 'font-serif',
      display: 'font-display'
    }
  },
  defaultVariants: {
    size: 'h1',
    font: 'sans'
  }
});

interface HeadingProps
  extends VariantProps<typeof headingVariants>,
    React.HTMLAttributes<HTMLHeadingElement> {}

export function Heading({ className, size, font, ...props }: HeadingProps) {
  return (
    <h1 className={cn(headingVariants({ size, font }), className)} {...props} />
  );
}
