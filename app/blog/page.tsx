import { Pagination } from '@/components/composite/Pagination/Pagination';
import { SectionHeader } from '@/components/composite/SectionHeader';
import { Footer } from '@/components/layout/Footer/Footer';
import { Container } from '@/components/primitive/Container';

export default function BlogPage() {
  return (
    <main>
      <Container includeNavbar>
        <div className="flex flex-col gap-8">
          <SectionHeader
            subtitle="See what news on my blog since last time you visited."
            title="All Posts"
          />
        </div>
        <div className="flex flex-col gap-14">
          {/* <PostGrid posts={Array(11).fill(mockPostCard)} /> */}
          <Pagination pages={3} currentPage={2} />
        </div>
      </Container>
      <Footer />
    </main>
  );
}
