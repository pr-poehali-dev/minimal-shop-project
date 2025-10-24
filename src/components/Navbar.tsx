import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/products', label: 'Товары' },
    { path: '/about', label: 'О нас' },
    { path: '/promotions', label: 'Акции' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <nav className="border-b border-border bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground">
            ONLINE STORE
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  location.pathname === link.path
                    ? 'text-foreground border-b-2 border-foreground pb-1'
                    : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hover:opacity-70 transition-opacity">
              <Icon name="Search" size={20} />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <Icon name="User" size={20} />
            </button>
            <button className="hover:opacity-70 transition-opacity relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
