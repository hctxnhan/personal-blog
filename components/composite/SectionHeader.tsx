import { Heading } from '../primitive/Heading';

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function SectionHeader({
  children,
  subtitle,
  title
}: SectionHeaderProps) {
  return (
    <div className='flex flex-col gap-1 items-baseline mb-12'>
      <Heading className='text-sky-950 text-6xl uppercase' size={'xl'} font={'display'}>
        {title ?? children}
      </Heading>
      <Heading className='text-neutral-500' size={'h4'} font={"serif"}>{subtitle}</Heading>
    </div>
  );
}
