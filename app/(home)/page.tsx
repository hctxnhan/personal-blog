import { Footer } from '@/components/layout/Footer/Footer';
import { Hero } from '@/components/layout/Hero/Hero';
import { LatestPost } from './components/LatestPost';
import { PopularPost } from './components/PopularPost';
import { Gallery } from './components/Gallery';

export default async function HomePage() {
  return (
    <main>
      <Hero />
      <PopularPost />
      <Gallery />
      <LatestPost />
      <Footer />
    </main>
  );
}
