import { ReactNode } from "react";
import { AdminSidebar } from "./admin-sidebar";
import { AdminMobileMenu } from "./admin-mobile-menu";

interface AdminLayoutProps {
    children: ReactNode;
}

export const AdminLayout = ({
    children,
}: AdminLayoutProps) => {
    return (
        <div className="flex min-h-screen">
          <AdminSidebar />
    
          <main className="flex-1 min-w-0">
            <div className="md:hidden p-4 border-b border-white/10">
              <AdminMobileMenu />
            </div>

            {children}
          </main>
        </div>
    
    );
}