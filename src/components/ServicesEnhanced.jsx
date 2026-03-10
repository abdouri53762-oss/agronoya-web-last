import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Droplets, 
  Bot, 
  Satellite, 
  Plane, 
  Store, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesEnhanced = () => {
  const [visibleServices, setVisibleServices] = useState([]);

  const services = [
    {
      id: 'agro-sol',
      icon: Leaf,
      title: 'Agro Sol',
      subtitle: 'Analyse du sol et fertilité',
      url: '/services/agro-sol',
      description: 'Révolutionnez la compréhension de votre sol. Passez d\'une fertilisation aléatoire à une gestion intelligente et durable grâce à des données précises sur la fertilité et les carences.',
      features: [
        'Capteurs IoT : pH, salinité, humidité, température',
        'Capteurs NPK avancés',
        'Algorithmes d\'analyse prédictive',
        'Recommandations de fertilisation précises'
      ],
      detailedDescription: 'Agro Sol révolutionne la compréhension du sol. L\'agriculteur ne travaille plus à l\'instinct mais sur des données précises révélant la fertilité et les carences. Ainsi, il traite la terre comme un organisme vivant qui exige équilibre et soins, passant d\'une fertilisation aléatoire à une gestion intelligente et durable.',
      components: [
        'Capteurs IoT : pH, salinité, humidité, température',
        'Capteurs NPK haute précision',
        'Algorithmes d\'analyse prédictive avancés',
        'Système de transmission de données en temps réel'
      ],
      functions: [
        'Diagnostic complet du sol',
        'Recommandations de fertilisation précises',
        'Suivi de la fertilité à long terme',
        'Alertes automatiques en cas d\'anomalies'
      ],
      value: [
        'Réduction significative des coûts d\'engrais',
        'Amélioration du rendement des cultures',
        'Préservation durable de la santé du sol',
        'Optimisation de l\'utilisation des ressources'
      ]
    },
    {
      id: 'agro-irrigation',
      icon: Droplets,
      title: 'Agro Irrigation',
      subtitle: 'Irrigation intelligente',
      url: '/services/agro-irrigation',
      description: 'Transformez l\'eau d\'un fardeau en investissement intelligent. Déterminez exactement quand irriguer, quelle quantité et où, pour une gestion scientifique et précise.',
      features: [
        'Capteurs d\'humidité du sol et température',
        'Contrôle automatique des pompes et vannes',
        'Modèles d\'analyse des besoins hydriques',
        'Intégration des données météorologiques'
      ],
      detailedDescription: 'Agro Irrigation transforme l\'eau d\'un fardeau en un investissement. Le système détermine exactement quand irriguer, quelle quantité et où. L\'agriculture passe ainsi du gaspillage des ressources à une gestion scientifique et précise, répondant directement au défi de la rareté de l\'eau.',
      components: [
        'Capteurs IoT : humidité du sol, température, débit et pression de l\'eau',
        'Contrôle automatique des pompes et vannes',
        'Modèles d\'analyse des besoins hydriques',
        'Système de gestion centralisée'
      ],
      functions: [
        'Calcul des besoins en eau selon l\'ETc et le stade de croissance',
        'Intégration des données météorologiques',
        'Planification automatique de l\'irrigation',
        'Monitoring en temps réel de la consommation'
      ],
      value: [
        'Économie massive d\'eau et d\'énergie',
        'Réduction du stress hydrique des plantes',
        'Augmentation du rendement et stabilité des cultures',
        'Gestion optimisée des ressources hydriques'
      ]
    },
    {
      id: 'agro-gpt',
      icon: Bot,
      title: 'Noya GPT',
      subtitle: 'Assistant agricole intelligent',
      url: '/services/noya-gpt',
      description: 'Votre expert agricole virtuel disponible 24h/24. Démocratisez l\'expertise agricole et réduisez l\'écart entre petits et grands agriculteurs.',
      features: [
        'Base de connaissances agricole étendue',
        'Moteur d\'IA avancé',
        'Interface conversationnelle intuitive',
        'Conseils personnalisés en temps réel'
      ],
      detailedDescription: 'Noya GPT est une véritable révolution : un expert agricole virtuel disponible 24h/24 pour répondre aux questions, fournir des conseils et assurer un suivi. Le savoir n\'est plus réservé aux experts ou aux institutions, il devient accessible à tous, réduisant l\'écart entre petits et grands agriculteurs.',
      components: [
        'Base de connaissances agricole (documents + données terrain)',
        'Moteur d\'IA avancé',
        'Interface conversationnelle intuitive',
        'Système d\'apprentissage continu'
      ],
      functions: [
        'Conseils agricoles personnalisés',
        'Réponses instantanées aux questions',
        'Suivi et rappels auprès des agriculteurs',
        'Diagnostic et recommandations en temps réel'
      ],
      value: [
        'Démocratisation de l\'expertise agricole',
        'Décisions rapides et précises',
        'Accompagnement continu personnalisé',
        'Accès 24/7 aux connaissances spécialisées'
      ]
    },
    {
      id: 'agro-sat',
      icon: Satellite,
      title: 'Agro Sat',
      subtitle: 'Suivi par satellite',
      url: '/services/agro-sat',
      description: 'Votre œil dans le ciel. Les images satellites deviennent un outil de détection précoce des stress et permettent de gérer les exploitations à distance.',
      features: [
        'Images satellites Sentinel-2 et Planet',
        'Indices végétatifs : NDVI, NDWI, SAVI',
        'Algorithmes de traitement d\'images',
        'Cartographie du potentiel de rendement'
      ],
      detailedDescription: 'Agro Sat offre aux agriculteurs un œil dans le ciel. Les images satellites deviennent un outil de détection précoce des stress et permettent de gérer les exploitations à distance. Cette évolution libère l\'agriculteur du suivi manuel et l\'introduit dans l\'ère de l\'agriculture spatiale.',
      components: [
        'Images satellites Sentinel-2 et Planet',
        'Indices végétatifs : NDVI, NDWI, SAVI',
        'Algorithmes de traitement d\'images',
        'Système d\'analyse multispectrale'
      ],
      functions: [
        'Détection précoce des zones de stress',
        'Suivi de la santé des cultures',
        'Cartographie du potentiel de rendement',
        'Monitoring de l\'évolution des parcelles'
      ],
      value: [
        'Anticipation des pertes agricoles',
        'Vision globale et précise de l\'exploitation',
        'Orientation optimale des interventions',
        'Surveillance continue sans déplacement'
      ]
    },
    {
      id: 'agro-drone',
      icon: Plane,
      title: 'Agro Drone',
      subtitle: 'Surveillance aérienne et intervention ciblée',
      url: '/services/agro-drone',
      description: 'Transformez les drones en outils de production révolutionnaires. Réduisez vos coûts, limitez la pollution et améliorez la qualité de votre production.',
      features: [
        'Drones DJI Agras et Mavic',
        'Caméras RGB et multispectrales',
        'Algorithmes de vision artificielle',
        'Pulvérisation localisée de précision'
      ],
      detailedDescription: 'Agro Drone transforme les drones en outils de production révolutionnaires. Grâce à l\'imagerie multispectrale et aux pulvérisations ciblées, l\'agriculteur réduit ses coûts, limite la pollution et améliore la qualité de sa production. C\'est la concrétisation de l\'"agriculture de précision".',
      components: [
        'Drones professionnels (DJI Agras, Mavic)',
        'Caméras RGB et multispectrales',
        'Algorithmes de vision artificielle',
        'Système de pulvérisation de précision'
      ],
      functions: [
        'Diagnostic des maladies et carences',
        'Détection des mauvaises herbes',
        'Pulvérisation localisée et précise',
        'Cartographie détaillée des parcelles'
      ],
      value: [
        'Réduction de l\'usage des intrants chimiques',
        'Interventions rapides et précises',
        'Rendements accrus avec des coûts réduits',
        'Agriculture de précision optimisée'
      ]
    },
    {
      id: 'agro-store',
      icon: Store,
      title: 'Agro Store',
      subtitle: 'Marché agricole digital',
      url: '/services/agro-store',
      description: 'Propulsez votre agriculture dans l\'ère du e-commerce. Accédez directement aux intrants, comparez les prix et achetez en toute sécurité.',
      features: [
        'Plateforme e-commerce complète',
        'Paiement numérique sécurisé',
        'Algorithmes de recommandation',
        'Accès direct aux intrants de qualité'
      ],
      detailedDescription: 'Agro Store propulse l\'agriculture dans l\'ère du e-commerce. Les agriculteurs accèdent directement aux intrants, comparent les prix et achètent en toute sécurité. Cette transformation met fin aux monopoles et aux intermédiaires, créant un marché plus juste et transparent.',
      components: [
        'Plateforme e-commerce complète',
        'Paiement numérique sécurisé',
        'Algorithmes de recommandation de produits',
        'Système de gestion des commandes'
      ],
      functions: [
        'Achat de semences, engrais, équipements',
        'Comparaison des prix en temps réel',
        'Accès direct aux intrants agricoles',
        'Gestion simplifiée des approvisionnements'
      ],
      value: [
        'Transparence totale des prix',
        'Gain de temps considérable',
        'Réduction des coûts d\'approvisionnement',
        'Accès facilité aux intrants de qualité'
      ]
    },
    {
      id: 'agro-dashboard',
      icon: BarChart3,
      title: 'Agro Dashboard',
      subtitle: 'Tableau de bord centralisé',
      url: '/services/agro-dashboard',
      description: 'Le cœur de votre écosystème. Une interface centralisée regroupant toutes vos données pour prendre la bonne décision au bon moment.',
      features: [
        'Application web et mobile',
        'Intégration avec tous les services',
        'Système d\'alertes intelligentes',
        'Visualisation en temps réel'
      ],
      detailedDescription: 'Agro Dashboard est le cœur de l\'écosystème : une interface centralisée regroupant toutes les données (sol, irrigation, météo, satellites, drones). L\'agriculteur devient comme un pilote d\'avion, avec des indicateurs précis et des alertes intelligentes pour prendre la bonne décision au bon moment.',
      components: [
        'Application web et mobile responsive',
        'Intégration avec tous les services AgroNoya',
        'Système d\'alertes et d\'analyses avancées',
        'Interface utilisateur intuitive'
      ],
      functions: [
        'Visualisation des données en temps réel',
        'Alertes automatiques intelligentes',
        'Aide à la décision grâce aux indicateurs et graphiques',
        'Centralisation de toutes les informations'
      ],
      value: [
        'Simplification de la gestion agricole',
        'Décisions basées sur des données fiables',
        'Amélioration du rendement et de la durabilité',
        'Vision globale de l\'exploitation'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceId = entry.target.getAttribute('data-service-id');
            if (serviceId && !visibleServices.includes(serviceId)) {
              setVisibleServices(prev => [...prev, serviceId]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const serviceElements = document.querySelectorAll('[data-service-id]');
    serviceElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleServices]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#cfb989]/10 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#cfb989] to-yellow-400 bg-clip-text text-transparent">
            Nos Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Transformez votre exploitation avec nos solutions intelligentes. De l'analyse du sol à la commercialisation, 
            nous révolutionnons chaque étape de votre agriculture avec des technologies de pointe.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-[#cfb989]/20">
              <div className="text-3xl font-bold text-[#cfb989] mb-2">7</div>
              <div className="text-sm text-gray-400">Services Révolutionnaires</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-[#cfb989]/20">
              <div className="text-3xl font-bold text-[#cfb989] mb-2">1400+</div>
              <div className="text-sm text-gray-400">Agriculteurs</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-[#cfb989]/20">
              <div className="text-3xl font-bold text-[#cfb989] mb-2">25%</div>
              <div className="text-sm text-gray-400">Économies Moyennes</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-[#cfb989]/20">
              <div className="text-3xl font-bold text-[#cfb989] mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            const isVisible = visibleServices.includes(service.id);
            
            return (
              <div
                key={service.id}
                data-service-id={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center mb-24 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${isEven ? '' : 'md:grid-flow-col-dense'}`}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'md:col-start-2'}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#cfb989] to-yellow-400 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-gray-900" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-[#cfb989]">{service.title}</h2>
                      <p className="text-gray-400">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.url}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#cfb989] to-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#cfb989]/25 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span>Voir plus</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Visual */}
                <div className={`${isEven ? '' : 'md:col-start-1'}`}>
                  <div className="relative h-80 bg-gradient-to-br from-[#cfb989]/20 to-[#cfb989]/10 rounded-2xl border border-[#cfb989]/20 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#cfb989]/5 to-transparent"></div>
                    <Icon className="w-24 h-24 text-[#cfb989] relative z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,185,137,0.1)_0%,transparent_70%)]"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ServicesEnhanced;

