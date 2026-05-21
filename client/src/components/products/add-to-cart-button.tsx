'use client';

import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { Product } from '@/types/product';
import { useCartStore } from '@/store/use-cart-store';
import { Button } from '../ui/button';

interface AddToCartButtonProps {
  product: Product;
}

export const AddToCartButton = ({
    product,
 }: AddToCartButtonProps) => {
    const addItem = useCartStore(
    (state) => state.addItem
    );

    return (
        <Button 
            size="lg"
            className="mt-8"
            onClick={() => {
                addItem(product);
                
                toast.success("Product added to cart");
            }}
        >
            <ShoppingCart className="mr-2" size={20} />
            Add to cart
        </Button>
    );
 }