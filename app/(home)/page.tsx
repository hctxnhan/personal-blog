import { SectionHeader } from '@/components/composite/SectionHeader';
import { Hero } from '@/components/layout/Hero/Hero';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Container } from '@/components/primitive/Container';

import { PopularPost } from './components/PopularPost';
import { LatestPost } from './components/LatestPost';
import { Carousel } from '@/components/composite/carousel';

export default function Home() {
  return (
    <main>
      <Navbar className="left-1/2 transform -translate-x-1/2 bg-white z-10 h-[76px] fixed z-50" />
      <Hero />
      <Container>
        <div className="flex flex-col gap-8">
          <SectionHeader
            subtitle="This is popular post on my site. Let’s see what people interested in now."
            title="Featured Post"
          />
        </div>
        <PopularPost />
      </Container>
      <Container className="bg-sky-950">
        <SectionHeader
          inverted
          subtitle="See what news on my blog since last time you visited."
        >
          GALLERY
        </SectionHeader>
        <Carousel.Container />
      </Container>
      <Container>
        <div className="flex flex-col gap-8">
          <SectionHeader
            subtitle="See what news on my blog since last time you visited."
            title="Latest Post"
          />
        </div>
        <LatestPost />
      </Container>
    </main>
  );
}
