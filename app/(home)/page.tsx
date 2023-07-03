import { Carousel } from '@/components/composite/Carousel';
import { SectionHeader } from '@/components/composite/SectionHeader';
import { Footer } from '@/components/layout/Footer/Footer';
import { Hero } from '@/components/layout/Hero/Hero';
import { Container } from '@/components/primitive/Container';
import { LatestPost } from './components/LatestPost';
import { PopularPost } from './components/PopularPost';

export const revalidate = 5;

export default async function HomePage() {
  return (
    <main>
      <Hero />
      <PopularPost />
      <Container className="bg-sky-950">
        <SectionHeader
          inverted
          subtitle="See what news on my blog since last time you visited."
        >
          GALLERY
        </SectionHeader>
        <Carousel.Container />
      </Container>
      <LatestPost />
      <Footer />
    </main>
  );
}
