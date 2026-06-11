import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { products } from "@/constants/products";
import { Button } from "@/components/ui/button";
import { AdminLayout } from "../admin-layout";

export default function AdminProductsPage() {
    return (
    <AdminLayout>
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
                Administration
              </p>

              <h1 className="text-5xl font-bold text-white mt-3">
                Products
              </h1>

              <p className="text-white/50 mt-3">
                Manage all marketplace products.
              </p>
            </div>

            <Link href="/admin/create-product">
              <Button>
                + Create Product
              </Button>
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 text-white/50">
                    Product
                  </th>

                  <th className="text-left p-6 text-white/50">
                    Category
                  </th>

                  <th className="text-left p-6 text-white/50">
                    Price
                  </th>

                  <th className="text-left p-6 text-white/50">
                    Stock
                  </th>

                  <th className="text-right p-6 text-white/50">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-white/5 hover:bg-white/[0.02]"
                  >
                    <td className="p-6 text-white font-medium">
                      {product.title}
                    </td>

                    <td className="p-6 text-white/70">
                      {product.category}
                    </td>

                    <td className="p-6 text-white">
                      ${product.price}
                    </td>

                    <td className="p-6 text-white">
                      {product.stock}
                    </td>

                    <td className="p-6">
                      <div className="flex justify-end gap-3">
                        <Link href={`/admin/products/${product.id}`}>
                          <Button 
                            size="sm"
                            variant="outline"
                            className="border-violet-500/20 bg-violet-500/20 text-violet-400 hover:bg-violet-500 hover:text-white"
                            >

                            Edit
                          </Button>
                        </Link>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-500/20 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white"
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}