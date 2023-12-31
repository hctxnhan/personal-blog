import { PostGrid } from '@/components/composite/PostGrid/PostGrid';
import { SectionHeader } from '@/components/composite/SectionHeader';
import { Container } from '@/components/primitive/Container';
import { customFetch } from '@/lib/fetch';
import { Post } from '@/types/Post';

export async function LatestPost() {
  const posts = await customFetch<Post[]>('posts?populate=*&pagination[page]=1&pagination[pageSize]=6&sort=createdAt:DESC');
  const { data } = await posts.getData;
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <SectionHeader
          title="Latest Post"
        />
      </div>
      <PostGrid posts={data} />
    </Container>
  );
}
