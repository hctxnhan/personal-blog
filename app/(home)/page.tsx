import { Carousel } from '@/components/composite/Carousel';
import { SectionHeader } from '@/components/composite/SectionHeader';
import { Footer } from '@/components/layout/Footer/Footer';
import { Hero } from '@/components/layout/Hero/Hero';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Container } from '@/components/primitive/Container';
import { LatestPost } from './components/LatestPost';
import { PopularPost } from './components/PopularPost';

export const revalidate = 5;

export default async function HomePage() {
  return (
    <main>
      <Navbar className="left-1/2 transform -translate-x-1/2 bg-white h-[76px] fixed z-50" />
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
