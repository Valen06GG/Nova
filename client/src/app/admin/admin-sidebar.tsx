'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    {
        label: 'Dashboard',
        href: '/admin',
    },
    {
        label: 'Products',
        href: '/admin/products',
    },
    {
        label: 'Orders',
        href: '/admin/orders',
    },
    {
        label: 'Users',
        href: '/admin/users',
    },
    {
        label: 'Analytics',
        href: '/admin/analytics',
    },
    {
        label: 'Settings',
        href: '/admin/settings',
    },
];

export const AdminSidebar = () => {
    const pathname = usePathname();

    return (
        <aside
          className="
          hidden 
          md:flex 
          flex-col 
          w-64 
          min-h-screen 
          border-r 
          border-white/10 
          bg-black/30
          backdrop-blur-xl 
          p-6
          "
        >
          <Link href="/">
            <h2
              className="
              text-3xl 
              font-black 
              bg-gradient-to-r 
              from-violet-400 
              to-cyan-400 
              bg-clip-text 
              text-transparent
              "
            >
              Nova Admin
            </h2>
          </Link>
    
          <nav className="mt-10 flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4
                  py-3
                  rounded-xl
                  transition-all
                  ${
                    pathname === link.href
                      ? 'bg-[#7c3aed] text-white'
                      : 'text-white/60 hover:bg-white/5 hover:text-white'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
    );
};