import React, { useState } from 'react';
import Card from '../../components/ui/Card/Card';
import Button from '../../components/ui/Button/Button';
import Badge from '../../components/ui/Badge/Badge';
import { Calendar, Filter, Search } from 'lucide-react';

const Matches: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const matches = [
    {
      id: 1,
      homeTeam: { name: 'PSG', logo: '⚽' },
      awayTeam: { name: 'Lyon', logo: '⚽' },
      date: '2024-01-15',
      time: '21:00',
      status: 'scheduled',
      league: 'Ligue 1'
    },
    {
      id: 2,
      homeTeam: { name: 'Barcelona', logo: '⚽' },
      awayTeam: { name: 'Real Madrid', logo: '⚽' },
      date: '2024-01-15',
      time: '16:00',
      status: 'live',
      league: 'La Liga',
      score: { home: 2, away: 1 }
    },
    {
      id: 3,
      homeTeam: { name: 'Manchester City', logo: '⚽' },
      awayTeam: { name: 'Liverpool', logo: '⚽' },
      date: '2024-01-14',
      time: '17:30',
      status: 'finished',
      league: 'Premier League',
      score: { home: 1, away: 3 }
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      scheduled: 'default',
      live: 'success',
      finished: 'secondary'
    } as const;
    
    const labels = {
      scheduled: 'À venir',
      live: 'En direct',
      finished: 'Terminé'
    };
    
    return <Badge variant={variants[status as keyof typeof variants]}>{labels[status as keyof typeof labels]}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Matchs</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Consultez tous les matchs et leurs analyses détaillées
        </p>
      </div>

      {/* Filtres */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher une équipe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            
            <select
              value={selectedLeague}
              onChange={(e) => setSelectedLeague(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">Toutes les ligues</option>
              <option value="ligue1">Ligue 1</option>
              <option value="premier">Premier League</option>
              <option value="laliga">La Liga</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Liste des matchs */}
      <div className="grid gap-4">
        {matches.map((match) => (
          <Card key={match.id} className="p-6 hover-lift" hover>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 flex-1">
                {/* Équipes */}
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{match.homeTeam.logo}</span>
                    <span className="font-medium">{match.homeTeam.name}</span>
                  </div>
                  
                  <div className="text-center px-4">
                    {match.score ? (
                      <div className="text-xl font-bold">
                        {match.score.home} - {match.score.away}
                      </div>
                    ) : (
                      <div className="text-gray-500">vs</div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{match.awayTeam.logo}</span>
                    <span className="font-medium">{match.awayTeam.name}</span>
                  </div>
                </div>
                
                {/* Infos match */}
                <div className="text-right space-y-2">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {match.league}
                  </div>
                  <div className="text-sm font-medium">
                    {match.time}
                  </div>
                  {getStatusBadge(match.status)}
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="ml-4">
                Détails
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Matches;