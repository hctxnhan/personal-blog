import { Container } from '@/components/primitive/Container';
import { Newsletter } from './Newsletter/Newsletter';
import { Overlay } from '@/components/primitive/Overlay';
import Image from 'next/image';

export function Footer() {
  return (
    <Container>
      <Image
        className="absolute inset-0 w-full h-full -z-20"
        src={
          'https://images.unsplash.com/photo-1686904423955-b928225c6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        }
        alt="Footer Image"
        width={1470}
        height={980}
      />
      <Overlay />
      <div className='flex'>
        <div className='flex-1'></div>
        <Newsletter />
      </div>
    </Container>
  );
}
