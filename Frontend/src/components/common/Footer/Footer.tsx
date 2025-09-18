import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto lg:ml-64">
      <div className="px-4 py-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 PredictFoot. Tous droits réservés.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
              Confidentialité
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;