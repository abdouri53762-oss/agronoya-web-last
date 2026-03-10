import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Monitor, 
  BarChart3, 
  Settings, 
  Users, 
  TrendingUp,
  Database,
  Activity,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  Star,
  Target,
  Layers,
  Gauge
} from 'lucide-react';

const DashboardPrincipalAgroNoyaPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Agrégation Intelligente des Données",
      description: "Centralisation automatique de toutes les informations de votre exploitation : capteurs IoT, données satellites, historiques météo, et analyses terrain.",
      details: [
        "Fusion temps réel de 15+ sources de données",
        "Algorithmes de corrélation avancés",
        "Détection automatique des anomalies",
        "Archivage sécurisé sur 5 ans"
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Planification Stratégique Avancée",
      description: "Outils de planification basés sur l'IA pour optimiser vos cycles de culture, rotations, et investissements sur le long terme.",
      details: [
        "Modèles prédictifs de rendement",
        "Optimisation des rotations culturales",
        "Planification budgétaire intelligente",
        "Scénarios d'investissement comparatifs"
      ]
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Monitoring des Performances",
      description: "Suivi en temps réel des KPIs agricoles avec alertes intelligentes et recommandations d'amélioration continue.",
      details: [
        "Tableaux de bord personnalisables",
        "Alertes prédictives intelligentes",
        "Benchmarking avec exploitations similaires",
        "Rapports automatisés hebdomadaires"
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Interface Gestionnaire Intuitive",
      description: "Interface conçue pour les gestionnaires d'exploitation avec workflows optimisés et prise de décision assistée par IA.",
      details: [
        "Workflows de validation simplifiés",
        "Assistant décisionnel intégré",
        "Gestion des équipes et permissions",
        "Intégration comptabilité agricole"
      ]
    }
  ];

  const technicalSpecs = [
    {
      category: "Architecture Technique",
      specs: [
        "Frontend React 18 avec TypeScript",
        "Backend Node.js + Supabase",
        "Base de données PostgreSQL distribuée",
        "API REST + WebSocket temps réel"
      ]
    },
    {
      category: "Sécurité & Conformité",
      specs: [
        "Chiffrement AES-256 bout en bout",
        "Authentification multi-facteurs",
        "Conformité RGPD intégrée",
        "Sauvegardes automatiques quotidiennes"
      ]
    },
    {
      category: "Performance & Scalabilité",
      specs: [
        "Temps de réponse < 200ms",
        "Support jusqu'à 10,000 capteurs",
        "Disponibilité 99.9% garantie",
        "Auto-scaling automatique"
      ]
    }
  ];

  const useCases = [
    {
      title: "Exploitation Céréalière 500ha",
      description: "Gestion centralisée de 3 parcelles avec 150 capteurs IoT",
      results: [
        "+23% d'efficacité opérationnelle",
        "-15% de coûts de gestion",
        "Réduction 40% temps administratif"
      ]
    },
    {
      title: "Coopérative Agricole 15 Membres",
      description: "Coordination multi-exploitations avec partage de ressources",
      results: [
        "Mutualisation 60% des équipements",
        "+18% de marge collective",
        "Harmonisation des pratiques"
      ]
    },
    {
      title: "Ferme Maraîchère Bio 50ha",
      description: "Traçabilité complète et certification biologique automatisée",
      results: [
        "Certification bio simplifiée",
        "+25% de prix de vente",
        "Traçabilité 100% automatique"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <button
            onClick={() => navigate('/technologies')}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux Technologies
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl mb-8">
              <Monitor className="w-10 h-10 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Dashboard Principal
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                AgroNoya
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Hub de contrôle analytique avec vision 360° de votre exploitation. 
              L'intelligence artificielle au service de la gestion agricole moderne.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full">
                Vision 360°
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full">
                IA Intégrée
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full">
                Temps Réel
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fonctionnalités Avancées
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez les capacités qui font du Dashboard Principal AgroNoya 
            l'outil de gestion le plus avancé du marché agricole.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-50">{feature.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Spécifications Techniques
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSpecs.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">{section.category}</h4>
                <ul className="space-y-2">
                  {section.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Cas d'Usage Réels
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-3">{useCase.title}</h4>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-green-400">
                      <Target className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 dark:bg-slate-900 rounded-2xl p-12 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prêt à Révolutionner Votre Gestion Agricole ?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez comment le Dashboard Principal AgroNoya peut transformer 
            votre exploitation en entreprise agricole intelligente et rentable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Demander une Démonstration
            </button>
            <button 
              onClick={() => navigate('/pricing')}
              className="px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Voir les Tarifs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPrincipalAgroNoyaPage;

