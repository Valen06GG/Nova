import { AdminLayout } from "../admin-layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminSettingsPage() {
    return (
        <AdminLayout>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
              Administration
            </p>
    
            <h1 className="text-5xl font-bold text-white mt-3">
              Settings
            </h1>
    
            <p className="text-white/50 mt-3">
              Configure your marketplace settings.
            </p>
    
            <div className="mt-10 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <h2 className="text-2xl font-bold text-white">
                  Store Information
                </h2>
    
                <div className="mt-6 space-y-4 text-white/50">
                  <Input
                    placeholder="Store Name"
                  />
    
                  <Input
                    placeholder="Support Email"
                  />
                </div>
              </div>
    
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <h2 className="text-2xl font-bold text-white">
                  Branding
                </h2>
    
                <div className="mt-6 space-y-4 text-white/50">
                  <Input
                    placeholder="Primary Color"
                  />
    
                  <Input
                    placeholder="Secondary Color"
                  />
                </div>
              </div>
    
              <Button
                className="
                  bg-gradient-to-r
                  from-[#7c3aed]
                  to-[#9333ea]
                "
              >
                Save Settings
              </Button>
            </div>
          </div>
        </AdminLayout>
    )
}