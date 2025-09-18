import React from 'react';
import Card from '../../components/ui/Card/Card';

const Predictions: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Pronostics</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Historique complet de vos pronostics et analyses de performance
        </p>
      </div>

      <Card className="p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Centre des pronostics</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Historique détaillé avec filtres et métriques de performance...
        </p>
      </Card>
    </div>
  );
};

export default Predictions;