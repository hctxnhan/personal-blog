import { Container } from '@/components/primitive/Container';
import { HeroCategoryList } from './HeroCategoryList';
import { InfiniteSlider } from '@/components/composite/InfiniteSlider';
import { Heading } from '@/components/primitive/Heading';
import { Button } from '@/components/primitive/Button';
import styles from './Hero.module.css';
import { cn } from '@/lib/util';

export function Hero() {
  return (
    <Container
      noMaxWidth
      screenHeight
      className="bg-sky-800 p-0 pt-[76px] flex max-h-screen"
    >
      <HeroCategoryList className="flex-[0.6]" />
      <div className="flex flex-col gap-8 flex-[0.4] overflow-hidden px-8 pt-16 relative">
        <div className="flex flex-col gap-2 items-start">
          <Heading font={'serif'} size={'xl'} className="text-sky-50">
            Learn more about Korea
          </Heading>
          <Button variant={'outline'} color={'light'}>
            Explore
          </Button>
        </div>
        <div className="absolute right-0 top-0 transform translate-x-2/4 opacity-30">
          <InfiniteSlider.Container
            className="-mt-[125px] gap-4"
            direction="vertical"
          >
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
          </InfiniteSlider.Container>
        </div>
        <div className="flex gap-16 relative w-fit overflow-hidden">
          <div className={cn('z-10 absolute inset-0', styles.overlay)}></div>
          <InfiniteSlider.Container
            autoplay
            className="gap-16"
            direction="vertical"
          >
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
            <InfiniteSlider.Item />
          </InfiniteSlider.Container>
          <div className='-mt-[175px]'>
            <InfiniteSlider.Container
              autoplay
              className="gap-16"
              direction="vertical"
            >
              <InfiniteSlider.Item />
              <InfiniteSlider.Item />
              <InfiniteSlider.Item />
              <InfiniteSlider.Item />
              <InfiniteSlider.Item />
              <InfiniteSlider.Item />
              <InfiniteSlider.Item />
              <InfiniteSlider.Item />
              <InfiniteSlider.Item />
            </InfiniteSlider.Container>
          </div>
        </div>
      </div>
    </Container>
  );
}
