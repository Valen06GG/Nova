interface ContainerProps {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className="max-w-7x1 max-auto px-4">
            {children}
        </div>
    );
};