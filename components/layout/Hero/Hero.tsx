import { Container } from '@/components/primitive/Container';
import { Overlay } from '@/components/primitive/Overlay';
import { customFetch } from '@/lib/fetch';
import { Category } from '@/types/Category';
import { Homepage } from '@/types/Single';
import Image from 'next/image';
import { HeroSubtitleLoop } from './components/HeroSubtitleLoop';

export async function Hero() {
  const homepageSingle = await customFetch<Homepage>(
    'homepage?fields[0]=heroTitle&fields[1]=heroSubtitle&populate[0]=heroImage'
  );

  const labelCollections = await customFetch<Category[]>(`labels?fields=name`);
  const { data: labels } = await labelCollections.getData;
  const currentLabels = labels.map((label) => label.attributes.name);

  const { data } = await homepageSingle.getData;
  if (!data) return null;

  return (
    <Container
      noMaxWidth
      screenHeight
      className="center relative h-[calc(100vh-200px)]"
    >
      <Image
        className="absolute inset-0 w-full h-full -z-20"
        src={
          'https://images.unsplash.com/photo-1686904423955-b928225c6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        }
        alt="Hero image"
        width={1470}
        height={980}
      />
      <Overlay />
      <div className="center">
        <div className="text-white text-xl flex items-center gap-1.5">
          <p>So you expected to read some blog about</p>
          <div className="flex items-center gap-4 justify-center h-[40px]">
            <HeroSubtitleLoop items={currentLabels} changeInterval={2000} />
          </div>
        </div>
      </div>
    </Container>
  );
}
