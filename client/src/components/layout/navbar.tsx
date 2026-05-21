'use client';

import Link from 'next/link';
import { ShoppingCart,User, } from 'lucide-react';
import { useCartStore } from '@/store/use-cart-store';
import { useMounted } from '@/hooks/use-mounted';

export const Navbar = () => {
  const mounted = useMounted();

  const items = useCartStore(
    (state) => state.items
  );

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-4xl font-black tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Nova
        </Link>

        <div className="flex items-center gap-10 text-sm font-medium text-white/70">
          <Link
            href="/"
            className="hover:text-white transition-colors"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="hover:text-white transition-colors"
          >
            Products
          </Link>

          <Link
            href="/cart"
            className="hover:text-white transition-colors"
          >
            Cart
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-white/70 hover:text-white transition-colors">
            <User size={22} />
          </button>

          <Link
            href="/cart"
            className="relative"
          >
            <ShoppingCart
              size={24}
              className="text-white/80 hover:text-white transition-colors"
            />

            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-violet-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg shadow-violet-500/40">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};