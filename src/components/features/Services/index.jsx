import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Droplets, 
  Zap, 
  Package, 
  Plane, 
  MapPin, 
  ShoppingCart,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Calculator,
  Play
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState({});
  const [roiCalculator, setRoiCalculator] = useState({ hectares: 10, currentCost: 5000 }); // hectares currently unused in calculation
  const sectionRefs = useRef([]);

  // Animation d'apparition au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.index]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Données des services avec impacts réels
  const services = [
    {
      id: 'agrosol',
      title: 'AgroSol',
      subtitle: 'Capteurs IoT Intelligents',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      price: '2500 DTN',
      subscription: '1200 DTN/an',
      description: 'Capteurs NPK/pH/température connectés + IA NoyaSol pour analyser la fertilité des sols et fournir des recommandations localisées.',
      impact: '+10-15% de rendement / -30% intrants / recommandations localisées',
      features: [
        'Capteurs NPK/pH/température en temps réel',
        'IA NoyaSol pour analyse prédictive',
        'Recommandations personnalisées',
        'Dashboard mobile et web',
        'Alertes automatiques',
        'Historique des données'
      ],
      benefits: [
        'Optimisation de la fertilisation',
        'Réduction des coûts d\'intrants',
        'Amélioration de la qualité des sols',
        'Décisions basées sur les données'
      ],
      testimonial: {
        name: 'Ahmed Ben Salem',
        location: 'Kairouan',
        text: 'Avec AgroSol, j\'ai augmenté mes rendements de 12% tout en réduisant mes coûts d\'engrais de 25%. Un investissement rentabilisé en 8 mois !',
        rating: 5
      },
      process: [
        'Installation des capteurs sur votre terrain',
        'Configuration de l\'IA NoyaSol',
        'Formation à l\'utilisation du dashboard',
        'Suivi et optimisation continue'
      ]
    },
    {
      id: 'irrigation-standard',
      title: 'AgroIrrigation Standard',
      subtitle: 'Système d\'Irrigation Intelligent',
      icon: Droplets,
      color: 'from-green-500 to-emerald-500',
      price: '1100 DTN',
      description: 'Système d\'irrigation intelligent avec électrovannes moyennes pour une gestion optimisée de l\'eau.',
      impact: '+15% productivité / -50% eau utilisée / gestion optimisée',
      features: [
        'Électrovannes moyennes (3 unités)',
        'Système de contrôle intelligent',
        'Programmation automatique',
        'Capteurs d\'humidité du sol',
        'Interface de contrôle simple',
        'Maintenance préventive'
      ],
      benefits: [
        'Économie d\'eau significative',
        'Irrigation précise et ciblée',
        'Réduction de la main d\'œuvre',
        'Amélioration de la croissance'
      ],
      testimonial: {
        name: 'Fatma Trabelsi',
        location: 'Sfax',
        text: 'L\'irrigation intelligente a transformé ma production. 40% d\'économie d\'eau et des légumes plus beaux que jamais !',
        rating: 5
      },
      process: [
        'Étude de votre terrain et besoins',
        'Installation du système complet',
        'Programmation personnalisée',
        'Formation et mise en service'
      ]
    },
    {
      id: 'irrigation-smart',
      title: 'AgroIrrigation Smart',
      subtitle: 'Irrigation IA Avancée',
      icon: Zap,
      color: 'from-purple-500 to-indigo-500',
      price: '2000 DTN',
      subscription: '1000 DTN/an',
      description: 'Système d\'irrigation intelligent avancé avec IA pour optimisation automatique de la consommation d\'eau.',
      impact: '+15% productivité / -50% eau utilisée / gestion optimisée',
      features: [
        'IA d\'optimisation avancée',
        'Capteurs météo intégrés',
        'Gestion multi-zones',
        'Prédiction des besoins hydriques',
        'Intégration satellite',
        'Rapports détaillés'
      ],
      benefits: [
        'Optimisation automatique',
        'Prédiction météorologique',
        'Gestion intelligente des zones',
        'ROI maximisé'
      ],
      testimonial: {
        name: 'Mohamed Gharbi',
        location: 'Monastir',
        text: 'L\'IA prédit parfaitement les besoins en eau. Mes oliviers n\'ont jamais été aussi productifs avec si peu d\'eau !',
        rating: 5
      },
      process: [
        'Analyse IA de votre exploitation',
        'Installation système avancé',
        'Configuration algorithmes IA',
        'Optimisation continue automatique'
      ]
    },
    {
      id: 'pack-premium',
      title: 'Pack Premium',
      subtitle: 'IoT + Smart Irrigation',
      icon: Package,
      color: 'from-orange-500 to-red-500',
      price: '4300 DTN',
      subscription: '2000 DTN/an',
      description: 'Pack complet premium incluant AgroSol + AgroIrrigation Smart pour une exploitation intelligente complète.',
      impact: 'Solution complète / Réduction complexité décisionnelle / Actions prioritaires',
      features: [
        'AgroSol + AgroIrrigation Smart',
        'Dashboard unifié',
        'IA intégrée complète',
        'Support premium 24/7',
        'Formation avancée',
        'Garantie performance'
      ],
      benefits: [
        'Solution tout-en-un',
        'Synergie des technologies',
        'Support prioritaire',
        'ROI optimisé'
      ],
      testimonial: {
        name: 'Sami Bouazizi',
        location: 'Sousse',
        text: 'Le Pack Premium a révolutionné mon exploitation. 18% d\'augmentation de rendement et 35% d\'économies !',
        rating: 5
      },
      process: [
        'Audit complet de l\'exploitation',
        'Installation intégrée complète',
        'Configuration système unifié',
        'Accompagnement personnalisé'
      ]
    },
    {
      id: 'drone-fertilisation',
      title: 'Service Drone Fertilisation',
      subtitle: 'Pulvérisation de Précision',
      icon: Plane,
      color: 'from-teal-500 to-cyan-500',
      price: '60 DTN/ha',
      description: 'Service de pulvérisation par drone pour fertilisation et traitement phytosanitaire de précision.',
      impact: 'Précision centimétrique / -30% produits / +25% efficacité',
      features: [
        'Drones professionnels haute précision',
        'Cartographie préalable',
        'Pulvérisation ciblée',
        'Produits bio compatibles',
        'Rapport d\'intervention',
        'Suivi post-traitement'
      ],
      benefits: [
        'Précision maximale',
        'Économie de produits',
        'Rapidité d\'intervention',
        'Accès zones difficiles'
      ],
      testimonial: {
        name: 'Nadia Hamdi',
        location: 'Bizerte',
        text: 'Les drones traitent mes 50 hectares en 2 heures au lieu de 2 jours. Précision parfaite et économies garanties !',
        rating: 5
      },
      process: [
        'Planification de vol et cartographie',
        'Préparation des produits',
        'Intervention drone précise',
        'Rapport et recommandations'
      ]
    },
    {
      id: 'drone-ground-truth',
      title: 'Service Drone Ground Truth',
      subtitle: 'Surveillance et Analyse',
      icon: MapPin,
      color: 'from-pink-500 to-rose-500',
      price: '45 DTN/ha',
      description: 'Service de surveillance aérienne par drone pour cartographie, analyse NDVI/NDWI et détection précoce.',
      impact: 'Détection précoce / Intervention ciblée / Réduction pertes phytosanitaires',
      features: [
        'Cartographie multispectrale',
        'Analyse NDVI/NDWI',
        'Détection des maladies',
        'Cartes de prescription',
        'Suivi évolution cultures',
        'Rapports détaillés'
      ],
      benefits: [
        'Détection précoce problèmes',
        'Cartographie précise',
        'Optimisation traitements',
        'Suivi temporel'
      ],
      testimonial: {
        name: 'Karim Sassi',
        location: 'Gabès',
        text: 'Le drone détecte les problèmes 2 semaines avant que je les voie. J\'ai sauvé ma récolte d\'agrumes grâce à ça !',
        rating: 5
      },
      process: [
        'Vol de reconnaissance initial',
        'Analyse multispectrale',
        'Génération cartes et rapports',
        'Recommandations d\'action'
      ]
    },
    {
      id: 'agrostore',
      title: 'AgroStore',
      subtitle: 'Marketplace Agricole',
      icon: ShoppingCart,
      color: 'from-yellow-500 to-orange-500',
      price: 'Commission 3%',
      description: 'Plateforme de vente en ligne pour commercialiser vos produits agricoles directement aux consommateurs.',
      impact: '+10% chiffre d\'affaires / circuits courts / réduction intermédiaires',
      features: [
        'Boutique en ligne personnalisée',
        'Gestion des commandes',
        'Paiement sécurisé',
        'Logistique intégrée',
        'Marketing digital',
        'Analytics de ventes'
      ],
      benefits: [
        'Vente directe consommateurs',
        'Marges améliorées',
        'Visibilité en ligne',
        'Gestion simplifiée'
      ],
      testimonial: {
        name: 'Leila Mejri',
        location: 'Nabeul',
        text: 'AgroStore m\'a permis de vendre mes fraises directement. 40% de marge en plus et des clients fidèles !',
        rating: 5
      },
      process: [
        'Création de votre boutique',
        'Formation à la gestion',
        'Lancement et promotion',
        'Support continu'
      ]
    }
  ];

  // Calculateur ROI
  const calculateROI = () => {
    const { currentCost } = roiCalculator; // hectares unused for now
    const avgSavings = currentCost * 0.25; // 25% d'économies moyennes
    const avgIncrease = currentCost * 0.15; // 15% d'augmentation revenus
    const totalBenefit = avgSavings + avgIncrease;
    const investmentCost = 2500; // Coût moyen AgroSol
    const roi = ((totalBenefit - investmentCost) / investmentCost * 100);
    const paybackMonths = Math.ceil(investmentCost / (totalBenefit / 12));
    
    return { totalBenefit, roi, paybackMonths };
  };

  const { totalBenefit, roi, paybackMonths } = calculateROI();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#cfb989]/15 to-[#cfb989]/5 text-white overflow-hidden">
      {/* Hero Section Dynamique */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#cfb989]/20 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#cfb989]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#cfb989]/20 px-6 py-3 rounded-full mb-6 animate-bounce">
              <Award className="w-5 h-5 text-[#cfb989]" />
              <span className="text-[#cfb989] font-semibold">7 Services Révolutionnaires</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#cfb989] to-white bg-clip-text text-transparent animate-fade-in">
              Nos Services
              <span className="block text-[#cfb989]">AgroNoya</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transformez votre exploitation avec nos solutions intelligentes. 
              De l'analyse du sol à la commercialisation, nous révolutionnons chaque étape de votre agriculture.
            </p>

            {/* Stats Dynamiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: '1400+', label: 'Agriculteurs', icon: Users },
                { value: '25%', label: 'Économies Moyennes', icon: TrendingUp },
                { value: '15%', label: 'Rendement +', icon: Award },
                { value: '24/7', label: 'Support', icon: Shield }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <stat.icon className="w-8 h-8 text-[#cfb989] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculateur ROI Interactif */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#cfb989]/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <Calculator className="w-12 h-12 text-[#cfb989] mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Calculateur ROI Intelligent</h2>
              <p className="text-gray-300">Découvrez votre retour sur investissement avec nos solutions</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Superficie (hectares)</label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={roiCalculator.hectares}
                    onChange={(e) => setRoiCalculator(prev => ({ ...prev, hectares: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-center mt-2 text-[#cfb989] font-bold text-xl">{roiCalculator.hectares} ha</div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Coûts actuels annuels (DTN)</label>
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={roiCalculator.currentCost}
                    onChange={(e) => setRoiCalculator(prev => ({ ...prev, currentCost: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-center mt-2 text-[#cfb989] font-bold text-xl">{roiCalculator.currentCost.toLocaleString()} DTN</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#cfb989]/20 to-transparent rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Résultats Prédictifs</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Bénéfices annuels:</span>
                    <span className="text-green-400 font-bold">{totalBenefit.toLocaleString()} DTN</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ROI:</span>
                    <span className="text-[#cfb989] font-bold">{roi.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Retour investissement:</span>
                    <span className="text-blue-400 font-bold">{paybackMonths} mois</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="text-sm text-gray-400 mb-2">Économies potentielles sur 3 ans</div>
                  <div className="text-3xl font-bold text-green-400">{(totalBenefit * 3).toLocaleString()} DTN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Révolutionnaire */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#cfb989] to-white bg-clip-text text-transparent">
              Solutions Intelligentes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Chaque service est conçu pour maximiser vos rendements et optimiser vos coûts
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={el => sectionRefs.current[index] = el}
                data-index={index}
                className={`
                  group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10
                  hover:bg-white/10 hover:border-[#cfb989]/50 transition-all duration-500
                  hover:scale-105 hover:shadow-2xl hover:shadow-[#cfb989]/20
                  ${isVisible[index] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header avec icône animée */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#cfb989] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.subtitle}</p>
                  </div>
                </div>

                {/* Prix avec animation */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-[#cfb989]">{service.price}</span>
                    {service.subscription && (
                      <span className="text-sm text-gray-400">+ {service.subscription}</span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Impact avec badge */}
                <div className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-transparent rounded-xl border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">Impact Estimé</span>
                  </div>
                  <p className="text-green-300 text-sm">{service.impact}</p>
                </div>

                {/* Features avec animations */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-white">Fonctionnalités Clés:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#cfb989] flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Témoignage client */}
                <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(service.testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-2 italic">"{service.testimonial.text}"</p>
                  <div className="text-[#cfb989] text-sm font-semibold">
                    {service.testimonial.name} - {service.testimonial.location}
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="space-y-3">
                  <Link
                    to={`/services-details/${service.id === 'irrigation-standard' ? 'agro-irrigation-standard' : 
                         service.id === 'irrigation-smart' ? 'agro-irrigation-smart' : 
                         service.id === 'pack-premium' ? 'pack-premium' :
                         service.id === 'drone-fertilisation' ? 'service-drone-fertilisation' :
                         service.id === 'drone-ground-truth' ? 'service-drone-ground-truth' :
                         service.id === 'agro-store' ? 'agro-store' : 
                         service.id === 'agrosol' ? 'agro-sol' : service.id}`}
                    className="w-full bg-gradient-to-r from-[#cfb989] to-[#b8a578] hover:from-[#b8a578] hover:to-[#cfb989] text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Voir les Détails</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <button className="w-full border border-[#cfb989] text-[#cfb989] hover:bg-[#cfb989] hover:text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Demander un Devis</span>
                  </button>
                </div>

                {/* Badge de popularité */}
                {index < 3 && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    Populaire
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Processus */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#cfb989]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Notre Processus d'Excellence</h2>
            <p className="text-xl text-gray-300">4 étapes simples pour transformer votre agriculture</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analyse', desc: 'Audit complet de votre exploitation', icon: MapPin },
              { step: '02', title: 'Installation', desc: 'Mise en place des solutions', icon: Zap },
              { step: '03', title: 'Formation', desc: 'Accompagnement personnalisé', icon: Users },
              { step: '04', title: 'Optimisation', desc: 'Suivi et amélioration continue', icon: TrendingUp }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#cfb989] to-[#b8a578] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <process.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{process.title}</h3>
                <p className="text-gray-300">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#cfb989]/20 to-transparent rounded-3xl p-12 border border-[#cfb989]/30">
            <h2 className="text-4xl font-bold mb-6">Prêt à Révolutionner Votre Agriculture ?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez plus de 1400 agriculteurs qui ont déjà transformé leur exploitation avec AgroNoya
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#cfb989] to-[#b8a578] hover:from-[#b8a578] hover:to-[#cfb989] text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Consultation Gratuite</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="border border-[#cfb989] text-[#cfb989] hover:bg-[#cfb989] hover:text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                <span>Voir la Démo</span>
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              ✓ Consultation gratuite • ✓ Devis personnalisé • ✓ Support 24/7
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #cfb989;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #cfb989;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default Services;

