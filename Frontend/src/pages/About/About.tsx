import React from 'react';
import Card from '../../components/ui/Card/Card';
import { Target, BarChart3, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Pronostics Précis',
      description: 'Algorithmes avancés basés sur l\'analyse statistique approfondie des performances des équipes.',
    },
    {
      icon: BarChart3,
      title: 'Analyses Complètes',
      description: 'Données historiques, forme récente, confrontations directes et tendances pour chaque match.',
    },
    {
      icon: Shield,
      title: 'Transparence Totale',
      description: 'Méthodologie claire et traçabilité complète de nos prédictions et résultats.',
    },
    {
      icon: Zap,
      title: 'Temps Réel',
      description: 'Mises à jour en direct des scores, cotes et nouvelles analyses dès qu\'elles sont disponibles.',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">À propos de PredictFoot</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Découvrez notre approche unique de l'analyse footballistique
        </p>
      </div>

      <div className="space-y-8">
        {/* Mission */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Notre Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            PredictFoot révolutionne l'analyse footballistique en combinant données statistiques avancées 
            et intelligence artificielle pour offrir des pronostics éclairés et transparents.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Notre objectif n'est pas de garantir des gains, mais de fournir aux passionnés de football 
            les outils et analyses nécessaires pour prendre des décisions informées basées sur des données 
            factuelles et des tendances réelles.
          </p>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Methodology */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Notre Méthodologie</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">1. Collecte de Données</h3>
              <p>Intégration en temps réel des données de matchs, statistiques d'équipes et historiques de performances via l'API Sportmonks.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2. Analyse Statistique</h3>
              <p>Traitement des données historiques, forme récente des équipes, confrontations directes et facteurs contextuels (domicile/extérieur).</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">3. Génération de Pronostics</h3>
              <p>Application d'algorithmes de prédiction basés sur les tendances identifiées et calcul d'un niveau de confiance pour chaque pronostic.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">4. Validation Continue</h3>
              <p>Suivi des résultats réels, ajustement des modèles et amélioration continue de la précision des prédictions.</p>
            </div>
          </div>
        </Card>

        {/* Disclaimer */}
        <Card className="p-6 bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800">
          <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Avertissement Important</h3>
          <p className="text-yellow-700 dark:text-yellow-300 text-sm">
            PredictFoot fournit des analyses et pronostics à des fins éducatives et de divertissement uniquement. 
            Les prédictions sont basées sur des données statistiques mais ne garantissent pas les résultats futurs. 
            Toute utilisation de ces informations pour des paris sportifs est à vos propres risques et responsabilités.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;