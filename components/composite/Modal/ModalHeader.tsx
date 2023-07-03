'use client';

interface ModalHeaderProps {
  subtitle?: string;
  title: string;
}

export function ModalHeader({ title, subtitle }: ModalHeaderProps) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h1 className="text-3xl font-serif uppercase">{title}</h1>
      {subtitle && <p className="text-gray-500">{subtitle}</p>}
    </div>
  );
}
