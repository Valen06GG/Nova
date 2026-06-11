import { AdminLayout } from "../admin-layout";
import { Button } from "@/components/ui/button";

const orders = [
  {
    id: 'ORD-1001',
    customer: 'John Doe',
    status: 'Delivered',
    total: 340,
  },
  {
    id: 'ORD-1002',
    customer: 'Jane Smith',
    status: 'Pending',
    total: 120,
  },
  {
    id: 'ORD-1003',
    customer: 'Michael Brown',
    status: 'Processing',
    total: 560,
  },
]

export default function AdminOrdersPage() {
    return (
        <AdminLayout>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
              Administration
            </p>
    
            <h1 className="text-5xl font-bold text-white mt-3">
              Orders
            </h1>
    
            <p className="text-white/50 mt-3">
              Manage customer orders.
            </p>
    
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-violet-400/50">
                      Order ID
                    </th>
    
                    <th className="text-left p-6 text-violet-400/50">
                      Customer
                    </th>
    
                    <th className="text-left p-6 text-violet-400/50">
                      Status
                    </th>
    
                    <th className="text-left p-6 text-violet-400/50">
                      Total
                    </th>
    
                    <th className="text-right p-6 text-violet-400/50">
                      Actions
                    </th>
                  </tr>
                </thead>
    
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-white/5 hover:bg-white/[0.02]"
                    >
                      <td className="p-6 text-white">
                        {order.id}
                      </td>
    
                      <td className="p-6 text-white">
                        {order.customer}
                      </td>
    
                      <td className="p-6">
                        <span
                          className="
                            px-3
                            py-1
                            rounded-full
                            bg-[#7c3aed]/10
                            text-[#a78bfa]
                            text-xs
                          "
                        >
                          {order.status}
                        </span>
                      </td>
    
                      <td className="p-6 text-violet-400">
                        ${order.total}
                      </td>
    
                      <td className="p-6">
                        <div className="flex justify-end gap-3">
                          <Button
                            size="sm"
                            variant="outline"
                          >
                            View
                          </Button>
    
                          <Button
                            size="sm"
                            variant="outline"
                          >
                            Update
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AdminLayout>
    );
}