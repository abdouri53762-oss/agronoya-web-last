import React from 'react';
import { ArrowLeft, TrendingUp, Activity, BarChart3, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AnalyseContextuellePage = () => {
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
              <TrendingUp className="w-12 h-12 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Analyse <span className="text-green-400">Contextuelle</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Révéler la signification réelle des données
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Phase 2 : L'Analyse Contextuelle</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            L'objectif de cette phase est de transformer une donnée validée en une information pertinente et intelligente. 
            Notre système ne regarde jamais une mesure de manière isolée. Il l'analyse systématiquement par rapport à son historique 
            pour en comprendre le comportement et en extraire la tendance de fond.
          </p>
          <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 border border-green-500/20">
            <p className="text-green-300 font-semibold text-lg">
              Une mesure unique est un simple instantané. Une série de mesures est le début d'une histoire.
            </p>
          </div>
        </div>

        {/* Three Steps */}
        <div className="space-y-8 mb-12">
          {/* Step 1 */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-green-500/30">
            <div className="flex items-center mb-6">
              <Activity className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">1. La Mise en Contexte Systématique</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-3">Ce que nous faisons :</h4>
                <p className="text-gray-300 leading-relaxed">
                  Chaque nouvelle donnée qui a passé la phase 1 est instantanément confrontée à la série des mesures précédentes 
                  enregistrées par le même capteur (par exemple, les données des dernières 24 heures).
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-3">Pourquoi c'est crucial :</h4>
                <p className="text-gray-300 leading-relaxed">
                  Cette mise en contexte est la base de toute analyse intelligente ; elle nous permet de savoir si une nouvelle valeur 
                  s'inscrit dans une continuité logique ou si elle représente une rupture.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-blue-500/30">
            <div className="flex items-center mb-6">
              <BarChart3 className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">2. La Détection d'Anomalies Comportementales</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Ce que nous faisons :</h4>
                <p className="text-gray-300 leading-relaxed">
                  En se basant sur l'historique récent, le système apprend le "comportement normal" de chaque point de mesure. 
                  Il peut alors identifier les données qui, bien que logiques, sont statistiquement improbables.
                </p>
                <div className="mt-4 p-4 bg-blue-900/30 rounded-lg">
                  <p className="text-blue-200 text-sm italic">
                    Exemple : Une chute brutale de l'humidité du sol de 10 points suivie d'un retour à la normale une minute plus tard 
                    est probablement une erreur de lecture passagère du capteur.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Pourquoi c'est crucial :</h4>
                <p className="text-gray-300 leading-relaxed">
                  Cette analyse comportementale permet de distinguer un véritable événement agricole d'un simple "bruit" technique. 
                  En identifiant et en marquant ces anomalies, nous évitons que le système ne tire des conclusions hâtives ou 
                  ne déclenche de fausses alertes.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-purple-500/30">
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">3. L'Identification de la Tendance de Fond</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Ce que nous faisons :</h4>
                <p className="text-gray-300 leading-relaxed">
                  Les conditions agronomiques (comme l'humidité du sol ou la température) n'évoluent généralement pas de manière saccadée, 
                  mais de façon progressive. Notre système calcule donc en continu une "valeur de tendance" qui lisse les micro-variations 
                  sans importance pour ne conserver que l'évolution significative.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Pourquoi c'est crucial :</h4>
                <p className="text-gray-300 leading-relaxed">
                  Les décisions importantes, comme le déclenchement d'un cycle d'irrigation, ne doivent pas être prises sur la base 
                  d'une fluctuation passagère, mais sur une tendance confirmée. En travaillant sur cette courbe de tendance stable, 
                  nous nous assurons que nos actions sont des réponses mesurées à des changements réels et durables.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-green-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Résultat : Information Enrichie et Intelligente</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            À l'issue de cette deuxième phase, nous n'avons plus une simple liste de données validées. Nous disposons d'un flux 
            d'informations enrichi et intelligent. Chaque mesure est accompagnée de son contexte historique, d'un indicateur de 
            fiabilité comportementale et d'une tendance de fond.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-900/30 rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">Contexte</div>
              <p className="text-gray-300">Historique 24h analysé</p>
            </div>
            <div className="text-center p-6 bg-blue-900/30 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">Fiabilité</div>
              <p className="text-gray-300">Anomalies détectées</p>
            </div>
            <div className="text-center p-6 bg-purple-900/30 rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">Tendance</div>
              <p className="text-gray-300">Évolution significative</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyseContextuellePage;

