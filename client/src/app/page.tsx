import Link from 'next/link';

import { MainLayout } from '@/components/layout/main-layout';
import { HeroSection } from '@/components/home/hero-section';
import { PromotionsSection } from '@/components/home/promotions-section';
import { FeaturedProducts } from '@/components/home/featured-products';
import { CategoriesSection } from '@/components/home/categories-section';

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />

      <PromotionsSection />
      
      <FeaturedProducts />

      <CategoriesSection />
    </MainLayout>
  );
}
