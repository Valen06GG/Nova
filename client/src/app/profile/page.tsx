import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";

export default function ProfilePage() {
    return (
        <MainLayout>
          <section className="px-4 py-20">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div
                    className="
                      w-32
                      h-32
                      rounded-full
                      bg-gradient-to-r
                      from-[#7c3aed]
                      to-[#9333ea]
                      flex
                      items-center
                      justify-center
                      text-4xl
                      font-bold
                      text-white
                    "
                  >
                    VF
                  </div>
    
                  <div className="flex-1">
                    <h1 className="text-5xl font-bold text-white">
                      Valentín
                    </h1>
    
                    <p className="text-white/50 mt-2">
                      valentin@example.com
                    </p>
    
                    <div className="flex gap-4 mt-6">
                      <Button>
                        Edit Profile
                      </Button>

                      <Link href="/orders">
                        <Button variant="outline">
                          My Orders
                        </Button>
                      </Link>
    
                      <Button variant="outline">
                        Change Password
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-white/50">
                    Orders
                  </p>
    
                  <h2 className="text-4xl font-bold text-white mt-3">
                    12
                  </h2>
                </div>
    
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-white/50">
                    Wishlist
                  </p>
    
                  <h2 className="text-4xl font-bold text-white mt-3">
                    8
                  </h2>
                </div>
    
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-white/50">
                    Cart Items
                  </p>
    
                  <h2 className="text-4xl font-bold text-white mt-3">
                    3
                  </h2>
                </div>
              </div>
    
              <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <h2 className="text-2xl font-bold text-white">
                  Recent Activity
                </h2>
    
                <div className="mt-6 space-y-4">
                  <div className="border border-white/10 rounded-2xl p-4 text-white/70">
                    Added Wireless Headphones to Wishlist
                  </div>
    
                  <div className="border border-white/10 rounded-2xl p-4 text-white/70">
                    Purchased Smart Watch
                  </div>
    
                  <div className="border border-white/10 rounded-2xl p-4 text-white/70">
                    Added Minimal Chair to Cart
                  </div>
                </div>
              </div>
            </div>
          </section>
        </MainLayout>
    )
}