import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";
import { toast } from "sonner";
import { persist } from "zustand/middleware";
import { create } from "zustand/react";

interface CartStore {
    items: CartItem[];

    addItem(product: Product): void;

    removeItem(id: string): void;

    clearCart: () =>  void;
    
    increaseQuantity: (id: string) => void;

    decreaseQuantity: (id: string) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
  (set) => ({
    items: [],

    addItem: (product) => {

      
      toast.success(`${product.title} added to cart`);
      
      set((state) => {
        const existingItem = 
        state.items.find(
          (item) => 
            item.id === product.id
        );
        
        if (existingItem) {
          return {
            items: state.items.map(
              (item) =>
                item.id === product.id
              ? {
                ...item,
                quantity: 
                item.quantity + 1,
              }
              : item
            ),
          };
        }
        
        
        return {
          items: [
            ...state.items,
            {
              ...product,
              quantity: 1,
            },
          ],
        };
      })
    },
      
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item.id !== id
          ),
        })),
        
        clearCart: () =>
          set({
            items: [],
          }),
          
          increaseQuantity: (id) =>
            set((state) => ({
              items: state.items.map(
                (item) =>
                  item.id === id
                ? {
                  ...item,
                  quantity: 
                  item.quantity + 1,
                }
                : item
              ),
            })),
            
            decreaseQuantity: (id) =>
              set((state) => ({
                items: state.items
                .map((item) =>
                  item.id === id
                ? {
                  ...item,
                  quantity: 
                  item.quantity - 1,
                }
                : item
              )
              .filter(
                (item) => item.quantity > 0
              ),
            })),
          }),
        
          
          {
            name: "cart-storage",
          }
        )
      );