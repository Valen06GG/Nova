'use client';
import { MainLayout } from '@/components/layout/main-layout';
import { ProductCard } from '@/components/products/product-card';
import { useFavoritesStore } from '@/store/use-favorites-store';

export default function WishlistPage() {
    const favorites = useFavoritesStore(
        (state) => state.favorites
    );

    return (
        <MainLayout>
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
              Favorites
            </p>

            <h1 className="text-5xl font-bold text-white mt-3">
              Wishlist
            </h1>

            <p className="text-white/50 mt-3">
              Products you've saved for later.
            </p>
          </div>

          {favorites.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-14 text-center">
              <h2 className="text-3xl font-bold text-white">
                No favorites yet
              </h2>

              <p className="text-white/50 mt-4">
                Add products to your wishlist.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {favorites.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
    )
}