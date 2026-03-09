import React, { useState } from 'react';
import {
  Droplets,
  TrendingUp,
  MapPin,
  Leaf,
  Shield,
  ArrowRight,
  Globe,
  Zap,
  User,
  Sparkles,
  BarChart3,
  CheckCircle,
  Target,
  Clock3, 
  Layers3, 
  Rocket, 
  Wallet
} from 'lucide-react';


import malekImg from '../assets/malek_abbassi.jpg';
import abdelhakImg from '../assets/abdelhak_abbassi.jpg';
import khawlaImg from '../assets/khawla_khamassi.jpg';
import saifImg from '../assets/saif_rahmani.jpg';
import emmaImg from '../assets/emma_ouej.jpg';
import mohamedImg from '../assets/mohamed_abbassi.jpg';
import ghofranImg from '../assets/ghofran_nasri.jpg';

const InvestisseursPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    organisation: '',
    role: '',
    ticket: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire investisseur soumis:', formData);
    alert('Demande envoyée ! Nous vous contacterons sous 48h.');
  };

  const scrollToForm = () => {
    document.getElementById('investir')?.scrollIntoView({ behavior: 'smooth' });
  };

  const solutionCards = [
    {
      icon: Droplets,
      title: 'Agro Irrigation',
      description:
        "Système d'irrigation intelligent avec capteurs IoT et automatisation complète.",
    },
    {
      icon: Leaf,
      title: 'AgroSol',
      description:
        "Analyse avancée du sol avec recommandations personnalisées d'amendements.",
    },
    {
      icon: Zap,
      title: 'NoyaModels',
      description:
        'Modèles prédictifs IA pour optimiser les rendements et anticiper les risques.',
    },
    {
      icon: Globe,
      title: 'AgroSat/Drone',
      description:
        'Surveillance satellite et drone pour monitoring en temps réel des cultures.',
    },
  ];

  const marketStats = [
    {
      value: '4.8M',
      label: 'Hectares',
      desc: 'Surface agricole utile en Tunisie',
    },
    {
      value: '€2.1B',
      label: 'Pertes annuelles',
      desc: "Dues au manque d'irrigation optimisée",
    },
    {
      value: '65%',
      label: 'Fermes > 10 ha',
      desc: 'Marché cible pour nos solutions',
    },
  ];

  const esgStats = [
    {
      icon: Droplets,
      value: '2.5M L',
      label: 'Eau économisée par mois',
      color: 'text-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-500/10',
    },
    {
      icon: Leaf,
      value: '-30%',
      label: 'Réduction des intrants chimiques',
      color: 'text-green-500',
      bg: 'bg-green-50 dark:bg-green-500/10',
    },
    {
      icon: Shield,
      value: '-25%',
      label: 'Réduction empreinte carbone',
      color: 'text-purple-500',
      bg: 'bg-purple-50 dark:bg-purple-500/10',
    },
  ];

  const team = [
  {
    name: 'Malek Abbassi',
    role: 'Co-fondateur & Président-Directeur Général',
    desc: 'Machine Learning Researcher',
    image: malekImg,
  },
  {
    name: 'Abdelhak Abbassi',
    role: 'Co-fondateur & Head of Sales',
    desc: 'Développement commercial & partenariats',
    image: abdelhakImg,
  },
  {
    name: 'Khawla Khamassi',
    role: 'Responsable Infrastructure & Développement B2B',
    desc: 'Ingénieure en informatique',
    image: khawlaImg,
  },
  {
    name: 'Saif Eddine Rahmani',
    role: 'Responsable Financier',
    desc: 'Expert financier, Master de Recherche en Finance',
    image: saifImg,
  },
  {
    name: 'Emma Ouej',
    role: 'AI Engineer & Développement Web',
    desc: 'Ingénieure IA - Solutions intelligentes et applications web',
    image: emmaImg,
  },
  {
    name: 'Mohamed Abbassi',
    role: 'Responsable Opérations Terrain',
    desc: 'Technicien agronome',
    image: mohamedImg,
  },
  {
    name: 'Ghofran Nasri',
    role: 'Chargée de Développement Agronomique',
    desc: 'Partenariats communautaires & développement terrain',
    image: ghofranImg,
  },
];
const whyNowPoints = [
  {
    title: 'Stress hydrique critique',
    description:
      "La pression sur l’eau rend l’optimisation de l’irrigation non plus optionnelle, mais stratégique pour la survie et la compétitivité des exploitations.",
  },
  {
    title: 'Digitalisation encore sous-équipée',
    description:
      "Le marché agricole régional reste largement sous-digitalisé, ce qui crée une fenêtre d’opportunité forte pour des solutions intégrées et simples à déployer.",
  },
  {
    title: 'Pression sur les rendements et les marges',
    description:
      "Les producteurs ont besoin d’outils qui réduisent les pertes, améliorent les décisions et augmentent la rentabilité sans complexifier l’exploitation.",
  },
  {
    title: 'Traçabilité & ESG',
    description:
      "Les exigences croissantes en matière d’empreinte environnementale, de traçabilité et de performance durable favorisent les plateformes capables de mesurer et piloter.",
  },
];

