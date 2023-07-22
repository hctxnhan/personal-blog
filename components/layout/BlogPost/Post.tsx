import { Container } from '@/components/primitive/Container';
import { customFetch } from '@/lib/fetch';
import { constructUrl } from '@/lib/util';
import { Post } from '@/types/Post';
import { MDXRemote } from 'next-mdx-remote/rsc';
import qs from 'qs';
import { PostImage } from './PostImage';
import { PostMDX } from './PostMDX';
import { PostTitle } from './PostTitle';

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
    <div className="relative">
      <PostImage
        src={constructUrl(post.attributes.thumbnail.data.attributes.url, true)}
        alt={post.attributes.title}
        height={post.attributes.thumbnail.data.attributes.height}
        width={post.attributes.thumbnail.data.attributes.width}
      />
      <Container className="pt-0">
        <div className="max-w-[800px] mx-auto">
          <PostTitle>{post.attributes.title}</PostTitle>
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
        </div>
      </Container>
    </div>
  );
}
