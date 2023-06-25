import { Overlay } from '@/components/primitive/Overlay';
import Image from 'next/image';

export function HeroCategoryItem() {
  return (
    <div
      className="center flex-1 hover:flex-[1.8] transition-all font-serif text-4xl
        text-white/70 hover:text-6xl hover:text-white relative"
    >
      <Image
        width={500}
        height={600}
        src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        alt="Life"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Overlay />
      <p className='z-20'>Life</p>
    </div>
  );
}
