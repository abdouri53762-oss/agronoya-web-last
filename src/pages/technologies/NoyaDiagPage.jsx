import React from 'react';
import { ArrowLeft, Brain, Camera, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NoyaDiagPage = () => {
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
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
              <Brain className="w-12 h-12 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              NoyaDiag <span className="text-purple-400">IA</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Module de diagnostic intelligent des cultures par vision par ordinateur
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Intelligence Artificielle Avancée</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            NoyaDiag est le module de diagnostic intelligent des cultures d'AgroNoya. Il s'appuie sur un modèle d'intelligence artificielle 
            de vision par ordinateur (deep learning) capable d'analyser des images de feuilles et de plantes captées par smartphone, drone ou caméra connectée.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Le système détecte automatiquement les maladies, ravageurs et carences nutritionnelles, avec un haut niveau de précision 
            grâce à des modèles entraînés sur des bases de données agricoles locales et internationales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-purple-500/30">
            <Camera className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Détection Automatique</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Maladies des cultures</li>
              <li>• Ravageurs et parasites</li>
              <li>• Carences nutritionnelles</li>
              <li>• Analyse par smartphone/drone</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-pink-500/30">
            <Shield className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Validation NoyaGPT</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Confirmation diagnostic</li>
              <li>• Recommandations personnalisées</li>
              <li>• Plan d'application détaillé</li>
              <li>• Alternatives durables</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Impact Révolutionnaire</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            En automatisant le diagnostic phytosanitaire, NoyaDiag réduit fortement le délai entre l'apparition d'un problème et sa prise en charge. 
            Il permet aux agriculteurs d'agir rapidement, de limiter les pertes de rendement et de réduire les coûts liés à l'utilisation 
            excessive ou inappropriée de pesticides.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">-50%</div>
              <p className="text-gray-300">Délai diagnostic</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">+35%</div>
              <p className="text-gray-300">Précision détection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">-40%</div>
              <p className="text-gray-300">Usage pesticides</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoyaDiagPage;

