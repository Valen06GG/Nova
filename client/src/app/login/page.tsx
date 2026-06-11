import Link from "next/link";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
    return (
        <MainLayout>
          <section className="min-h-[80vh] flex items-center justify-center px-4">
            <div
              className="
                w-full
                max-w-md
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
              "
            >
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
                  Welcome Back
                </p>
    
                <h1 className="text-5xl font-bold text-white mt-3">
                  Sign In
                </h1>
    
                <p className="text-white/50 mt-4">
                  Access your Nova account.
                </p>
              </div>
    
              <div className="space-y-4 mt-8 text-white">
                <Input placeholder="Email" />
    
                <Input
                  type="password"
                  placeholder="Password"
                />
              </div>
    
              <Button
                className="
                  w-full
                  mt-6
                  bg-gradient-to-r
                  from-[#7c3aed]
                  to-[#9333ea]
                "
              >
                Sign In
              </Button>
    
              <Button
                variant="outline"
                className="w-full mt-4"
              >
                Continue with Google
              </Button>
    
              <p className="text-center text-white/50 mt-6">
                Don't have an account?{' '}
                <Link
                  href="/register"
                  className="text-violet-400"
                >
                  Register
                </Link>
              </p>
            </div>
          </section>
        </MainLayout>
    );
}