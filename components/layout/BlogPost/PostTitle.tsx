import { PropsWithChildren } from 'react';

interface PostTitleProps extends PropsWithChildren {}

export function PostTitle({ children }: PostTitleProps) {
  return <h1 className='font-display uppercase text-5xl pb-2 font-medium'>{children}</h1>;
}
