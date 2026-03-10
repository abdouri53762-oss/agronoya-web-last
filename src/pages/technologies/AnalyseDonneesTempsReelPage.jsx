import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Activity, 
  Satellite,
  Thermometer,
  Droplets,
  Wind,
  Gauge,
  Database,
  Wifi,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Zap,
  Eye,
  BarChart3,
  Globe,
  Cpu,
  Radio,
  CloudRain,
  Sun,
  Moon,
  Waves
} from 'lucide-react';

const AnalyseDonneesTempsReelPage = () => {
  const navigate = useNavigate();
  const [activeDataStream, setActiveDataStream] = useState(0);

  // Simulation de données en temps réel
  const [realTimeData, setRealTimeData] = useState({
    soilMoisture: 65,
    temperature: 28,
    humidity: 72,
    ph: 6.8,
    salinity: 0.3,
    ndvi: 0.75
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        soilMoisture: Math.max(0, Math.min(100, prev.soilMoisture + (Math.random() - 0.5) * 2)),
        temperature: Math.max(15, Math.min(45, prev.temperature + (Math.random() - 0.5) * 1)),
        humidity: Math.max(30, Math.min(95, prev.humidity + (Math.random() - 0.5) * 3)),
        ph: Math.max(5.5, Math.min(8.5, prev.ph + (Math.random() - 0.5) * 0.1)),
        salinity: Math.max(0.1, Math.min(2.0, prev.salinity + (Math.random() - 0.5) * 0.05)),
        ndvi: Math.max(0.2, Math.min(0.9, prev.ndvi + (Math.random() - 0.5) * 0.02))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const dataStreams = [
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Capteurs IoT Sol",
      subtitle: "Monitoring Multi-Paramètres",
      description: "Réseau de capteurs intelligents déployés dans le sol pour mesurer en continu les paramètres critiques.",
      color: "from-blue-500 to-cyan-500",
      metrics: [
        { label: "Humidité Sol", value: `${realTimeData.soilMoisture.toFixed(1)}%`, icon: <Droplets className="w-4 h-4" />, status: realTimeData.soilMoisture > 40 ? 'good' : 'warning' },
        { label: "Température", value: `${realTimeData.temperature.toFixed(1)}°C`, icon: <Thermometer className="w-4 h-4" />, status: realTimeData.temperature < 35 ? 'good' : 'warning' },
        { label: "pH Sol", value: realTimeData.ph.toFixed(1), icon: <Gauge className="w-4 h-4" />, status: realTimeData.ph > 6.0 && realTimeData.ph < 7.5 ? 'good' : 'warning' },
        { label: "Salinité", value: `${realTimeData.salinity.toFixed(2)} dS/m`, icon: <Waves className="w-4 h-4" />, status: realTimeData.salinity < 1.0 ? 'good' : 'warning' }
      ],
      features: [
        "Capteurs NPK haute précision",
        "Mesure pH et conductivité",
        "Température et humidité sol",
        "Transmission LoRaWAN longue portée",
        "Autonomie batterie 2 ans",
        "Résistance IP68 étanche"
      ]
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Imagerie Satellite",
      subtitle: "Vision Globale Multispectrale",
      description: "Analyse satellite haute résolution pour surveiller la santé des cultures et l'évapotranspiration.",
      color: "from-green-500 to-emerald-500",
      metrics: [
        { label: "NDVI Moyen", value: realTimeData.ndvi.toFixed(2), icon: <Eye className="w-4 h-4" />, status: realTimeData.ndvi > 0.6 ? 'good' : 'warning' },
        { label: "Couverture", value: "100%", icon: <Globe className="w-4 h-4" />, status: 'good' },
        { label: "Résolution", value: "10m/pixel", icon: <BarChart3 className="w-4 h-4" />, status: 'good' },
        { label: "Fréquence", value: "3 jours", icon: <Clock className="w-4 h-4" />, status: 'good' }
      ],
      features: [
        "Sentinel-2 & Landsat 8/9",
        "Indices NDVI, NDWI, SAVI",
        "Détection stress hydrique",
        "Cartographie évapotranspiration",
        "Analyse temporelle multi-dates",
        "Prédiction rendements"
      ]
    },
    {
      icon: <CloudRain className="w-8 h-8" />,
      title: "Données Météo",
      subtitle: "Prévisions Hyperlocales",
      description: "Intégration de données météorologiques précises pour anticiper les besoins en irrigation.",
      color: "from-purple-500 to-violet-500",
      metrics: [
        { label: "Humidité Air", value: `${realTimeData.humidity.toFixed(0)}%`, icon: <Droplets className="w-4 h-4" />, status: 'good' },
        { label: "Vent", value: "12 km/h", icon: <Wind className="w-4 h-4" />, status: 'good' },
        { label: "Pression", value: "1013 hPa", icon: <Gauge className="w-4 h-4" />, status: 'good' },
        { label: "UV Index", value: "7", icon: <Sun className="w-4 h-4" />, status: 'warning' }
      ],
      features: [
        "Prévisions 7 jours précises",
        "Données hyperlocales 1km²",
        "Calcul ETP en temps réel",
        "Alertes événements extrêmes",
        "Historique 10 ans",
        "API météo premium"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Fusion Intelligente",
      subtitle: "Agrégation Multi-Sources",
      description: "Algorithmes avancés pour fusionner et valider toutes les sources de données en temps réel.",
      color: "from-orange-500 to-red-500",
      metrics: [
        { label: "Sources Actives", value: "24/24", icon: <Wifi className="w-4 h-4" />, status: 'good' },
        { label: "Latence", value: "< 30s", icon: <Zap className="w-4 h-4" />, status: 'good' },
        { label: "Fiabilité", value: "99.8%", icon: <CheckCircle className="w-4 h-4" />, status: 'good' },
        { label: "Précision", value: "97.5%", icon: <TrendingUp className="w-4 h-4" />, status: 'good' }
      ],
      features: [
        "Validation croisée automatique",
        "Détection anomalies ML",
        "Interpolation spatiale intelligente",
        "Nettoyage données temps réel",
        "Stockage haute performance",
        "API REST ultra-rapide"
      ]
    }
  ];

  const technicalSpecs = [
    {
      category: "Capteurs IoT",
      specs: [
        "Fréquence de mesure: 15 minutes",
        "Précision humidité: ±2%",
        "Précision température: ±0.5°C",
        "Précision pH: ±0.1",
        "Portée LoRaWAN: jusqu'à 15km",
        "Autonomie: 24 mois"
      ]
    },
    {
      category: "Imagerie Satellite",
      specs: [
        "Résolution spatiale: 10-20m",
        "Résolution temporelle: 2-3 jours",
        "Bandes spectrales: 13 bandes",
        "Couverture: Mondiale",
        "Précision géolocalisation: <10m",
        "Archive: Depuis 2015"
      ]
    },
    {
      category: "Données Météo",
      specs: [
        "Résolution spatiale: 1km",
        "Mise à jour: Toutes les heures",
        "Prévisions: 7 jours",
        "Paramètres: 25+ variables",
        "Précision température: ±1°C",
        "Précision précipitations: ±10%"
      ]
    },
    {
      category: "Infrastructure",
      specs: [
        "Stockage: 50TB+ données",
        "Traitement: Temps réel",
        "API: REST + WebSocket",
        "Sécurité: Chiffrement AES-256",
        "Disponibilité: 99.9%",
        "Backup: 3 sites géographiques"
      ]
    }
  ];

  const realTimeAlerts = [
    {
      type: "warning",
      icon: <AlertTriangle className="w-5 h-5" />,
      message: "Humidité sol faible détectée - Zone Nord-Est",
      time: "Il y a 2 minutes",
      action: "Irrigation programmée dans 15 minutes"
    },
    {
      type: "info",
      icon: <Satellite className="w-5 h-5" />,
      message: "Nouvelle image satellite disponible",
      time: "Il y a 8 minutes",
      action: "Analyse NDVI en cours"
    },
    {
      type: "success",
      icon: <CheckCircle className="w-5 h-5" />,
      message: "Calibration capteurs terminée avec succès",
      time: "Il y a 15 minutes",
      action: "Tous systèmes opérationnels"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'warning': return 'border-yellow-500/50 bg-yellow-500/10';
      case 'error': return 'border-red-500/50 bg-red-500/10';
      case 'success': return 'border-green-500/50 bg-green-500/10';
      default: return 'border-blue-500/50 bg-blue-500/10';
    }
  };

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
              <Activity className="w-10 h-10 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Analyse Données
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Temps Réel
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Collecte continue multi-sources. Capteurs IoT, imagerie satellite, données météo 
              et fusion intelligente pour une vision complète de votre exploitation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full">
                <Wifi className="w-4 h-4 inline mr-2" />
                24/7 Connecté
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full">
                <Zap className="w-4 h-4 inline mr-2" />
                Temps Réel
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Multi-Sources
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            <Activity className="w-6 h-6 inline mr-2" />
            Dashboard Temps Réel
          </h2>
          
          {/* Live Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {dataStreams[0].metrics.map((metric, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 text-center">
                <div className={`flex items-center justify-center mb-2 ${getStatusColor(metric.status)}`}>
                  {metric.icon}
                  <span className="ml-2 text-xs font-medium">LIVE</span>
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-slate-50">{metric.value}</div>
                <div className="text-xs text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Real-Time Alerts */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white mb-4">Alertes Temps Réel</h3>
            {realTimeAlerts.map((alert, index) => (
              <div key={index} className={`border rounded-lg p-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    {alert.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{alert.message}</p>
                    <p className="text-gray-400 text-sm">{alert.time}</p>
                    <p className="text-blue-400 text-sm mt-1">{alert.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Streams Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {dataStreams.map((stream, index) => (
            <button
              key={index}
              onClick={() => setActiveDataStream(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeDataStream === index
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 dark:text-slate-50'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
              }`}
            >
              {stream.title}
            </button>
          ))}
        </div>

        {/* Active Data Stream Details */}
        <div className="mb-12">
          {dataStreams.map((stream, index) => (
            <div
              key={index}
              className={`${activeDataStream === index ? 'block' : 'hidden'}`}
            >
              <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stream.color} rounded-2xl flex items-center justify-center mr-6`}>
                    {stream.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">{stream.title}</h3>
                    <p className="text-blue-400 font-medium">{stream.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8">{stream.description}</p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Metrics */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Métriques en Direct</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {stream.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-slate-700/30 rounded-lg p-4">
                          <div className={`flex items-center mb-2 ${getStatusColor(metric.status)}`}>
                            {metric.icon}
                            <span className="ml-2 text-xs font-medium">●</span>
                          </div>
                          <div className="text-lg font-bold text-gray-900 dark:text-slate-50">{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Fonctionnalités</h4>
                    <ul className="space-y-3">
                      {stream.features.map((feature, idx) => (
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
            Spécifications Techniques Détaillées
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSpecs.map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Cpu className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Video/GIF Placeholder */}
        <div className="mb-12">
          <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Démonstration Visuelle
            </h3>
            <div className="aspect-video bg-gray-50 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-blue-500/30">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-10 h-10 text-white animate-pulse" />
                </div>
                <p className="text-white font-medium mb-2">Vidéo Explicative</p>
                <p className="text-gray-400 text-sm">Collecte et analyse des données en temps réel</p>
                <div className="mt-4 px-6 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  🎥 Vidéo à intégrer
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 dark:bg-slate-900 rounded-2xl p-12 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Transformez Vos Données en Intelligence
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez comment l'analyse temps réel peut révolutionner la gestion 
            de votre exploitation avec une précision inégalée.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all">
              Demander une Démo
            </button>
            <button className="px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all">
              Documentation Technique
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyseDonneesTempsReelPage;

