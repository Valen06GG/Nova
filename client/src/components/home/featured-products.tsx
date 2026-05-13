import { ProductCard } from "../products/product-card";

const products = [
  {
    title: 'Minimal Chair',
    price: 120,
    category: 'Furniture',
  },

  {
    title: 'Modern Lamp',
    price: 80,
    category: 'Decoration',
  },

  {
    title: 'Wireless Headphones',
    price: 220,
    category: 'Tech',
  },

  {
    title: 'Smart Watch',
    price: 340,
    category: 'Tech',
  },
];

export const FeaturedProducts = () => {
    return (
        <section className="px-4 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-4xl font-bold">
                  Featured Products
                </h2>
    
                <p className="text-white/50 mt-2">
                  Discover our most popular products.
                </p>
              </div>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </section>
    )
}