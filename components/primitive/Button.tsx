import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/util";

const buttonVariants = cva(
    ["rounded-md"],
    {
        variants: {
            variant: {
                outline: "border-2 border-sky-800",
                solid: "bg-sky-800 text-sky-50",
                withIcon: {},
                underline: "border-b-8 border-sky-800 rounded-none",
            },
            size: {
                sm: "px-4 py-2",
                none: "",
            },
            weight: {
                normal: "font-normal",
                bold: "font-bold"
            }
        },
        defaultVariants: {
            variant: "solid",
            size: "sm",
            weight: "normal"
        }
    }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    icon?: React.ReactNode;
}

export function Button({ className, variant, size, weight, ...props }: ButtonProps) {
    return (
        <button className={cn(buttonVariants({ variant, size, weight }), className)} {...props} />
    )
}

// variant: outline, solid, withIcon, underline, link, ghost
// size: sm, md, lg