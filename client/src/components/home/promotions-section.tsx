import { Card } from '../ui/card';
import { Container } from '../ui/container';

const promotions = [
  {
    title: 'Up to 50% OFF',
    description:
      'Exclusive discounts on selected products.',
  },

  {
    title: 'Free Shipping',
    description:
      'Free shipping on orders over $100.',
  },

  {
    title: 'New Arrivals',
    description:
      'Discover the latest products in our store.',
  },
];

export const PromotionsSection = () => {
  return (
    <section className="pb-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promotion) => (
            <Card
              key={promotion.title}
              className="
                relative
                overflow-hidden
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:border-violet-500/40
                hover:bg-violet-500/5
                hover:-translate-y-1
                hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent">
                  {promotion.title}
                </h3>

                <p className="text-white/60 mt-4 leading-relaxed text-lg">
                  {promotion.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};