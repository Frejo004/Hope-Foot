import React from 'react';
import Card from '../../components/ui/Card/Card';
import Badge from '../../components/ui/Badge/Badge';
import Button from '../../components/ui/Button/Button';
import { User, Trophy, Target, TrendingUp, Calendar } from 'lucide-react';

const Profile: React.FC = () => {
  const userStats = {
    username: 'FootballFan2024',
    email: 'user@example.com',
    joinDate: '2024-01-01',
    totalPredictions: 156,
    correctPredictions: 98,
    accuracy: 62.8,
    rank: 42,
    favoriteTeam: 'PSG'
  };

  const recentPredictions = [
    { match: 'PSG vs Lyon', prediction: 'PSG', result: 'correct', date: '2024-01-10' },
    { match: 'Barcelona vs Real', prediction: 'Barcelona', result: 'incorrect', date: '2024-01-08' },
    { match: 'City vs Liverpool', prediction: 'Draw', result: 'correct', date: '2024-01-05' }
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Mon Profil</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Gérez vos informations et consultez vos statistiques
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Informations utilisateur */}
        <Card className="lg:col-span-1 p-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {userStats.username}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{userStats.email}</p>
            <Badge variant="success">Rang #{userStats.rank}</Badge>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                Membre depuis {userStats.joinDate}
              </div>
            </div>
          </div>
        </Card>

        {/* Statistiques */}
        <Card className="lg:col-span-2 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Statistiques de prédiction
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-2">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {userStats.totalPredictions}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total prédictions
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mx-auto mb-2">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {userStats.correctPredictions}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Correctes
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {userStats.accuracy}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Précision
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl">⚽</div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {userStats.favoriteTeam}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Équipe favorite
              </div>
            </div>
          </div>

          <Button className="w-full">Modifier le profil</Button>
        </Card>
      </div>

      {/* Prédictions récentes */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Prédictions récentes
        </h3>
        
        <div className="space-y-3">
          {recentPredictions.map((pred, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {pred.match}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Prédiction: {pred.prediction} • {pred.date}
                </div>
              </div>
              <Badge variant={pred.result === 'correct' ? 'success' : 'error'}>
                {pred.result === 'correct' ? 'Correct' : 'Incorrect'}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Profile;