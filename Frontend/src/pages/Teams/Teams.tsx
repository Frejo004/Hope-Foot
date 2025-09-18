import React from 'react';
import Card from '../../components/ui/Card/Card';

const Teams: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Équipes</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explorez les équipes et leurs statistiques
        </p>
      </div>

      <Card className="p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Base de données des équipes</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Recherche et filtrage des équipes avec leurs statistiques complètes...
        </p>
      </Card>
    </div>
  );
};

export default Teams;