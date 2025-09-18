import React from 'react';
import Card from '../../components/ui/Card/Card';

const MatchDetails: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Détails du match</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Analyse approfondie du match sélectionné
        </p>
      </div>

      <Card className="p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Analyse détaillée</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Statistiques, pronostics et confrontations directes à venir...
        </p>
      </Card>
    </div>
  );
};

export default MatchDetails;