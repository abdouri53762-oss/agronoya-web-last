import React from 'react';
import { ArrowLeft, Shield, CheckCircle, Clock, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ValidationDonneesPage = () => {
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
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              <Shield className="w-12 h-12 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Protocole de <span className="text-blue-400">Validation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Notre fondation de confiance absolue dans chaque information
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Phase 1 : Le Protocole de Validation</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Chaque mesure envoyée par un capteur est soumise à un protocole de validation strict avant même d'être acceptée dans notre système. 
            Ce n'est pas un simple filtre ; c'est un processus rigoureux qui garantit l'intégrité de l'information.
          </p>
          <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 border border-blue-500/20">
            <p className="text-blue-300 font-semibold text-lg">
              Si une donnée ne répond pas à 100% de nos critères, elle est immédiatement et définitivement rejetée.
            </p>
          </div>
        </div>

        {/* Four Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Authenticité */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-blue-500/30">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">1. Authenticité de la Source</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Ce que nous vérifions :</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Nous confirmons que chaque information provient d'un capteur spécifique, identifié, autorisé et activement assigné à l'une de vos parcelles. 
                  Chaque appareil de notre réseau a une signature numérique unique.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Pourquoi c'est crucial :</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ce contrôle garantit que les données sont correctement localisées. Les décisions pour votre parcelle "Olivier 1" 
                  sont basées sur les données du capteur de cette même parcelle, et non sur celles de la parcelle voisine.
                </p>
              </div>
            </div>
          </div>

          {/* Intégrité */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-purple-500/30">
            <div className="flex items-center mb-6">
              <Database className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">2. Intégrité de l'Information</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Ce que nous vérifions :</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Nous nous assurons que le "message" contenant la donnée est complet et structuré correctement. 
                  Il doit contenir toutes les composantes requises (valeur, unité, horodatage) et respecter un format précis.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Pourquoi c'est crucial :</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Une information incomplète est une information inutilisable. Une donnée mal formée pourrait causer des erreurs 
                  en cascade dans toute la chaîne d'analyse.
                </p>
              </div>
            </div>
          </div>

          {/* Cohérence */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-green-500/30">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">3. Cohérence Agronomique</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-2">Ce que nous vérifions :</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Nous analysons la valeur de la mesure pour déterminer si elle est logique et physiquement possible 
                  dans le contexte de votre exploitation. Notre système connaît les limites réalistes pour chaque type de mesure.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-2">Pourquoi c'est crucial :</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  C'est notre principale protection contre les dysfonctionnements matériels. En rejetant les données incohérentes, 
                  nous garantissons la justesse de nos diagnostics.
                </p>
              </div>
            </div>
          </div>

          {/* Pertinence Temporelle */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-orange-500/30">
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-orange-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">4. Pertinence Temporelle</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-orange-300 mb-2">Ce que nous vérifions :</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Nous contrôlons l'horodatage de chaque mesure pour nous assurer qu'elle est récente et pertinente 
                  pour la prise de décision actuelle.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-300 mb-2">Pourquoi c'est crucial :</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Les conditions agricoles peuvent évoluer en quelques heures. Une décision d'irrigation ne peut pas être basée 
                  sur une mesure d'humidité datant d'hier matin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Résultat : Une Fondation de Confiance</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            En appliquant rigoureusement ces quatre principes à chaque point de donnée entrant, nous nous assurons que seules 
            les informations authentiques, intègres, cohérentes et actuelles alimentent nos modèles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <p className="text-gray-300">Données validées</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">0</div>
              <p className="text-gray-300">Erreur tolérée</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">4</div>
              <p className="text-gray-300">Contrôles stricts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <p className="text-gray-300">Surveillance continue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationDonneesPage;

