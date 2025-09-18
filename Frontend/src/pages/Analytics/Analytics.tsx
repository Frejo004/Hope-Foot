import React from 'react';
import Card from '../../components/ui/Card/Card';

const Analytics: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Analyses avancées et tendances du football
        </p>
      </div>

      <Card className="p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Tableau de bord analytique</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Graphiques de performance, analyses de tendances et comparaisons...
        </p>
      </Card>
    </div>
  );
};

export default Analytics;