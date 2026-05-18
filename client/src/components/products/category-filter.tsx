'use client';

import { categories } from '@/constants/categories';

import { Button } from '../ui/button';

interface CategoryFilterProps {
  selected: string;

  onSelect: (category: string) => void;
}

export const CategoryFilter = ({
  selected,
  onSelect,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <Button
          key={category}
          variant={
            selected === category
              ? 'primary'
              : 'outline'
          }
          size="sm"
          onClick={() => onSelect(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};