import { create } from "zustand";
import { Product } from "@/types/product";

interface FavoritesState {
  favorites: Product[];

  addToFavorites: (product: Product) => void;

  removeFromFavorites: (productId: string) => void;

  isFavorite: (productId: string) => boolean;
}   

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
    favorites: [],

    addToFavorites: (product) => 
        set((state) => ({
            favorites: [...state.favorites, product],
        })),
    

    removeFromFavorites: (productId: string) => 
        set((state) => ({
            favorites: state.favorites.filter((p) => p.id !== productId
        ),
        })),
    

    isFavorite: (productId) => 
        get().favorites.some((p) => p.id === productId),
    
}));