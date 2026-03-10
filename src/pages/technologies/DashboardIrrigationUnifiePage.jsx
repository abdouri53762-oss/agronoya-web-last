import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Droplets, 
  Gauge, 
  Zap, 
  Settings, 
  Activity,
  Thermometer,
  Cloud,
  Smartphone,
  Shield,
  CheckCircle,
  Star,
  Target,
  TrendingUp,
  AlertTriangle,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const DashboardIrrigationUnifiePage = () => {
  const navigate = useNavigate();

  const modes = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Mode Automatique",
      subtitle: "Guidage Intelligent IA",
      description: "L'intelligence artificielle NoyaIrrigation prend les décisions d'arrosage en analysant en temps réel les données de vos capteurs, la météo et l'état de vos cultures.",
      features: [
        "Analyse prédictive des besoins hydriques",
        "Optimisation automatique des cycles",
        "Adaptation aux conditions météo",
        "Apprentissage des patterns de culture"
      ],
      benefits: [
        "Économie d'eau jusqu'à 40%",
        "Réduction stress hydrique 95%",
        "Optimisation rendements +25%",
        "Zéro intervention manuelle"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Mode Manuel",
      subtitle: "Contrôle Assisté Utilisateur",
      description: "Gardez le contrôle total avec l'assistance intelligente de l'IA. Recevez des recommandations expertes tout en conservant la décision finale.",
      features: [
        "Recommandations IA contextualisées",
        "Validation manuelle des actions",
        "Alertes préventives intelligentes",
        "Historique des décisions"
      ],
      benefits: [
        "Flexibilité maximale",
        "Apprentissage progressif",
        "Confiance renforcée",
        "Expertise préservée"
      ]
    }
  ];

  const capabilities = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Centralisation Analyses Temps Réel",
      description: "Hub central pour toutes vos données d'irrigation avec traitement instantané et visualisation avancée.",
      specs: [
        "Fusion 20+ sources de données",
        "Traitement temps réel < 100ms",
        "Alertes prédictives intelligentes",
        "Historique 10 ans accessible"
      ]
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Commande Vannes/Pompes Directe",
      description: "Contrôle direct de votre infrastructure d'irrigation avec sécurités intégrées et monitoring continu.",
      specs: [
        "Protocoles IoT sécurisés",
        "Contrôle individuel/groupé",
        "Sécurités anti-surpression",
        "Monitoring consommation électrique"
      ]
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Monitoring Avancé",
      description: "Surveillance continue de tous les paramètres critiques avec tableaux de bord personnalisables.",
      specs: [
        "Capteurs humidité/température sol",
        "Débitmètres haute précision",
        "Sondes de pression réseau",
        "Stations météo locales"
      ]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Intégration Météo Intelligente",
      description: "Fusion des données météo locales et prévisions pour une irrigation anticipative optimale.",
      specs: [
        "Prévisions hyperlocales 7 jours",
        "Calcul évapotranspiration précis",
        "Adaptation automatique aux pluies",
        "Optimisation selon saisons"
      ]
    }
  ];

  const technicalArchitecture = [
    {
      layer: "Interface Utilisateur",
      technologies: [
        "React 18 + TypeScript",
        "Tailwind CSS responsive",
        "Charts.js visualisations",
        "PWA offline-ready"
      ]
    },
    {
      layer: "Logique Métier",
      technologies: [
        "Node.js + Express API",
        "Algorithmes IA propriétaires",
        "WebSocket temps réel",
        "Système de règles avancé"
      ]
    },
    {
      layer: "Données & IoT",
      technologies: [
        "Supabase PostgreSQL",
        "MQTT/LoRaWAN protocols",
        "Time-series database",
        "Edge computing local"
      ]
    },
    {
      layer: "Infrastructure",
      technologies: [
        "Cloud hybride sécurisé",
        "CDN global optimisé",
        "Monitoring 24/7",
        "Backup automatique"
      ]
    }
  ];

  const realWorldResults = [
    {
      farm: "Ferme Oliviers Sfax",
      area: "120 hectares",
      challenge: "Stress hydrique récurrent, surconsommation eau",
      solution: "Déploiement Dashboard Irrigation + 80 capteurs",
      results: [
        "Réduction consommation eau: -35%",
        "Augmentation rendement: +28%",
        "Économies annuelles: 15,000 TND",
        "ROI atteint en: 8 mois"
      ]
    },
    {
      farm: "Coopérative Maraîchage Kairouan",
      area: "45 hectares",
      challenge: "Gestion manuelle complexe, pertes importantes",
      solution: "Mode automatique IA + formation équipes",
      results: [
        "Automatisation: 90% des cycles",
        "Réduction pertes: -42%",
        "Gain temps gestion: 15h/semaine",
        "Satisfaction agriculteurs: 98%"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-8">
              <Droplets className="w-10 h-10 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Dashboard Irrigation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Unifié
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Poste de pilotage eau avec double modalité : automatique intelligent ou manuel assisté. 
              L'eau devient votre alliée stratégique.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full">
                Double Modalité
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full">
                IA Irrigation
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full">
                Économie d'Eau
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Mode Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Double Modalité de Contrôle
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choisissez votre niveau d'autonomie : laissez l'IA optimiser ou gardez le contrôle 
            avec l'assistance intelligente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {modes.map((mode, index) => (
            <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6">
                  {mode.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">{mode.title}</h3>
                  <p className="text-cyan-400 font-medium">{mode.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{mode.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Fonctionnalités</h4>
                  <ul className="space-y-2">
                    {mode.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Bénéfices</h4>
                  <ul className="space-y-2">
                    {mode.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Capacités Techniques Avancées
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    {capability.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-50">{capability.title}</h4>
                </div>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <ul className="space-y-1">
                  {capability.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                      <Target className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Architecture Technique
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalArchitecture.map((layer, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">{layer.layer}</h4>
                <ul className="space-y-2">
                  {layer.technologies.map((tech, idx) => (
                    <li key={idx} className="text-gray-300 text-sm bg-slate-700/30 rounded-lg px-3 py-2">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Real World Results */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Résultats Terrain Vérifiés
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {realWorldResults.map((result, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">{result.farm}</h4>
                  <p className="text-cyan-400 font-medium mb-2">{result.area}</p>
                  <p className="text-gray-400 mb-4">{result.challenge}</p>
                  <p className="text-green-400 font-medium">{result.solution}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {result.results.map((res, idx) => (
                    <div key={idx} className="bg-slate-700/30 rounded-lg p-3">
                      <p className="text-white font-medium text-sm">{res}</p>
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
            Transformez Votre Gestion de l'Eau
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez les agriculteurs qui ont révolutionné leur irrigation avec 
            le Dashboard Irrigation Unifié AgroNoya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Demander une Démonstration
            </button>
            <button 
              onClick={() => navigate('/pricing')}
              className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Voir les Tarifs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIrrigationUnifiePage;

