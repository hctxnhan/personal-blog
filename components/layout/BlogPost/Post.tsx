import { Container } from '@/components/primitive/Container';
import { PostTitle } from './PostTitle';
import { PostAvatar } from './PostAvatar';
import { PostImage } from './PostImage';
import { customFetch } from '@/lib/fetch';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PostMDX } from './PostContent';

export async function Post() {
  const post = await customFetch('posts');

  const postsData = await post.json();

  const title = postsData['data'][0]['attributes']['title'];
  const content = postsData['data'][0]['attributes']['content'];

  return (
    <div>
      <Container includeNavbar className="pb-0">
        <PostTitle>
          {title}
        </PostTitle>
        <PostAvatar />
      </Container>
      <PostImage />
      <Container className="pt-0">
        <MDXRemote
          source={content}
          components={{
            h1: PostMDX.h1,
            h2: PostMDX.h2,
            p: PostMDX.p,
            blockquote: PostMDX.quote
          }}
        />
      </Container>
    </div>
  );
}
