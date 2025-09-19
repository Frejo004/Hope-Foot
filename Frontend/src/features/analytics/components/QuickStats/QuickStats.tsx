import React from 'react';
import Card from '../../../../components/ui/Card/Card';
import { TrendingUp, Target, Award, Calendar, Zap, TrendingDown } from 'lucide-react';
import { mockStats } from '../../../../data/mockData';

const enhancedStats = [
  {
    icon: Target,
    label: 'Précision globale IA',
    value: '85.2%',
    change: '+5.3%',
    changeType: 'positive',
    color: 'text-green-600',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-100',
    borderColor: 'border-green-200'
  },
  {
    icon: TrendingUp,
    label: 'Prédictions totales',
    value: '2,847',
    change: '+234',
    changeType: 'positive',
    color: 'text-blue-600',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-100',
    borderColor: 'border-blue-200'
  },
  {
    icon: Award,
    label: 'Meilleure série',
    value: '12',
    change: 'Record!',
    changeType: 'positive',
    color: 'text-purple-600',
    bgColor: 'bg-gradient-to-br from-purple-50 to-violet-100',
    borderColor: 'border-purple-200'
  },
  {
    icon: Calendar,
    label: 'Matchs analysés',
    value: '1,456',
    change: '+89',
    changeType: 'positive',
    color: 'text-orange-600',
    bgColor: 'bg-gradient-to-br from-orange-50 to-amber-100',
    borderColor: 'border-orange-200'
  },
];

const QuickStats: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent flex items-center justify-center">
          <Zap className="w-8 h-8 text-yellow-500 mr-3 animate-bounce-custom" />
          Statistiques en temps réel
        </h2>
        <p className="text-gray-600 mt-2">Performances de notre IA et de la communauté</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {enhancedStats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.changeType === 'positive' ? TrendingUp : TrendingDown;
          
          return (
            <Card 
              key={index} 
              className={`p-6 hover:shadow-2xl transition-all duration-500 animate-scaleIn border-2 ${stat.borderColor} ${stat.bgColor}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover-scale transition-all duration-300">
                  <Icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className={`flex items-center text-sm font-semibold px-3 py-1 rounded-full ${
                  stat.changeType === 'positive' 
                    ? 'text-green-700 bg-green-100 border border-green-200' 
                    : 'text-red-700 bg-red-100 border border-red-200'
                }`}>
                  {stat.changeType === 'positive' && <TrendingUp className="w-4 h-4 mr-1" />}
                  {stat.changeType === 'negative' && <TrendingDown className="w-4 h-4 mr-1" />}
                  {stat.change}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-gray-700">
                  {stat.label}
                </p>
              </div>
              
              {/* Progress bar */}
              <div className="mt-4 w-full bg-white/50 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${
                    stat.changeType === 'positive' 
                      ? 'from-green-400 to-emerald-500' 
                      : 'from-red-400 to-red-500'
                  } transition-all duration-1000 animate-pulse-custom`}
                  style={{ width: `${Math.random() * 40 + 60}%` }}
                ></div>
              </div>
            </Card>
          );
        })}
      </div>
      
      {/* Additional insights */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 animate-fadeIn animate-delay-400">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-800 flex items-center">
              🎆 Performance exceptionnelle cette semaine !
            </h3>
            <p className="text-gray-600 mt-1">
              Notre IA a atteint un taux de réussite de 92% sur les matchs de Ligue 1
            </p>
          </div>
          <div className="text-4xl animate-bounce-custom">🏆</div>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;