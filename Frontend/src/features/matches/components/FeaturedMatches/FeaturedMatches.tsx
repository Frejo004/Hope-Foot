import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../../components/ui/Card/Card';
import Badge from '../../../../components/ui/Badge/Badge';
import Button from '../../../../components/ui/Button/Button';
import { Clock, MapPin, Eye, TrendingUp, Star } from 'lucide-react';
import { mockMatches } from '../../../../data/mockData';

const enhancedMatches = [
  {
    ...mockMatches[0],
    homeOdds: 1.45,
    drawOdds: 4.2,
    awayOdds: 7.5,
    prediction: 'home',
    confidence: 85,
    venue: 'Parc des Princes'
  },
  {
    ...mockMatches[1],
    homeOdds: 2.1,
    drawOdds: 3.4,
    awayOdds: 3.8,
    prediction: 'draw',
    confidence: 72,
    venue: 'Santiago Bernabéu'
  },
  {
    ...mockMatches[2],
    homeOdds: 2.3,
    drawOdds: 3.2,
    awayOdds: 3.1,
    prediction: 'away',
    confidence: 78,
    venue: 'Etihad Stadium'
  },
];

const FeaturedMatches: React.FC = () => {
  const navigate = useNavigate();
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }),
      time: date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <Badge className="bg-red-500 text-white animate-pulse">🔴 En direct</Badge>;
      case 'finished':
        return <Badge className="bg-gray-500 text-white">✅ Terminé</Badge>;
      default:
        return <Badge className="bg-blue-500 text-white">⏰ À venir</Badge>;
    }
  };

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent flex items-center">
            <Star className="w-8 h-8 text-yellow-500 mr-3 animate-pulse-custom" />
            Matchs en vedette
          </h2>
          <p className="text-gray-600 mt-1">Les rencontres les plus attendues avec nos pronostics IA</p>
        </div>
        <Button variant="gradient" className="hover-lift">
          <TrendingUp className="w-4 h-4 mr-2" />
          Voir tous les matchs
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {enhancedMatches.map((match, index) => {
          const { date, time } = formatDate(match.date);
          
          return (
            <Card 
              key={match.id} 
              className={`p-6 hover:shadow-2xl transition-all duration-500 animate-scaleIn border-l-4 ${
                match.status === 'live' ? 'border-l-red-500' : 
                match.status === 'finished' ? 'border-l-gray-500' : 'border-l-blue-500'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <Badge className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-blue-700 font-medium">
                    {match.league.name}
                  </Badge>
                  {getStatusBadge(match.status)}
                </div>

                {/* Teams */}
                <div className="text-center">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center group">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{match.homeTeam.logo}</div>
                      <div className="font-bold text-sm text-gray-800">{match.homeTeam.name}</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 px-4 py-2 rounded-xl font-bold">
                      {match.score ? `${match.score.home} - ${match.score.away}` : 'VS'}
                    </div>
                    
                    <div className="text-center group">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{match.awayTeam.logo}</div>
                      <div className="font-bold text-sm text-gray-800">{match.awayTeam.name}</div>
                    </div>
                  </div>
                </div>

                {/* Match Info */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center bg-gray-50 px-3 py-2 rounded-xl">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    {date} à {time}
                  </div>
                  <div className="flex items-center justify-center bg-gray-50 px-3 py-2 rounded-xl">
                    <MapPin className="w-4 h-4 mr-2 text-green-500" />
                    {match.venue}
                  </div>
                </div>

                {/* Odds */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover-scale transition-all">
                    <div className="text-xs text-blue-600 font-medium">Domicile</div>
                    <div className="font-bold text-lg text-blue-800">{match.homeOdds}</div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl hover-scale transition-all">
                    <div className="text-xs text-yellow-600 font-medium">Nul</div>
                    <div className="font-bold text-lg text-yellow-800">{match.drawOdds}</div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover-scale transition-all">
                    <div className="text-xs text-purple-600 font-medium">Extérieur</div>
                    <div className="font-bold text-lg text-purple-800">{match.awayOdds}</div>
                  </div>
                </div>

                {/* AI Prediction */}
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-green-800 flex items-center">
                        🤖 Pronostic IA: {match.prediction === 'home' ? match.homeTeam.name : 
                                        match.prediction === 'away' ? match.awayTeam.name : 'Match nul'}
                      </div>
                      <div className="text-xs text-green-600 mt-1">
                        Confiance: {match.confidence}% • 📊 Analyse avancée
                      </div>
                    </div>
                    <div className="text-2xl animate-pulse-custom">🎯</div>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="gradient" 
                  className="w-full hover-lift font-semibold"
                  onClick={() => navigate(`/matches/${match.id}`)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Analyser le match
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedMatches;