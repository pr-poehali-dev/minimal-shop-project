const About = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">О нас</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
            <p className="text-muted-foreground leading-relaxed">
              Мы верим, что качественные вещи не должны быть сложными. 
              Наш интернет-магазин предлагает тщательно отобранные товары, 
              которые объединяет минималистичный дизайн и высокое качество исполнения.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Наши ценности</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border p-6">
                <h3 className="font-bold mb-2">Качество</h3>
                <p className="text-sm text-muted-foreground">
                  Каждый товар проходит строгий контроль перед попаданием в каталог
                </p>
              </div>
              <div className="border border-border p-6">
                <h3 className="font-bold mb-2">Минимализм</h3>
                <p className="text-sm text-muted-foreground">
                  Простота и функциональность в каждой детали
                </p>
              </div>
              <div className="border border-border p-6">
                <h3 className="font-bold mb-2">Экологичность</h3>
                <p className="text-sm text-muted-foreground">
                  Мы выбираем производителей, заботящихся об окружающей среде
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Почему выбирают нас</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                Бесплатная доставка при заказе от $100
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                Возврат в течение 30 дней без вопросов
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                Гарантия качества на все товары
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground">•</span>
                Круглосуточная поддержка клиентов
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
