import React from 'react';
import { Calendar, TrendingUp, Users } from 'lucide-react';
import Button from '../../../../components/ui/Button/Button';
import Card from '../../../../components/ui/Card/Card';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-600 to-blue-600 rounded-xl overflow-hidden">
      <div className="px-8 py-12 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pronostics Football Intelligents
          </h1>
          <p className="text-xl mb-8 text-green-100">
            Analysez, prédisez et suivez les matchs avec des données statistiques avancées et des analyses prédictives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Voir les matchs du jour
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <TrendingUp className="w-5 h-5 mr-2" />
              Mes pronostics
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Calendar className="w-8 h-8" />
                  <span className="text-2xl font-bold">24</span>
                </div>
                <p className="text-sm">Matchs aujourd'hui</p>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8" />
                  <span className="text-2xl font-bold">78%</span>
                </div>
                <p className="text-sm">Précision des pronostics</p>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8" />
                  <span className="text-2xl font-bold">156</span>
                </div>
                <p className="text-sm">Équipes suivies</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;