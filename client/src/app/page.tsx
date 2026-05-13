import Link from 'next/link';

import { MainLayout } from '@/components/layout/main-layout';
import { HeroSection } from '@/components/home/hero-section';
import { PromotionsSection } from '@/components/home/promotions-section';
import { FeaturedProducts } from '@/components/home/featured-products';

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />

      <PromotionsSection />
      
      <FeaturedProducts />
    </MainLayout>
  );
}
