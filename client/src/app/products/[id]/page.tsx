import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { products } from "@/constants/products";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({
    params,
}: ProductDetailPageProps) {
  const { id } = await params;

  const product = products.find(
    (product) => product.id === id
  );

  if (!product) {
    return notFound();
  }

  return (
    <MainLayout>
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-white/50">
              {product.category}
            </p>

            <h1 className="text-5xl font-bold mt-2">
              {product.title}
            </h1>

            <p className="text-white/60 mt-6 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-10">
              <span className="text-4xl font-bold">
                ${product.price}
              </span>
            </div>

            <p className="text-white/50 mt-4">
              Stock: {product.stock}
            </p>

            <Button
              size="lg"
              className="mt-8"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}