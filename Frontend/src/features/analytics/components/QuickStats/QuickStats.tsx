import React from 'react';
import Card from '../../../../components/ui/Card/Card';
import { TrendingUp, Target, Award, Calendar } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    label: 'Pronostics cette semaine',
    value: '127',
    change: '+12%',
    changeType: 'positive',
  },
  {
    icon: Target,
    label: 'Taux de réussite',
    value: '78.4%',
    change: '+2.1%',
    changeType: 'positive',
  },
  {
    icon: Award,
    label: 'Meilleur série',
    value: '9',
    change: 'En cours',
    changeType: 'neutral',
  },
  {
    icon: Calendar,
    label: 'Matchs analysés',
    value: '2,847',
    change: '+156',
    changeType: 'positive',
  },
];

const QuickStats: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Statistiques rapides</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className={`text-sm mt-1 ${
                    stat.changeType === 'positive' 
                      ? 'text-green-600 dark:text-green-400' 
                      : stat.changeType === 'negative'
                      ? 'text-red-600 dark:text-red-400'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default QuickStats;