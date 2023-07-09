import { DataEntry } from '@/lib/fetch';
import { Post } from '@/types/Post';
import { PostCard, PostCardProps } from '../PostCard';
import { constructUrl } from '@/lib/util';

interface PostGridProps {
  posts: DataEntry<Post>[];
}

export function PostGrid({ posts }: PostGridProps) {
  const postCardProps: PostCardProps[] = posts.map(({ id, attributes }) => ({
    estimatedReadTime: '2 min',
    tag: attributes.label.data.attributes.name,
    imgAlt: attributes.title,
    imgSrc: constructUrl(attributes.thumbnail.data.attributes.url, true),
    title: attributes.title,
    id: id,
    direction: 'column',
    slug: attributes.slug
  }));

  return (
    <div className="grid grid-cols-3 gap-8">
      {postCardProps.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
