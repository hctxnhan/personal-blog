import { Carousel } from '@/components/composite/Carousel';
import { SectionHeader } from '@/components/composite/SectionHeader';
import { Hero } from '@/components/layout/Hero/Hero';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Container } from '@/components/primitive/Container';
import { cn } from '@/lib/util';
import { Roboto } from 'next/font/google';
import { Rosarivo } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

const rosarivo = Rosarivo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rosarivo'
});

export default function Home() {
  return (
    <main className={cn(roboto.variable, rosarivo.variable, 'font-sans')}>
      <Navbar className="absolute left-1/2 transform -translate-x-1/2 bg-white z-10 h-[76px]" />
      <Hero />
      <Container>
        <div className='flex flex-col gap-8'>
          <SectionHeader
            subtitle="This is popular post on my site. Let’s see what people interested in now."
            title="Featured Post"
          />
          <Carousel.Container></Carousel.Container>
        </div>
      </Container>
    </main>
  );
}
