"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

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
    <Card className="hover:border-white/20 transition-all">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover hover:scale-105 transition-all"
          />
        </div>
      </Link>

      <div className="mt-5">
        <p className="text-sm text-white/40">
          {product.category}
        </p>

        <h3 className="text-xl font-semibold mt-1">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold">
            ${product.price}
          </span>

          <Button
            size="sm"
            onClick={() => addItem(product)}
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </Card>
  );
};