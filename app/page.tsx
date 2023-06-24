import { Button } from '@/components/primitive/Button';
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
    <main className={cn(roboto.variable, rosarivo.variable)}>
      <div className="font-sans">
        <Button variant="solid" size="sm" weight="bold">
          CONTACT ME
        </Button>
      </div>
    </main>
  );
}
