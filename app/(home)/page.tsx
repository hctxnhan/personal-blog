import { Hero } from '@/components/layout/Hero/Hero';
import { LatestPost } from './components/LatestPost';
import { PopularPost } from './components/PopularPost';
import { CategoryList } from './components/CategoryList';
import { Gallery } from './components/Gallery';
import { IndexNav } from '@/components/layout/IndexNav/IndexNav';

export default async function HomePage() {
  return (
    <main>
      <IndexNav />
      <div className="index-nav-section index-nav-section--alternate" data-nav-label='Hero'>
        <Hero />
      </div>
      <div className="index-nav-section" data-nav-label='Featured Posts'>
        <PopularPost />
      </div>
      <CategoryList />
      <div className="index-nav-section" data-nav-label='Latest Posts'>
        <LatestPost />
      </div>
      <div className="index-nav-section index-nav-section--alternate" data-nav-label='Gallery'>
        <Gallery />
      </div>
    </main>
  );
}
