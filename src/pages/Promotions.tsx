import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: 'Скидка 30% на часы',
      description: 'Специальное предложение на всю коллекцию часов',
      discount: '30%',
      validUntil: '31 декабря 2025',
      products: [
        { id: 1, title: 'Минималистичные часы', price: 299, oldPrice: 428, image: '/placeholder.svg' },
        { id: 2, title: 'Классические часы', price: 399, oldPrice: 570, image: '/placeholder.svg' },
      ],
    },
    {
      id: 2,
      title: 'Распродажа аксессуаров',
      description: 'Скидки до 50% на избранные аксессуары',
      discount: 'до 50%',
      validUntil: '15 ноября 2025',
      products: [
        { id: 3, title: 'Кожаный рюкзак', price: 229, oldPrice: 459, image: '/placeholder.svg' },
        { id: 4, title: 'Металлический органайзер', price: 34, oldPrice: 69, image: '/placeholder.svg' },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Акции и специальные предложения</h1>
          <p className="text-muted-foreground">
            Не упустите выгодные предложения на качественные товары
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {promotions.map((promo) => (
            <div key={promo.id} className="border border-border p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold">{promo.title}</h2>
                    <Badge className="bg-black text-white text-lg px-3 py-1">
                      {promo.discount}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{promo.description}</p>
                  <p className="text-sm text-muted-foreground">
                    Действует до {promo.validUntil}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {promo.products.map((product) => (
                  <div key={product.id}>
                    <ProductCard
                      image={product.image}
                      title={product.title}
                      price={product.price}
                    />
                    {product.oldPrice && (
                      <p className="text-sm text-muted-foreground line-through mt-2 text-center">
                        ${product.oldPrice}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Подпишитесь на рассылку
          </h2>
          <p className="mb-6 opacity-90">
            Получайте информацию о новых акциях и эксклюзивных предложениях
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 bg-white text-black border-none outline-none"
            />
            <button className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-200 transition-colors">
              Подписаться
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotions;
