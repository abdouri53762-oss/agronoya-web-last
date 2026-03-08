import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Zap, 
  Brain, 
  Droplets, 
  Gauge, 
  Activity,
  Settings,
  Target,
  TrendingUp,
  Shield,
  CheckCircle,
  Star,
  Clock,
  BarChart3,
  AlertTriangle,
  Cpu,
  Database,
  Wifi,
  Plane
} from 'lucide-react';

const AutomatisationIntelligentePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const automationLevels = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Décisionnelle",
      subtitle: "Cerveau Central Intelligent",
      description: "L'intelligence artificielle NoyaIrrigation analyse en temps réel tous les paramètres pour prendre les décisions d'arrosage optimales sans intervention humaine.",
      features: [
        "Analyse prédictive multi-paramètres",
        "Apprentissage automatique continu",
        "Adaptation aux patterns saisonniers",
        "Optimisation énergétique intégrée"
      ],
      metrics: [
        "Précision décisions: 98.5%",
        "Réduction erreurs: -92%",
        "Économie d'eau: jusqu'à 40%",
        "Temps de réaction: < 30 secondes"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Exécution Automatique",
      subtitle: "Action Terrain Immédiate",
      description: "Une fois la décision prise par l'IA, l'exécution est instantanée et précise grâce à notre réseau d'actionneurs intelligents connectés.",
      features: [
        "Activation vannes/pompes automatique",
        "Dosage précis au millilitre",
        "Synchronisation multi-zones",
        "Sécurités anti-panne intégrées"
      ],
      metrics: [
        "Temps d'exécution: < 5 secondes",
        "Précision dosage: ±2%",
        "Fiabilité système: 99.8%",
        "Couverture réseau: 100%"
      ]
    }
  ];

  const intelligentFeatures = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Monitoring Temps Réel",
      description: "Surveillance continue de tous les paramètres critiques avec alertes prédictives et ajustements automatiques.",
      capabilities: [
        "Capteurs multi-paramètres IoT",
        "Analyse spectrale des cultures",
        "Détection anomalies instantanée",
        "Prévision besoins 7 jours"
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Précision Millimétrique",
      description: "Chaque goutte d'eau est distribuée avec une précision chirurgicale selon les besoins spécifiques de chaque zone.",
      capabilities: [
        "Cartographie précise des besoins",
        "Micro-dosage intelligent",
        "Adaptation topographique",
        "Optimisation par micro-zone"
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Apprentissage Continu",
      description: "L'IA s'améliore constamment en analysant les résultats et en affinant ses modèles prédictifs.",
      capabilities: [
        "Machine Learning avancé",
        "Analyse des corrélations",
        "Optimisation des patterns",
        "Adaptation aux changements"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurités Intégrées",
      description: "Systèmes de sécurité multicouches pour prévenir les dysfonctionnements et protéger vos cultures.",
      capabilities: [
        "Détection pannes automatique",
        "Mode dégradé sécurisé",
        "Alertes escalade intelligente",
        "Backup systèmes critiques"
      ]
    }
  ];

  const technicalArchitecture = [
    {
      layer: "Couche Intelligence",
      description: "Moteurs IA et algorithmes décisionnels",
      technologies: [
        "TensorFlow/PyTorch IA",
        "Algorithmes prédictifs propriétaires",
        "Machine Learning temps réel",
        "Modèles météo intégrés"
      ]
    },
    {
      layer: "Couche Contrôle",
      description: "Orchestration et coordination des actions",
      technologies: [
        "Node.js + Express API",
        "WebSocket temps réel",
        "MQTT/LoRaWAN protocols",
        "Edge computing distribué"
      ]
    },
    {
      layer: "Couche Exécution",
      description: "Actionneurs et équipements terrain",
      technologies: [
        "Vannes électroniques intelligentes",
        "Pompes à vitesse variable",
        "Capteurs IoT multi-paramètres",
        "Stations météo locales"
      ]
    },
    {
      layer: "Couche Sécurité",
      description: "Protection et surveillance système",
      technologies: [
        "Monitoring 24/7 automatique",
        "Systèmes redondants",
        "Alertes multi-canaux",
        "Maintenance prédictive"
      ]
    }
  ];

  const performanceMetrics = [
    {
      category: "Efficacité Hydrique",
      metrics: [
        { label: "Économie d'eau moyenne", value: "35-40%", trend: "↗️" },
        { label: "Précision dosage", value: "±2%", trend: "🎯" },
        { label: "Réduction gaspillage", value: "-85%", trend: "↘️" },
        { label: "Optimisation cycles", value: "+45%", trend: "↗️" }
      ]
    },
    {
      category: "Performance Opérationnelle",
      metrics: [
        { label: "Temps de réaction", value: "< 30s", trend: "⚡" },
        { label: "Disponibilité système", value: "99.8%", trend: "🔒" },
        { label: "Précision décisions", value: "98.5%", trend: "🧠" },
        { label: "Réduction interventions", value: "-90%", trend: "↘️" }
      ]
    }
  ];

  const realWorldCases = [
    {
      farm: "Ferme Agrumes Nabeul",
      area: "200 hectares",
      challenge: "Irrigation manuelle inefficace, stress hydrique récurrent",
      solution: "Automatisation complète IA + 120 capteurs + 80 vannes",
      timeline: "Déploiement: 3 semaines",
      results: [
        "Économie d'eau: -38%",
        "Augmentation rendement: +32%",
        "Réduction main d'œuvre: -75%",
        "ROI atteint: 6 mois"
      ]
    },
    {
      farm: "Coopérative Maraîchage Bizerte",
      area: "85 hectares",
      challenge: "Coordination difficile, pertes importantes, coûts élevés",
      solution: "IA centralisée + automatisation multi-parcelles",
      timeline: "Déploiement: 4 semaines",
      results: [
        "Coordination parfaite: 100%",
        "Réduction pertes: -65%",
        "Économies annuelles: 45,000 TND",
        "Satisfaction: 96%"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <button
            onClick={() => navigate('/technologies')}
            className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux Technologies
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-8">
              <Zap className="w-10 h-10 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Automatisation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Intelligente
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              De la décision à l'action. L'IA orchestre l'arrosage comme un cerveau central, 
              garantissant que chaque goutte d'eau est utilisée efficacement.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full">
                IA Décisionnelle
              </span>
              <span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full">
                Action Immédiate
              </span>
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full">
                Zéro Intervention
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Automation Levels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Deux Niveaux d'Automatisation
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            De l'analyse intelligente à l'exécution terrain, découvrez comment l'IA 
            révolutionne la gestion de l'irrigation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {automationLevels.map((level, index) => (
            <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-6">
                  {level.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">{level.title}</h3>
                  <p className="text-orange-400 font-medium">{level.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{level.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Fonctionnalités</h4>
                  <ul className="space-y-2">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Métriques</h4>
                  <ul className="space-y-2">
                    {level.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Intelligent Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Fonctionnalités Intelligentes Avancées
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {intelligentFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-50">{feature.title}</h4>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                      <Target className="w-3 h-3 text-orange-400 mr-2 flex-shrink-0" />
                      {capability}
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
            Architecture Technique Multicouche
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalArchitecture.map((layer, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-orange-400 mb-2">{layer.layer}</h4>
                <p className="text-gray-400 text-sm mb-4">{layer.description}</p>
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

        {/* Performance Metrics */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Métriques de Performance Vérifiées
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {performanceMetrics.map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <h4 className="text-xl font-bold text-white mb-6 text-center">{category.category}</h4>
                <div className="grid grid-cols-2 gap-4">
                  {category.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-orange-400 mb-1">{metric.value}</div>
                      <div className="text-gray-300 text-sm mb-1">{metric.label}</div>
                      <div className="text-lg">{metric.trend}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real World Cases */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Cas d'Usage Terrain Documentés
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {realWorldCases.map((caseStudy, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">{caseStudy.farm}</h4>
                  <p className="text-orange-400 font-medium mb-2">{caseStudy.area}</p>
                  <p className="text-gray-400 mb-3">{caseStudy.challenge}</p>
                  <p className="text-green-400 font-medium mb-2">{caseStudy.solution}</p>
                  <p className="text-blue-400 text-sm">{caseStudy.timeline}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="bg-slate-700/30 rounded-lg p-3">
                      <p className="text-white font-medium text-sm">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Components Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Composants Détaillés du Système
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
            Découvrez en profondeur chaque composant de notre système d'automatisation intelligente
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Analyse Données Temps Réel */}
            <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-gray-900 dark:text-slate-50" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Analyse Données Temps Réel</h3>
              <p className="text-gray-300 mb-4">
                Collecte continue multi-sources via capteurs IoT, imagerie satellite, données météo 
                et fusion intelligente pour une vision complète.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Capteurs IoT multi-paramètres
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Images satellites NDVI/NDWI
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Données météo hyperlocales
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Fusion intelligente toutes sources
                </li>
              </ul>
              <button
                onClick={() => navigate('/technologies/analyse-donnees-temps-reel')}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                Voir plus
              </button>
            </div>

            {/* Enrichissement IA (RAG) */}
            <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-gray-900 dark:text-slate-50" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enrichissement IA (RAG)</h3>
              <p className="text-gray-300 mb-4">
                Consultation base connaissances locale avec expertise tunisienne pour des conseils 
                ultra-personnalisés et contextualisés.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Recherche sols région Kairouan
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Variétés locales (Chemlali, maraîchères)
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Seuils stress hydrique critiques
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Agronome expert virtuel permanent
                </li>
              </ul>
              <button
                onClick={() => navigate('/technologies/enrichissement-ia')}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Voir plus
              </button>
            </div>

            {/* Drone Agras - Exécution Précise */}
            <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:border-orange-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Plane className="w-8 h-8 text-gray-900 dark:text-slate-50" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Drone Agras - Exécution Précise</h3>
              <p className="text-gray-300 mb-4">
                Application contrôlée par technicien pilote avec expertise humaine et précision 
                technologique pour des traitements chirurgicaux.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Import carte prescription radiocommande
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Préparation mélange concentration exacte
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Pilotage supervisé précision centimétrique
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Expertise humaine + précision technologique
                </li>
              </ul>
              <button
                onClick={() => navigate('/technologies/drone-agras')}
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
              >
                Voir plus
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 dark:bg-slate-900 rounded-2xl p-12 border border-orange-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Libérez-vous des Contraintes d'Irrigation
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez comment l'Automatisation Intelligente AgroNoya peut transformer 
            votre exploitation en système autonome et ultra-performant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Demander une Démonstration
            </button>
            <button 
              onClick={() => navigate('/pricing')}
              className="px-8 py-3 border border-orange-400 text-orange-400 font-semibold rounded-xl hover:bg-orange-400 hover:text-white transition-all duration-300"
            >
              Voir les Tarifs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatisationIntelligentePage;

