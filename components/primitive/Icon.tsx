import { cn } from '@/lib/util';
import { cva, VariantProps } from 'class-variance-authority';

export interface IconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
}

export function Icon({ className, ...props }: IconProps) {
  return (
    <div className={cn(className)} {...props}>
        {props.icon}
    </div>
  );
}
