import { MainLayout } from "@/components/layout/main-layout";
import { products } from "@/constants/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from '@/components/products/add-to-cart-button';
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({
    params,
}: ProductDetailPageProps) {
  const { id } = await params;

  const product = products.find(
    (product) => product.id === id
  );

  if (!product) {
    return notFound();
  }

  return (
    <MainLayout>
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div
          >
            <p className="text-violet-400 text-lg">
              {product.category}
            </p>

            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link
                href="/"
                className="hover:text-violet-400 transition-colors"
              >
                Home
              </Link>
            
              <span>/</span>
            
              <Link
                href="/products"
                className="hover:text-violet-400 transition-colors"
              >
                Products
              </Link>
            
              <span>/</span>
            
              <span className="text-violet-400">
                {product.title}
              </span>
            </div>

            <h1 className="text-6xl font-bold mt-2 text-white">
              {product.title}
            </h1>

            <p className="text-white/70 mt-6 text-lg">
              {product.description}
            </p>

            <div className="mt-10">
              <p className="text-sm uppercase tracking-widest text-white/40">
                Price
              </p>
            
              <span className="text-5xl font-bold text-white">
                ${product.price}
              </span>
            </div>

            <div className="mt-6">
              <span className="inline-flex items-center rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-400">
                In Stock ({product.stock})
              </span>
            </div>

            <AddToCartButton product={product} />

            <div className="space-y-3 mt-8 text-white/60">
              <p>✓ Free Shipping</p>
              <p>✓ Secure Checkout</p>
              <p>✓ 30-Day Returns</p>
            </div>
            
          </div>
        </div>
        
        <div className="mt-24">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
              Discover More
            </p>
        
            <h2 className="text-4xl font-bold text-white mt-3">
              Related Products
            </h2>
        
            <p className="text-white/50 mt-3">
              Similar products you might like.
            </p>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}