import { SinglePost } from '@/components/layout/BlogPost/Post';
import { Footer } from '@/components/layout/Footer/Footer';

export default function PostPage({ params }: { params: { postId: string } }) {
  return (
    <main>
      <SinglePost slug={params.postId} />
      <Footer />
    </main>
  );
}
