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
    <div className='flex flex-col gap-1'>
      <Heading className='text-sky-950' size={'h2'} font={'serif'}>
        {title ?? children}
      </Heading>
      <Heading className='text-neutral-500' size={'h4'}>{subtitle}</Heading>
    </div>
  );
}
