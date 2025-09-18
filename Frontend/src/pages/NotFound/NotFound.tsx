import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import Card from '../../components/ui/Card/Card';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="p-8 text-center max-w-lg">
        <div className="text-6xl font-bold text-green-600 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Page non trouvée
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button as={Link} to="/" className="flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Page précédente
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;