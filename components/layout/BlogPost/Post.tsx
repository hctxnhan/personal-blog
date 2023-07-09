import { Container } from '@/components/primitive/Container';
import { PostTitle } from './PostTitle';
import { PostAvatar } from './PostAvatar';
import { PostImage } from './PostImage';
import { customFetch } from '@/lib/fetch';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PostMDX } from './PostMDX';
import { Post } from '@/types/Post';
import { constructUrl } from '@/lib/util';
import qs from 'qs';

export async function SinglePost({ slug }: { slug: string }) {
  const url = qs.stringify({
    filters: {
      slug: {
        $eq: slug
      }
    },
    populate: '*'
  });

  const postCollection = await customFetch<Post[]>(`posts?${url}`);
  const { data } = await postCollection.getData;

  if (data.length === 0) return null;

  const post = data[0];

  return (
    <div>
      <Container includeNavbar className="pb-0">
        <PostTitle>{post.attributes.title}</PostTitle>
        <PostAvatar />
      </Container>
      <PostImage
        imgSrc={constructUrl(
          post.attributes.thumbnail.data.attributes.url,
          true
        )}
        imgAlt={post.attributes.title}
        height={post.attributes.thumbnail.data.attributes.height}
        width={post.attributes.thumbnail.data.attributes.width}
      />
      <Container className="pt-0">
        <MDXRemote
          source={post.attributes.content}
          components={{
            h1: PostMDX.h1,
            h2: PostMDX.h2,
            p: PostMDX.p,
            blockquote: PostMDX.quote,
            img: PostMDX.img
          }}
        />
      </Container>
    </div>
  );
}
