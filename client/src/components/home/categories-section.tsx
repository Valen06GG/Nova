import Link from "next/link";
import { Container } from "../ui/container";
import { categories } from "@/constants/categories";

const container = [
    'Tech',
    'Furniture',
    'Decoration',
    'Gaming',
];

export const CategoriesSection = () => {
    return (
        <section className="pb-28">
      <Container>
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
            Categories
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            Browse by Category
          </h2>

          <p className="text-white/50 mt-3">
            Find products by category.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/products?category=${category}`}
              className="
                group
                rounded-3xl
                border border-white/10
                bg-gradient-to-b
                from-[#0b0b12]
                to-black
                p-8
                transition-all
                duration-300
                hover:border-[#7c3aed]/40
                hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]
              "
            >
              <h3 className="text-2xl font-bold text-white group-hover:text-[#c4b5fd] transition-colors">
                {category}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
    )
}