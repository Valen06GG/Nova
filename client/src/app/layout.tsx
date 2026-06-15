import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import { Toaster } from 'sonner';

import './globals.css';
import { cn } from "@/lib/utils";
import { ThemeProvider } from '@/providers/theme-provider';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nova',
  description: 'Minimal Marketplace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    lang="en" 
    suppressHydrationWarning
    className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>

        <Toaster 
        position='top-right'
        richColors
        />   
      </body>
    </html>
  );
}