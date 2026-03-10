import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Smartphone, 
  Tablet, 
  Wifi, 
  Download, 
  Bell,
  MapPin,
  Camera,
  BarChart3,
  Settings,
  Users,
  Shield,
  CheckCircle,
  Star,
  Target,
  Zap,
  Globe,
  Gauge,
  Activity
} from 'lucide-react';

const ApplicationsMobilesPage = () => {
  const navigate = useNavigate();

  const applications = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      name: "AgroNoya Mobile",
      subtitle: "Bureau Mobile Complet",
      description: "Version mobile complète du dashboard principal avec toutes les fonctionnalités de gestion d'exploitation accessibles depuis le terrain.",
      features: [
        "Synchronisation temps réel avec le web",
        "Mode hors-ligne intelligent",
        "Géolocalisation précise des parcelles",
        "Capture photos/vidéos géotaggées"
      ],
      capabilities: [
        "Gestion complète des parcelles",
        "Suivi des interventions terrain",
        "Planification des tâches",
        "Rapports d'activité automatiques"
      ]
    },
    {
      icon: <Tablet className="w-8 h-8" />,
      name: "AgroNoya Irrigation",
      subtitle: "Télécommande Totale",
      description: "Application dédiée au contrôle de l'irrigation avec interface optimisée pour les interventions rapides et le monitoring en temps réel.",
      features: [
        "Contrôle direct vannes/pompes",
        "Monitoring temps réel capteurs",
        "Alertes push intelligentes",
        "Historique consommations détaillé"
      ],
      capabilities: [
        "Démarrage/arrêt à distance",
        "Programmation cycles d'arrosage",
        "Diagnostic pannes automatique",
        "Optimisation consommation eau"
      ]
    }
  ];

  const mobileFeatures = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Synchronisation Intelligente",
      description: "Synchronisation bidirectionnelle automatique entre mobile et web avec résolution intelligente des conflits.",
      specs: [
        "Sync temps réel via WebSocket",
        "Mode hors-ligne avec cache local",
        "Résolution automatique conflits",
        "Backup cloud sécurisé"
      ]
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Alertes Push Contextuelles",
      description: "Système d'alertes intelligent qui s'adapte à votre localisation et vos priorités pour ne jamais manquer l'essentiel.",
      specs: [
        "Géofencing intelligent",
        "Priorisation automatique",
        "Personnalisation par utilisateur",
        "Escalade selon criticité"
      ]
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Capture Terrain Avancée",
      description: "Outils de capture optimisés pour l'agriculture avec géotagging automatique et analyse IA intégrée.",
      specs: [
        "Photos HD géolocalisées",
        "Analyse IA instantanée",
        "Annotations vocales/texte",
        "Partage équipe automatique"
      ]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Navigation Parcellaire",
      description: "Système de navigation spécialisé agriculture avec cartographie précise et guidage optimisé terrain.",
      specs: [
        "Cartes hors-ligne détaillées",
        "Guidage GPS centimétrique",
        "Marquage points d'intérêt",
        "Calcul surfaces automatique"
      ]
    }
  ];

  const technicalSpecs = [
    {
      platform: "iOS",
      requirements: "iOS 14.0+",
      features: [
        "Interface native SwiftUI",
        "Intégration Siri Shortcuts",
        "Widgets iOS personnalisés",
        "Apple Watch companion"
      ]
    },
    {
      platform: "Android",
      requirements: "Android 8.0+",
      features: [
        "Material Design 3",
        "Intégration Google Assistant",
        "Widgets adaptatifs",
        "Wear OS support"
      ]
    },
    {
      platform: "Performance",
      requirements: "Optimisé",
      features: [
        "Démarrage < 2 secondes",
        "Consommation batterie optimisée",
        "Cache intelligent 500MB",
        "Compression données 80%"
      ]
    },
    {
      platform: "Sécurité",
      requirements: "Niveau Enterprise",
      features: [
        "Chiffrement AES-256",
        "Authentification biométrique",
        "VPN intégré optionnel",
        "Audit trail complet"
      ]
    }
  ];

  const useCases = [
    {
      title: "Agriculteur Nomade",
      scenario: "Gestion multi-parcelles avec déplacements fréquents",
      solution: "AgroNoya Mobile + mode hors-ligne",
      benefits: [
        "Accès données partout",
        "Synchronisation automatique",
        "Productivité terrain +40%",
        "Réduction temps administratif"
      ]
    },
    {
      title: "Équipe Technique",
      scenario: "Coordination interventions irrigation 24/7",
      solution: "AgroNoya Irrigation + alertes push",
      benefits: [
        "Réactivité immédiate",
        "Coordination équipe optimisée",
        "Réduction pannes -60%",
        "Satisfaction client +35%"
      ]
    },
    {
      title: "Gestionnaire Exploitation",
      scenario: "Supervision à distance + interventions terrain",
      solution: "Duo applications + synchronisation",
      benefits: [
        "Vision globale permanente",
        "Décisions éclairées terrain",
        "Efficacité opérationnelle +50%",
        "ROI amélioré 25%"
      ]
    }
  ];

  const downloadStats = [
    { metric: "Téléchargements", value: "15,000+", growth: "+120%" },
    { metric: "Note App Store", value: "4.8/5", growth: "⭐⭐⭐⭐⭐" },
    { metric: "Utilisateurs Actifs", value: "8,500+", growth: "+85%" },
    { metric: "Temps Utilisation", value: "45min/jour", growth: "+30%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <button
            onClick={() => navigate('/technologies')}
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux Technologies
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-8">
              <Smartphone className="w-10 h-10 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Applications
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Mobiles
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Miroirs fidèles optimisés terrain. Toute la puissance d'AgroNoya 
              dans votre poche avec 100% des fonctionnalités disponibles partout.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full">
                Miroir Fidèle
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full">
                Mode Hors-ligne
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full">
                Terrain Optimisé
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Applications Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Deux Applications Complémentaires
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Chaque application est spécialisée pour maximiser votre efficacité 
            selon le contexte d'utilisation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {applications.map((app, index) => (
            <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-6">
                  {app.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">{app.name}</h3>
                  <p className="text-purple-400 font-medium">{app.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{app.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Fonctionnalités</h4>
                  <ul className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Capacités</h4>
                  <ul className="space-y-2">
                    {app.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Fonctionnalités Mobiles Avancées
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {mobileFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-50">{feature.title}</h4>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                      <Target className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Spécifications Techniques
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">{spec.platform}</h4>
                <p className="text-gray-400 text-sm mb-4">{spec.requirements}</p>
                <ul className="space-y-2">
                  {spec.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm bg-slate-700/30 rounded-lg px-3 py-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Download Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {downloadStats.map((stat, index) => (
            <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-slate-700 text-center">
              <h4 className="text-2xl font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-gray-400 mb-2">{stat.metric}</p>
              <span className="text-green-400 text-sm font-medium">{stat.growth}</span>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Cas d'Usage Terrain
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <h4 className="text-lg font-bold text-white mb-2">{useCase.title}</h4>
                <p className="text-gray-400 mb-3 text-sm">{useCase.scenario}</p>
                <p className="text-purple-400 font-medium mb-4 text-sm">{useCase.solution}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 dark:bg-slate-900 rounded-2xl p-12 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Emportez AgroNoya Partout Avec Vous
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Téléchargez nos applications mobiles et découvrez la liberté de gérer 
            votre exploitation depuis n'importe où, à tout moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Télécharger les Apps
            </button>
            <button 
              onClick={() => navigate('/pricing')}
              className="px-8 py-3 border border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Voir les Tarifs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsMobilesPage;

