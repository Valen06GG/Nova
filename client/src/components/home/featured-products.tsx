import { ProductCard } from "../products/product-card";
import { Container } from "../ui/container";

const products = [
  {
    id: '1',

    title: 'Minimal Chair',

    description:
      'Elegant modern chair for minimalist spaces.',

    price: 120,

    category: 'Furniture',

    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',

    stock: 10,
  },

  {
    id: '2',

    title: 'Modern Lamp',

    description:
      'Modern lamp with premium design.',

    price: 80,

    category: 'Decoration',

    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',

    stock: 6,
  },

  {
    id: '3',

    title: 'Wireless Headphones',

    description:
      'Premium sound quality and minimal design.',

    price: 220,

    category: 'Tech',

    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',

    stock: 15,
  },

  {
    id: '4',

    title: 'Smart Watch',

    description:
      'Track your activity with style.',

    price: 340,

    category: 'Tech',

    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30',

    stock: 8,
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="pb-28">
      <Container>
          <div className="mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Featured Products
            </h2>
  
            <p className="text-white/50 mt-3 text-lg">
              Discover our most popular products.
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
      </Container>
    </section>
  );
};