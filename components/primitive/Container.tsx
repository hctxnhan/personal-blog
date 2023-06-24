import { PropsWithChildren } from "react";
import { cn } from "@/lib/util";
import { cva, VariantProps } from "class-variance-authority";

interface ContainerProps extends PropsWithChildren<{}> {
    className?: string;
}

export function Container(
    { children, className }: ContainerProps
) {
    return (
        <div className={cn("container mx-auto py-10 max-w-6xl", className)}>
            {children}
        </div>
    )
}