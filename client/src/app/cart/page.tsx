'use client';

import Image from 'next/image';
import { Trash2 } from 'lucide-react';

import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/use-cart-store';

export default function CartPage() {
  const {
    items,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const total = items.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
     <MainLayout>
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-10">
            Your Cart
          </h1>

          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 border border-white/10 rounded-2xl p-4"
              >
                <div className="relative w-32 h-32 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-white/50 mt-2">
                    ${item.price}
                  </p>

                  <div className="flex items-center gap-4 mt-6">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </Button>

                    <span>
                      {item.quantity}
                    </span>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </Button>
                  </div>
                </div>

                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold">
              Total: ${total}
            </h2>

            <Button size="lg">
              Checkout
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}