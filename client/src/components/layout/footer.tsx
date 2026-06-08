import Link from "next/link"
import { Container } from "../ui/container"

export const Footer = () => {
    return (
    <footer className="border-t border-white/10 mt-24">
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Nova
              </h3>

              <p className="text-white/50 mt-4">
                Minimal marketplace built with
                Next.js and NestJS.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Shop
              </h4>

              <div className="flex flex-col gap-3 mt-4">
                <Link
                  href="/products"
                  className="text-white/50 hover:text-white"
                >
                  Products
                </Link>

                <Link
                  href="/cart"
                  className="text-white/50 hover:text-white"
                >
                  Cart
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Categories
              </h4>

              <div className="flex flex-col gap-3 mt-4">
                <span className="text-white/50">
                  Tech
                </span>

                <span className="text-white/50">
                  Furniture
                </span>

                <span className="text-white/50">
                  Decoration
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Company
              </h4>

              <div className="flex flex-col gap-3 mt-4">
                <span className="text-white/50">
                  About
                </span>

                <span className="text-white/50">
                  Contact
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40">
            © 2026 Nova. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};