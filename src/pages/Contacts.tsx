import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen">
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-muted-foreground">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input placeholder="Ваше имя" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Тема</label>
                <Input placeholder="Тема сообщения" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea placeholder="Ваше сообщение..." rows={6} required />
              </div>
              <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
                Отправить
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="mt-1" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">
                      ул. Примерная, д. 123<br />
                      Москва, 101000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="mt-1" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@onlinestore.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Время работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Понедельник - Пятница: 9:00 - 20:00</p>
                <p>Суббота: 10:00 - 18:00</p>
                <p>Воскресенье: Выходной</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
