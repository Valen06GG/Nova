import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-[#a78bfa]">
              Error 404
            </p>
    
            <h1
              className="
                text-8xl
                md:text-9xl
                font-black
                mt-4
                bg-gradient-to-r
                from-violet-400
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Lost?
            </h1>
    
            <h2 className="text-4xl font-bold text-white mt-6">
              Page not found
            </h2>
    
            <p className="text-white/50 text-lg mt-6">
              The page you are looking for does not exist
              or may have been moved.
            </p>
    
            <div className="flex justify-center gap-4 mt-10">
              <Link href="/">
                <Button
                  className="
                    bg-gradient-to-r
                    from-[#7c3aed]
                    to-[#9333ea]
                  "
                >
                  Go Home
                </Button>
              </Link>
    
              <Link href="/products">
                <Button variant="outline">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </section>
    );
}