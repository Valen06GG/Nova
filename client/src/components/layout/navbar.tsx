'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/use-cart-store';
import { useMounted } from '@/hooks/use-mounted';
import { CartDrawer } from '../cart/cart-drawer';
import { User, Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger, } from '../ui/sheet';
import { Menu } from 'lucide-react';

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

        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/70">
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
            href="/wishlist"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Heart size={16} />
            Wishlist
          </Link>

          <Link
            href="/cart"
            className="hover:text-white transition-colors"
          >
            Cart
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <Link href="/login">
            <Button
              variant="ghost"
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              Login
            </Button>
          </Link>
        
          <Link href="/register">
            <Button
              className="
                bg-gradient-to-r
                from-[#7c3aed]
                to-[#9333ea]
                hover:opacity-90
              "
            >
              Register
            </Button>
          </Link>
        
          <Link
            href="/cart"
            className="relative"
          >
            <CartDrawer />
        
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-violet-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg shadow-violet-500/40">
                {items.length}
              </span>
            )}
          </Link>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <Menu
                  size={28}
                  className="text-white"
                />
              </button>
            </SheetTrigger>
        
            <SheetContent
              side="right"
              className="
                bg-[#050505]
                border-l
                border-white/10
                text-white
                w-[280px]
                p-0
              "
            >
              <div className="px-6 pt-20">
                <div className="flex flex-col gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="text-white hover:text-violet-400 transition-colors"
                  >
                    Home
                  </Link>
                  
                  <Link
                    href="/products"
                    className="text-white hover:text-violet-400 transition-colors"
                  >
                    Products
                  </Link>
                  
                  <Link
                    href="/wishlist"
                    className="text-white hover:text-violet-400 transition-colors"
                  >
                    Wishlist
                  </Link>
                  
                  <Link
                    href="/cart"
                    className="text-white hover:text-violet-400 transition-colors"
                  >
                    Cart
                  </Link>
                  
                  <Link
                    href="/profile"
                    className="text-white hover:text-violet-400 transition-colors"
                  >
                    Profile
                  </Link>
                </div>

                <div className="border-t border-white/10 pt-6 mt-8 flex flex-col gap-4">
                  <Link
                    href="/login"
                    className="text-white hover:text-violet-400"
                  >
                    Login
                  </Link>
                
                  <Link
                    href="/register"
                    className="text-violet-400 font-semibold"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};