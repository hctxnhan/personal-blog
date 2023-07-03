import { cn } from '@/lib/util';

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
