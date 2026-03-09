import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Eye,
  Brain,
  Target,
  Zap,
  TrendingUp,
  ArrowRight,
  Satellite,
  Smartphone,
  Database,
  CheckCircle,
  Star,
  Cpu,
} from 'lucide-react';

const Technologies = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [selectedTech, setSelectedTech] = useState(null);

  const cycleSteps = [
    {
      id: 1,
      title: 'Acquérir',
      subtitle: 'Collecte de données multisource',
      description:
        'AgroNoya collecte en continu des données issues des capteurs terrain, de l’imagerie satellite, des drones multispectraux et des observations opérationnelles.',
      icon: <Eye className="w-12 h-12" />,
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Capteurs IoT : humidité, température, pH, salinité, NPK',
        'Imagerie satellite : NDVI, NDWI, SAVI et couches thermiques selon disponibilité',
        'Drones multispectraux : cartographie haute résolution',
        'Feedback terrain : remontées agriculteurs et techniciens',
      ],
      image: '/src/assets/satellite_analysis.jpg',
    },
    {
      id: 2,
      title: 'Valider',
      subtitle: 'Filtration et structuration des flux',
      description:
        'Les données entrantes sont validées, nettoyées et normalisées afin de garantir une base exploitable par les moteurs analytiques.',
      icon: <Brain className="w-12 h-12" />,
      color: 'from-purple-500 to-pink-500',
      details: [
        'Contrôle de cohérence des valeurs capteurs',
        'Détection des anomalies et mesures aberrantes',
        'Nettoyage temps réel des fluctuations non représentatives',
        'Préparation standardisée pour les modèles IA',
      ],
      image: '/src/assets/ai_chatbot.jpg',
    },
    {
      id: 3,
      title: 'Analyser',
      subtitle: 'Moteurs d’inférence agronomique',
      description:
        'Les modèles propriétaires exploitent les données nettoyées pour produire des diagnostics techniques sur le sol, la culture et l’état physiologique des parcelles.',
      icon: <Target className="w-12 h-12" />,
      color: 'from-green-500 to-emerald-500',
      details: [
        'NoyaSol : analyse du sol et des équilibres nutritifs',
        'NoyaDiag : détection de stress, maladies et ravageurs',
        'NoyaSat : interprétation d’images satellites et anomalies spatiales',
        'Croisement des données terrain, météo et imagerie',
      ],
      image: '/src/assets/dashboard_agronoya.png',
    },
    {
      id: 4,
      title: 'Recommander',
      subtitle: 'Restitution décisionnelle contextualisée',
      description:
        'La couche décisionnelle transforme les résultats d’analyse en recommandations actionnables adaptées au contexte agronomique local.',
      icon: <Zap className="w-12 h-12" />,
      color: 'from-orange-500 to-red-500',
      details: [
        'Priorisation des alertes selon criticité',
        'Recommandations irrigation, suivi et intervention',
        'Synthèse compréhensible pour profils techniques et opérationnels',
        'Support conversationnel via NoyaGPT',
      ],
      image: '/src/assets/drone_scanning.jpg',
    },
    {
      id: 5,
      title: 'Piloter',
      subtitle: 'Supervision web et mobile',
      description:
        'Les tableaux de bord et applications mobiles permettent de superviser les indicateurs, suivre les alertes et exécuter les actions recommandées.',
      icon: <Smartphone className="w-12 h-12" />,
      color: 'from-indigo-500 to-purple-500',
      details: [
        'Dashboard principal : vision consolidée de l’exploitation',
        'Dashboard irrigation : support métier dédié à la gestion hydrique',
        'Applications mobiles : continuité bureau/terrain',
        'Modes automatique et manuel assisté',
      ],
      image: '/src/assets/smart_farming_1.jpg',
    },
    {
      id: 6,
      title: 'Optimiser',
      subtitle: 'Performance et amélioration continue',
      description:
        'Les données historisées servent à mesurer les performances techniques, améliorer les modèles et préparer des usages avancés de valorisation durable.',
      icon: <TrendingUp className="w-12 h-12" />,
      color: 'from-yellow-500 to-orange-500',
      details: [
        'Suivi des indicateurs de performance agronomique',
        'Mesure des gains hydriques et opérationnels',
        'Historisation des décisions et des interventions',
        'Ouverture vers carbone, ESG et services connectés',
      ],
      image: '/src/assets/smart_farming_2.jpg',
    },
  ];

  const technologies = [
    {
      id: 1,
      title: 'Collecte de Données Multisource',
      subtitle: 'Infrastructure d’acquisition terrain et distante',
      description:
        'Cette couche assure la remontée continue de données agronomiques depuis les capteurs embarqués, les satellites et les drones.',
      icon: <Satellite className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      image: '/src/assets/satellite_analysis.jpg',
      details: {
        overview:
          'La qualité d’un système d’aide à la décision dépend de la diversité, de la fréquence et de la fiabilité des signaux collectés. AgroNoya combine plusieurs sources de mesure pour couvrir le sol, la culture et l’environnement.',
        components: [
          {
            name: 'Capteurs IoT',
            description:
              'Instrumentation terrain pour acquisition continue des paramètres critiques.',
            specs: [
              'Mesures : humidité, température, pH, salinité, NPK',
              'Transmission via ESP32, GSM ou LoRa selon le scénario de déploiement',
              'Fréquence d’échantillonnage configurable',
              'Intégration dans une logique de supervision continue',
            ],
          },
          {
            name: 'Imagerie Satellite',
            description:
              'Observation périodique des parcelles à l’échelle macroscopique.',
            specs: [
              'Indices : NDVI, NDWI, SAVI et thermique selon disponibilité',
              'Sources exploitables : Sentinel, Landsat, PlanetScope',
              'Détection des variations intra-parcellaires',
              'Suivi des stress hydriques et anomalies de développement',
            ],
          },
          {
            name: 'Drones Multispectraux',
            description:
              'Acquisition haute résolution pour analyse localisée et cartographie de précision.',
            specs: [
              'Capture RGB et multispectrale',
              'Résolution centimétrique selon altitude de vol',
              'Diagnostic précis sur zones ciblées',
              'Complément opérationnel aux observations satellites',
            ],
          },
        ],
        impact:
          'Cette couche améliore la couverture de mesure, réduit les angles morts et fournit une base robuste aux modules analytiques.',
      },
    },
    {
      id: 2,
      title: 'Moteur de Filtration de Données',
      subtitle: 'Validation, nettoyage et normalisation',
      description:
        'Les flux bruts sont contrôlés et structurés avant toute exploitation analytique afin de garantir une entrée cohérente pour les modèles.',
      icon: <Database className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      image: '/src/assets/satellite_analysis.jpg',
      details: {
        overview:
          'Cette couche intermédiaire isole les erreurs de mesure, réduit le bruit et homogénéise les formats. Elle joue un rôle clé dans la stabilité des diagnostics et la fiabilité des recommandations.',
        components: [
          {
            name: 'Validation Instantanée',
            description:
              'Détection automatique des mesures impossibles, absentes ou hors plage.',
            specs: [
              'Contrôle de cohérence sur les valeurs capteurs',
              'Détection des formats incomplets ou erronés',
              'Rejet des valeurs non crédibles',
              'Qualification des données dès l’ingestion',
            ],
          },
          {
            name: 'Nettoyage Temps Réel',
            description:
              'Réduction des fluctuations non représentatives avant interprétation.',
            specs: [
              'Lissage des séries temporelles',
              'Suppression des pics aberrants',
              'Stabilisation du signal',
              'Préservation des variations réellement agronomiques',
            ],
          },
          {
            name: 'Préparation pour l’IA',
            description:
              'Structuration des données pour exploitation par les moteurs d’analyse.',
            specs: [
              'Normalisation des formats d’entrée',
              'Historisation cohérente des flux',
              'Préparation des jeux de données pour inférence',
              'Interopérabilité avec dashboards et modules métier',
            ],
          },
          {
            name: 'Architecture Sécurisée',
            description:
              'Encadrement des flux de données en transit et au repos.',
            specs: [
              'Chiffrement SSL/TLS des échanges',
              'Protection des secrets et accès techniques',
              'Sauvegarde et restauration des données',
              'Traçabilité des événements critiques',
            ],
          },
        ],
        impact:
          'Cette couche réduit les faux signaux, améliore la qualité des analyses et sécurise l’exploitation des données à l’échelle de la plateforme.',
      },
    },
    {
      id: 3,
      title: 'Intelligence Artificielle Propriétaire',
      subtitle: 'Moteurs d’analyse et d’assistance décisionnelle',
      description:
        'Les modèles spécialisés transforment les flux agronomiques en diagnostics, alertes et recommandations contextualisées.',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      image: '/src/assets/ai_vortex.gif',
      isGif: true,
      details: {
        overview:
          'L’architecture IA s’appuie sur des moteurs spécialisés par fonction agronomique, complétés par une couche conversationnelle destinée à la restitution métier.',
        components: [
          {
            name: 'Moteurs d’Analyse',
            description:
              'Blocs spécialisés dans le traitement technique des signaux agronomiques.',
            specs: [
              'NoyaSol : lecture des paramètres du sol et déséquilibres nutritifs',
              'NoyaDiag : détection de stress, maladies et ravageurs',
              'NoyaSat : interprétation d’images satellites et d’anomalies spatiales',
              'Fusion multi-source pour enrichissement du diagnostic',
            ],
          },
          {
            name: 'Moteurs de Dialogue',
            description:
              'Couche de restitution conçue pour traduire les analyses en actions compréhensibles.',
            specs: [
              'Synthèse multi-factorielle contextualisée',
              'Priorisation des alertes selon criticité',
              'Recommandations orientées action',
              'Réduction de la complexité technique côté utilisateur final',
            ],
          },
          {
            name: 'NoyaGPT',
            description:
              'Interface conversationnelle d’accès aux moteurs de la plateforme.',
            specs: [
              'Point d’entrée pour interroger les modules AgroNoya',
              'Synthèse des sorties de plusieurs moteurs',
              'Réponses claires, courtes et exploitables',
              'Adaptation linguistique au contexte d’usage',
            ],
          },
        ],
        impact:
          'Cette couche réduit le temps d’interprétation, améliore la réactivité opérationnelle et rend l’expertise agronomique plus accessible.',
      },
    },
    {
      id: 4,
      title: 'Écosystème de Pilotage Intégré',
      subtitle: 'Supervision centralisée et continuité terrain',
      description:
        'Les interfaces web et mobiles centralisent la visualisation, l’analyse et l’exécution des actions recommandées.',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      image: '/src/assets/dashboard_agronoya.png',
      details: {
        overview:
          'La couche de pilotage permet de passer rapidement de l’observation à l’action via des interfaces synchronisées conçues pour les usages bureau et terrain.',
        components: [
          {
            name: 'Dashboard Principal AgroNoya',
            description:
              'Vue consolidée des parcelles, alertes, indicateurs et états techniques.',
            specs: [
              'Vision centralisée des exploitations suivies',
              'Synthèse de l’état des cultures et des signaux clés',
              'Historique des événements et observations',
              'Support à la planification des actions',
            ],
          },
          {
            name: 'Dashboard Irrigation Unifié',
            description:
              'Interface métier dédiée à l’aide au pilotage hydrique.',
            specs: [
              'Visualisation des besoins et niveaux de criticité',
              'Mode automatique et mode manuel assisté',
              'Support à la décision d’irrigation',
              'Traçabilité des actions exécutées',
            ],
          },
          {
            name: 'Applications Mobiles',
            description:
              'Accès terrain aux fonctions essentielles de supervision et d’intervention.',
            specs: [
              'Consultation rapide des alertes et états de parcelle',
              'Saisie d’observations et retours terrain',
              'Continuité bureau/terrain',
              'Réactivité renforcée pour les équipes opérationnelles',
            ],
          },
        ],
        impact:
          'Cette couche réduit la fragmentation des outils et améliore la coordination entre supervision, décision et exécution.',
      },
    },
    {
      id: 5,
      title: 'Automatisation Intelligente',
      subtitle: 'Passage de la recommandation à l’action',
      description:
        'Les modules d’automatisation organisent l’exécution opérationnelle des décisions avec contrôle humain et traçabilité.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      image: '/src/assets/drone_scanning.jpg',
      details: {
        overview:
          'Le système ne s’arrête pas à l’analyse. Il structure aussi le passage à l’action, notamment pour l’irrigation et les interventions terrain assistées.',
        components: [
          {
            name: 'Analyse Données Temps Réel',
            description:
              'Exploitation continue des signaux agronomiques pour ajuster les décisions opérationnelles.',
            specs: [
              'Lecture continue des capteurs et variables météo',
              'Croisement avec l’état végétatif issu de l’imagerie',
              'Détection des écarts par rapport aux seuils attendus',
              'Mise à jour des priorités d’intervention',
            ],
          },
          {
            name: 'Enrichissement IA (RAG)',
            description:
              'Appui des modèles par une base de connaissance contextualisée.',
            specs: [
              'Recherche de références adaptées au contexte agronomique',
              'Prise en compte des conditions locales et des variétés',
              'Support à l’explication des recommandations',
              'Amélioration de la pertinence métier des sorties',
            ],
          },
          {
            name: 'Drone Agras - Exécution Précise',
            description:
              'Support aux opérations ciblées nécessitant une application contrôlée.',
            specs: [
              'Import de cartes de prescription ou zones d’intervention',
              'Préparation encadrée des opérations',
              'Exécution sous supervision humaine',
              'Traçabilité des paramètres et missions réalisées',
            ],
          },
        ],
        impact:
          'Cette couche améliore la rapidité d’exécution, réduit les approximations et permet une intervention plus ciblée.',
      },
    },
    {
      id: 6,
      title: 'Écosystème Économique Durable',
      subtitle: 'Mesure de performance et valorisation',
      description:
        'La plateforme consolide des indicateurs utiles à l’optimisation économique, environnementale et au déploiement de services complémentaires.',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      image: '/src/assets/smart_farming_2.jpg',
      details: {
        overview:
          'Les données consolidées peuvent être utilisées pour suivre l’efficacité des pratiques, démontrer des gains et préparer des usages avancés de valorisation durable.',
        components: [
          {
            name: 'Suivi de Performance',
            description:
              'Mesure continue des indicateurs techniques et opérationnels.',
            specs: [
              'Suivi des consommations et fréquences d’intervention',
              'Comparaison temporelle des états agronomiques',
              'Historique des recommandations et actions',
              'Base d’amélioration continue des modèles',
            ],
          },
          {
            name: 'Valorisation Durable',
            description:
              'Structuration de données utiles aux démarches environnementales.',
            specs: [
              'Mesure d’indicateurs liés à l’efficience hydrique',
              'Préparation des données pour reporting technique',
              'Support potentiel à des démarches carbone ou ESG',
              'Consolidation progressive de la valeur environnementale',
            ],
          },
          {
            name: 'Services Écosystème',
            description:
              'Connexion à des briques complémentaires de la plateforme.',
            specs: [
              'Marketplace et services agricoles connectables',
              'Lien avec diagnostics et recommandations',
              'Architecture produit modulaire',
              'Extension progressive des cas d’usage',
            ],
          },
        ],
        impact:
          'Cette couche transforme l’historique d’exploitation en levier d’optimisation continue et de valorisation future.',
      },
    },
  ];

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % cycleSteps.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAnimating, cycleSteps.length]);

  const buildComponentSlug = (componentName) => {
    if (componentName === 'Analyse Données Temps Réel') {
      return 'analyse-donnees-temps-reel';
    }
    if (componentName === 'Enrichissement IA (RAG)') {
      return 'enrichissement-ia-rag';
    }
    if (componentName === 'Drone Agras - Exécution Précise') {
      return 'drone-agras-execution-precise';
    }

    return componentName
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-[#57D53B] mb-6">
              Notre <span className="text-blue-500 dark:text-blue-400">Technologie</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Une architecture agricole intelligente, modulaire et orientée décision
            </p>
            <div className="mt-8 max-w-5xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
                AgroNoya combine acquisition de données terrain, imagerie satellite, intelligence artificielle,
                automatisation et interfaces de pilotage pour transformer des signaux agronomiques complexes
                en décisions opérationnelles exploitables.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow Section */}
      <div className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-[#57D53B] mb-6">
              Notre Chaîne Technologique
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
              Acquérir → Valider → Analyser → Recommander → Piloter → Optimiser
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cycleSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  currentStep === index
                    ? 'bg-white dark:bg-slate-800 border-2 border-[#57D53B] scale-105 shadow-2xl'
                    : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700'
                }`}
                onClick={() => {
                  setCurrentStep(index);
                  setIsAnimating(false);
                }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} mb-6 text-white`}>
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50 mb-2">{step.title}</h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mb-4">{step.subtitle}</p>
                <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">{step.description}</p>

                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-500 dark:text-slate-400">
                      <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {currentStep === index && (
                  <div className="absolute -top-2 -right-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Deep Dive */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-[#57D53B] mb-6">
              Technologies de Pointe
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
              Découvrez les couches techniques qui structurent la plateforme AgroNoya
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  selectedTech === tech.id ? 'scale-105' : ''
                }`}
                onClick={() => setSelectedTech(selectedTech === tech.id ? null : tech.id)}
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 overflow-hidden">
                  {/* Media Section */}
                  <div className="relative h-64 overflow-hidden">
                    {tech.isVideo ? (
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={tech.image} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={tech.image}
                        alt={tech.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  </div>

                  <div className="p-8">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${tech.color} mb-6 text-white`}>
                      {tech.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50 mb-2">{tech.title}</h3>
                    <p className="text-blue-500 dark:text-blue-400 font-medium mb-4">{tech.subtitle}</p>
                    <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">{tech.description}</p>

                    <button
                      type="button"
                      className="flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:text-blue-300 font-medium"
                    >
                      {selectedTech === tech.id ? 'Masquer les détails' : 'Voir les détails'}
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          selectedTech === tech.id ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {selectedTech === tech.id && (
                    <div className="px-8 pb-8 border-t border-gray-200 dark:border-slate-700">
                      <div className="pt-6">
                        <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">{tech.details.overview}</p>

                        <div className="space-y-6">
                          {tech.details.components.map((component, idx) => (
                            <div
                              key={idx}
                              className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex justify-between items-start mb-2 gap-4">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-50">{component.name}</h4>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const componentSlug = buildComponentSlug(component.name);
                                    navigate(`/technologies/${componentSlug}`);
                                  }}
                                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shrink-0"
                                >
                                  Voir plus
                                  <ArrowRight className="w-4 h-4" />
                                </button>
                              </div>
                              <p className="text-gray-500 dark:text-slate-400 mb-4">{component.description}</p>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {component.specs.map((spec, specIdx) => (
                                  <li key={specIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                    {spec}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 p-6 bg-blue-50 dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-slate-700">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-50 mb-2">Impact</h4>
                          <p className="text-gray-600 dark:text-slate-300">{tech.details.impact}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-[#57D53B] mb-6">
            Prêt à Explorer l’Architecture AgroNoya ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 mb-8">
            Découvrez comment nos briques technologiques s’articulent pour soutenir la décision agronomique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigate('/solutions')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Découvrir nos Solutions
            </button>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-slate-50 font-semibold rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
            >
              Contacter nos Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;