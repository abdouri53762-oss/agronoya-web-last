import React from 'react';
import { ArrowLeft, Brain, Microscope, Satellite, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MoteursAnalysePage = () => {
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
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
              <Brain className="w-12 h-12 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Moteurs d'<span className="text-purple-400">Analyse</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Spécialistes du diagnostic technique - Les scientifiques de l'IA
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
            Nos moteurs d'analyse sont des IA spécialisées, chacune experte dans son domaine. 
            Ils analysent avec la précision d'un laboratoire et la rapidité du numérique pour fournir des diagnostics techniques de haute précision.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ces scientifiques virtuels travaillent en permanence pour détecter, analyser et diagnostiquer 
            tous les aspects techniques de votre exploitation agricole.
          </p>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-purple-500/30 text-center">
            <Microscope className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">NoyaSol</h3>
            <p className="text-gray-300">Analyse chimie sol et carences nutriments</p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-pink-500/30 text-center">
            <Leaf className="w-10 h-10 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">NoyaDiag</h3>
            <p className="text-gray-300">Détection signatures visuelles maladies</p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6 border border-red-500/30 text-center">
            <Satellite className="w-10 h-10 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">NoyaSat</h3>
            <p className="text-gray-300">Traitement images satellites stress/anomalies</p>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Diagnostic Technique</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Analyse chimique complète du sol</li>
                <li>• Détection précoce des maladies</li>
                <li>• Surveillance satellite continue</li>
                <li>• Rapports techniques détaillés</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Précision Scientifique</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Précision de laboratoire</li>
                <li>• Analyse temps réel</li>
                <li>• Expertise spécialisée</li>
                <li>• Surveillance 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoteursAnalysePage;

