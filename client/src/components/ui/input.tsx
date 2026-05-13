import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps 
  extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({
    className,
    ...props
}: InputProps) => {
    return (
        <input 
        className={cn(
        'h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 outline-none transition-all',
        'focus:border-white/30',
        className
      )}
      {...props}
        />
    );
};