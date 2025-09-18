import React from 'react';
import Card from '../../../../components/ui/Card/Card';
import Badge from '../../../../components/ui/Badge/Badge';
import Button from '../../../../components/ui/Button/Button';
import { Clock, MapPin, Eye, TrendingUp } from 'lucide-react';

const mockMatches = [
  {
    id: 1,
    homeTeam: 'PSG',
    awayTeam: 'Lyon',
    league: 'Ligue 1',
    date: '2025-01-26',
    time: '21:00',
    venue: 'Parc des Princes',
    status: 'upcoming',
    homeOdds: 1.45,
    drawOdds: 4.2,
    awayOdds: 7.5,
    prediction: 'home',
    confidence: 78,
  },
  {
    id: 2,
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    league: 'La Liga',
    date: '2025-01-27',
    time: '16:15',
    venue: 'Santiago Bernabéu',
    status: 'upcoming',
    homeOdds: 2.1,
    drawOdds: 3.4,
    awayOdds: 3.8,
    prediction: 'draw',
    confidence: 65,
  },
  {
    id: 3,
    homeTeam: 'Manchester City',
    awayTeam: 'Liverpool',
    league: 'Premier League',
    date: '2025-01-28',
    time: '17:30',
    venue: 'Etihad Stadium',
    status: 'upcoming',
    homeOdds: 2.3,
    drawOdds: 3.2,
    awayOdds: 3.1,
    prediction: 'away',
    confidence: 72,
  },
];

const FeaturedMatches: React.FC = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Matchs en vedette</h2>
        <Button variant="outline">Voir tous les matchs</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMatches.map((match) => (
          <Card key={match.id} hover className="p-6">
            <div className="space-y-4">
              {/* League and Status */}
              <div className="flex items-center justify-between">
                <Badge variant="info" size="sm">{match.league}</Badge>
                <Badge variant="warning" size="sm">À venir</Badge>
              </div>

              {/* Teams */}
              <div className="text-center">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {match.homeTeam}
                  </div>
                  <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium">
                    VS
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {match.awayTeam}
                  </div>
                </div>
              </div>

              {/* Match Info */}
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {match.date} à {match.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {match.venue}
                </div>
              </div>

              {/* Odds */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                  <div className="text-xs text-gray-500 dark:text-gray-400">1</div>
                  <div className="font-semibold">{match.homeOdds}</div>
                </div>
                <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                  <div className="text-xs text-gray-500 dark:text-gray-400">X</div>
                  <div className="font-semibold">{match.drawOdds}</div>
                </div>
                <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                  <div className="text-xs text-gray-500 dark:text-gray-400">2</div>
                  <div className="font-semibold">{match.awayOdds}</div>
                </div>
              </div>

              {/* Prediction */}
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div>
                  <div className="text-sm font-medium text-green-800 dark:text-green-300">
                    Pronostic: {match.prediction === 'home' ? match.homeTeam : 
                                match.prediction === 'away' ? match.awayTeam : 'Match nul'}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    Confiance: {match.confidence}%
                  </div>
                </div>
                <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>

              {/* Action Button */}
              <Button className="w-full">
                <Eye className="w-4 h-4 mr-2" />
                Analyser le match
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMatches;