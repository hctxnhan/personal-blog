import { SinglePost } from '@/components/layout/BlogPost/Post';
import { Footer } from '@/components/layout/Footer/Footer';
import { Navbar } from '@/components/layout/Navbar/Navbar';

export default function PostPage() {
  return (
    <main>
      <Navbar className="left-1/2 transform -translate-x-1/2 bg-white h-[76px] fixed z-50" />
      <SinglePost />
      <Footer />
    </main>
  );
}
