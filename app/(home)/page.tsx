import { Hero } from '@/components/layout/Hero/Hero';
import { Gallery } from './components/Gallery';
import { LatestPost } from './components/LatestPost';
import { PopularPost } from './components/PopularPost';

export default async function HomePage() {
  return (
    <main>
      <Hero />
      <PopularPost />
      <Gallery />
      <LatestPost />
    </main>
  );
}
