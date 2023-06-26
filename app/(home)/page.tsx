import { SectionHeader } from '@/components/composite/SectionHeader';
import { Hero } from '@/components/layout/Hero/Hero';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Container } from '@/components/primitive/Container';
import { cn } from '@/lib/util';
import { Inter, Noto_Serif } from 'next/font/google';
import localFont from 'next/font/local';
import { PopularPost } from './components/PopularPost';
import { LatestPost } from './components/LatestPost';
import { Carousel } from '@/components/composite/Carousel';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  weight: ['400', '700']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const thunder = localFont({
  src: '../../public/fonts/Thunder-SemiBold.ttf',
  variable: '--font-thunder'
});

export default function Home() {
  return (
    <main
      className={cn(
        inter.variable,
        notoSerif.variable,
        thunder.variable,
        'font-sans'
      )}
    >
      <Navbar className="absolute left-1/2 transform -translate-x-1/2 bg-white z-10 h-[76px]" />
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
