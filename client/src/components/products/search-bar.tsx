'use client';

import { Search } from 'lucide-react';

import { Input } from '../ui/input';

interface SearchBarProps {
  value: string;

  onChange: (value: string) => void;
}

export const SearchBar = ({
  value,
  onChange,
}: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-md">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
        size={18}
      />

      <Input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search products..."
        className="pl-11"
      />
    </div>
  );
};