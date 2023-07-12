import { SinglePost } from '@/components/layout/BlogPost/Post';

export default function PostPage({ params }: { params: { postId: string } }) {
  return (
    <main>
      <SinglePost slug={params.postId} />
    </main>
  );
}
