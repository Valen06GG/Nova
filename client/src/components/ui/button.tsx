import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  'rounded-xl font-medium transition-all disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-white text-black hover:bg-white/80',

        secondary:
          'bg-zinc-900 text-white hover:bg-zinc-800',

        outline:
          'border border-white/10 hover:bg-white/5',
      },

      size: {
        sm: 'h-9 px-4 text-sm',

        md: 'h-11 px-6',

        lg: 'h-12 px-8',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps 
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  );
};