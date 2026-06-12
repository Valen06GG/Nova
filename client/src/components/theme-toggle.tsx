'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(
          theme === 'dark'
            ? 'light'
            : 'dark'
        )
      }
      className="
        p-2
        rounded-xl
        border
        border-white/10
        hover:bg-white/5
        transition-all
      "
    >
      {theme === 'dark' ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
};