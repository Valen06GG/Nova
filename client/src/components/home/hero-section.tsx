import Link from "next/link"
import { Container } from "../ui/container"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export const HeroSection = () => {
    return (
        <section className="py-32">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7x1 font-bold leading-tight tracking-tight">
                The Minimal Marketplace Experience
              </h1>

              <p className="text-white/60 mt-6 text-lg md:text-xl leading-relaxed">
                Discover modern products with a clean,
                fast and elegant shopping experience.
              </p>
    
            <div className="flex  flex-col sm:flex-row gap-4 mt-10">
              <Input 
              placeholder="Search products..."
              className="h-14 text-lg"
              />
    
              <Button
                className="h-14 px-8"
                size="lg"
              >                
                Search
              </Button>
            </div>
    
            <div className="flex items-center justify-center gap-4 mt-8">
              <Link href="/products">
                <Button size="lg">
                  Shop now
                </Button>
              </Link>
    
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  >
                  Explore
                </Button>
              </Link>
            </div>
          </div>
          </Container>
        </section>
    );
};