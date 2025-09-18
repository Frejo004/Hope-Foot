import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Users, TrendingUp, BarChart3, Info } from 'lucide-react';

const menuItems = [
  { path: '/', icon: Home, label: 'Accueil' },
  { path: '/matches', icon: Calendar, label: 'Matchs' },
  { path: '/teams', icon: Users, label: 'Équipes' },
  { path: '/predictions', icon: TrendingUp, label: 'Pronostics' },
  { path: '/analytics', icon: BarChart3, label: 'Analytics' },
  { path: '/about', icon: Info, label: 'À propos' },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;