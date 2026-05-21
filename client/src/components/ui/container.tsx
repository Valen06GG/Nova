import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;

    className?: string;
}

export const Container = ({ 
    children, 
    className,
 }: ContainerProps) => {
    return (
        <div 
        className={cn(
            "max-w-7x1 max-auto px-4",
            className
        )}>
            {children}
        </div>
    );
};