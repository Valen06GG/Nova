'use client';

import Link from 'next/link';
import {
  ShoppingCart,
  User,
} from 'lucide-react';

import { useCartStore } from '@/store/use-cart-store';

import { Container } from '../ui/container';

export const Navbar = () => {
  const items = useCartStore(
    (state) => state.items
  );

  const totalItems = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <nav className="h-20 border-b border-white/10 backdrop-blur-xl">
      <Container>
        <div className="flex h-full items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold tracking-tight"
          >
            Nova
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <Link href="/">
              Home
            </Link>

            <Link href="/products">
              Products
            </Link>

            <Link href="/cart">
              Cart
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="hover:text-white/70 transition-all">
              <User size={22} />
            </button>

            <Link
              href="/cart"
              className="hover:text-white/70 transition-all relative"
            >
              <ShoppingCart size={22} />

              <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};