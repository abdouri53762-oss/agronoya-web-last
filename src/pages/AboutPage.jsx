import React, { useState, useEffect } from 'react';
import {
  Target,
  Heart,
  Lightbulb,
  TrendingUp,
  Droplets,
  Leaf,
  Brain,
  Zap,
  Shield,
  Calendar,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

import malekImg from '../assets/malek_abbassi.jpg';
import abdelhakImg from '../assets/abdelhak_abbassi.jpg';
import khawlaImg from '../assets/khawla_khamassi.jpg';
import saifImg from '../assets/saif_rahmani.jpg';
import emmaImg from '../assets/emma_ouej.jpg';
import mohamedImg from '../assets/mohamed_abbassi.jpg';
import ghofranImg from '../assets/ghofran_nasri.jpg';

const TeamCarousel = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: 'Malek Abbassi',
      position: 'Co-fondateur & Président-Directeur Général',
      description: 'Machine Learning Researcher',
      image: malekImg,
      initials: 'MA',
    },
    {
      id: 2,
      name: 'Abdelhak Abbassi',
      position: 'Co-fondateur & Head of Sales',
      description: 'Développement commercial & partenariats',
      image: abdelhakImg,
      initials: 'AA',
    },
    {
      id: 3,
      name: 'Khawla Khamassi',
      position: 'Responsable Infrastructure & Développement B2B',
      description: 'Ingénieure en informatique',
      image: khawlaImg,
      initials: 'KK',
    },
    {
      id: 4,
      name: 'Saif Eddine Rahmani',
      position: 'Responsable Financier',
      description: 'Expert financier, Master de Recherche en Finance',
      image: saifImg,
      initials: 'SR',
    },
    {
      id: 5,
      name: 'Emma Ouej',
      position: 'AI Engineer & Développement Web',
      description: 'Ingénieure IA - Solutions intelligentes et applications web',
      image: emmaImg,
      initials: 'EO',
    },
    {
      id: 6,
      name: 'Mohamed Abbassi',
      position: 'Responsable Opérations Terrain',
      description: 'Technicien agronome',
      image: mohamedImg,
      initials: 'MA',
    },
    {
      id: 7,
      name: 'Ghofran Nasri',
      position: 'Chargée de Développement Agronomique',
      description: 'Partenariats communautaires & développement terrain',
      image: ghofranImg,
      initials: 'GN',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentMember((prev) => (prev + 1) % teamMembers.length);
        setIsAnimating(false);
      }, 260);
    }, 3200);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const goToNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentMember((prev) => (prev + 1) % teamMembers.length);
      setIsAnimating(false);
    }, 260);
  };

  const goToPrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
      setIsAnimating(false);
    }, 260);
  };

  const currentTeamMember = teamMembers[currentMember];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#57D53B] via-green-500 to-green-700 dark:from-green-800 dark:via-green-700 dark:to-green-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-28 h-28 border-2 border-white rounded-full"></div>
        <div className="absolute top-24 right-24 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-16 left-1/4 w-14 h-14 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-24 right-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Notre équipe
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Une équipe pluridisciplinaire
          </h2>

          <p className="text-green-50 text-lg max-w-3xl mx-auto leading-relaxed">
            Une équipe qui combine vision stratégique, maîtrise technologique et compréhension du terrain agricole.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/15 hover:bg-white/25 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/15 hover:bg-white/25 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center">
            <div
              className={`bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-white/30 text-center shadow-2xl max-w-xl w-full mx-8 transform transition-all duration-500 ${
                isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
              }`}
            >
              <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-100 shadow-xl ring-4 ring-green-200/50">
                {currentTeamMember.image ? (
                  <img
                    src={currentTeamMember.image}
                    alt={currentTeamMember.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <span className="text-green-600 text-2xl font-bold">
                      {currentTeamMember.initials}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-slate-50 mb-3">
                {currentTeamMember.name}
              </h3>

              <p className="text-[#57D53B] dark:text-green-400 font-semibold mb-3 text-lg">
                {currentTeamMember.position}
              </p>

              <p className="text-gray-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                {currentTeamMember.description}
              </p>

              <div className="mt-6 inline-flex items-center bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                Membre {currentMember + 1} sur {teamMembers.length}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentMember(index);
                    setIsAnimating(false);
                  }, 260);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentMember
                    ? 'w-8 h-3 bg-white'
                    : 'w-3 h-3 bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <div className="mt-5 mx-auto max-w-md">
            <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-white h-1.5 rounded-full transition-all duration-300 ease-linear"
                style={{
                  width: `${((currentMember + 1) / teamMembers.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  const pillars = [
    {
      icon: Droplets,
      title: "Eau d'abord",
      description: "Prioriser l'optimisation de l'irrigation dans un contexte de stress hydrique",
    },
    {
      icon: Leaf,
      title: 'Sol vivant',
      description: "Restaurer et maintenir la fertilité et l'équilibre des sols",
    },
    {
      icon: Brain,
      title: 'Agri-intelligence locale',
      description: 'IA explicable nourrie par des données et références régionales',
    },
    {
      icon: Zap,
      title: 'Interopérabilité & temps réel',
      description: 'Capteurs, satellite, drones et applis qui communiquent entre eux',
    },
    {
      icon: Shield,
      title: 'Souveraineté des données',
      description: 'Sécurité, contrôle et transparence pour le producteur',
    },
  ];

  const impacts = [
    { value: '-25 à -35%', label: "d'eau d'irrigation par hectare" },
    { value: '+10 à +20%', label: 'de rendement moyen selon culture' },
    { value: '-15 à -25%', label: "d'intrants grâce aux apports ciblés" },
    { value: '≥50,000 ha', label: 'suivis et ≥2,000 exploitations accompagnées' },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Des besoins du terrain aux premiers prototypes',
      description:
        'Immersion terrain, MVP technique avec premiers capteurs sol, itérations rapides sur la fiabilité et l’UX.',
    },
    {
      year: '2024',
      title: 'Preuve de concept et intégration des briques clés',
      description:
        'Irrigation connectée, imagerie satellite, assistant agronomique IA, déploiements sur parcelles pilotes.',
    },
    {
      year: '2025',
      title: "Structuration produit et passage à l'échelle",
      description:
        'Tableau de bord unifié, durcissement sécurité, écosystème partenaires, préparation Startup Act.',
    },
  ];

  const differentiators = [
    'Approche bout-en-bout : mesure → analyse → décision → action → suivi',
    'Technologies intégrées (IA, IoT, satellite, drone) au service d’un usage simple',
    'Ancrage local : recommandations alignées sur les pratiques régionales',
    'Modèle économique accessible (SaaS + services) pour maximiser l’adoption',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero */}
      <section className="relative py-24 px-4 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(87,213,59,0.10),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(87,213,59,0.14),transparent_35%)]"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 text-[#57D53B] dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              À propos d’AgroNoya
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-slate-50 mb-6 leading-tight">
              Une agriculture plus
              <span className="block text-[#57D53B] dark:text-green-400 mt-2">
                intelligente, rentable et durable
              </span>
            </h1>

            <p className="text-xl text-gray-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Nous transformons des données complexes en recommandations simples et actionnables pour une agriculture plus productive, rentable et durable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="bg-gray-50 dark:bg-slate-800 rounded-[2rem] p-8 border border-gray-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-[#57D53B] dark:text-green-400 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-50">
                  Notre Mission
                </h2>
              </div>

              <p className="text-gray-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Accélérer la transition vers une agriculture plus productive, rentable et durable en Tunisie et dans la région, en mettant l'IA, l'IoT, l'imagerie satellite et les drones au service de chaque agriculteur — du petit exploitant au grand domaine.
              </p>

              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-[#57D53B] dark:text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-50">
                  Raison d'être
                </h3>
              </div>

              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                Mieux gérer l'eau, la fertilité du sol et la santé des cultures, réduire les coûts et les risques, et augmenter les revenus des agriculteurs tout en préservant les ressources naturelles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-slate-800 rounded-[2rem] p-8 border border-green-200 dark:border-green-700/50 shadow-sm">
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-6">
                Notre Promesse
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#57D53B] dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-slate-300">
                    Décisions fondées sur les données plutôt que sur l'instinct
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#57D53B] dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-slate-300">
                    Économie d'eau et d'intrants sans sacrifier les rendements
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#57D53B] dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-slate-300">
                    Outils simples et accessibles, adaptés au terrain local
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#57D53B] dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-slate-300">
                    Accompagnement continu (diagnostic, action, suivi, amélioration)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-50 mb-4">
              Nos Piliers d'Impact
            </h2>
            <p className="text-gray-700 dark:text-slate-300 text-lg max-w-3xl mx-auto">
              Cinq piliers fondamentaux qui guident notre approche pour transformer l'agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-gray-200 dark:border-slate-700 hover:border-[#57D53B] dark:hover:border-green-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mb-5">
                  <pillar.icon className="w-7 h-7 text-[#57D53B] dark:text-green-400" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-50 mb-3">
                  {pillar.title}
                </h3>

                <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-50 mb-4">
              Objectifs d'Impact
            </h2>
            <p className="text-gray-700 dark:text-slate-300 text-lg">
              Résultats mesurables que nous visons pour nos agriculteurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-bold text-[#57D53B] dark:text-green-400 mb-3">
                  {impact.value}
                </div>
                <div className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
                  {impact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-gray-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-[#57D53B] dark:text-green-400 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-50">
                  Notre Différenciation
                </h2>
              </div>

              <div className="space-y-4">
                {differentiators.map((diff, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-[#57D53B] dark:text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-slate-300 leading-relaxed">
                      {diff}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white dark:from-amber-900/20 dark:to-slate-800 rounded-[2rem] p-8 border border-amber-200 dark:border-amber-700/40 shadow-sm">
              <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-300 mb-6">
                Ce que nous avons prouvé
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 dark:text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-amber-800 dark:text-amber-200">
                    Impact mesurable sur la décision d'irrigation
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 dark:text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-amber-800 dark:text-amber-200">
                    Adoption terrain grâce à une UX épurée
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 dark:text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-amber-800 dark:text-amber-200">
                    Architecture robuste adaptée aux contraintes locales
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-[#57D53B] dark:text-green-400 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-50">
                Notre Histoire
              </h2>
            </div>
            <p className="text-gray-700 dark:text-slate-300 text-lg max-w-3xl mx-auto">
              Nous avons commencé à développer nos idées il y a deux ans (mi-2023), avec une conviction simple : la donnée doit devenir un levier concret pour chaque agriculteur.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#57D53B] dark:bg-green-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{item.year}</span>
                  </div>
                </div>

                <div className="flex-1 bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-50 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-[#57D53B] dark:bg-green-800 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-slate-50">
                Ce qui arrive chez <span className="text-[#57D53B] dark:text-green-400">AgroNoya</span>
              </h2>
            </div>

            <p className="text-xl lg:text-2xl text-gray-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Notre feuille de route vers une agriculture autonome, bas-carbone et ultra-connectée
            </p>

            <div className="w-32 h-1 bg-[#57D53B] dark:bg-green-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: '"Dark Agriculture"',
                accent: 'text-[#57D53B] dark:text-green-400',
                bg: 'bg-gray-900 dark:bg-slate-700',
                icon: <div className="w-8 h-8 bg-[#57D53B] dark:bg-green-800 rounded-full"></div>,
                subtitle: 'Parcelle 100% autonome (pilote 1 ha blé)',
                description:
                  'Production continue, 24/7, avec interventions humaines minimisées. Le système coordonne semis/plantation, irrigation, fertilisation, protection et monitoring en boucle fermée.',
                bullets: ['Rendement stable optimisé', 'Intrants ultra-précis', 'Traçabilité totale blockchain'],
                border: 'hover:border-[#57D53B] dark:hover:border-green-400',
              },
              {
                title: 'Serres Intelligentes',
                accent: 'text-green-600 dark:text-green-400',
                bg: 'bg-green-600 dark:bg-green-700',
                icon: <Leaf className="w-8 h-8 text-white" />,
                subtitle: "≈80% d'autonomie",
                description:
                  "L'agriculteur choisit culture et intrants, la serre gère le reste : aération, ferti-irrigation, arrosage, traitements ciblés, détection/préemption des maladies.",
                bullets: ['Climat auto-régulé', 'Alertes proactives', 'Performances mesurées'],
                border: 'hover:border-green-500 dark:hover:border-green-400',
              },
              {
                title: 'Classement Bas-Carbone',
                accent: 'text-blue-600 dark:text-blue-400',
                bg: 'bg-blue-600 dark:bg-blue-700',
                icon: <Shield className="w-8 h-8 text-white" />,
                subtitle: 'Transition bio avec paliers',
                description:
                  `Labellisation des produits selon leur "Score Carbone AgroNoya". Les prix de vente s'indexent sur les classes ; plus l'empreinte est faible, meilleures sont les primes.`,
                bullets: ['Traçabilité pratiques', 'Primes valorisation', 'Progression mesurable'],
                border: 'hover:border-blue-500 dark:hover:border-blue-400',
              },
              {
                title: 'AgroLab',
                accent: 'text-purple-600 dark:text-purple-400',
                bg: 'bg-purple-600 dark:bg-purple-700',
                icon: <Brain className="w-8 h-8 text-white" />,
                subtitle: 'Labo R&D applicative',
                description:
                  'Un laboratoire de recherche pour tester, améliorer et valider nos innovations : algorithmes, protocoles d’irrigation/fertilisation, capteurs, matériaux.',
                bullets: ['Innovation continue', 'Validation terrain', 'Amélioration modèles IA'],
                border: 'hover:border-purple-500 dark:hover:border-purple-400',
              },
              {
                title: 'AgroTrac',
                accent: 'text-orange-600 dark:text-orange-400',
                bg: 'bg-orange-600 dark:bg-orange-700',
                icon: <Zap className="w-8 h-8 text-white" />,
                subtitle: 'Tracteur électrique, guidé par IA',
                description:
                  'Plateforme 100% électrique et intelligente pour travaux légers/moyens : semis, binage/désherbage mécanique, transport intra-parcelle.',
                bullets: ['Guidage IA précis', 'Navigation assistée', 'Jumeau numérique'],
                border: 'hover:border-orange-500 dark:hover:border-orange-400',
              },
              {
                title: 'AgroVerse',
                accent: 'text-cyan-600 dark:text-cyan-400',
                bg: 'bg-cyan-600 dark:bg-cyan-700',
                icon: (
                  <div className="w-8 h-8 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-cyan-600 dark:bg-cyan-700 rounded-full"></div>
                  </div>
                ),
                subtitle: 'Métavers agricole',
                description:
                  "Un jumeau numérique immersif des exploitations : formation, simulation d'itinéraires techniques, réunions d'experts dans le champ virtuel.",
                bullets: ['Formation immersive', 'Simulation décisions', 'Co-conception virtuelle'],
                border: 'hover:border-cyan-500 dark:hover:border-cyan-400',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 ${item.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className={`w-16 h-16 ${item.bg} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50 mb-4">
                  {item.title}
                </h3>

                <p className={`${item.accent} font-semibold mb-4`}>
                  {item.subtitle}
                </p>

                <p className="text-gray-700 dark:text-slate-300 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <div key={bulletIndex} className="flex items-center text-xs text-gray-600 dark:text-slate-400">
                      <CheckCircle className={`w-3 h-3 mr-2 ${item.accent}`} />
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-[2rem] p-8 border border-green-200 dark:border-green-700/50 shadow-sm">
              <h3 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-6">
                Objectif Global
              </h3>

              <p className="text-xl text-gray-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Rendre l'agriculture plus <span className="text-[#57D53B] dark:text-green-400 font-semibold">productive</span>,
                <span className="text-blue-600 dark:text-blue-400 font-semibold"> résiliente au climat</span> et
                <span className="text-green-600 dark:text-green-400 font-semibold"> rémunératrice</span>, tout en réduisant
                l'empreinte environnementale et la charge opérationnelle quotidienne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamCarousel />

      {/* CTA */}
      <section className="py-20 px-4 bg-[#76CC93] dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Rejoignez la Révolution Agricole
          </h2>

          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment AgroNoya peut transformer votre exploitation avec nos solutions intelligentes et durables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white dark:bg-slate-900 text-[#76CC93] dark:text-green-400 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-slate-800 transition-all duration-300 shadow-lg">
              Découvrir Nos Solutions
            </button>

            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#57D53B] transition-all duration-300">
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;