import Image from 'next/image';

export interface PostContentImgProps {
  src: string;
  alt: string;
}

export function PostContentImg({ src, alt }: PostContentImgProps) {
  return (
    <span className="relative block w-full h-[400px] my-12">
      <Image
        src={src}
        alt={alt}
        fill={true}
        className="object-cover object-center w-full h-full"
      />
    </span>
  );
}
