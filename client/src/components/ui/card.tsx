import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
 
  className?: string;
}

export const Card = ({
    children,
    className,
  }: CardProps) => {
    return (
        <div
        className={cn(
            'rounded-2xl border border-white/10 bg-zinc-900/50 p-6',
            className
        )}
        >
        {children}
        </div>
    )
}