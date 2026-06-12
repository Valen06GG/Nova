'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

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

export const AdminMobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="text-white">
            <Menu size={28} />
          </button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="bg-black border-white/10 text-white"
        >
          <div className="mt-12 flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-violet-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};