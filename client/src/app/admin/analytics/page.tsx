import { AdminLayout } from "../admin-layout";

const stats = [
  {
    title: 'Revenue',
    value: '$24,500',
  },
  {
    title: 'Orders',
    value: '324',
  },
  {
    title: 'Customers',
    value: '1,248',
  },
  {
    title: 'Products',
    value: '86',
  },
];

export default function AdminAnalyticsPage() {
    return (
        <AdminLayout>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
              Administration
            </p>
    
            <h1 className="text-5xl font-bold text-white mt-3">
              Analytics
            </h1>
    
            <p className="text-white/50 mt-3">
              Track marketplace performance.
            </p>
    
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-6
                  "
                >
                  <p className="text-white/50">
                    {stat.title}
                  </p>
    
                  <h2 className="text-4xl font-bold text-white mt-3">
                    {stat.value}
                  </h2>
                </div>
              ))}
            </div>
    
            <div
              className="
                mt-10
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
              "
            >
              <h2 className="text-2xl font-bold text-white">
                Sales Overview
              </h2>
    
              <p className="text-white/50 mt-2">
                Analytics charts will be connected later.
              </p>
    
              <div
                className="
                  h-[350px]
                  mt-8
                  rounded-2xl
                  border border-dashed border-white/10
                  flex items-center justify-center
                  text-white/30
                "
              >
                Sales Chart Placeholder
              </div>
            </div>
          </div>
        </AdminLayout>
    )
}