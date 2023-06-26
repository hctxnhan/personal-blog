import { PropsWithChildren } from 'react';
import { cn } from '@/lib/util';
import styles from './InfiniteSlider.module.css';

const sliderSpeed = {
  slow: "sliderSpeedSlow",
  medium: "sliderSpeedMedium",
  normal: "sliderSpeedNormal",
  fast: "sliderSpeedFast",
}
type SliderSpeed = keyof typeof sliderSpeed;

interface InfiniteSliderContainerProps extends PropsWithChildren {
  autoplay?: boolean;
  direction?: 'horizontal' | 'vertical';
  className?: string;
  speed?: SliderSpeed;
}

export function InfiniteSliderContainer({
  autoplay = false,
  direction = 'horizontal',
  children,
  className,
  speed = 'slow'
}: InfiniteSliderContainerProps) {
  return (
    <div className={cn("relative overflow-hidden")}>
      <div
        className={cn(
          'flex',
          {
            'flex-row': direction === 'horizontal',
            'flex-col': direction === 'vertical',
            [styles.sliderCol]: direction === 'vertical',
            [styles.sliderRow]: direction === 'horizontal',
            [styles.sliderAutoPlay]: autoplay
          },
          styles[sliderSpeed[speed]],
          className
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
