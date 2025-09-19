import React from 'react';
import { Calendar, TrendingUp, Users, Play, Star } from 'lucide-react';
import Button from '../../../../components/ui/Button/Button';
import Card from '../../../../components/ui/Card/Card';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-custom"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300/10 rounded-full blur-3xl animate-pulse-custom animate-delay-200"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-300/10 rounded-full blur-xl animate-pulse-custom animate-delay-400"></div>
      </div>
      
      <div className="relative z-10 px-8 py-16 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-bounce-custom">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              Plateforme #1 de pronostics football
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slideInLeft">
              Pronostics Football
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent animate-slideInRight animate-delay-200">
                Intelligents
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed animate-fadeIn animate-delay-300">
              Analysez, prédisez et suivez les matchs avec des données statistiques avancées et des analyses prédictives basées sur l'IA
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scaleIn animate-delay-400">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-xl shadow-2xl hover-lift transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Voir les matchs du jour
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover-lift transition-all duration-300"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Mes pronostics
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass border-white/20 text-white hover-lift animate-scaleIn animate-delay-500">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Calendar className="w-8 h-8 text-yellow-300" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">24</span>
                </div>
                <p className="text-blue-200 font-medium">Matchs aujourd'hui</p>
              </div>
            </Card>

            <Card className="glass border-white/20 text-white hover-lift animate-scaleIn animate-delay-600">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-green-300" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">85%</span>
                </div>
                <p className="text-blue-200 font-medium">Précision des pronostics</p>
              </div>
            </Card>

            <Card className="glass border-white/20 text-white hover-lift animate-scaleIn animate-delay-700">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Users className="w-8 h-8 text-purple-300" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">2.5K+</span>
                </div>
                <p className="text-blue-200 font-medium">Équipes suivies</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 fill-current text-white/5">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;