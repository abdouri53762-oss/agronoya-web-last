import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  TrendingUp, 
  Leaf, 
  DollarSign, 
  Globe, 
  Users,
  ShoppingCart,
  Award,
  BarChart3,
  Target,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Heart,
  Recycle,
  TreePine,
  Coins
} from 'lucide-react';

const EcosystemeEconomiqueDurablePage = () => {
  const navigate = useNavigate();

  const ecosystemPillars = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "AgroNoya Store",
      subtitle: "Marketplace Agricole Intelligente",
      description: "Plateforme de commerce électronique spécialisée agriculture qui connecte producteurs, fournisseurs et consommateurs dans un écosystème économique intégré.",
      features: [
        "Marketplace B2B/B2C intégrée",
        "Système de recommandations IA",
        "Traçabilité blockchain complète",
        "Paiements sécurisés multi-devises"
      ],
      benefits: [
        "Accès marchés internationaux",
        "Réduction intermédiaires -60%",
        "Marges augmentées +35%",
        "Visibilité produits 24/7"
      ]
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "CarbonTrack",
      subtitle: "Monétisation Agriculture Durable",
      description: "Système de certification et monétisation des pratiques agricoles durables avec génération automatique de crédits carbone valorisables.",
      features: [
        "Calcul empreinte carbone automatique",
        "Certification pratiques durables",
        "Génération crédits carbone",
        "Marketplace crédits intégrée"
      ],
      benefits: [
        "Revenus additionnels durables",
        "Certification internationale",
        "Impact environnemental positif",
        "Valorisation pratiques vertes"
      ]
    }
  ];

  const economicImpacts = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Diversification des Revenus",
      description: "Création de nouvelles sources de revenus durables au-delà de la production agricole traditionnelle.",
      impacts: [
        "Vente directe consommateurs",
        "Services agro-touristiques",
        "Crédits carbone valorisés",
        "Consulting expertise terrain"
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Accès Marchés Globaux",
      description: "Ouverture vers les marchés internationaux avec traçabilité complète et certifications reconnues.",
      impacts: [
        "Export facilité et sécurisé",
        "Certifications internationales",
        "Partenariats stratégiques",
        "Visibilité marques globales"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Développement Communautaire",
      description: "Renforcement du tissu économique local avec création d'emplois et développement des compétences.",
      impacts: [
        "Emplois locaux qualifiés",
        "Formation continue équipes",
        "Coopération inter-exploitations",
        "Innovation collaborative"
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence et Reconnaissance",
      description: "Positionnement premium avec reconnaissance de l'excellence et des pratiques innovantes.",
      impacts: [
        "Labels qualité premium",
        "Prix et reconnaissances",
        "Média et communication",
        "Leadership sectoriel"
      ]
    }
  ];

  const sustainabilityMetrics = [
    {
      category: "Impact Environnemental",
      metrics: [
        { label: "Réduction CO2", value: "-45%", icon: "🌱" },
        { label: "Économie d'eau", value: "-35%", icon: "💧" },
        { label: "Biodiversité", value: "+60%", icon: "🦋" },
        { label: "Sols régénérés", value: "+40%", icon: "🌾" }
      ]
    },
    {
      category: "Performance Économique",
      metrics: [
        { label: "Revenus diversifiés", value: "+55%", icon: "💰" },
        { label: "Marges améliorées", value: "+35%", icon: "📈" },
        { label: "Coûts réduits", value: "-25%", icon: "📉" },
        { label: "ROI global", value: "+85%", icon: "🎯" }
      ]
    },
    {
      category: "Impact Social",
      metrics: [
        { label: "Emplois créés", value: "+120%", icon: "👥" },
        { label: "Formation heures", value: "2,400h", icon: "🎓" },
        { label: "Satisfaction équipe", value: "94%", icon: "😊" },
        { label: "Partenariats", value: "+200%", icon: "🤝" }
      ]
    }
  ];

  const carbonCreditsSystem = [
    {
      step: "Mesure",
      description: "Calcul automatique empreinte carbone",
      details: [
        "Capteurs IoT multi-paramètres",
        "Analyse satellite NDVI/NDWI",
        "Modèles IA prédictifs",
        "Certification blockchain"
      ]
    },
    {
      step: "Certification",
      description: "Validation pratiques durables",
      details: [
        "Audit automatisé continu",
        "Standards internationaux",
        "Traçabilité complète",
        "Certification tiers"
      ]
    },
    {
      step: "Génération",
      description: "Création crédits carbone",
      details: [
        "Calcul impact réel",
        "Génération automatique",
        "Tokenisation blockchain",
        "Validation marché"
      ]
    },
    {
      step: "Monétisation",
      description: "Vente sur marketplace",
      details: [
        "Marketplace intégrée",
        "Prix marché temps réel",
        "Transactions sécurisées",
        "Revenus automatiques"
      ]
    }
  ];

  const successStories = [
    {
      farm: "Ferme Bio Excellence Monastir",
      area: "150 hectares",
      transformation: "Transition complète vers agriculture régénérative",
      timeline: "18 mois",
      results: {
        environmental: [
          "Séquestration CO2: 450 tonnes/an",
          "Biodiversité: +75%",
          "Qualité sols: +65%",
          "Consommation eau: -40%"
        ],
        economic: [
          "Revenus crédits carbone: 35,000 TND/an",
          "Ventes directes: +180%",
          "Marges produits: +45%",
          "Coûts intrants: -30%"
        ],
        social: [
          "Emplois créés: 12 postes",
          "Formation équipe: 480h",
          "Partenariats: 8 nouveaux",
          "Reconnaissance: 3 prix"
        ]
      }
    },
    {
      farm: "Coopérative Durable Kairouan",
      area: "320 hectares",
      transformation: "Mutualisation ressources + marketplace collective",
      timeline: "24 mois",
      results: {
        environmental: [
          "Impact carbone: -55%",
          "Économie ressources: -45%",
          "Écosystème restauré: 85%",
          "Énergies renouvelables: 100%"
        ],
        economic: [
          "Chiffre affaires: +220%",
          "Nouveaux marchés: 15",
          "Revenus membres: +65%",
          "Investissements: 180,000 TND"
        ],
        social: [
          "Membres actifs: 45",
          "Emplois indirects: 35",
          "Formation continue: 1,200h",
          "Impact communautaire: Très élevé"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <button
            onClick={() => navigate('/technologies')}
            className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux Technologies
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-8">
              <TrendingUp className="w-10 h-10 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Écosystème Économique
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Durable
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Prospérer ensemble. AgroNoya transcende l'analyse pour devenir moteur de 
              développement économique, environnemental et social.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full">
                Revenus Diversifiés
              </span>
              <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full">
                Impact Positif
              </span>
              <span className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full">
                Développement Durable
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Deux Piliers de l'Écosystème
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            AgroNoya Store et CarbonTrack transforment votre exploitation en 
            moteur de développement économique et environnemental.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {ecosystemPillars.map((pillar, index) => (
            <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-6">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">{pillar.title}</h3>
                  <p className="text-green-400 font-medium">{pillar.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{pillar.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Fonctionnalités</h4>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => (
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
                    {pillar.benefits.map((benefit, idx) => (
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

        {/* Economic Impacts */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Impacts Économiques Transformateurs
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {economicImpacts.map((impact, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    {impact.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-slate-50">{impact.title}</h4>
                </div>
                <p className="text-gray-300 mb-4">{impact.description}</p>
                <ul className="space-y-1">
                  {impact.impacts.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                      <Target className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Metrics */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Métriques de Durabilité Mesurées
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {sustainabilityMetrics.map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <h4 className="text-xl font-bold text-white mb-6 text-center">{category.category}</h4>
                <div className="space-y-4">
                  {category.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-slate-700/30 rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-green-400">{metric.value}</div>
                        <div className="text-gray-300 text-sm">{metric.label}</div>
                      </div>
                      <div className="text-2xl">{metric.icon}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carbon Credits System */}
        <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Système CarbonTrack - Du Carbone aux Revenus
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {carbonCreditsSystem.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">{step.step}</h4>
                <p className="text-gray-400 text-sm mb-4">{step.description}</p>
                <ul className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-300 text-xs bg-slate-700/30 rounded px-2 py-1">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Histoires de Succès Documentées
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">{story.farm}</h4>
                  <p className="text-green-400 font-medium mb-2">{story.area}</p>
                  <p className="text-gray-400 mb-2">{story.transformation}</p>
                  <p className="text-blue-400 text-sm">{story.timeline}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-green-400 font-semibold mb-2">🌱 Impact Environnemental</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {story.results.environmental.map((result, idx) => (
                        <div key={idx} className="bg-green-900/20 rounded px-2 py-1">
                          <p className="text-green-300 text-xs">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-yellow-400 font-semibold mb-2">💰 Impact Économique</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {story.results.economic.map((result, idx) => (
                        <div key={idx} className="bg-yellow-900/20 rounded px-2 py-1">
                          <p className="text-yellow-300 text-xs">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-blue-400 font-semibold mb-2">👥 Impact Social</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {story.results.social.map((result, idx) => (
                        <div key={idx} className="bg-blue-900/20 rounded px-2 py-1">
                          <p className="text-blue-300 text-xs">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 dark:bg-slate-900 rounded-2xl p-12 border border-green-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Transformez Votre Impact en Prospérité Durable
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez l'écosystème AgroNoya et découvrez comment transformer votre 
            exploitation en moteur de développement économique, environnemental et social.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Rejoindre l'Écosystème
            </button>
            <button 
              onClick={() => navigate('/pricing')}
              className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-white transition-all duration-300"
            >
              Voir les Opportunités
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemeEconomiqueDurablePage;

