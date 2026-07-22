'use client';

import { useEffect, useMemo, useState } from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { CategoryFilter } from '@/components/products/category-filter';
import { ProductCard } from '@/components/products/product-card';
import { SearchBar } from '@/components/products/search-bar';
import { useSearchParams } from 'next/navigation';
import { ProductCardSkeleton } from '@/components/skeletons/product-card-skeleton';
import { Product } from '@/types/product';
import { api } from '@/services/api';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState(
    searchParams.get('search') || ''
  );
  const [selectedCategory, setSelectedCategory] =
    useState('All');

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          setIsLoading(true);

          const response = await api.get('/products');

          setProducts(response.data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchProducts();
    }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All'
          ? true
          : product.category === selectedCategory;

      return (
        matchesSearch && matchesCategory
      );
    });
  }, [products, search, selectedCategory]);

  return (
    <MainLayout>
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 mb-12">
            <div>
              <h1 className="text-5xl text-white font-bold">
                Products
              </h1>

              <p className="text-white mt-3">
                Discover all available products.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:items-center text-2x1 bg-white/10 text-white p-4 rounded-2xl">
              <SearchBar
                value={search}
                onChange={setSearch}
              />
            </div> 
            
            <div className="flex flex-col lg:flex-row gap-6 lg:items-center text-[#9333ea] lg:justify-between">
              <CategoryFilter
                selected={selectedCategory}
                onSelect={setSelectedCategory}
                />
            </div>
          </div>

          {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="border border-white/10 rounded-2xl p-10 text-center text-white/50">
                No products found.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
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
  );
}