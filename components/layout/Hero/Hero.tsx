import { Container } from '@/components/primitive/Container';
import { HeroCategoryList } from './HeroCategoryList';
import { InfiniteSlider } from '@/components/composite/infinite-slider';
import { Heading } from '@/components/primitive/Heading';

export function Hero() {
  return (
    <Container
      noMaxWidth
      screenHeight
      className="bg-sky-800 p-0 pt-[76px] flex max-h-screen"
    >
      <HeroCategoryList className="flex-[0.6]" />
      <div className="flex flex-col gap-8 flex-[0.4] overflow-hidden px-8 py-16 relative">
        <Heading font={'serif'} size={'xl'} className="text-sky-50">
          Learn more about Korea
        </Heading>
        <div className="flex gap-16">
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
          <InfiniteSlider.Container
            autoplay
            className="-mt-[125px] gap-16"
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
          <div
            className='absolute right-0 top-0 transfrom translate-x-2/4 opacity-30'
          >
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
        </div>
      </div>
    </Container>
  );
}
