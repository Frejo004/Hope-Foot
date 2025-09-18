import React from 'react';
import Card from '../../../../components/ui/Card/Card';
import Badge from '../../../../components/ui/Badge/Badge';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const mockPredictions = [
  {
    id: 1,
    match: 'Arsenal vs Chelsea',
    prediction: 'Victoire Arsenal',
    confidence: 82,
    status: 'correct',
    odds: 2.3,
    date: '2025-01-24',
  },
  {
    id: 2,
    match: 'Bayern vs Dortmund',
    prediction: 'Match nul',
    confidence: 68,
    status: 'incorrect',
    odds: 3.4,
    date: '2025-01-23',
  },
  {
    id: 3,
    match: 'Juventus vs Milan',
    prediction: 'Victoire Juventus',
    confidence: 75,
    status: 'pending',
    odds: 1.9,
    date: '2025-01-26',
  },
  {
    id: 4,
    match: 'Atletico vs Valencia',
    prediction: 'Victoire Atletico',
    confidence: 89,
    status: 'correct',
    odds: 1.6,
    date: '2025-01-22',
  },
];

const RecentPredictions: React.FC = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pronostics récents</h2>
        <a href="/predictions" className="text-green-600 hover:text-green-700 font-medium">
          Voir tout l'historique
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockPredictions.map((prediction) => (
          <Card key={prediction.id} hover className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {prediction.match}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {prediction.date}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {prediction.status === 'correct' && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
                {prediction.status === 'incorrect' && (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
                {prediction.status === 'pending' && (
                  <Clock className="w-5 h-5 text-yellow-500" />
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pronostic</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {prediction.prediction}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Confiance</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {prediction.confidence}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Cote</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {prediction.odds}
                    </p>
                  </div>
                </div>
                
                <Badge 
                  variant={
                    prediction.status === 'correct' ? 'success' : 
                    prediction.status === 'incorrect' ? 'error' : 'warning'
                  }
                  size="sm"
                >
                  {prediction.status === 'correct' ? 'Réussi' : 
                   prediction.status === 'incorrect' ? 'Raté' : 'En attente'}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RecentPredictions;