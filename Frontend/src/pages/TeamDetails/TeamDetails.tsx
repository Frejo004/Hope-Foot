import React from 'react';
import Card from '../../components/ui/Card/Card';

const TeamDetails: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Détails de l'équipe</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Statistiques complètes et forme de l'équipe
        </p>
      </div>

      <Card className="p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Profil de l'équipe</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Forme récente, calendrier, statistiques avancées...
        </p>
      </Card>
    </div>
  );
};

export default TeamDetails;