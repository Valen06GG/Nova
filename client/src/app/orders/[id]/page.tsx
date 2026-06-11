import { notFound } from "next/navigation";
import { MainLayout } from "@/components/layout/main-layout";
import { products } from "@/constants/products";

interface OrderDetailPageProps {
    params: {
        id: string;
    };
}

const orders = [
  {
    id: 'ORD-1001',
    status: 'Delivered',
    total: 340,
    shippingAddress: 'New York, USA',
    products: [
      {
        name: 'Wireless Headphones',
        price: 220,
        quantity: 1,
      },
      {
        name: 'Modern Lamp',
        price: 120,
        quantity: 1,
      },
    ],
  },

  {
    id: 'ORD-1002',
    status: 'Processing',
    total: 120,
    shippingAddress: 'Los Angeles, USA',
    products: [
      {
        name: 'Minimal Chair',
        price: 120,
        quantity: 1,
      },
    ],
  },

  {
    id: 'ORD-1003',
    status: 'Pending',
    total: 560,
    shippingAddress: 'Chicago, USA',
    products: [
      {
        name: 'Smart Watch',
        price: 340,
        quantity: 1,
      },
      {
        name: 'Modern Lamp',
        price: 220,
        quantity: 1,
      },
    ],
  },
];

export default async function OrderDetailPage({
    params,
}: OrderDetailPageProps) {
    const { id } =await params;

    const order = orders.find(
        (order) => order.id === id
    );

    if (!order) {
       return notFound();
    }

    return (
        <MainLayout>
          <section className="px-4 py-20">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
                  Order Details
                </p>
    
                <h1 className="text-5xl font-bold text-white mt-3">
                  {order.id}
                </h1>
    
                <p className="text-white/50 mt-3">
                  Status: {order.status}
                </p>
              </div>
    
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
                <h2 className="text-2xl font-bold text-white">
                  Products
                </h2>
    
                <div className="mt-6 space-y-4">
                  {order.products.map((product) => (
                    <div
                      key={product.name}
                      className="
                        flex
                        items-center
                        justify-between
                        border
                        border-white/10
                        rounded-2xl
                        p-4
                      "
                    >
                      <div>
                        <h3 className="text-white font-semibold">
                          {product.name}
                        </h3>
    
                        <p className="text-white/50">
                          Quantity: {product.quantity}
                        </p>
                      </div>
    
                      <span className="text-white font-bold">
                        ${product.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
    
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-white/50">
                    Shipping Address
                  </p>
    
                  <h3 className="text-xl font-semibold text-white mt-3">
                    {order.shippingAddress}
                  </h3>
                </div>
    
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-white/50">
                    Order Total
                  </p>
    
                  <h3 className="text-4xl font-bold text-white mt-3">
                    ${order.total}
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </MainLayout>
    );
}