import { ReactNode } from "react";
import { AdminSidebar } from "./admin-sidebar";

interface AdminLayoutProps {
    children: ReactNode;
}

export const AdminLayout = ({
    children,
}: AdminLayoutProps) => {
    return (
        <div className="flex">
          <AdminSidebar />
    
          <main className="flex-1 p-10">
            {children}
          </main>
        </div>
    
    );
}