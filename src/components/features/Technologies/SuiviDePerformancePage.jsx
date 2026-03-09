import React from 'react';
import { BarChart3, CheckCircle, TrendingUp, Gauge } from 'lucide-react';

const SuiviDePerformancePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 mb-6 text-white">
            <BarChart3 className="w-10 h-10" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-[#57D53B] mb-4">
            Suivi de Performance
          </h1>

          <p className="text-xl text-gray-600 dark:text-slate-300 leading-relaxed">
            Une couche dédiée à la mesure continue des performances techniques, agronomiques
            et opérationnelles de l’exploitation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-slate-50 mb-4">
              Objectif
            </h2>
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
              Consolider les indicateurs utiles au pilotage de l’exploitation afin de mesurer
              l’efficacité des actions, comparer les périodes et améliorer les décisions futures.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-slate-50 mb-4">
              Valeur technique
            </h2>
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
              Le module transforme l’historique des données, recommandations et interventions
              en base d’analyse pour l’amélioration continue des modèles et du pilotage métier.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-slate-50 mb-6">
            Capacités principales
          </h2>

          <div className="space-y-4">
            {[
              'Suivi des consommations et fréquences d’intervention',
              'Comparaison temporelle des états agronomiques',
              'Historique des recommandations et actions exécutées',
              'Base d’amélioration continue des modèles analytiques',
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
            <TrendingUp className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-50 mb-2">Analyse</h3>
            <p className="text-gray-600 dark:text-slate-300 text-sm">
              Lecture des tendances et écarts de performance.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <Gauge className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-50 mb-2">Mesure</h3>
            <p className="text-gray-600 dark:text-slate-300 text-sm">
              Consolidation d’indicateurs techniques et opérationnels.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <BarChart3 className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-50 mb-2">Optimisation</h3>
            <p className="text-gray-600 dark:text-slate-300 text-sm">
              Support à l’amélioration continue des pratiques et des modèles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuiviDePerformancePage;