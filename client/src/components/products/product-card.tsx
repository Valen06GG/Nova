"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

import { Product } from '@/types/product';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { useCartStore } from '@/store/use-cart-store';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({
  product,
}: ProductCardProps) => {
  const addItem = useCartStore(
    (state) => state.addItem
  );

  return (
    <Card className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b0b12] to-black p-5 transition-all duration-300 hover:border-[#7c3aed]/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] flex flex-col h-full">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="mt-5 flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-[#a78bfa]">
            {product.category}
          </p>

          <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />
        </div>

        <h3 className="text-3xl font-bold mt-4 text-white">
          {product.title}
        </h3>

        <p className="text-white/50 mt-3 leading-relaxed min-h-[56px]">
          {product.description}
        </p>

        <div className="mt-auto pt-8 flex items-end justify-between">
          <div>
            <p className="text-sm text-white/40">
              Price
            </p>

            <span className="text-5xl font-bold tracking-tight text-white">
              ${product.price}
            </span>
          </div>

          <Button
            onClick={() => {
              addItem(product);

              toast.success(
                'Product added to cart'
              );
            }}
            className="
              h-14
              w-14
              rounded-2xl
              bg-gradient-to-r
              from-[#7c3aed]
              to-[#9333ea]
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]
              transition-all
              duration-300
            "
          >
            <ShoppingCart size={20} />
          </Button>
        </div>
      </div>
    </Card>
  );
};