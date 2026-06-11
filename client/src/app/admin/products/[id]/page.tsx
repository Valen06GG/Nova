import { notFound } from "next/navigation";
import { products } from "@/constants/products";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdminLayout } from "../../admin-layout";

interface ProductEditPageProps {
  params: Promise<{ 
    id: string 
  }>;
}

export default async function ProductEditPage({
    params,
  }: ProductEditPageProps) {
    const { id } = await params;

    const product = products.find(
        (product) => product.id === id
    );

    if (!product) {
        return notFound();
    }

    return (
        <AdminLayout>
          <section className="px-4 py-20">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-white">
                Edit Product
              </h1>
    
              <p className="text-white/50 mt-3">
                Update product information.
              </p>
    
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-white">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-white mb-2 block">
                      Product Title
                    </label>
      
                    <Input placeholder="Wireless Headphones" />
                  </div>
      
                  <div>
                    <label className="text-sm text-white mb-2 block">
                      Category
                    </label>
      
                    <Input placeholder="Tech" />
                  </div>
      
                  <div>
                    <label className="text-sm text-white mb-2 block">
                      Price
                    </label>
      
                    <Input type="number" placeholder="220" />
                  </div>
      
                  <div>
                    <label className="text-sm text-white mb-2 block">
                      Stock
                    </label>
      
                    <Input type="number" placeholder="15" />
                  </div>
                </div>
      
                <div className="mt-6">
                  <label className="text-sm text-white mb-2 block">
                    Image URL
                  </label>
      
                  <Input placeholder="https://..." />
                </div>
      
                <div className="mt-6">
                  <label className="text-sm text-white mb-2 block">
                    Description
                  </label>
      
                  <textarea
                    placeholder="Product description..."
                    className="
                      min-h-[160px]
                      w-full
                      rounded-xl
                      border border-white/10
                      bg-black/30
                      px-4 py-3
                      text-white
                      outline-none
                      resize-none
                      focus:border-[#7c3aed]
                    "
                  />
                </div>
      
                <div className="flex justify-end mt-8">
                  <Button
                    className="
                      px-10
                      h-12
                      bg-gradient-to-r
                      from-[#7c3aed]
                      to-[#9333ea]
                      hover:scale-105
                      transition-all
                    "
                  >
                    Edit Product
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </AdminLayout>
    )
}