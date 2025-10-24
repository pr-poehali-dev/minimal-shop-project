import ProductCard from '@/components/ProductCard';

const Products = () => {
  const products = [
    { id: 1, title: 'Минималистичные часы', price: 299, image: '/placeholder.svg' },
    { id: 2, title: 'Кожаный рюкзак', price: 459, image: '/placeholder.svg' },
    { id: 3, title: 'Беспроводные наушники', price: 199, image: '/placeholder.svg' },
    { id: 4, title: 'Керамическая ваза', price: 89, image: '/placeholder.svg' },
    { id: 5, title: 'Настольная лампа', price: 149, image: '/placeholder.svg' },
    { id: 6, title: 'Шерстяной плед', price: 129, image: '/placeholder.svg' },
    { id: 7, title: 'Деревянная разделочная доска', price: 59, image: '/placeholder.svg' },
    { id: 8, title: 'Стеклянный чайник', price: 79, image: '/placeholder.svg' },
    { id: 9, title: 'Блокнот в кожаной обложке', price: 39, image: '/placeholder.svg' },
    { id: 10, title: 'Ароматическая свеча', price: 29, image: '/placeholder.svg' },
    { id: 11, title: 'Металлический органайзер', price: 69, image: '/placeholder.svg' },
    { id: 12, title: 'Бамбуковая подставка', price: 49, image: '/placeholder.svg' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Каталог товаров</h1>
          <p className="text-muted-foreground">
            Изучите нашу коллекцию из {products.length} товаров
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
