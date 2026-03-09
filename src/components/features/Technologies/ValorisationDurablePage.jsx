import React from 'react';
import { Leaf, CheckCircle, Droplets, Shield } from 'lucide-react';

const ValorisationDurablePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 mb-6 text-white">
            <Leaf className="w-10 h-10" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-[#57D53B] mb-4">
            Valorisation Durable
          </h1>

          <p className="text-xl text-gray-600 dark:text-slate-300 leading-relaxed">
            Structuration de données techniques utiles aux démarches environnementales,
            au reporting et à la valorisation progressive des performances durables.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-slate-50 mb-6">
            Rôle du module
          </h2>
          <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
            Ce module consolide les indicateurs issus de la plateforme pour appuyer des usages
            de suivi environnemental : efficience hydrique, reporting technique, consolidation
            de trajectoires d’amélioration et préparation à des cadres ESG ou carbone.
          </p>

          <div className="space-y-4">
            {[
              'Mesure d’indicateurs liés à l’efficience hydrique',
              'Préparation des données pour reporting technique',
              'Support potentiel à des démarches carbone ou ESG',
              'Consolidation progressive de la valeur environnementale',
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
            <Droplets className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-50 mb-2">Eau</h3>
            <p className="text-gray-600 dark:text-slate-300 text-sm">
              Lecture des gains d’efficience hydrique et des usages associés.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <Shield className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-50 mb-2">Reporting</h3>
            <p className="text-gray-600 dark:text-slate-300 text-sm">
              Préparation d’une base exploitable pour justification technique et suivi.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
            <Leaf className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-50 mb-2">Durabilité</h3>
            <p className="text-gray-600 dark:text-slate-300 text-sm">
              Valorisation progressive des pratiques agricoles améliorées.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValorisationDurablePage;