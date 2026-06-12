'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Container } from '../ui/container';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  const router = useRouter();

  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (!search.trim()) {
      return router.push('/products');
    }

    router.push(
      `/products?search=${encodeURIComponent(search)}`
    );
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">

      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
      </div>

  <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 via-transparent to-transparent" />

      <Container>
        <motion.div
          className="max-w-3xl relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
            The Minimal Marketplace Experience
          </h1>

          <p className="text-white/60 mt-6 text-lg md:text-xl leading-relaxed">
            Discover modern products with a clean,
            fast and elegant shopping experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              placeholder="Search products..."
              className="h-14 text-lg bg-white border-white/10 focus-visible:ring-violet-500"
            />

            <Button
              onClick={handleSearch}
              className="h-14 px-8 bg-violet-600 hover:bg-violet-500 text-white"
              size="lg"
            >
              Search
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                Shop now
              </Button>
            </Link>

            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 hover:bg-white/10"
              >
                Explore
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};