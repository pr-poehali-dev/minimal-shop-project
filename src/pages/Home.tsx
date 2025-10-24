import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      title: 'Минималистичные часы',
      price: 299,
      image: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'Кожаный рюкзак',
      price: 459,
      image: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'Беспроводные наушники',
      price: 199,
      image: '/placeholder.svg',
    },
    {
      id: 4,
      title: 'Керамическая ваза',
      price: 89,
      image: '/placeholder.svg',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Минималистичный стиль
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Откройте для себя коллекцию продуманных вещей для современной жизни
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-black text-white hover:bg-black/90">
              Смотреть каталог
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Популярные товары</h2>
          <Link to="/products" className="text-sm hover:underline">
            Все товары →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Качество превыше всего
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Мы тщательно отбираем каждый товар, чтобы предложить вам только лучшее.
            Минимализм в деталях, максимум качества в каждом продукте.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
