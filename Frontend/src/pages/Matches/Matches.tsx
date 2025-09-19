import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { mockMatches } from '../../data/mockData';

const Matches: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLeague, setSelectedLeague] = useState('all');

  const leagues = [
    { id: 'all', name: 'COMPETITIONS', flag: '🏆', matches: 156 },
    { id: 'ligue1', name: 'Ligue 1', flag: '🇫🇷', matches: 12 },
    { id: 'ligue2', name: 'Ligue 2', flag: '🇫🇷', matches: 8 },
    { id: 'premier', name: 'Premier League', flag: '🏴', matches: 10 },
    { id: 'liga', name: 'Liga', flag: '🇪🇸', matches: 6 },
    { id: 'bundesliga', name: 'Bundesliga', flag: '🇩🇪', matches: 9 },
    { id: 'seriea', name: 'Serie A', flag: '🇮🇹', matches: 7 },
    { id: 'ligue1conf', name: 'Ligue Conférence', flag: '🏆', matches: 4 },
    { id: 'ldc', name: 'LDC', flag: '🏆', matches: 8 },
    { id: 'angleterre', name: 'Angleterre', flag: '🏴', matches: 15 },
    { id: 'ecosse', name: 'Ecosse', flag: '🏴', matches: 3 },
    { id: 'belgique', name: 'Belgique', flag: '🇧🇪', matches: 5 }
  ];

  const matchData = [
    { time: '20:45', home: 'Lyon', away: 'Angers', league: 'France - Ligue 1 McDonald\'s', status: 'live', homeFlag: '🇫🇷', awayFlag: '🇫🇷' },
    { time: '20:00', home: 'Grenoble Foot', away: 'Annecy', league: 'France - Ligue 2 BKT', homeFlag: '🇫🇷', awayFlag: '🇫🇷' },
    { time: '20:00', home: 'Nancy', away: 'Red Star', league: '', homeFlag: '🇫🇷', awayFlag: '🇫🇷' },
    { time: '20:00', home: 'Rodez', away: 'Clermont', league: '', homeFlag: '🇫🇷', awayFlag: '🇫🇷' },
    { time: '20:00', home: 'St. Lavallois', away: 'Amiens', league: '', homeFlag: '🇫🇷', awayFlag: '🇫🇷' },
    { time: '20:00', home: 'US Boulogne', away: 'Pau', league: '', homeFlag: '🇫🇷', awayFlag: '🇫🇷' },
    { time: '20:00', home: 'USL Dunkerque', away: 'Le Mans', league: '', homeFlag: '🇫🇷', awayFlag: '🇫🇷' },
    { time: '21:00', home: 'Real Betis', away: 'Real Sociedad', league: 'Espagne - LaLiga', homeFlag: '🇪🇸', awayFlag: '🇪🇸' },
    { time: '20:45', home: 'Lecce', away: 'Cagliari', league: 'Italie - Serie A', homeFlag: '🇮🇹', awayFlag: '🇮🇹' },
    { time: '20:30', home: 'Stuttgart', away: 'Sankt Pauli', league: 'Allemagne - Bundesliga', homeFlag: '🇩🇪', awayFlag: '🇩🇪' },
    { time: '20:00', home: 'S. Rotterdam', away: 'Twente', league: 'Pays-Bas - Eredivisie', homeFlag: '🇳🇱', awayFlag: '🇳🇱' },
    { time: '21:15', home: 'Rio Ave', away: 'FC Porto', league: 'Portugal - Primeira Liga', homeFlag: '🇵🇹', awayFlag: '🇵🇹' },
    { time: '20:45', home: 'KAA Gent', away: 'Dender', league: 'Belgique - Pro League', homeFlag: '🇧🇪', awayFlag: '🇧🇪' },
    { time: '19:00', home: 'Gortepe', away: 'Besiktas', league: 'Turquie - Super Ligue', homeFlag: '🇹🇷', awayFlag: '🇹🇷' },
    { time: '21:00', home: 'Middlesbrough', away: 'West Bromwich', league: 'Angleterre - Championship', homeFlag: '🏴', awayFlag: '🏴' },
    { time: '17:15', home: 'Al Qadisiah', away: 'Al Khaleej', league: 'Arabie Saoudite - Première Division', homeFlag: '🇸🇦', awayFlag: '🇸🇦' },
    { time: '17:30', home: 'Al Fayha', away: 'Al Shabab', league: '', homeFlag: '🇸🇦', awayFlag: '🇸🇦' },
    { time: '20:00', home: 'Al Ahli', away: 'Al Hilal', league: '', homeFlag: '🇸🇦', awayFlag: '🇸🇦' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 min-h-screen border-r">
          <div className="p-4">
            <h2 className="font-bold text-gray-800 mb-4">COMPETITIONS</h2>
            <div className="space-y-1">
              {leagues.map((league) => (
                <div
                  key={league.id}
                  className={`flex items-center justify-between p-2 text-sm cursor-pointer hover:bg-gray-200 rounded ${
                    selectedLeague === league.id ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
                  }`}
                  onClick={() => setSelectedLeague(league.id)}
                >
                  <div className="flex items-center space-x-2">
                    <span>{league.flag}</span>
                    <span>{league.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{league.matches}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-gray-800 text-white p-3">
            <div className="flex items-center space-x-2 text-sm">
              <span>🏠 Matchs en Direct</span>
              <ChevronRight className="w-4 h-4" />
              <span>Vendredi 13 septembre 2024</span>
              <ChevronRight className="w-4 h-4" />
              <span>score Football en direct LIVE Matchs</span>
            </div>
          </div>

          {/* Date Navigation */}
          <div className="bg-gray-200 p-2 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="text-blue-600">← Aujourd'hui</button>
              <span className="font-medium">Aujourd'hui</span>
              <button className="text-blue-600">Demain →</button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-600">🔴 En direct</span>
              <span>Mes matchs</span>
            </div>
          </div>

          {/* Matches List */}
          <div className="p-4">
            {/* France - Ligue 1 */}
            <div className="mb-6">
              <div className="bg-gray-700 text-white p-2 flex items-center space-x-2">
                <span>🇫🇷</span>
                <span className="font-medium">France - Ligue 1 McDonald's</span>
              </div>
              <div className="bg-white border">
                <div className="flex items-center justify-between p-3 hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium w-12">20:45</span>
                    <div className="flex items-center space-x-8">
                      <div className="flex items-center space-x-2 w-32">
                        <span>Lyon</span>
                      </div>
                      <span className="text-gray-500">v</span>
                      <div className="flex items-center space-x-2 w-32">
                        <span>Angers</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">LIVE</span>
                    <button 
                      className="text-blue-600 hover:underline"
                      onClick={() => navigate('/matches/1')}
                    >
                      📊
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* France - Ligue 2 */}
            <div className="mb-6">
              <div className="bg-gray-700 text-white p-2 flex items-center space-x-2">
                <span>🇫🇷</span>
                <span className="font-medium">France - Ligue 2 BKT</span>
              </div>
              <div className="bg-white border">
                {matchData.slice(1, 7).map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 border-b last:border-b-0">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium w-12">{match.time}</span>
                      <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-2 w-32">
                          <span>{match.home}</span>
                        </div>
                        <span className="text-gray-500">v</span>
                        <div className="flex items-center space-x-2 w-32">
                          <span>{match.away}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button 
                        className="text-blue-600 hover:underline"
                        onClick={() => navigate(`/matches/${index + 2}`)}
                      >
                        📊
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Leagues */}
            {[
              { name: 'Espagne - LaLiga', flag: '🇪🇸', matches: matchData.slice(7, 8) },
              { name: 'Italie - Serie A', flag: '🇮🇹', matches: matchData.slice(8, 9) },
              { name: 'Allemagne - Bundesliga', flag: '🇩🇪', matches: matchData.slice(9, 10) },
              { name: 'Pays-Bas - Eredivisie', flag: '🇳🇱', matches: matchData.slice(10, 11) },
              { name: 'Portugal - Primeira Liga', flag: '🇵🇹', matches: matchData.slice(11, 12) },
              { name: 'Belgique - Pro League', flag: '🇧🇪', matches: matchData.slice(12, 13) },
              { name: 'Turquie - Super Ligue', flag: '🇹🇷', matches: matchData.slice(13, 14) },
              { name: 'Angleterre - Championship', flag: '🏴', matches: matchData.slice(14, 15) },
              { name: 'Arabie Saoudite - Première Division', flag: '🇸🇦', matches: matchData.slice(15, 18) }
            ].map((league, leagueIndex) => (
              <div key={leagueIndex} className="mb-6">
                <div className="bg-gray-700 text-white p-2 flex items-center space-x-2">
                  <span>{league.flag}</span>
                  <span className="font-medium">{league.name}</span>
                </div>
                <div className="bg-white border">
                  {league.matches.map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 border-b last:border-b-0">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium w-12">{match.time}</span>
                        <div className="flex items-center space-x-8">
                          <div className="flex items-center space-x-2 w-32">
                            <span>{match.home}</span>
                          </div>
                          <span className="text-gray-500">v</span>
                          <div className="flex items-center space-x-2 w-32">
                            <span>{match.away}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button 
                          className="text-blue-600 hover:underline"
                          onClick={() => navigate(`/matches/${leagueIndex + index + 10}`)}
                        >
                          📊
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Load More Button */}
            <div className="text-center mt-8">
              <button className="bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700 transition-colors">
                Voir tous les matchs du jour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;