import React from 'react';
import { ArrowLeft, Satellite, Eye, Map, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ImagerieSatellitePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <button
            onClick={() => navigate('/technologies')}
            className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux Technologies
          </button>
          
          <div className="text-center">
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 mb-6">
              <Satellite className="w-12 h-12 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AgroSat <span className="text-blue-400">& NoyaSat</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Surveillance satellite intelligente des parcelles agricoles
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Vue d'ensemble</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            AgroSat est la solution de suivi satellite intelligent d'AgroNoya, dédiée à la surveillance continue de l'état des parcelles agricoles. 
            Grâce aux images issues de satellites (Sentinel, Landsat, etc.), il calcule et analyse des indices clés tels que NDVI, NDWI, SAVI et l'imagerie thermique.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Le moteur IA NoyaSat interprète automatiquement ces données complexes et les transforme en indicateurs compréhensibles et actionnables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-blue-500/30">
            <Eye className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Indices Satellite</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• NDVI : Vigueur végétative</li>
              <li>• NDWI : Stress hydrique</li>
              <li>• SAVI : Anomalies de croissance</li>
              <li>• Imagerie thermique</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-cyan-500/30">
            <Map className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Cartes de Décision</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Zones saines identifiées</li>
              <li>• Zones stressées localisées</li>
              <li>• Alertes de risque géolocalisées</li>
              <li>• Pourcentages clairs d'état terrain</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Impact</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            L'intégration de NoyaSat au sein du tableau de bord AgroNoya permet aux exploitants de disposer d'une vision macro et micro de leurs parcelles, 
            facilitant la détection précoce des zones à risque et l'optimisation des interventions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">-20%</div>
              <p className="text-gray-300">Pertes de rendement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">+40%</div>
              <p className="text-gray-300">Précision interventions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">100%</div>
              <p className="text-gray-300">Couverture parcelles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagerieSatellitePage;

