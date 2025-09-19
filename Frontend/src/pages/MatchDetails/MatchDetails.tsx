import React from 'react';
import { useParams } from 'react-router-dom';
import { mockMatches } from '../../data/mockData';

const MatchDetails: React.FC = () => {
  const { id } = useParams();
  const matchId = parseInt(id || '1');
  const match = mockMatches.find(m => m.id === matchId) || mockMatches[0];

  // Sidebar leagues data
  const leagues = [
    { name: 'Ligue 1', flag: '🇫🇷', matches: 10 },
    { name: 'Ligue 2', flag: '🇫🇷', matches: 8 },
    { name: 'Premier League', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', matches: 12 },
    { name: 'Liga', flag: '🇪🇸', matches: 9 },
    { name: 'Serie A', flag: '🇮🇹', matches: 7 },
    { name: 'Bundesliga', flag: '🇩🇪', matches: 6 }
  ];

  const sidebarMatches = [
    { home: 'Saint-Étienne', away: 'Angers', score: '1-1', status: 'FT' },
    { home: 'Red Star', away: 'Troyes', score: '0-2', status: 'FT' },
    { home: 'Pau', away: 'Nancy', score: '2-1', status: 'FT' },
    { home: 'Reims', away: 'Rodez', score: '3-0', status: 'FT' },
    { home: 'St. Lavallois', away: 'Amiens', score: '1-0', status: 'FT' }
  ];

  const renderScheduledMatch = () => (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4 border-b">
          <h2 className="font-bold text-lg">CHAMPIONNATS</h2>
        </div>
        <div className="space-y-1">
          {leagues.map((league, i) => (
            <div key={i} className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-2">
                <span className="text-sm">{league.flag}</span>
                <span className="text-sm">{league.name}</span>
              </div>
              <span className="text-xs text-gray-500">{league.matches}</span>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-b border-t mt-4">
          <h3 className="font-bold text-sm">Classement Ligue 1 BKT</h3>
        </div>
        <div className="space-y-1">
          {sidebarMatches.map((match, i) => (
            <div key={i} className="px-4 py-2 text-xs hover:bg-gray-50">
              <div className="flex justify-between">
                <span>{match.home}</span>
                <span>{match.score}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>{match.away}</span>
                <span>{match.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Match Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm">🇫🇷 France - Ligue 1 McDonald's</span>
              </div>
              <div className="text-sm">20:45</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-4xl mb-2">⚽</div>
                <div className="font-bold">{match.homeTeam.name}</div>
              </div>
              
              <div className="text-center px-8">
                <div className="text-3xl font-bold mb-2">VS</div>
                <div className="text-sm opacity-80">Vendredi 19 septembre 2025 20h00</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">⚽</div>
                <div className="font-bold">{match.awayTeam.name}</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-6 bg-gray-200 p-1 rounded-lg">
            {['Résumé', 'Compos', 'Classement', 'Stats', 'H2H', 'Forums'].map((tab, i) => (
              <button key={i} className={`px-4 py-2 rounded text-sm font-medium ${
                i === 0 ? 'bg-white text-blue-600 shadow' : 'text-gray-600 hover:text-gray-900'
              }`}>
                {tab}
              </button>
            ))}
          </div>

          {/* Match Info */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Informations du match</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Date:</span>
                <span className="ml-2">Vendredi 19 septembre 2025</span>
              </div>
              <div>
                <span className="text-gray-600">Heure:</span>
                <span className="ml-2">20:45</span>
              </div>
              <div>
                <span className="text-gray-600">Stade:</span>
                <span className="ml-2">Parc des Princes</span>
              </div>
              <div>
                <span className="text-gray-600">Arbitre:</span>
                <span className="ml-2">Clément Turpin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLiveMatch = () => (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4 border-b">
          <h2 className="font-bold text-lg">CHAMPIONNATS</h2>
        </div>
        <div className="space-y-1">
          {leagues.map((league, i) => (
            <div key={i} className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-2">
                <span className="text-sm">{league.flag}</span>
                <span className="text-sm">{league.name}</span>
              </div>
              <span className="text-xs text-gray-500">{league.matches}</span>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-b border-t mt-4">
          <h3 className="font-bold text-sm">Classement Ligue 1 BKT</h3>
        </div>
        <div className="space-y-1">
          {sidebarMatches.map((match, i) => (
            <div key={i} className="px-4 py-2 text-xs hover:bg-gray-50">
              <div className="flex justify-between">
                <span>{match.home}</span>
                <span>{match.score}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>{match.away}</span>
                <span>{match.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Live Match Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold">SIMULATION EN DIRECT</span>
              </div>
              <div className="text-sm">4 - 0</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-4xl mb-2">⚽</div>
                <div className="font-bold">{match.homeTeam.name}</div>
              </div>
              
              <div className="text-center px-8">
                <div className="text-6xl font-bold mb-2">4 - 0</div>
                <div className="text-sm opacity-80">M Sharayzen 45'</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">⚽</div>
                <div className="font-bold">{match.awayTeam.name}</div>
              </div>
            </div>
          </div>

          {/* Football Field */}
          <div className="bg-green-500 rounded-lg p-8 mb-6 relative" style={{ height: '400px' }}>
            <div className="absolute inset-4 border-2 border-white rounded">
              {/* Field markings */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-20 border-2 border-white border-l-0 rounded-r"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-20 border-2 border-white border-r-0 rounded-l"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-white rounded-full"></div>
              
              {/* Team positions */}
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold">
                Attaque
              </div>
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">
                HaMizrah
              </div>
              
              {/* Score overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 text-white px-6 py-3 rounded">
                <div className="text-center">
                  <div className="text-2xl font-bold">SUPER LIVE</div>
                  <div className="text-sm">⚽ 🏃‍♂️</div>
                </div>
              </div>
            </div>
          </div>

          {/* Match Events */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Événements du match</h3>
            <div className="space-y-3">
              {[
                { time: "1'", event: "⚽", player: "Benzema", team: "home" },
                { time: "2'", event: "⚽", player: "Casas", team: "home" },
                { time: "3'", event: "🟨", player: "Palacios", team: "away" },
                { time: "4'", event: "⚽", player: "Casas", team: "home" }
              ].map((event, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{event.event}</span>
                    <span className="font-medium">{event.player}</span>
                  </div>
                  <span className="text-sm text-gray-500">{event.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinishedMatch = () => (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4 border-b">
          <h2 className="font-bold text-lg">CHAMPIONNATS</h2>
        </div>
        <div className="space-y-1">
          {leagues.map((league, i) => (
            <div key={i} className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-2">
                <span className="text-sm">{league.flag}</span>
                <span className="text-sm">{league.name}</span>
              </div>
              <span className="text-xs text-gray-500">{league.matches}</span>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-b border-t mt-4">
          <h3 className="font-bold text-sm">Classement Ligue 1 BKT</h3>
        </div>
        <div className="space-y-1">
          {sidebarMatches.map((match, i) => (
            <div key={i} className="px-4 py-2 text-xs hover:bg-gray-50">
              <div className="flex justify-between">
                <span>{match.home}</span>
                <span>{match.score}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>{match.away}</span>
                <span>{match.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Finished Match Header */}
          <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white p-6 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm">🇫🇷 France - Ligue 1 McDonald's</span>
              </div>
              <div className="text-sm font-bold">TERMINÉ</div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-4xl mb-2">⚽</div>
                <div className="font-bold">{match.homeTeam.name}</div>
              </div>
              
              <div className="text-center px-8">
                <div className="text-6xl font-bold mb-2">1 - 3</div>
                <div className="text-sm opacity-80">Temps réglementaire</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">⚽</div>
                <div className="font-bold">{match.awayTeam.name}</div>
              </div>
            </div>
          </div>

          {/* Match Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Goals Timeline */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">⚽ Buts du match</h3>
              <div className="space-y-3">
                {[
                  { time: "12'", player: "Neymar", team: "home", score: "1-0" },
                  { time: "23'", player: "Messi", team: "away", score: "1-1" },
                  { time: "67'", player: "Mbappé", team: "away", score: "1-2" },
                  { time: "89'", player: "Benzema", team: "away", score: "1-3" }
                ].map((goal, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 rounded ${
                    goal.team === 'home' ? 'bg-blue-50' : 'bg-red-50'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">⚽</span>
                      <div>
                        <div className="font-bold">{goal.player}</div>
                        <div className="text-sm text-gray-600">{goal.time}</div>
                      </div>
                    </div>
                    <div className="font-bold text-lg">{goal.score}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">📊 Statistiques</h3>
              <div className="space-y-4">
                {[
                  { label: "Possession", home: 58, away: 42 },
                  { label: "Tirs", home: 12, away: 8 },
                  { label: "Tirs cadrés", home: 4, away: 6 },
                  { label: "Corners", home: 7, away: 3 },
                  { label: "Fautes", home: 14, away: 11 }
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-600 font-bold">{stat.home}</span>
                      <span className="font-medium">{stat.label}</span>
                      <span className="text-red-600 font-bold">{stat.away}</span>
                    </div>
                    <div className="flex h-2 bg-gray-200 rounded overflow-hidden">
                      <div className="bg-blue-500" style={{ width: `${(stat.home / (stat.home + stat.away)) * 100}%` }}></div>
                      <div className="bg-red-500" style={{ width: `${(stat.away / (stat.home + stat.away)) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Match Analysis */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">📝 Résumé du match</h3>
            <p className="text-gray-700 leading-relaxed">
              Victoire éclatante du Real Madrid qui s'impose 3-1 face au PSG dans un Clasico européen de toute beauté. 
              Après l'ouverture du score parisienne signée Neymar (12'), les Madrilènes ont su renverser la vapeur 
              grâce à Messi (23'), puis Mbappé (67') et enfin Benzema (89') qui scelle définitivement le sort de cette rencontre.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Render based on match status
  if (match.status === 'live') {
    return renderLiveMatch();
  } else if (match.status === 'finished') {
    return renderFinishedMatch();
  } else {
    return renderScheduledMatch();
  }
};

export default MatchDetails;