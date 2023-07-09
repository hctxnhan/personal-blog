import { PostContent, PostContentProps } from './PostContent';
import { PostContentImg } from './PostContentImg';

export const PostMDX = {
  h1: (props: PostContentProps) => <PostContent variant="h2" {...props} />,
  h2: (props: PostContentProps) => <PostContent variant="h3" {...props} />,
  p: (props: PostContentProps) => <PostContent {...props} />,
  quote: (props: PostContentProps) => (
    <PostContent variant={'blockquote'} {...props} />
  ),
  img: (props: any) => <PostContentImg {...props} />
};
