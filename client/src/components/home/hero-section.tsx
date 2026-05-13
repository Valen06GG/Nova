import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export const HeroSection = () => {
    return (
        <section className="py-32">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h1 className="text-7xl font-bold leading-tight">
              The Minimal Marketplace Experience
            </h1>
    
            <p className="text-white/60 mt-6 text-lg">
              Discover modern products with a clean,
              fast and elegant shopping experience.
            </p>
    
            <div className="flex items-center gap-4 mt-10">
              <Input placeholder="Search products..." />
    
              <Button>
                Search
              </Button>
            </div>
    
            <div className="flex items-center justify-center gap-4 mt-8">
              <Link href="/products">
                <Button size="lg">
                  Shop now
                </Button>
              </Link>
    
              <Button
                size="lg"
                variant="outline"
              >
                Explore
              </Button>
            </div>
          </div>
        </section>
    )
}