import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface ProductCardProps {
    title: string;

    price: number;

    category: string;
}

export const ProductCard = ({
    title,
    price,
    category,
}: ProductCardProps) => {
    return (
        <Card
          className="hover:border-white/20 transition-all"
        >
          <div className="aspect-square rounded-xl bg-zinc-800" />
    
          <div className="mt-5">
            <p className="text-sm text-white/40">
              {category}
            </p>
    
            <h3 className="text-xl font-semibold mt-1">
              {title}
            </h3>
    
            <div className="flex items-center justify-between mt-6">
              <span className="text-2xl font-bold">
                ${price}
              </span>
    
              <Button size="sm">
                <ShoppingCart size={18} />
              </Button>
            </div>
          </div>
        </Card>
    )
}
