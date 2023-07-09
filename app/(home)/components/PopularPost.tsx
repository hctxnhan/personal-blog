import { PostCard } from '@/components/composite/PostCard';
import { SectionHeader } from '@/components/composite/SectionHeader';
import { Container } from '@/components/primitive/Container';
import { customFetch } from '@/lib/fetch';
import { constructUrl } from '@/lib/util';
import { Featured } from '@/types/Single';
import qs from 'qs';
export async function PopularPost() {
  const urlParams = qs.stringify({
    populate: {
      posts: {
        fields: ['title', 'slug', 'thumbnail', 'label'],
        populate: {
          label: {
            fields: ['name']
          },
          thumbnail: {
            fields: ['caption', 'width', 'height', 'url']
          }
        }
      },
      fields: ['title', 'subtitle']
    }
  });

  const featureSingle = await customFetch<Featured>(`feature?${urlParams}`);

  const { data } = await featureSingle.getData;
  if (!data) return null;

  const firstPost = data.attributes.posts.data[0];
  const remainingPosts = data.attributes.posts.data.slice(1);
  console.log(firstPost);
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <SectionHeader
          subtitle={data.attributes.subtitle}
          title={data.attributes.title}
        />
      </div>
      <div className="grid grid-cols-2 gap-8">
        <PostCard
          direction="column"
          estimatedReadTime="1 min"
          size="big"
          tag={firstPost.attributes.label.data.attributes.name}
          title={firstPost.attributes.title}
          imgAlt={firstPost.attributes.thumbnail.data.attributes.caption}
          slug={firstPost.attributes.slug}
          imgSrc={constructUrl(
            firstPost.attributes.thumbnail.data.attributes.url,
            true
          )}
        />
        <div className="flex flex-col gap-4">
          {remainingPosts.map((post) => (
            <PostCard
              key={post.id}
              estimatedReadTime="1 min"
              tag={post.attributes.label.data.attributes.name}
              title={post.attributes.title}
              imgAlt={post.attributes.thumbnail.data.attributes.caption}
              imgSrc={constructUrl(
                post.attributes.thumbnail.data.attributes.url,
                true
              )}
              slug={post.attributes.slug}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
