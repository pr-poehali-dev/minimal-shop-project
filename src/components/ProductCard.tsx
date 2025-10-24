import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  onAddToCart?: () => void;
}

const ProductCard = ({ image, title, price, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border border-border hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-secondary overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-foreground mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${price}</span>
          <Button 
            variant="outline" 
            size="sm"
            onClick={onAddToCart}
            className="border-black hover:bg-black hover:text-white transition-colors"
          >
            В корзину
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
