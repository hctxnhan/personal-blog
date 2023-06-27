import { mockPostCard } from '@/app/mockPostCard';
import { PostCard } from '@/components/composite/PostCard';
import { PostGrid } from '@/components/composite/PostGrid/PostGrid';

export function LatestPost() {
  return <PostGrid 
    posts={Array(6).fill(mockPostCard)}
  />;
}
