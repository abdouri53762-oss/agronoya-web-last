import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Plane,
  Target,
  MapPin,
  Droplets,
  Gauge,
  Clock,
  Shield,
  Zap,
  Eye,
  Radio,
  Battery,
  Wind,
  Thermometer,
  Navigation,
  Settings,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  Users,
  Award,
  Cpu,
  Wifi,
  Camera,
  Crosshair,
  Route,
  Play,
  Pause,
  Square,
  Upload,
  Download,
  FileText,
  Activity
} from 'lucide-react';

const DroneAgrasPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeDroneSystem, setActiveDroneSystem] = useState(0);
  const [missionStatus, setMissionStatus] = useState('ready'); // ready, flying, completed
  const [flightProgress, setFlightProgress] = useState(0);

  // Simulation mission drone
  const [droneData, setDroneData] = useState({
    altitude: 3.5,
    speed: 8.2,
    battery: 87,
    coverage: 0,
    sprayRate: 2.5,
    windSpeed: 4.1,
    temperature: 26
  });

  const startMission = () => {
    setMissionStatus('flying');
    setFlightProgress(0);
    
    const interval = setInterval(() => {
      setFlightProgress(prev => {
        if (prev >= 100) {
          setMissionStatus('completed');
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
      
      setDroneData(prev => ({
        ...prev,
        altitude: 3.5 + Math.sin(Date.now() / 1000) * 0.3,
        speed: 8.2 + (Math.random() - 0.5) * 1,
        battery: Math.max(20, prev.battery - 0.5),
        coverage: Math.min(100, prev.coverage + 2),
        sprayRate: 2.5 + (Math.random() - 0.5) * 0.3,
        windSpeed: 4.1 + (Math.random() - 0.5) * 1,
        temperature: 26 + (Math.random() - 0.5) * 2
      }));
    }, 1000);
  };

  const droneSystemsData = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Import Carte Prescription",
      subtitle: "Radiocommande Intelligente",
      description: "Importation automatique des cartes de prescription générées par l'IA pour un traitement ultra-précis zone par zone.",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Format shapefile et KML supportés",
        "Résolution jusqu'à 1m² par zone",
        "Validation automatique des données",
        "Optimisation trajectoires de vol",
        "Calcul automatique volumes",
        "Interface drag & drop intuitive"
      ],
      specs: [
        { label: "Précision GPS", value: "±10cm", icon: <MapPin className="w-4 h-4" /> },
        { label: "Zones max", value: "500", icon: <Target className="w-4 h-4" /> },
        { label: "Formats", value: "8", icon: <FileText className="w-4 h-4" /> },
        { label: "Validation", value: "Auto", icon: <CheckCircle className="w-4 h-4" /> }
      ]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Préparation Mélange",
      subtitle: "Concentration Exacte",
      description: "Système de préparation automatisé garantissant la concentration exacte des produits selon les prescriptions agronomiques.",
      color: "from-green-500 to-emerald-500",
      features: [
        "Dosage automatique multi-produits",
        "Mélange homogène garanti",
        "Contrôle pH et conductivité",
        "Traçabilité complète des mélanges",
        "Alertes sécurité produits",
        "Nettoyage automatique circuit"
      ],
      specs: [
        { label: "Précision", value: "±1%", icon: <Gauge className="w-4 h-4" /> },
        { label: "Capacité", value: "20L", icon: <Droplets className="w-4 h-4" /> },
        { label: "Produits", value: "4 max", icon: <Settings className="w-4 h-4" /> },
        { label: "Temps", value: "3 min", icon: <Clock className="w-4 h-4" /> }
      ]
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "Pilotage Supervisé",
      subtitle: "Précision Centimétrique",
      description: "Vol autonome avec supervision experte garantissant une précision centimétrique et une sécurité maximale.",
      color: "from-orange-500 to-red-500",
      features: [
        "Vol autonome GPS RTK",
        "Supervision technicien expert",
        "Évitement obstacles automatique",
        "Adaptation conditions météo",
        "Retour base automatique",
        "Enregistrement mission complète"
      ],
      specs: [
        { label: "Précision", value: "±2cm", icon: <Crosshair className="w-4 h-4" /> },
        { label: "Altitude", value: "1-5m", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Vitesse", value: "3-12 m/s", icon: <Zap className="w-4 h-4" /> },
        { label: "Autonomie", value: "22 min", icon: <Battery className="w-4 h-4" /> }
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expertise Humaine",
      subtitle: "Précision Technologique",
      description: "Combinaison parfaite entre l'expertise humaine de nos techniciens et la précision technologique des drones Agras.",
      color: "from-purple-500 to-violet-500",
      features: [
        "Techniciens certifiés DJI",
        "Formation continue obligatoire",
        "Intervention d'urgence 24/7",
        "Maintenance préventive",
        "Support technique dédié",
        "Garantie résultats"
      ],
      specs: [
        { label: "Techniciens", value: "12", icon: <Users className="w-4 h-4" /> },
        { label: "Certifications", value: "100%", icon: <Award className="w-4 h-4" /> },
        { label: "Expérience", value: "5+ ans", icon: <Clock className="w-4 h-4" /> },
        { label: "Disponibilité", value: "24/7", icon: <Shield className="w-4 h-4" /> }
      ]
    }
  ];

  const droneSpecs = [
    {
      category: "Performance Vol",
      specs: [
        "Charge utile maximale: 40kg",
        "Autonomie de vol: 22 minutes",
        "Vitesse maximale: 12 m/s",
        "Résistance au vent: 8 m/s",
        "Altitude de service: 1-5 mètres",
        "Précision positionnement: ±2cm RTK"
      ]
    },
    {
      category: "Système Pulvérisation",
      specs: [
        "Réservoir: 40 litres",
        "Débit variable: 0.6-9.6 L/min",
        "Largeur pulvérisation: 7 mètres",
        "Buses: 8 buses anti-dérive",
        "Pression: 0.15-0.4 MPa",
        "Taille gouttelettes: 150-300 μm"
      ]
    },
    {
      category: "Navigation & Sécurité",
      specs: [
        "GPS RTK haute précision",
        "Radar omnidirectionnel",
        "Caméras FPV + détection obstacles",
        "Retour automatique batterie faible",
        "Mode d'urgence intégré",
        "Géofencing programmable"
      ]
    },
    {
      category: "Connectivité",
      specs: [
        "Transmission temps réel 15km",
        "Contrôle via tablette/smartphone",
        "Télémétrie complète",
        "Enregistrement missions",
        "Mise à jour OTA",
        "API intégration tiers"
      ]
    }
  ];

  const missionTypes = [
    {
      type: "Traitement Phytosanitaire",
      description: "Application précise de produits phytosanitaires selon prescription agronomique",
      applications: [
        "Fongicides préventifs/curatifs",
        "Insecticides ciblés",
        "Herbicides sélectifs",
        "Régulateurs de croissance"
      ],
      efficiency: "95% précision",
      coverage: "15 ha/heure"
    },
    {
      type: "Fertilisation Foliaire",
      description: "Apport nutritionnel direct par les feuilles pour correction rapide",
      applications: [
        "Oligo-éléments",
        "Correcteurs carences",
        "Biostimulants",
        "Nutrition spécialisée"
      ],
      efficiency: "98% homogénéité",
      coverage: "12 ha/heure"
    },
    {
      type: "Biocontrôle",
      description: "Application d'agents biologiques pour protection naturelle",
      applications: [
        "Auxiliaires biologiques",
        "Biopesticides",
        "Phéromones",
        "Microorganismes bénéfiques"
      ],
      efficiency: "92% viabilité",
      coverage: "10 ha/heure"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'ready': return 'text-blue-400';
      case 'flying': return 'text-green-400';
      case 'completed': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'ready': return 'Prêt au décollage';
      case 'flying': return 'Mission en cours';
      case 'completed': return 'Mission terminée';
      default: return 'Statut inconnu';
    }
  };

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
              <Plane className="w-10 h-10 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Drone Agras
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Exécution Précise
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Application contrôlée par technicien pilote. Expertise humaine combinée à la précision 
              technologique pour des traitements chirurgicaux ultra-précis.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full">
                <Target className="w-4 h-4 inline mr-2" />
                Précision ±2cm
              </span>
              <span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full">
                <Users className="w-4 h-4 inline mr-2" />
                Pilote Expert
              </span>
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full">
                <Shield className="w-4 h-4 inline mr-2" />
                Sécurité Max
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Control Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            <Activity className="w-6 h-6 inline mr-2" />
            Centre de Contrôle Mission
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mission Status */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4">Statut Mission</h3>
              <div className="bg-slate-700/30 rounded-lg p-6">
                <div className={`text-center mb-4 ${getStatusColor(missionStatus)}`}>
                  <Plane className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">{getStatusText(missionStatus)}</p>
                </div>
                
                {missionStatus === 'ready' && (
                  <button
                    onClick={startMission}
                    className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all"
                  >
                    <Play className="w-4 h-4 inline mr-2" />
                    Démarrer Mission
                  </button>
                )}
                
                {missionStatus === 'flying' && (
                  <div>
                    <div className="w-full bg-slate-600 rounded-full h-2 mb-4">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${flightProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-center text-white font-medium">{flightProgress}% complété</p>
                  </div>
                )}
                
                {missionStatus === 'completed' && (
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-green-400 font-medium">Mission réussie!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Live Telemetry */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-4">Télémétrie Temps Réel</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                  <TrendingUp className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-slate-50">{droneData.altitude.toFixed(1)}m</div>
                  <div className="text-xs text-gray-400">Altitude</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                  <Zap className="w-5 h-5 text-green-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-slate-50">{droneData.speed.toFixed(1)} m/s</div>
                  <div className="text-xs text-gray-400">Vitesse</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                  <Battery className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-slate-50">{droneData.battery.toFixed(0)}%</div>
                  <div className="text-xs text-gray-400">Batterie</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                  <Target className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-slate-50">{droneData.coverage.toFixed(0)}%</div>
                  <div className="text-xs text-gray-400">Couverture</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                  <Droplets className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-slate-50">{droneData.sprayRate.toFixed(1)} L/min</div>
                  <div className="text-xs text-gray-400">Débit</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                  <Wind className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-slate-50">{droneData.windSpeed.toFixed(1)} m/s</div>
                  <div className="text-xs text-gray-400">Vent</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                  <Thermometer className="w-5 h-5 text-red-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-slate-50">{droneData.temperature.toFixed(0)}°C</div>
                  <div className="text-xs text-gray-400">Température</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                  <Radio className="w-5 h-5 text-green-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900 dark:text-slate-50">●</div>
                  <div className="text-xs text-gray-400">Signal</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Drone Systems Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {droneSystemsData.map((system, index) => (
            <button
              key={index}
              onClick={() => setActiveDroneSystem(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeDroneSystem === index
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-gray-900 dark:text-slate-50'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
              }`}
            >
              {system.title}
            </button>
          ))}
        </div>

        {/* Active Drone System Details */}
        <div className="mb-12">
          {droneSystemsData.map((system, index) => (
            <div
              key={index}
              className={`${activeDroneSystem === index ? 'block' : 'hidden'}`}
            >
              <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${system.color} rounded-2xl flex items-center justify-center mr-6`}>
                    {system.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">{system.title}</h3>
                    <p className="text-orange-400 font-medium">{system.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8">{system.description}</p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Specifications */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Spécifications</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {system.specs.map((spec, idx) => (
                        <div key={idx} className="bg-slate-700/30 rounded-lg p-4">
                          <div className="flex items-center mb-2 text-orange-400">
                            {spec.icon}
                            <span className="ml-2 text-xs font-medium">●</span>
                          </div>
                          <div className="text-lg font-bold text-gray-900 dark:text-slate-50">{spec.value}</div>
                          <div className="text-xs text-gray-400">{spec.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Fonctionnalités</h4>
                    <ul className="space-y-3">
                      {system.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Spécifications Techniques DJI Agras
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {droneSpecs.map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Cpu className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Types de Missions Spécialisées
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {missionTypes.map((mission, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">{mission.type}</h3>
                <p className="text-gray-300 mb-4">{mission.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-orange-400 mb-2">Applications</h4>
                  <ul className="space-y-1">
                    {mission.applications.map((app, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center">
                        <Target className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-400">{mission.efficiency}</div>
                    <div className="text-xs text-gray-400">Efficacité</div>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-400">{mission.coverage}</div>
                    <div className="text-xs text-gray-400">Couverture</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video/GIF Placeholder */}
        <div className="mb-12">
          <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Drone Agras en Action
            </h3>
            <div className="aspect-video bg-gray-50 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-orange-500/30">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-10 h-10 text-white animate-bounce" />
                </div>
                <p className="text-white font-medium mb-2">Vidéo Démonstration</p>
                <p className="text-gray-400 text-sm">Mission complète de traitement phytosanitaire</p>
                <div className="mt-4 px-6 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                  🎥 Vidéo à intégrer
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 dark:bg-slate-900 rounded-2xl p-12 border border-orange-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Précision Chirurgicale pour Vos Cultures
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez comment nos drones Agras pilotés par des experts peuvent transformer 
            l'efficacité de vos traitements avec une précision inégalée.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all">
              Réserver une Mission
            </button>
            <button className="px-8 py-3 border border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500/10 transition-all">
              Formation Pilote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneAgrasPage;

