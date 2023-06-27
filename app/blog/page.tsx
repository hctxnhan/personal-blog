import { PostGrid } from '@/components/composite/PostGrid/PostGrid';
import { SectionHeader } from '@/components/composite/SectionHeader';
import { Footer } from '@/components/layout/Footer/Footer';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Container } from '@/components/primitive/Container';
import { mockPostCard } from '../mockPostCard';

export default function Blog() {
  return (
    <main>
      <Navbar className="left-1/2 transform -translate-x-1/2 bg-white h-[76px] fixed z-50" />
      <Container includeNavbar>
        <div className="flex flex-col gap-8">
          <SectionHeader
            subtitle="See what news on my blog since last time you visited."
            title="All Posts"
          />
        </div>
        <PostGrid posts={Array(11).fill(mockPostCard)} />
      </Container>
      <Footer />
    </main>
  );
}
