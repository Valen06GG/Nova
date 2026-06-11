import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";

const orders = [
  {
    id: 'ORD-1001',
    date: '2026-06-01',
    total: 340,
    status: 'Delivered',
  },
  {
    id: 'ORD-1002',
    date: '2026-06-04',
    total: 120,
    status: 'Processing',
  },
  {
    id: 'ORD-1003',
    date: '2026-06-07',
    total: 560,
    status: 'Pending',
  },
];

export default function OrdersPage() {
    return (
        <MainLayout>
          <section className="px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
                  Account
                </p>
    
                <h1 className="text-6xl font-bold text-white mt-3">
                  My Orders
                </h1>
    
                <p className="text-white/50 mt-4">
                  Track your purchases and order history.
                </p>
              </div>
    
              <div className="space-y-6">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="
                      rounded-3xl
                      border border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      p-6
                      flex flex-col md:flex-row
                      md:items-center
                      justify-between
                      gap-6
                    "
                  >
                    <div>
                      <p className="text-white/50">
                        Order ID
                      </p>
    
                      <h2 className="text-2xl font-bold text-white mt-2">
                        {order.id}
                      </h2>
                    </div>
    
                    <div>
                      <p className="text-white/50">
                        Date
                      </p>
    
                      <p className="text-white mt-2">
                        {order.date}
                      </p>
                    </div>
    
                    <div>
                      <p className="text-white/50">
                        Total
                      </p>
    
                      <p className="text-white mt-2 font-semibold">
                        ${order.total}
                      </p>
                    </div>
    
                    <div>
                      <span
                        className="
                          px-4
                          py-2
                          rounded-full
                          bg-violet-500/10
                          text-violet-400
                          text-sm
                        "
                      >
                        {order.status}
                      </span>
                    </div>
    
                    <Link href={`/orders/${order.id}`}>
                      <Button>
                        View Order
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </MainLayout>
    )
}