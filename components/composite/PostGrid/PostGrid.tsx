import { DataEntry } from '@/lib/fetch';
import { Post } from '@/types/Post';
import { PostCard, PostCardProps } from '../PostCard';
import { cn, constructUrl } from '@/lib/util';

interface PostGridProps {
  posts: DataEntry<Post>[];
}

export function PostGrid({ posts }: PostGridProps) {
  const postCardProps: PostCardProps[] = posts.map(({ id, attributes }) => ({
    estimatedReadTime: '2 min',
    tag: attributes.label.data.attributes.name,
    alt: attributes.title,
    src: constructUrl(attributes.thumbnail.data.attributes.url, true),
    title: attributes.title,
    id: id,
    direction: 'column',
    slug: attributes.slug
  }));

  return (
    <div
      className={cn('grid grid-cols-2 gap-8', {
        'grid-cols-3': postCardProps.length > 2
      })}
    >
      {postCardProps.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
