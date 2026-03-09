import React from 'react';
import { Network, CheckCircle, Layers, Link } from 'lucide-react';

const ServicesEcosystemePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 mb-6 text-white">
            <Network className="w-10 h-10" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-[#57D53B] mb-4">
            Services Écosystème
          </h1>

          <p className="text-xl text-gray-600 dark:text-slate-300 leading-relaxed">
            Une couche d’ouverture vers des briques complémentaires connectées à la plateforme,
            dans une logique modulaire et évolutive.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-slate-50 mb-6">
            Fonction
          </h2>

          <div className="space-y-4">
            {[
              'Marketplace et services agricoles connectables',
              'Lien avec diagnostics et recommandations',
              'Architecture produit modulaire',
              'Extension progressive des cas d’usage',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600 dark:text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <Layers className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-50 mb-2">Modularité</h3>
            <p className="text-gray-600 dark:text-slate-300 text-sm">
              Intégration progressive de nouveaux services sans casser l’architecture.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <Link className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-50 mb-2">Connexion</h3>
            <p className="text-gray-600 dark:text-slate-300 text-sm">
              Liaison entre données, diagnostic, recommandation et services additionnels.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <Network className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-50 mb-2">Évolutivité</h3>
            <p className="text-gray-600 dark:text-slate-300 text-sm">
              Extension des cas d’usage dans une logique plateforme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesEcosystemePage;