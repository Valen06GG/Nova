'use client';

import { useMemo, useState } from 'react';

import { products } from '@/constants/products';
import { MainLayout } from '@/components/layout/main-layout';
import { CategoryFilter } from '@/components/products/category-filter';
import { ProductCard } from '@/components/products/product-card';
import { SearchBar } from '@/components/products/search-bar';

export default function ProductsPage() {
  const [search, setSearch] = useState('');

  const [selectedCategory, setSelectedCategory] =
    useState('All');

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
  }, [search, selectedCategory]);

  return (
    <MainLayout>
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 mb-12">
            <div>
              <h1 className="text-5xl font-bold">
                Products
              </h1>

              <p className="text-white/50 mt-3">
                Discover all available products.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
              <SearchBar
                value={search}
                onChange={setSearch}
              />

              <CategoryFilter
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
          </div>

          {filteredProducts.length === 0 ? (
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