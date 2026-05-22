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
      <section className="relative px-4 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4c1d95_0%,transparent_45%)] opacity-40" />

        <div className="relative max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
              Shopping Cart
            </p>

            <h1 className="text-6xl text-white font-bold mt-4">
              Your Cart
            </h1>

            <p className="text-white mt-4 text-lg">
              Review your selected products before checkout.
            </p>
          </div>

          {items.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-14 text-center text-white backdrop-blur-xl">
              <h2 className="text-3xl font-bold">
                Your cart is empty
              </h2>

              <p className="text-white mt-4">
                Add some products to continue shopping.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="
                      flex flex-col md:flex-row gap-6
                      rounded-3xl
                      border border-white/10
                      bg-gradient-to-b
                      from-[#0b0b12]
                      to-black
                      p-6
                      transition-all
                      duration-300
                      hover:border-[#7c3aed]/40
                      hover:shadow-[0_0_40px_rgba(124,58,237,0.12)]
                    "
                  >
                    <div className="relative w-full md:w-40 h-40 rounded-2xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
                          Product
                        </p>

                        <h2 className="text-3xl text-white font-bold mt-3">
                          {item.title}
                        </h2>

                        <p className="text-white mt-3 text-lg">
                          ${item.price}
                        </p>
                      </div>

                      <div className="flex items-center text-white gap-4 mt-8">
                        <Button
                          size="icon"
                          variant="outline"
                          className="
                            border-white/10
                            bg-white/[0.03]
                            hover:bg-[#7c3aed]
                            hover:border-[#7c3aed]
                          "
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                        >
                          -
                        </Button>

                        <span className="text-xl font-semibold w-8 text-center">
                          {item.quantity}
                        </span>

                        <Button
                          size="icon"
                          variant="outline"
                          className="
                            border-white/10
                            bg-white/[0.03]
                            hover:bg-[#7c3aed]
                            hover:border-[#7c3aed]
                          "
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    <div className="flex md:flex-col items-end justify-between">
                      <button
                        onClick={() =>
                          removeItem(item.id)
                        }
                        className="
                          flex items-center justify-center
                          w-12 h-12
                          rounded-2xl
                          border border-white/10
                          bg-white/[0.03]
                          text-white/70
                          transition-all
                          hover:bg-red-500
                          hover:text-white
                          hover:border-red-500
                        "
                      >
                        <Trash2 size={20} />
                      </button>

                      <div className="text-right mt-auto">
                        <p className="text-sm text-white">
                          Subtotal
                        </p>

                        <p className="text-3xl text-white font-bold">
                          $
                          {item.price *
                            item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-10
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  flex flex-col md:flex-row
                  items-start md:items-center
                  justify-between
                  gap-6
                "
              >
                <div>
                  <p className="text-white/50">
                    Total Price
                  </p>

                  <h2 className="text-5xl text-white font-bold mt-2">
                    ${total}
                  </h2>
                </div>

                <Button
                  size="lg"
                  className="
                    h-14
                    px-10
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#7c3aed]
                    to-[#9333ea]
                    hover:scale-105
                    hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]
                    transition-all
                    duration-300
                  "
                >
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </MainLayout>
  );
}