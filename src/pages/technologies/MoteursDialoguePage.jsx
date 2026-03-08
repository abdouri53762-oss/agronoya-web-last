import React from 'react';
import { ArrowLeft, MessageCircle, Droplets, Search, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MoteursDialoguePage = () => {
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
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 mb-6">
              <MessageCircle className="w-12 h-12 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Moteurs de <span className="text-blue-400">Dialogue</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Maîtres de la simplification et contextualisation
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
            Nos moteurs de dialogue transforment la complexité technique en conseils simples et actionnables. 
            Ils parlent votre langue et comprennent votre contexte pour vous donner des recommandations claires.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ces conseillers virtuels utilisent la technologie RAG avec recherche tunisienne pour contextualiser 
            chaque recommandation selon les spécificités locales.
          </p>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-blue-500/30 text-center">
            <Droplets className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">NoyaIrrigation</h3>
            <p className="text-gray-300">Ingénieur agronome spécialisé eau</p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-cyan-500/30 text-center">
            <Search className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Technologie RAG</h3>
            <p className="text-gray-300">Recherche tunisienne contextualisée</p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-teal-500/30 text-center">
            <Users className="w-10 h-10 text-teal-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Synthèse Multi-factorielle</h3>
            <p className="text-gray-300">Recommandations simples et actionnables</p>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Conseil Personnalisé</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Recommandations irrigation optimales</li>
                <li>• Conseils adaptés au contexte local</li>
                <li>• Simplification des analyses techniques</li>
                <li>• Support dialecte tunisien</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligence Contextuelle</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Base connaissances tunisienne</li>
                <li>• Variétés locales optimisées</li>
                <li>• Pratiques agricoles adaptées</li>
                <li>• Expertise terrain validée</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoteursDialoguePage;

