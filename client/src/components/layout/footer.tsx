import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Nova
            </h2>

            <p className="text-white/50 mt-4">
              Modern marketplace built with
              Next.js, TypeScript and Tailwind.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-white/60">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/wishlist">Wishlist</Link>
              <Link href="/cart">Cart</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-white/60">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/40">
          © 2026 Nova. All rights reserved.
        </div>
      </div>
    </footer>
  );
};