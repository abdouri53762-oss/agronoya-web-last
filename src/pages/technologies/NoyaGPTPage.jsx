import React from 'react';
import { ArrowLeft, Bot, MessageSquare, Globe, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NoyaGPTPage = () => {
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
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 mb-6">
              <Bot className="w-12 h-12 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Noya<span className="text-emerald-400">GPT</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Conseiller agricole personnel universel
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
            NoyaGPT est votre conseiller agricole personnel universel, l'interface de dialogue principale 
            qui vous connecte à toute l'intelligence d'AgroNoya. Il interroge tous nos modèles simultanément 
            pour vous donner des réponses complètes et actionnables.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Avec support du dialecte tunisien, NoyaGPT comprend votre langue et votre contexte 
            pour vous accompagner dans toutes vos décisions agricoles.
          </p>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-emerald-500/30 text-center">
            <MessageSquare className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Interface Dialogue</h3>
            <p className="text-gray-300">Principale</p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-teal-500/30 text-center">
            <Zap className="w-10 h-10 text-teal-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Interrogation</h3>
            <p className="text-gray-300">Tous modèles simultanée</p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-cyan-500/30 text-center">
            <MessageSquare className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Réponses</h3>
            <p className="text-gray-300">Claires, concises, actionnables</p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-blue-500/30 text-center">
            <Globe className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Support</h3>
            <p className="text-gray-300">Dialecte tunisien</p>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-emerald-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Conseil Universel</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Réponses à toutes vos questions agricoles</li>
                <li>• Synthèse de tous les modèles IA</li>
                <li>• Conseils personnalisés et contextualisés</li>
                <li>• Support multilingue (français/arabe/dialecte)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligence Intégrée</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Accès à toute l'expertise AgroNoya</li>
                <li>• Réponses instantanées 24/7</li>
                <li>• Apprentissage continu de vos besoins</li>
                <li>• Interface conversationnelle naturelle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoyaGPTPage;

