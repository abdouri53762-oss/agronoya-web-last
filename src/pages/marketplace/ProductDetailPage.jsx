import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Star, TrendingUp, AlertTriangle, Target, Award, ShoppingCart, Phone } from 'lucide-react';

const ProductDetailPage = () => {
  const { productId } = useParams();

  const products = {
    1: {
      name: 'AgroSol',
      description: 'Capteurs NPK/pH/température connectés + IA NoyaSol pour analyser la fertilité des sols et fournir des recommandations localisées.',
      price: 2500,
      subscription: { price: 1200, period: 'an', name: 'Abonnement' },
      image: '/src/assets/agro_sol.png',
      badge: 'Système',
      rating: 4.9,
      reviews: 127,
      problem: 'Manque de données continues et localisées sur la fertilité des sols',
      impact: '+10-15% de rendement / -30% intrants / recommandations localisées',
      features: [
        'Capteurs NPK/pH/température haute précision',
        'IA NoyaSol intégrée avec apprentissage continu',
        'Recommandations localisées en temps réel',
        'Connectivité LoRaWAN longue portée',
        'Batterie longue durée (5+ ans)',
        'Interface mobile intuitive',
        'Alertes automatiques',
        'Historique des données'
      ],
      benefits: [
        'Augmentation du rendement de 10 à 15%',
        'Réduction des intrants de 30%',
        'Économies annuelles estimées : 2500-4000 DTN/ha',
        'ROI en moins de 2 saisons',
        'Réduction de l\'impact environnemental',
        'Optimisation des coûts de fertilisation'
      ],
      testimonial: {
        text: "Avec AgroSol, j'ai augmenté mes rendements de 12% dès la première saison tout en réduisant mes coûts d'engrais de 35%. L'investissement s'est amorti en 18 mois !",
        author: "Ahmed Ben Salem",
        location: "Kairouan, Tunisie",
        crop: "Blé dur"
      }
    },
    2: {
      name: 'AgroIrrigation Standard',
      description: 'Système d\'irrigation intelligent avec électrovannes moyennes pour une gestion optimisée de l\'eau.',
      price: 1100,
      image: '/src/assets/agro_irrigation.png',
      badge: 'Système',
      rating: 4.7,
      reviews: 89,
      problem: 'Gaspillage d\'eau et stress hydrique dus à une irrigation non pilotée',
      impact: '+15% productivité / -50% eau utilisée / gestion optimisée',
      features: [
        'Électrovannes moyennes haute qualité (3 unités)',
        'Système de contrôle intelligent programmable',
        'Capteurs d\'humidité du sol',
        'Programmation automatique avancée',
        'Interface mobile dédiée',
        'Surveillance en temps réel',
        'Alertes de maintenance',
        'Compatibilité multi-cultures'
      ],
      benefits: [
        'Augmentation de la productivité de 15%',
        'Réduction de la consommation d\'eau de 50%',
        'Économies d\'eau : 1500-2500 DTN/an',
        'ROI en 2-3 saisons',
        'Réduction du stress hydrique des cultures',
        'Optimisation du temps de travail'
      ],
      testimonial: {
        text: "L'AgroIrrigation Standard a transformé ma gestion de l'eau. J'économise 60% d'eau et mes tomates n'ont jamais été aussi belles !",
        author: "Fatma Trabelsi",
        location: "Monastir, Tunisie",
        crop: "Tomates sous serre"
      }
    },
    3: {
      name: 'AgroIrrigation Smart',
      description: 'Système d\'irrigation intelligent avancé avec IA pour optimisation automatique de la consommation d\'eau.',
      price: 2000,
      subscription: { price: 1000, period: 'an', name: 'Abonnement' },
      image: '/src/assets/agro_irrigation.png',
      badge: 'Système',
      rating: 4.8,
      reviews: 156,
      problem: 'Gaspillage d\'eau et stress hydrique dus à une irrigation non pilotée',
      impact: '+15% productivité / -50% eau utilisée / gestion optimisée',
      features: [
        'IA d\'optimisation avancée avec machine learning',
        'Capteurs météo intégrés (température, humidité, vent)',
        'Gestion multi-zones intelligente',
        'Analyse prédictive des besoins hydriques',
        'Contrôle à distance via app mobile',
        'Intégration données satellite',
        'Rapports détaillés automatisés',
        'Maintenance prédictive'
      ],
      benefits: [
        'Augmentation de la productivité de 15%',
        'Réduction de la consommation d\'eau de 50%',
        'Économies d\'eau : 2000-3500 DTN/an',
        'ROI en 2 saisons',
        'Gestion automatisée complète',
        'Prévention du stress hydrique'
      ],
      testimonial: {
        text: "L'IA d'AgroIrrigation Smart anticipe parfaitement les besoins de mes oliviers. Mes rendements ont augmenté de 18% avec 45% d'eau en moins !",
        author: "Mohamed Karray",
        location: "Sfax, Tunisie",
        crop: "Oliveraie"
      }
    },
    4: {
      name: 'Premium Bundle',
      description: 'Pack complet premium incluant tous les équipements pour une exploitation intelligente complète.',
      price: 4300,
      image: '/src/assets/smart_farming_1.jpg',
      badge: 'Premium',
      rating: 4.9,
      reviews: 234,
      problem: 'Données multiples, dispersées et difficiles à interpréter',
      impact: 'Solution complète / Réduction complexité décisionnelle / Actions prioritaires',
      features: [
        'AgroSol + AgroIrrigation Smart inclus',
        'Dashboard intégré complet',
        'Formation complète sur site (2 jours)',
        'Support prioritaire 24/7',
        'Maintenance préventive incluse',
        'Mises à jour logicielles gratuites',
        'Garantie étendue 5 ans',
        'Consultation agronomique mensuelle'
      ],
      benefits: [
        'Solution clé en main complète',
        'ROI combiné en 1.5 saison',
        'Économies totales : 5000-8000 DTN/an',
        'Réduction de 70% du temps de gestion',
        'Augmentation globale de productivité de 25%',
        'Accompagnement expert continu'
      ],
      testimonial: {
        text: "Le Premium Bundle a révolutionné mon exploitation. Tout est connecté, automatisé et optimisé. Mes bénéfices ont doublé en 2 ans !",
        author: "Slim Bouazizi",
        location: "Béja, Tunisie",
        crop: "Céréales et légumineuses"
      }
    },
    5: {
      name: 'Abonnement Premium',
      description: 'Abonnement premium avec accès à toutes les fonctionnalités avancées et support dédié.',
      price: 2000,
      isSubscription: true,
      period: 'an',
      image: '/src/assets/dashboard_agronoya.png',
      badge: 'Abonnement',
      rating: 4.8,
      reviews: 312,
      problem: 'Absence de plateforme centralisée pour transformer les données en action',
      impact: 'Décisions automatisées / Gain de temps / Actions prioritaires',
      features: [
        'Accès complet à la plateforme AgroNoya',
        'Analyses IA avancées en temps réel',
        'Rapports détaillés automatisés',
        'Support technique 24/7',
        'Mises à jour continues incluses',
        'Intégration données satellite',
        'Alertes intelligentes personnalisées',
        'Consultation agronomique mensuelle'
      ],
      benefits: [
        'Centralisation de toutes les données',
        'Décisions agronomiques automatisées',
        'Gain de temps de 60% sur la gestion',
        'Amélioration des rendements de 20%',
        'Réduction des risques de 40%',
        'Accompagnement expert continu'
      ],
      testimonial: {
        text: "L'abonnement Premium me fait gagner 15h par semaine. Toutes mes données sont centralisées et les recommandations IA sont très précises !",
        author: "Leila Mansouri",
        location: "Nabeul, Tunisie",
        crop: "Maraîchage diversifié"
      }
    },
    6: {
      name: 'Service Drone Agricole',
      description: 'Service de surveillance aérienne par drone pour cartographie et analyse de vos cultures.',
      price: 60,
      isPerHectare: true,
      unit: 'DTN/ha',
      image: '/src/assets/drone_multispectral.png',
      badge: 'Service',
      rating: 4.9,
      reviews: 78,
      problem: 'Résolution insuffisante pour détecter les anomalies localisées',
      impact: 'Détection précoce / Intervention ciblée / Réduction pertes phytosanitaires',
      features: [
        'Cartographie multispectrale haute résolution',
        'Analyse NDVI/NDWI professionnelle',
        'Détection précoce des maladies',
        'Rapport détaillé avec recommandations',
        'Cartographie des zones à problèmes',
        'Suivi de l\'évolution temporelle',
        'Intervention sur rendez-vous',
        'Données exportables'
      ],
      benefits: [
        'Détection précoce des problèmes (48h d\'avance)',
        'Réduction des pertes de 30%',
        'Intervention ciblée et économique',
        'Cartographie précise des parcelles',
        'Optimisation des traitements',
        'Suivi professionnel régulier'
      ],
      testimonial: {
        text: "Le service drone a détecté une maladie sur mes agrumes 3 jours avant que je la voie. J'ai pu traiter rapidement et sauver 90% de ma récolte !",
        author: "Karim Zouari",
        location: "Nabeul, Tunisie",
        crop: "Agrumes"
      }
    }
  };

  const product = products[productId];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Produit non trouvé</h1>
          <Link to="/pricing" className="text-agronoya-green hover:underline">
            Retour au Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1C191F' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Link 
          to="/pricing" 
          className="inline-flex items-center text-white hover:text-agronoya-green mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour au Marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image et infos de base */}
          <div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-4 py-2 rounded-full text-white font-semibold ${
                    product.badge === 'Système' ? 'bg-blue-500' :
                    product.badge === 'Premium' ? 'bg-purple-500' :
                    product.badge === 'Abonnement' ? 'bg-green-500' :
                    'bg-orange-500'
                  }`}>
                    {product.badge}
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-gray-600">
                      {product.rating} ({product.reviews} avis)
                    </span>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="text-4xl font-bold text-agronoya-green mb-2">
                  {product.price} DTN
                  {product.isPerHectare && <span className="text-lg"> {product.unit}</span>}
                  {product.isSubscription && <span className="text-lg"> /{product.period}</span>}
                </div>
                
                {product.subscription && (
                  <div className="text-lg text-gray-600 mb-6">
                    + {product.subscription.name}: {product.subscription.price} DTN/{product.subscription.period}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Détails et arguments */}
          <div className="text-white">
            {/* Problème résolu */}
            <div className="bg-red-900/30 border-l-4 border-red-500 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-3">
                <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
                <h3 className="text-xl font-bold text-red-300">Problème résolu</h3>
              </div>
              <p className="text-red-100">{product.problem}</p>
            </div>

            {/* Impact */}
            <div className="bg-green-900/30 border-l-4 border-green-500 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-3">
                <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-green-300">Impact estimé</h3>
              </div>
              <p className="text-green-100 text-lg font-semibold">{product.impact}</p>
            </div>

            {/* Fonctionnalités */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-agronoya-green" />
                Fonctionnalités complètes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-agronoya-green mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bénéfices */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-agronoya-green" />
                Bénéfices concrets
              </h3>
              <div className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white/5 p-3 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Témoignage */}
            <div className="bg-agronoya-green/20 border border-primary/30 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-agronoya-green">Témoignage client</h3>
              <blockquote className="text-lg italic mb-4">"{product.testimonial.text}"</blockquote>
              <div className="flex items-center">
                <div>
                  <div className="font-bold">{product.testimonial.author}</div>
                  <div className="text-sm text-gray-300">{product.testimonial.location}</div>
                  <div className="text-sm text-agronoya-green">{product.testimonial.crop}</div>
                </div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="space-y-4">
              <button className="w-full bg-agronoya-green hover:bg-agronoya-green-dark text-white py-4 px-8 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 mr-3" />
                Commander maintenant
              </button>
              <button className="w-full border-2 border-primary text-agronoya-green hover:bg-agronoya-green hover:text-white py-4 px-8 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                Demander un devis personnalisé
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

