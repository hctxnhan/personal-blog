import { PropsWithChildren } from 'react';
import colors from 'tailwindcss/colors';

interface BadgeProps extends PropsWithChildren {
  color?: keyof typeof colors;
  size?: 'sm' | 'md' | 'lg';
}

export function Badge({ children, color = 'neutral', size }: BadgeProps) {
  const colorHex = colors[color][400];
  return (
    <span
      className={`center px-3 py-1 rounded-full text-sm border`}
      style={{ borderColor: colorHex, color: colorHex }}
    >
      {children}
    </span>
  );
}
