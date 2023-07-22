import { Hero } from '@/components/layout/Hero/Hero';
import { LatestPost } from './components/LatestPost';
import { PopularPost } from './components/PopularPost';
import { CategoryList } from './components/CategoryList';
import { Gallery } from './components/Gallery';

export default async function HomePage() {
  return (
    <main>
      <Hero />
      <PopularPost />
      <CategoryList />
      <LatestPost />
      <Gallery />
    </main>
  );
}
