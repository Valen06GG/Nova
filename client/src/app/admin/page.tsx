'use client';

import { MainLayout } from "@/components/layout/main-layout";
import Link from "next/link";
import { AdminLayout } from "./admin-layout";
import { motion } from 'framer-motion';

export default function AdminDashboardPage() {
    return (
    <AdminLayout>
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
            Administration
          </p>

          <h1 className="text-5xl font-bold text-white mt-3">
            Dashboard
          </h1>

          <p className="text-white/50 mt-3">
            Manage your marketplace.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-white/50">Products</p>
            
              <h2 className="text-4xl font-bold text-white mt-2">
                24
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-white/50">Orders</p>

              <h2 className="text-4xl font-bold text-white mt-2">
                143
              </h2>
            </motion.div>

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-white/50">Users</p>

              <h2 className="text-4xl font-bold text-white mt-2">
                56
              </h2>
            </motion.div>

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-white/50">Revenue</p>

              <h2 className="text-4xl font-bold text-white mt-2">
                $12,450
              </h2>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <Link href="/admin/products">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#7c3aed]/40 transition-all cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-white">
                  Products
                </h3>
            
                <p className="text-white/50 mt-2">
                  Manage products
                </p>
              </motion.div>
            </Link>
          
            <Link href="/admin/create-product">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#7c3aed]/40 transition-all cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-white">
                  Create Product
                </h3>
            
                <p className="text-white/50 mt-2">
                  Add new products
                </p>
              </motion.div>
            </Link>
   
            <Link href="/admin/analytics">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#7c3aed]/40 transition-all cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-white">
                  Analytics
                </h3>
            
                <p className="text-white/50 mt-2">
                  View statistics
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </AdminLayout>
  );

}