import { Container } from '@/components/primitive/Container';
import { PostTitle } from './PostTitle';
import { PostAvatar } from './PostAvatar';
import { PostImage } from './PostImage';
import { customFetch } from '@/lib/fetch';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PostMDX } from './PostContent';
import { Post } from '@/types/Post';
import { constructUrl } from '@/lib/util';

export async function SinglePost() {
  const post = await customFetch<Post>('posts/1?populate=*');

  const { data } = await post.getData;
  return (
    <div>
      <Container includeNavbar className="pb-0">
        <PostTitle>{data.attributes.title}</PostTitle>
        <PostAvatar />
      </Container>
      <PostImage
        imgSrc={constructUrl(
          data.attributes.thumbnail.data.attributes.url,
          true
        )}
        imgAlt={data.attributes.title}
        height={data.attributes.thumbnail.data.attributes.height}
        width={data.attributes.thumbnail.data.attributes.width}
      />
      <Container className="pt-0" noCursorTrailer>
        <MDXRemote
          source={data.attributes.content}
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