const businessModel = [
  {
    title: 'Hardware',
    description:
      "Vente de systèmes connectés : capteurs, modules d’irrigation intelligente et équipements associés.",
  },
  {
    title: 'SaaS',
    description:
      "Abonnement à la plateforme AgroNoya pour l’analyse, les recommandations, le monitoring et le pilotage.",
  },
  {
    title: 'Services',
    description:
      "Services terrain à forte valeur : déploiement, support, drone, accompagnement technique et agronomique.",
  },
  {
    title: 'Expansion & upsell',
    description:
      "Montée en gamme par modules additionnels, utilisateurs supplémentaires, extensions hardware et services premium.",
  },
];

const tractionMetrics = [
  { value: '2,500+', label: 'hectares monitorés' },
  { value: '2,000+', label: 'exploitations accompagnées' },
  { value: '-50%', label: "jusqu'à d’eau consommée" },
  { value: '+10-15%', label: 'gain de rendement observé' },
];

const askItems = [
  'Accélérer le développement produit et les briques IA propriétaires',
  'Renforcer le déploiement commercial en Tunisie',
  'Structurer l’expansion régionale MENA',
  'Consolider les opérations terrain et la capacité d’exécution',
];

const roadmap = [
  {
    year: '2025',
    title: 'Tunisie',
    description:
      "Consolider la présence nationale, renforcer la traction commerciale et standardiser les déploiements produit.",
  },
  {
    year: '2026',
    title: 'Scale MENA',
    description:
      "Étendre le modèle AgroNoya à des marchés régionaux prioritaires avec une approche adaptée aux réalités locales.",
  },
  {
    year: '2027',
    title: 'Plateforme régionale',
    description:
      "Positionner AgroNoya comme une plateforme agri-tech régionale intégrée, mêlant données, IA, opérations et services.",
  },
];
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0B0D]">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(40,167,69,0.18),transparent_35%)]" />
        <div className="absolute inset-0 bg-[url('/assets/hero_satellite_monitoring.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              Investor Relations · AgroNoya
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Investir dans l’agriculture
              <span className="block text-[#57D53B] mt-2">intelligente</span>
            </h1>

            <p className="text-2xl lg:text-3xl text-slate-200 mb-6 max-w-4xl mx-auto">
              AgroNoya — Connecter la terre, révéler l’avenir
            </p>

            <p className="text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Nous construisons une plateforme agri-tech intégrée qui aide les exploitations
              agricoles à mieux gérer l’eau, optimiser les intrants et améliorer les rendements
              grâce à l’IA, l’IoT et l’analyse satellite.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <Droplets className="w-8 h-8 text-[#57D53B]" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">-50%</div>
                <div className="text-slate-200">d’eau consommée</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-[#57D53B]" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">+10-15%</div>
                <div className="text-slate-200">de rendement</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-[#57D53B]" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">2,500</div>
                <div className="text-slate-200">hectares monitorés</div>
              </div>
            </div>

            <button
              onClick={scrollToForm}
              className="bg-[#28a745] hover:bg-[#218838] text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2"
            >
              Demander notre deck
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 bg-white dark:bg-[#0A0B0D]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-200 dark:border-emerald-400/20">
              <Target className="w-4 h-4" />
              Investment thesis
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#57D53B] mb-8">
              Les défis de l’agriculture moderne
            </h2>

            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              L’agriculture tunisienne fait face à des défis majeurs : stress hydrique croissant
              avec moins de 450 m³ d’eau par habitant, pertes de rendement dues aux pratiques
              traditionnelles, et fragmentation des données agricoles entre multiples sources non
              connectées. Ces problèmes structurels nécessitent une approche technologique intégrée
              pour assurer la durabilité et la rentabilité du secteur.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 bg-gray-50 dark:bg-[#101215]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#57D53B] mb-6">
              L’écosystème <span className="text-[#28a745]">AgroNoya</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Une plateforme intégrée qui révolutionne l’agriculture grâce à l’IA, l’IoT et
              l’analyse satellite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {solutionCards.map((card, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-3xl p-7 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#28a745]/10 rounded-2xl flex items-center justify-center mb-5">
                  <card.icon className="w-8 h-8 text-[#28a745]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET */}
      <section className="py-24 bg-white dark:bg-[#0A0B0D]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#57D53B] mb-6">
              Opportunité de marché
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Un marché en forte croissance avec des besoins technologiques urgents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {marketStats.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#28a745] mb-4">{item.value}</div>
                <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.label}
                </div>
                <div className="text-gray-700 dark:text-gray-300">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50 dark:bg-[#101215]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#57D53B] mb-6">
        Why now
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
        Le momentum de marché rend l’adoption d’une plateforme comme AgroNoya particulièrement pertinente aujourd’hui.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {whyNowPoints.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="w-14 h-14 bg-[#28a745]/10 rounded-2xl flex items-center justify-center mb-5">
            <Clock3 className="w-7 h-7 text-[#28a745]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {item.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="py-24 bg-white dark:bg-[#0A0B0D]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#57D53B] mb-6">
        Business model
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
        Un modèle hybride combinant revenus récurrents, ventes d’équipements et services à forte valeur.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {businessModel.map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 dark:bg-slate-900 rounded-3xl p-7 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="w-14 h-14 bg-[#28a745]/10 rounded-2xl flex items-center justify-center mb-5">
            <Wallet className="w-7 h-7 text-[#28a745]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {item.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="py-24 bg-gray-50 dark:bg-[#101215]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#57D53B] mb-6">
        Traction
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
        Des indicateurs qui montrent l’adéquation entre besoin marché, usage terrain et impact opérationnel.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {tractionMetrics.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-900 rounded-3xl p-8 text-center border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="text-4xl font-bold text-[#28a745] mb-3">{item.value}</div>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* TEAM */}
      <section className="py-24 bg-gray-50 dark:bg-[#101215]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#57D53B] mb-6">
        Notre équipe
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
        Une équipe fondatrice et opérationnelle qui combine vision produit,
        exécution terrain, intelligence artificielle et développement commercial.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {team.map((member, index) => (
        <div
          key={index}
          className="text-center bg-white dark:bg-slate-900 rounded-3xl p-7 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden border-4 border-gray-100 dark:border-slate-800 shadow-md">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {member.name}
          </h3>

          <div className="text-[#28a745] font-semibold mb-3 min-h-[56px] flex items-center justify-center">
            {member.role}
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {member.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ESG */}
      <section className="py-24 bg-white dark:bg-[#0A0B0D]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#57D53B] mb-6">
              Impact & ESG
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Notre engagement pour une agriculture durable et responsable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {esgStats.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 text-center border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-[#57D53B] mb-2">
                  {item.value}
                </div>
                <div className="text-gray-700 dark:text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white dark:bg-[#0A0B0D]">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 max-w-7xl mx-auto">
      {/* Ask */}
      <div className="bg-gray-50 dark:bg-slate-900 rounded-[2rem] p-8 border border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 bg-[#28a745]/10 rounded-2xl flex items-center justify-center">
            <Rocket className="w-7 h-7 text-[#28a745]" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-[#57D53B]">
              Ask
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Ce que nous cherchons à financer
            </p>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
          Nous cherchons des partenaires capables d’accompagner AgroNoya dans sa prochaine phase de croissance produit, commerciale et régionale.
        </p>

        <div className="space-y-4">
          {askItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#28a745] mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div className="bg-gray-50 dark:bg-slate-900 rounded-[2rem] p-8 border border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 bg-[#76CC93]/10 rounded-2xl flex items-center justify-center">
            <Layers3 className="w-7 h-7 text-[#76CC93]" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-[#76CC93]">
              Roadmap
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Cap directionnel 2026–2028
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-gray-200 dark:border-slate-700"
            >
              <div className="text-[#28a745] font-bold text-lg mb-1">{item.year}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FORM */}
      <section id="investir" className="py-24 bg-gray-50 dark:bg-[#101215]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#57D53B] mb-6">
                Rejoignez l’aventure
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Demandez notre deck investisseur et découvrez comment participer à la
                révolution agricole.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 lg:p-12 border border-gray-200 dark:border-slate-700 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3.5 border border-gray-300 dark:border-slate-600 rounded-2xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#28a745] focus:border-transparent outline-none"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3.5 border border-gray-300 dark:border-slate-600 rounded-2xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#28a745] focus:border-transparent outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Organisation
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 border border-gray-300 dark:border-slate-600 rounded-2xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#28a745] focus:border-transparent outline-none"
                      placeholder="Nom de votre organisation"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Rôle *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3.5 border border-gray-300 dark:border-slate-600 rounded-2xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#28a745] focus:border-transparent outline-none"
                    >
                      <option value="">Sélectionnez votre rôle</option>
                      <option value="investisseur">Investisseur</option>
                      <option value="corporate">Corporate</option>
                      <option value="partenaire">Partenaire</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ticket d’investissement / Intérêt
                  </label>
                  <input
                    type="text"
                    name="ticket"
                    value={formData.ticket}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 border border-gray-300 dark:border-slate-600 rounded-2xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#28a745] focus:border-transparent outline-none"
                    placeholder="Ex: 100K€ - 500K€ ou type de partenariat"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3.5 border border-gray-300 dark:border-slate-600 rounded-3xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#28a745] focus:border-transparent outline-none resize-none"
                    placeholder="Parlez-nous de votre intérêt pour AgroNoya..."
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="bg-[#28a745] hover:bg-[#218838] text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
                  >
                    Demander le deck
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestisseursPage;