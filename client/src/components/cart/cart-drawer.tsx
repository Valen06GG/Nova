'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/use-cart-store';
import { ShoppingCart } from 'lucide-react';

export const CartDrawer = () => {
    const items = useCartStore(
        (state) => state.items
    );

    const total = items.reduce(
        (acc, items) =>
            acc + items.price * items.quantity,
        0
    );

    return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative">
          <ShoppingCart className="w-6 h-6 text-white" />

          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {items.length}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="bg-black border-l border-white/10 text-white w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-white text-2xl">
            Your Cart
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-6">
          {items.length === 0 ? (
            <p className="text-white/50">
              Your cart is empty.
            </p>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border border-white/10 rounded-2xl p-3"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-white/50 text-sm mt-1">
                      Qty: {item.quantity}
                    </p>

                    <p className="font-bold mt-2">
                      $
                      {item.price *
                        item.quantity}
                    </p>
                  </div>
                </div>
              ))}

              <div className="border-t border-white/10 pt-6 mt-4">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white/50">
                    Total
                  </span>

                  <span className="text-2xl font-bold">
                    ${total}
                  </span>
                </div>

                <Link href="/cart">
                  <Button className="w-full h-12 bg-violet-600 hover:bg-violet-500">
                    Go to checkout
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};