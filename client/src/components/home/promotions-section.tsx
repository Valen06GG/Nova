import { Card } from "../ui/card";
import { Container } from "../ui/container";

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
              className="hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-semibold">
                {promotion.title}
              </h3>

              <p className="text-white/60 mt-3 leading-relaxed">
                {promotion.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};