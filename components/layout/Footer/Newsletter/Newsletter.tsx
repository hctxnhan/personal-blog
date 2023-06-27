import { Button } from '@/components/primitive/Button';
import { Heading } from '@/components/primitive/Heading';
import { Input } from '@/components/primitive/Input';

export function Newsletter() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-1">
        <div>
          <p className="uppercase font-display text-4xl text-sky-50">
            Joining our
          </p>
          <Heading
            className="uppercase text-6xl text-sky-50"
            size={'xl'}
            font={'display'}
          >
            Newsletter
          </Heading>
        </div>
        <p className="text-neutral-100">
          Subscribe to our newsletter to get our latest news and promotions.
        </p>
      </div>
      <div className='flex flex-col gap-10'>
        <Input placeholder="Your name" />
        <Input placeholder="Your email" />
        <Button
          variant={'outline'}
          tone="light"
          shape={'circle'}
          className="w-fit"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}
