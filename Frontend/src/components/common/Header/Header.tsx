import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, User, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import Button from '../../ui/Button/Button';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Matchs', href: '/matches' },
    { name: 'Équipes', href: '/teams' },
    { name: 'Prédictions', href: '/predictions' },
    { name: 'Analytics', href: '/analytics' },
    { name: 'À propos', href: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="glass backdrop-blur-md sticky top-0 z-50 border-b border-white/20 animate-fadeIn">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group animate-slideInLeft">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 hover-scale">
              <span className="text-white font-bold text-xl">⚽</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hope Foot
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex space-x-1 animate-fadeIn animate-delay-200">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover-lift ${
                  isActive(item.href)
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-white/50 backdrop-blur-sm'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 animate-fadeIn animate-delay-300">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Rechercher équipes, matchs..."
                className="w-full pl-10 pr-4 py-2.5 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:bg-white dark:bg-gray-800/80 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3 animate-slideInRight">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-3 md:hidden hover:bg-white/50 backdrop-blur-sm rounded-xl transition-all hover-lift"
            >
              <Search className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-3 hover:bg-white/50 backdrop-blur-sm rounded-xl transition-all duration-300 hover-lift group"
            >
              {isDark ? 
                <Sun className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" /> : 
                <Moon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              }
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-3 relative hover:bg-white/50 backdrop-blur-sm rounded-xl transition-all duration-300 hover-lift group"
              onClick={() => console.log('Notifications clicked')}
            >
              <Bell className="w-5 h-5 group-hover:animate-bounce-custom" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center animate-pulse">3</span>
            </Button>

            <Button 
              variant="ghost" 
              size="sm" 
              className="p-3 hover:bg-white/50 backdrop-blur-sm rounded-xl transition-all duration-300 hover-lift group"
              onClick={() => console.log('User menu clicked')}
            >
              <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 lg:hidden hover:bg-white/50 backdrop-blur-sm rounded-xl transition-all hover-lift"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden py-4 border-t border-white/20 animate-fadeIn">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher équipes, matchs..."
                className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:bg-gray-800/80 dark:border-gray-600 dark:text-white"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-y-0 left-0 w-80 glass backdrop-blur-xl shadow-2xl animate-slideInLeft">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Menu</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-all hover-scale"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <nav className="space-y-3">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 animate-slideInLeft ${
                      isActive(item.href)
                        ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 hover:text-blue-600'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;