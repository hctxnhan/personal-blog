import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/util';
import { PropsWithChildren } from 'react';

const postContentVariants = cva('', {
  variants: {
    variant: {
      h2: 'font-serif text-3xl pt-6 pb-4',
      h3: 'font-serif text-2xl pb-4',
      p: 'text-lg pb-4',
      blockquote:
        'bg-neutral-100 p-6 border-l-4 border-sky-800/80 text-neutral-500 mb-4 pb-2'
    }
  },
  defaultVariants: {
    variant: 'p'
  }
});

interface PostContentProps
  extends VariantProps<typeof postContentVariants>,
    PropsWithChildren {}

export function PostContent({ children, variant = 'p' }: PostContentProps) {
  const as: keyof JSX.IntrinsicElements = variant as NonNullable<
    Required<typeof variant>
  >;
  const Component = as;
  return (
    <Component className={cn(postContentVariants({ variant }))}>
      {children}
    </Component>
  );
}

export const PostMDX = {
  h1: (props: PostContentProps) => <PostContent variant="h2" {...props} />,
  h2: (props: PostContentProps) => <PostContent variant="h3" {...props} />,
  p: (props: PostContentProps) => <PostContent {...props} />,
  quote: (props: PostContentProps) => (
    <PostContent variant={'blockquote'} {...props} />
  )
};
