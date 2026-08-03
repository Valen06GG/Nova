import { ProductCard } from '../products/product-card';
import { Container } from '../ui/container';
import { Product } from "@/types/product";

export const FeaturedProducts = async () => {

  const response = await fetch("http://localhost:3001/products", {
    cache: "no-store",
  });

  const products: Product[] = await response.json();

  return (
    <section className="pb-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />

      <Container>
        <div className="relative z-10">
          <div className="mb-14">
            <span className="text-violet-400 font-medium tracking-[0.2em] uppercase text-sm">
              Featured Collection
            </span>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
              Featured Products
            </h2>

            <p className="text-white/60 mt-4 text-lg max-w-2xl leading-relaxed">
              Discover our most popular products
              selected for modern and elegant living.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};