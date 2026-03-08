import React from 'react';
import { ArrowLeft, Droplets, Activity, Thermometer, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CapteurIoTPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
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
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 mb-6">
              <Droplets className="w-12 h-12 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AgroSol <span className="text-green-400">& NoyaSol</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Solution d'analyse intelligente du sol avec capteurs IoT et IA
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Vue d'ensemble</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            AgroSol est la solution d'analyse intelligente du sol d'AgroNoya. Grâce à des capteurs IoT (NPK, pH, humidité, température), 
            elle assure un suivi en temps réel de la fertilité des sols et identifie rapidement les déséquilibres nutritifs ou hydriques.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Associée au moteur IA NoyaSol, la plateforme génère des alertes précoces et des recommandations agronomiques ciblées 
            en matière de fertilisation et d'amendement.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-green-500/30">
            <Activity className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Capteurs IoT Avancés</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Mesure NPK en temps réel</li>
              <li>• Monitoring pH et salinité</li>
              <li>• Capteurs d'humidité et température</li>
              <li>• Transmission sécurisée ESP32 + GSM/LoRa</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-blue-500/30">
            <Zap className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Intelligence Artificielle NoyaSol</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Analyse automatique des données sol</li>
              <li>• Détection précoce des carences</li>
              <li>• Recommandations personnalisées</li>
              <li>• Alertes intelligentes en temps réel</li>
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-green-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">-30%</div>
              <p className="text-gray-300">Réduction des intrants</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">+25%</div>
              <p className="text-gray-300">Amélioration rendement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <p className="text-gray-300">Surveillance continue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapteurIoTPage;

