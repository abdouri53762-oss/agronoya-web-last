import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { 
  Eye, 
  Brain, 
  Target, 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  Play,
  Satellite,
  Cpu,
  Activity,
  Plane,
  Leaf,
  Shield,
  Globe,
  Battery,
  Smartphone,
  Database,
  Cloud,
  Wifi,
  Camera,
  BarChart3,
  Settings,
  Lock,
  Layers,
  CheckCircle,
  Star,
  Lightbulb,
  Gauge,
  Microscope,
  Radar,
  Thermometer,
  Droplets,
  Sun,
  Wind,
  Sprout
} from 'lucide-react';

const Technologies = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [selectedTech, setSelectedTech] = useState(null);

  const cycleSteps = [
    {
      id: 1,
      title: "Écouter",
      subtitle: "Collecte de données multisource",
      description: "AgroNoya s'alimente en continu via capteurs IoT, imagerie satellite, drones DJI Mavic 3 Multispectral et feedback terrain.",
      icon: <Eye className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500",
      details: [
        "Capteurs IoT : NPK, pH, humidité, température, salinité",
        "Imagerie satellite : NDVI, NDWI, SAVI et thermiques",
        "DJI Mavic 3 Multispectral : cartographie précise",
        "Feedback terrain : signalements agriculteurs"
      ],
      image: "/src/assets/satellite_analysis.jpg"
    },
    {
      id: 2,
      title: "Comprendre", 
      subtitle: "Moteur de filtration avec Supabase",
      description: "Notre processus garantit une fiabilité maximale : validation instantanée, nettoyage temps réel, préparation pour l'IA.",
      icon: <Brain className="w-12 h-12" />,
      color: "from-purple-500 to-pink-500",
      details: [
        "Validation instantanée des données capteurs",
        "Nettoyage temps réel des fluctuations",
        "Structuration optimisée pour l'IA",
        "Qualité maximale avant décision"
      ],
      image: "/src/assets/ai_chatbot.jpg"
    },
    {
      id: 3,
      title: "Dialoguer",
      subtitle: "IA traduit science en sagesse pratique", 
      description: "Nos moteurs d'analyse (NoyaSol, NoyaDiag, NoyaSat) et de dialogue (NoyaIrrigation, NoyaGPT) travaillent ensemble.",
      icon: <Target className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500",
      details: [
        "NoyaSol : analyse chimie du sol",
        "NoyaDiag : détection maladies/ravageurs",
        "NoyaIrrigation : ingénieur agronome spécialisé eau",
        "NoyaGPT : conseiller agricole personnel"
      ],
      image: "/src/assets/dashboard_agronoya.png"
    },
    {
      id: 4,
      title: "Agir",
      subtitle: "Du conseil à l'intervention terrain",
      description: "Modèle IA prend décisions d'arrosage ultra-précises et drone Agras exécute traitements chirurgicaux.",
      icon: <Zap className="w-12 h-12" />,
      color: "from-orange-500 to-red-500", 
      details: [
        "Décisions arrosage automatiques intelligentes",
        "Drone Agras : application contrôlée précise",
        "Pilotage technicien expert supervisé",
        "Exécution parfaite et sécurisée"
      ],
      image: "/src/assets/drone_scanning.jpg"
    },
    {
      id: 5,
      title: "Piloter",
      subtitle: "Écosystème intégré AgroNoya",
      description: "Dashboards web et applications mobiles offrent contrôle total : mode automatique intelligent ou manuel assisté.",
      icon: <Smartphone className="w-12 h-12" />,
      color: "from-indigo-500 to-purple-500",
      details: [
        "Dashboard principal : vision 360°",
        "Dashboard irrigation : poste pilotage eau",
        "Applications mobiles : puissance terrain",
        "Mode auto intelligent ou manuel assisté"
      ],
      image: "/src/assets/smart_farming_1.jpg"
    },
    {
      id: 6,
      title: "Prospérer",
      subtitle: "Écosystème développement durable",
      description: "AgroNoya Store et CarbonTrack transforment efficacité en valeur économique et environnementale.",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "from-yellow-500 to-orange-500",
      details: [
        "AgroNoya Store : marketplace agricole intelligente",
        "CarbonTrack : monétisation agriculture durable",
        "Crédits carbone valorisables",
        "Moteur développement économique"
      ],
      image: "/src/assets/smart_farming_2.jpg"
    }
  ];

  const technologies = [
    {
      id: 1,
      title: "Collecte de Données Multisource",
      subtitle: "Écouter la Terre",
      description: "AgroNoya transforme votre exploitation en écosystème connecté où chaque élément communique en temps réel.",
      icon: <Satellite className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      image: "/src/assets/drone_analysis.mp4",
      isVideo: true,
      details: {
        overview: "Notre technologie donne à votre terre une voix numérique pour traduire ses besoins en actions justes.",
        components: [
          {
            name: "Capteurs IoT",
            description: "Transmission sécurisée ESP32 + GSM/LoRa vers Supabase",
            specs: [
              "NPK, pH, humidité, température du sol",
              "Salinité, pluviométrie, vent",
              "Transmission temps réel sécurisée",
              "Alimentation solaire autonome"
            ]
          },
          {
            name: "Imagerie Satellite",
            description: "Vision macroscopique des parcelles",
            specs: [
              "Indices NDVI, NDWI, SAVI et thermiques",
              "Sentinel-2, Sentinel-3, PlanetScope, Landsat",
              "Surveillance continue non-invasive",
              "Détection précoce stress hydrique"
            ]
          },
          {
            name: "DJI Mavic 3 Multispectral",
            description: "Drone cartographie compact et robuste",
            specs: [
              "Capteurs RGB (20 MP) et multispectraux (4×5 MP)",
              "Technologie compensation solaire",
              "Données NDVI précises long terme",
              "Cartographie centimétrique"
            ]
          }
        ],
        impact: "Transformation de votre exploitation en système intelligent qui anticipe les besoins avant qu'ils ne deviennent critiques."
      }
    },
    {
      id: 2,
      title: "Moteur de Filtration de Données",
      subtitle: "Comprendre avec Supabase",
      description: "Notre moteur de filtration garantit une fiabilité maximale : la qualité avant la décision. Nous transformons les données brutes en intelligence de haute qualité.",
      icon: <Database className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      image: "/src/assets/satellite_analysis.jpg",
      details: {
        overview: "Chez Noya AI models, une décision intelligente commence par une donnée parfaite. Supabase agit comme un filtre intelligent pour traiter chaque information avant qu'elle n'atteigne notre IA.",
        components: [
          {
            name: "Validation Instantanée",
            description: "Rejet automatique données erronées ou anormales",
            specs: [
              "Filtrage valeurs impossibles capteurs",
              "Détection erreurs de format automatique",
              "Conservation mesures crédibles uniquement",
              "Sécurisation flux données temps réel"
            ]
          },
          {
            name: "Nettoyage Temps Réel",
            description: "Algorithmes lissage élimination bruit",
            specs: [
              "Suppression fluctuations sans importance",
              "Révélation tendances réelles cultures",
              "Optimisation signal/bruit données",
              "Préparation flux structuré pour IA"
            ]
          },
          {
            name: "Préparation pour l'IA",
            description: "Structuration informations nettoyées",
            specs: [
              "Flux données optimisé pour analyse",
              "Format standardisé pour modèles IA",
              "Garantie qualité maximale entrée",
              "Assurance recommandations fiables"
            ]
          },
          {
            name: "Architecture Supabase Sécurisée",
            description: "Sécurité au repos et en transit",
            specs: [
              "Chiffrement SSL/TLS obligatoire",
              "Données chiffrées sur serveurs",
              "Gestion sécurisée des secrets",
              "Sauvegardes automatiques PITR"
            ]
          }
        ],
        impact: "Nous ne nous contentons pas de collecter des données ; nous les transformons en intelligence de haute qualité, assurant que chaque décision d'irrigation est basée sur une certitude absolue."
      }
    },
    {
      id: 3,
      title: "Intelligence Artificielle Propriétaire",
      subtitle: "Le Cerveau de l'Écosystème",
      description: "Nos modèles Noya transforment la complexité des données en sagesse pratique accessible à tous.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      image: "/src/assets/ai_vortex.gif",
      isGif: true,
      details: {
        overview: "Deux niveaux d'IA complémentaires : les scientifiques analysent, les conseillers traduisent en actions concrètes.",
        components: [
          {
            name: "Moteurs d'Analyse (Scientifiques)",
            description: "Spécialistes du diagnostic technique",
            specs: [
              "NoyaSol : analyse chimie sol et carences nutriments",
              "NoyaDiag : détection signatures visuelles maladies",
              "NoyaSat : traitement images satellites stress/anomalies",
              "Rapports techniques haute précision"
            ]
          },
          {
            name: "Moteurs de Dialogue (Conseillers)",
            description: "Maîtres simplification et contextualisation",
            specs: [
              "NoyaIrrigation : ingénieur agronome spécialisé eau",
              "Synthèse multi-factorielle intelligente",
              "Technologie RAG avec recherche tunisienne",
              "Recommandations simples et actionnables"
            ]
          },
          {
            name: "NoyaGPT",
            description: "Conseiller agricole personnel universel",
            specs: [
              "Interface dialogue principale",
              "Interrogation tous modèles simultanée",
              "Réponses claires, concises, actionnables",
              "Support dialecte tunisien"
            ]
          }
        ],
        impact: "Démocratisation de l'expertise agronomique : chaque agriculteur dispose d'un conseil de niveau ingénieur."
      }
    },
    {
      id: 4,
      title: "Écosystème de Pilotage Intégré",
      subtitle: "Contrôle Total",
      description: "Toute la puissance du web dans votre poche : dashboards et applications mobiles miroirs pour un contrôle sans rupture.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      image: "/src/assets/dashboard_agronoya.png",
      details: {
        overview: "Philosophie 'miroir' entre web et mobile : 100% des fonctionnalités disponibles partout, tout le temps.",
        components: [
          {
            name: "Dashboard Principal AgroNoya",
            description: "Hub contrôle analytique - Vision 360°",
            specs: [
              "Agrégation toutes informations exploitation",
              "Planification stratégique et performances",
              "Gestion globale opérations agricoles",
              "Interface gestionnaire confortable"
            ]
          },
          {
            name: "Dashboard Irrigation Unifié",
            description: "Poste pilotage eau - Double modalité",
            specs: [
              "Mode Automatique : guidage intelligent IA",
              "Mode Manuel : contrôle assisté utilisateur",
              "Centralisation analyses irrigation temps réel",
              "Commande vannes/pompes directe"
            ]
          },
          {
            name: "Applications Mobiles",
            description: "Miroirs fidèles optimisés terrain",
            specs: [
              "Application AgroNoya : bureau mobile complet",
              "Application Irrigation : télécommande totale",
              "Même niveau information bureau/terrain",
              "Réactivité immédiate alertes critiques"
            ]
          }
        ],
        impact: "Expérience sans rupture : chaque utilisateur dispose de 100% des capacités, quel que soit son rôle ou sa localisation."
      }
    },
    {
      id: 5,
      title: "Automatisation Intelligente",
      subtitle: "De la Décision à l'Action",
      description: "L'IA orchestre l'arrosage comme un cerveau central, garantissant que chaque goutte d'eau est utilisée efficacement.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      image: "/src/assets/drone_scanning.jpg",
      details: {
        overview: "Processus décisionnel en boucle intelligente : analyse temps réel + enrichissement IA + action automatique.",
        components: [
          {
            name: "Analyse Données Temps Réel",
            description: "Collecte continue multi-sources",
            specs: [
              "Capteurs IoT : humidité, température, salinité sol",
              "Images satellites : santé cultures (NDVI), évaporation",
              "Données météo : prévisions locales intégrées",
              "Fusion intelligente toutes sources"
            ]
          },
          {
            name: "Enrichissement IA (RAG)",
            description: "Consultation base connaissances locale",
            specs: [
              "Recherche tunisienne sols région Kairouan",
              "Variétés locales (oliviers Chemlali, maraîchères)",
              "Seuils stress hydrique critiques contextualisés",
              "Agronome expert virtuel permanent"
            ]
          },
          {
            name: "Drone Agras - Exécution Précise",
            description: "Application contrôlée par technicien pilote",
            specs: [
              "Import carte prescription radiocommande",
              "Préparation mélange concentration exacte",
              "Pilotage supervisé précision centimétrique",
              "Expertise humaine + précision technologique"
            ]
          }
        ],
        impact: "Arrosage de haute précision sans intervention : le système anticipe, décide et agit de manière optimale."
      }
    },
    {
      id: 6,
      title: "Écosystème Économique Durable",
      subtitle: "Prospérer Ensemble",
      description: "AgroNoya transcende l'analyse pour devenir moteur de développement économique, environnemental et social.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      image: "/src/assets/smart_farming_2.jpg",
      details: {
        overview: "Transformation de l'efficacité agricole en valeur économique tangible et impact environnemental positif.",
        components: [
          {
            name: "AgroNoya Store",
            description: "Marketplace agricole intelligente",
            specs: [
              "Monde virtuel agricole complet B2B/B2C",
              "Achat/vente/services centralisés",
              "Connexion intelligente aux diagnostics",
              "Court-circuitage intermédiaires"
            ]
          },
          {
            name: "CarbonTrack",
            description: "Monétisation agriculture durable",
            specs: [
              "Mesure Google Earth Engine multi-années",
              "Certification économies eau/réduction intrants",
              "Quantification séquestration carbone",
              "Génération crédits carbone vendables"
            ]
          },
          {
            name: "Impact Développement",
            description: "Moteur économie locale",
            specs: [
              "Dynamisation économie locale",
              "Circuits courts favorisés",
              "Autonomie et pouvoir négociation renforcés",
              "Revenus supplémentaires durabilité"
            ]
          }
        ],
        impact: "Positionnement agriculteurs comme acteurs clés lutte changement climatique avec accès nouveaux financements."
      }
    }
  ];

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % cycleSteps.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAnimating, cycleSteps.length]);

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
              Réconcilier l'Héritage et l'Avenir
            </p>
            <div className="mt-8 max-w-5xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-500 dark:text-gray-500 dark:text-gray-500 dark:text-gray-500 dark:text-slate-400 leading-relaxed">
                Bien plus qu'une terre, votre exploitation est un héritage. Un savoir transmis, une patience cultivée, 
                une relation intime avec un sol qui a sa propre histoire. Notre technologie n'a pas été conçue pour 
                remplacer cette sagesse, mais pour l'amplifier.
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
              Notre Écosystème de Souveraineté
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
              Écouter → Comprendre → Dialoguer → Agir → Piloter → Prospérer
            </p>
                      {/* Titre et description */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50 mb-4">
                Écouter → Comprendre → Dialoguer → Agir → Piloter → Prospérer
              </h3>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cycleSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  currentStep === index
                    ? 'bg-white dark:bg-white dark:bg-slate-800 border-2 border-[#57D53B] scale-105 shadow-2xl'
                    : 'bg-white dark:bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700'
                }`}
                onClick={() => setCurrentStep(index)}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} mb-6`}>
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
                      <Star className="w-3 h-3 text-gray-900 dark:text-slate-50" />
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
              Découvrez en détail les technologies qui donnent à votre terre une voix numérique
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
                <div className="bg-white dark:bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 overflow-hidden">
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
                    ) : tech.isGif ? (
                      <img 
                        src={tech.image} 
                        alt={tech.title}
                        className="w-full h-full object-cover"
                      />
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
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${tech.color} mb-6`}>
                      {tech.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50 mb-2">{tech.title}</h3>
                    <p className="text-blue-500 dark:text-blue-400 font-medium mb-4">{tech.subtitle}</p>
                    <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">{tech.description}</p>
                    
                    <button className="flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:text-blue-300 font-medium">
                      {selectedTech === tech.id ? 'Masquer les détails' : 'Voir les détails'}
                      <ArrowRight className={`w-4 h-4 transition-transform ${
                        selectedTech === tech.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                  </div>

                  {selectedTech === tech.id && (
                    <div className="px-8 pb-8 border-t border-gray-200 dark:border-slate-700">
                      <div className="pt-6">
                        <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">{tech.details.overview}</p>
                        
                        <div className="space-y-6">
                          {tech.details.components.map((component, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-50">{component.name}</h4>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    let componentSlug = "";
                                    
                                    // Corrections spécifiques pour les sous-composants
                                    if (component.name === "Analyse Données Temps Réel") {
                                      componentSlug = "analyse-donnees-temps-reel";
                                    } else if (component.name === "Enrichissement IA (RAG)") {
                                      componentSlug = "enrichissement-ia-rag";
                                    } else if (component.name === "Drone Agras - Exécution Précise") {
                                      componentSlug = "drone-agras-execution-precise";
                                    } else {
                                      // Logique par défaut pour les autres composants
                                      componentSlug = component.name.toLowerCase()
                                        .replace(/\s+/g, '-')
                                        .replace(/[^a-z0-9-]/g, '');
                                    }
                                    
                                    navigate(`/technologies/${componentSlug}`);
                                  }}
                                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-gray-900 dark:text-slate-50 text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
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
                        
                        <div className="mt-6 p-6 bg-blue-50 dark:bg-white dark:bg-slate-800 rounded-xl border border-blue-200 dark:border-gray-200 dark:border-slate-700">
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
            Prêt à Transformer Votre Agriculture ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 mb-8">
            Rejoignez la révolution agricole intelligente avec AgroNoya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-gray-900 dark:text-slate-50 font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Découvrir nos Solutions
            </button>
            <button className="px-8 py-4 border border-white text-gray-900 dark:text-slate-50 font-semibold rounded-xl hover:bg-white transition-all duration-300">
              Contacter nos Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

