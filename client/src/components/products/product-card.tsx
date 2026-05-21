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
    <Card className="group overflow-hidden border-white/10 hover:border-white/20 transition-all">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover duration-300 group-hover:scale-105 transition-transform"
          />
        </div>
      </Link>

      <div className="mt-5">
        <p className="text-sm text-white/40">
          {product.category}
        </p>

        <h3 className="text-xl font-semibold mt-2">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mt-6">
          <span className="text-3xl font-bold tracking-tight">
            ${product.price}
          </span>

          <Button
            size="sm"
            onClick={() => {
              addItem(product);

              toast.success("Product added to cart");
            }}
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </Card>
  );
};