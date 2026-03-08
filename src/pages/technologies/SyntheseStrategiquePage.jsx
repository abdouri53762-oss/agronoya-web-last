import React from 'react';
import { ArrowLeft, Layers, FileText, Calculator, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SyntheseStrategiquePage = () => {
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
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 mb-6">
              <Layers className="w-12 h-12 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Synthèse <span className="text-purple-400">Stratégique</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Préparer le terrain pour l'Intelligence Artificielle
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Phase 3 : La Synthèse Stratégique</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            L'objectif de cette phase finale n'est pas de vérifier ou de nettoyer, mais de construire une vision d'ensemble. 
            Nous avons des données validées (Phase 1) et des tendances claires (Phase 2). Il est maintenant temps de les assembler 
            pour créer une image complète et multidimensionnelle de la réalité de votre exploitation.
          </p>
          <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 border border-purple-500/20">
            <p className="text-purple-300 font-semibold text-lg">
              Un dossier parfait pour la prise de décision par l'Intelligence Artificielle.
            </p>
          </div>
        </div>

        {/* Three Actions */}
        <div className="space-y-8 mb-12">
          {/* Action 1 */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-purple-500/30">
            <div className="flex items-center mb-6">
              <Layers className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">1. La Fusion des Données</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Ce que nous faisons :</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Notre système agit comme un point de convergence. Il fusionne les différentes sources d'informations, 
                  jusqu'ici traitées en parallèle. Concrètement, il connecte :
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    La "voix du sol" (capteurs d'humidité et de nutriments)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Le "regard du ciel" (analyses satellite et drone)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Pourquoi c'est crucial :</h4>
                <p className="text-gray-300 leading-relaxed">
                  Une décision d'irrigation ne doit pas se baser uniquement sur la sécheresse du sol. Elle doit aussi prendre en compte 
                  la manière dont la plante réagit à cette sécheresse. En fusionnant ces perspectives, nous obtenons une compréhension 
                  beaucoup plus profonde et holistique de la situation.
                </p>
                <div className="mt-4 p-4 bg-purple-900/30 rounded-lg">
                  <p className="text-purple-200 text-sm">
                    <strong>Résultat :</strong> Nous lions la cause (l'état du sol) à l'effet (la santé de vos plantes).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action 2 */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-cyan-500/30">
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">2. La Création du Dossier Unifié</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Ce que nous faisons :</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Pour chaque parcelle de votre exploitation, le système crée et met à jour en continu un "dossier numérique unifié" 
                  qui rassemble de manière structurée :
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    Les données fusionnées de la première étape
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    Les caractéristiques de la parcelle (type de sol)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    Les informations sur la culture en place
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    L'historique des interventions
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Pourquoi c'est crucial :</h4>
                <p className="text-gray-300 leading-relaxed">
                  L'intelligence artificielle est extrêmement performante, mais elle est plus efficace lorsqu'on lui présente l'information 
                  de manière claire. Au lieu de lui demander de chercher des données éparpillées, nous lui fournissons un rapport complet 
                  et organisé.
                </p>
                <div className="mt-4 p-4 bg-cyan-900/30 rounded-lg">
                  <p className="text-cyan-200 text-sm">
                    <strong>Résultat :</strong> Processus de décision quasi instantané pour l'IA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action 3 */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-blue-500/30">
            <div className="flex items-center mb-6">
              <Calculator className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">3. L'Enrichissement par le Calcul</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Ce que nous faisons :</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Notre système ne se contente pas de rassembler les données ; il les enrichit en pré-calculant des indicateurs 
                  de performance clés.
                </p>
                <div className="p-4 bg-blue-900/30 rounded-lg">
                  <p className="text-blue-200 text-sm">
                    <strong>Exemple :</strong> Au lieu de simplement fournir la date de plantation et la date actuelle, 
                    le système calcule et présente directement le stade de croissance de la culture en jours ou en degrés-jours accumulés.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Pourquoi c'est crucial :</h4>
                <p className="text-gray-300 leading-relaxed">
                  Cette étape transforme les données brutes en informations à plus haute valeur ajoutée. Nous fournissons à l'IA 
                  non seulement des mesures, mais aussi des indicateurs déjà porteurs de sens. Cela affine encore la qualité de l'analyse 
                  et permet des recommandations encore plus précises et adaptées au cycle de vie de la culture.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Result */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Résultat Final : Rapport Stratégique Complet</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            À l'issue de cette troisième phase, l'intelligence artificielle ne reçoit pas un simple flux de données. 
            Elle reçoit, pour chaque parcelle, un rapport stratégique complet, unifié et enrichi. C'est sur la base de cette synthèse 
            de très haute qualité qu'elle peut enfin opérer, comparant la situation actuelle à des milliers de scénarios pour formuler 
            la recommandation la plus juste, la plus efficace et la plus rentable pour vous.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-purple-900/30 rounded-xl">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-400 mb-1">Instantané</div>
              <p className="text-gray-300 text-sm">Décision IA</p>
            </div>
            <div className="text-center p-6 bg-cyan-900/30 rounded-xl">
              <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyan-400 mb-1">Unifié</div>
              <p className="text-gray-300 text-sm">Dossier complet</p>
            </div>
            <div className="text-center p-6 bg-blue-900/30 rounded-xl">
              <Calculator className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-400 mb-1">Enrichi</div>
              <p className="text-gray-300 text-sm">Indicateurs clés</p>
            </div>
            <div className="text-center p-6 bg-indigo-900/30 rounded-xl">
              <Layers className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-indigo-400 mb-1">Optimal</div>
              <p className="text-gray-300 text-sm">Recommandations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyntheseStrategiquePage;

