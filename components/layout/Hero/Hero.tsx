import { Container } from '@/components/primitive/Container';
import { Overlay } from '@/components/primitive/Overlay';
import Image from 'next/image';

export function Hero() {
  return (
    <Container
      noMaxWidth
      screenHeight
      className="bg-sky-800 p-0 pt-[76px] relative flex max-h-screen"
    >
      <Image
        className="absolute inset-0 w-full h-full"
        src={
          'https://images.unsplash.com/photo-1686904423955-b928225c6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        }
        alt="Hero image"
        width={1470}
        height={980}
      />
      <Overlay />
      <div className="flex flex-col gap-4 mx-auto justify-center text-white text-center">
        <p className="text-9xl font-display z-10">dESIGN.</p>
        <p className="text-2xl font-serif z-10 text-neutral-200">
          Looking for inspiration and insights.
        </p>
      </div>
    </Container>
  );
}
