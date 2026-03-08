import React from 'react';
import { ArrowLeft, Plane, Camera, MapPin, Battery } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DjiMavic3Page = () => {
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
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 mb-6">
              <Plane className="w-12 h-12 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              DJI Mavic 3 <span className="text-orange-400">Multispectral</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Drone de cartographie compact et robuste pour l'agriculture de précision
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Caractéristiques Techniques</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Le DJI Mavic 3 Multispectral est un drone de cartographie compact et robuste, intégrant des capteurs RGB (20 MP) et multispectraux (4×5 MP) 
            avec technologie de compensation solaire pour des données NDVI précises sur le long terme.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Grâce à son module RTK centimétrique, il réalise une géolocalisation ultra-fiable sans besoin de points de référence au sol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-orange-500/30 text-center">
            <Camera className="w-10 h-10 text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Capteurs</h3>
            <p className="text-gray-300">RGB 20MP + 4×5MP Multispectral</p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-red-500/30 text-center">
            <MapPin className="w-10 h-10 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Précision RTK</h3>
            <p className="text-gray-300">Géolocalisation centimétrique</p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-pink-500/30 text-center">
            <Battery className="w-10 h-10 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Autonomie</h3>
            <p className="text-gray-300">43 minutes de vol</p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-purple-500/30 text-center">
            <MapPin className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Couverture</h3>
            <p className="text-gray-300">200 hectares par vol</p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-orange-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Agriculture de Précision</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Cartes de prescription ciblées</li>
                <li>• Réduction usage ressources (eau, fertilisants)</li>
                <li>• Amélioration des rendements</li>
                <li>• Avantage concurrentiel tangible</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Validation IA</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Ground truth pour satellites</li>
                <li>• Calibration modèles IA</li>
                <li>• Fiabilité analyses améliorée</li>
                <li>• Recommandations agronomiques précises</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DjiMavic3Page;

