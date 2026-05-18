import { Product } from '@/types/product';

export const products: Product[] = [
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