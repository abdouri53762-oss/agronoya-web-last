import React from 'react';
import {
  Brain,
  Cpu,
  Satellite,
  MessageCircle,
  Plane,
  Sprout,
  CloudRain,
  Droplets,
  ArrowRight,
  LayoutDashboard,
  Sparkles,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import agroSolImg from '../../../assets/agro_sol.png';
import agroSatImg from '../../../assets/agro_sat.png';
import droneMultispectralImg from '../../../assets/drone_multispectral.png';
import agroIrrigationImg from '../../../assets/agro_irrigation.png';
import agroWeatherImg from '../../../assets/agro_weather.png';
import noyaDiagImg from '../../../assets/noya_diag.png';
import noyaGPTImg from '../../../assets/noya_gpt.png';
import dashboardAgroNoyaImg from '../../../assets/dashboard_agronoya.png';
import moduleESGImg from '../../../assets/module_esg.png';
import marketplaceAgroStoreImg from '../../../assets/marketplace_agro_store.png';
import collectiveAlertSystemImg from '../../../assets/collective_alert_system.png';
import irrigationFailureMonitoringImg from '../../../assets/irrigation_failure_monitoring.png';
import carbonCertificationImg from '../../../assets/carbon_certification.png';

const Solutions = () => {
  const { t } = useTranslation();

  const terrainSolutions = [
    {
      id: 1,
      icon: <Cpu className="h-7 w-7" />,
      title: t('agroSol'),
      shortDescription:
        "Analyse intelligente des sols pour mieux fertiliser, mieux irriguer et mieux piloter les décisions agronomiques.",
      image: agroSolImg,
      gradient: 'from-emerald-500 to-teal-600',
      category: 'Terrain',
      badge: 'Sol & capteurs',
      link: '/solutions/agro-sol'
    },
    {
      id: 4,
      icon: <Droplets className="h-7 w-7" />,
      title: t('agroIrrigation'),
      shortDescription:
        "Pilotage intelligent de l’irrigation pour réduire le gaspillage et optimiser l’usage de l’eau.",
      image: agroIrrigationImg,
      gradient: 'from-cyan-500 to-blue-600',
      category: 'Terrain',
      badge: 'Smart Water',
      link: '/solutions/agro-irrigation'
    },
    {
      id: 3,
      icon: <Plane className="h-7 w-7" />,
      title: t('droneMultispectral'),
      shortDescription:
        "Observation multispectrale de haute précision pour détecter les variations invisibles à l’œil nu.",
      image: droneMultispectralImg,
      gradient: 'from-purple-500 to-pink-600',
      category: 'Terrain',
      badge: 'Haute précision',
      link: '/solutions/drone-multispectral'
    },
    {
      id: 5,
      icon: <CloudRain className="h-7 w-7" />,
      title: t('agroWeather'),
      shortDescription:
        "Suivi météo agricole pour mieux anticiper les décisions liées au climat, aux traitements et à l’irrigation.",
      image: agroWeatherImg,
      gradient: 'from-orange-500 to-red-600',
      category: 'Terrain',
      badge: 'Microclimat',
      link: '/solutions/agro-weather'
    },
    {
      id: 12,
      icon: <Droplets className="h-7 w-7" />,
      title: t('irrigationFailureMonitoring'),
      shortDescription:
        "Surveillance des défaillances d’irrigation pour détecter plus tôt les blocages, fuites et anomalies critiques.",
      image: irrigationFailureMonitoringImg,
      gradient: 'from-teal-500 to-cyan-600',
      category: 'Terrain',
      badge: 'Monitoring',
      link: '/solutions/irrigation-failure-monitoring'
    }
  ];

  const intelligenceSolutions = [
    {
      id: 2,
      icon: <Satellite className="h-7 w-7" />,
      title: t('agroSat'),
      shortDescription:
        "Surveillance satellitaire pour suivre les parcelles à grande échelle et détecter plus tôt les anomalies.",
      image: agroSatImg,
      gradient: 'from-blue-500 to-indigo-600',
      category: 'Intelligence',
      badge: 'Satellite',
      link: '/solutions/agro-sat'
    },
    {
      id: 6,
      icon: <Brain className="h-7 w-7" />,
      title: t('noyaDiag'),
      shortDescription:
        "Diagnostic assisté par IA pour repérer plus rapidement maladies, carences et signaux faibles.",
      image: noyaDiagImg,
      gradient: 'from-green-500 to-emerald-600',
      category: 'Intelligence',
      badge: 'IA Vision',
      link: '/solutions/noya-diag'
    },
    {
      id: 7,
      icon: <MessageCircle className="h-7 w-7" />,
      title: t('noyaGPT'),
      shortDescription:
        "Assistant agricole intelligent pour accéder plus vite à l’analyse, aux recommandations et au support décisionnel.",
      image: noyaGPTImg,
      gradient: 'from-violet-500 to-purple-600',
      category: 'Intelligence',
      badge: 'Assistant IA',
      link: '/solutions/noya-gpt'
    },
    {
      id: 11,
      icon: <Zap className="h-7 w-7" />,
      title: t('collectiveAlertSystem'),
      shortDescription:
        "Système d’alerte collective pour partager rapidement les risques et renforcer la réactivité régionale.",
      image: collectiveAlertSystemImg,
      gradient: 'from-red-500 to-pink-600',
      category: 'Intelligence',
      badge: 'Alerte',
      link: '/solutions/collective-alert-system'
    },
    {
      id: 13,
      icon: <Sprout className="h-7 w-7" />,
      title: t('carbonCertification'),
      shortDescription:
        "Outil de traçabilité et de certification pour mieux reconnaître les pratiques durables et la valeur carbone.",
      image: carbonCertificationImg,
      gradient: 'from-emerald-500 to-green-600',
      category: 'Intelligence',
      badge: 'Certification',
      link: '/solutions/carbon-certification'
    }
  ];

  const platformSolutions = [
    {
      id: 8,
      icon: <LayoutDashboard className="h-7 w-7" />,
      title: t('dashboardAgroNoya'),
      shortDescription:
        "Plateforme unifiée pour centraliser les données, suivre les opérations et piloter l’exploitation depuis un seul espace.",
      image: dashboardAgroNoyaImg,
      gradient: 'from-slate-500 to-gray-700',
      category: 'Plateforme',
      badge: 'Tout-en-un',
      link: '/solutions/dashboard-agronoya'
    },
    {
      id: 9,
      icon: <TrendingUp className="h-7 w-7" />,
      title: t('moduleESG'),
      shortDescription:
        "Module ESG pour structurer, valoriser et suivre les indicateurs de durabilité et de performance responsable.",
      image: moduleESGImg,
      gradient: 'from-lime-500 to-green-600',
      category: 'Plateforme',
      badge: 'ESG Ready',
      link: '/solutions/module-esg'
    },
    {
      id: 10,
      icon: <Shield className="h-7 w-7" />,
      title: t('marketplaceAgroStore'),
      shortDescription:
        "Marketplace agricole pour connecter l’offre, créer plus de visibilité commerciale et rapprocher les acteurs du marché.",
      image: marketplaceAgroStoreImg,
      gradient: 'from-amber-500 to-orange-600',
      category: 'Plateforme',
      badge: 'Marketplace',
      link: '/solutions/marketplace-agro-store'
    }
  ];

  const SolutionCard = ({ solution, featured = false }) => (
    <div
      className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/90 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-900/90 dark:border-gray-800 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
      />

      <div className="absolute left-4 top-4 z-10">
        <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-sm dark:bg-gray-800/90 dark:text-gray-300">
          {solution.category}
        </span>
      </div>

      <div className="absolute right-4 top-4 z-10">
        <span
          className={`inline-flex items-center rounded-full bg-gradient-to-r ${solution.gradient} px-3 py-1 text-xs font-semibold text-white shadow-lg`}
        >
          <Sparkles className="mr-1 h-3 w-3" />
          {solution.badge}
        </span>
      </div>

      <div className={`relative overflow-hidden ${featured ? 'h-72' : 'h-60'}`}>
        <img
          src={solution.image}
          alt={solution.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

        <div
          className={`absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.gradient} text-white shadow-xl`}
        >
          {solution.icon}
        </div>
      </div>

      <div className="p-6">
        <h3
          className={`mb-3 bg-gradient-to-r ${solution.gradient} bg-clip-text text-2xl font-bold text-transparent`}
        >
          {solution.title}
        </h3>

        <p className="mb-6 text-sm leading-7 text-gray-600 dark:text-gray-400 md:text-base">
          {solution.shortDescription}
        </p>

        <Link
          to={solution.link}
          className={`group/btn inline-flex items-center rounded-2xl bg-gradient-to-r ${solution.gradient} px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
        >
          <span>Découvrir la solution</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );

  const SectionHeader = ({ badge, title, subtitle }) => (
    <div className="mb-8">
      <div className="mb-4 inline-flex items-center rounded-full border border-[#57D53B]/20 bg-[#57D53B]/10 px-4 py-2 text-sm font-semibold text-[#57D53B]">
        <Sparkles className="mr-2 h-4 w-4" />
        {badge}
      </div>

      <h3 className="text-2xl font-bold text-white md:text-3xl">
        {title}
      </h3>

      <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">
        {subtitle}
      </p>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0b1f1a] py-20 text-white md:py-24 lg:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#57D53B]/20 to-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-500/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-[#57D53B]/10 px-4 py-2 text-sm font-semibold text-[#57D53B]">
            <Sparkles className="mr-2 h-4 w-4" />
            Écosystème AgroNoya
          </div>

          <h2 className="mb-6 text-5xl font-black leading-tight lg:text-6xl">
            <span className="bg-gradient-to-r from-[#57D53B] to-emerald-400 bg-clip-text text-transparent">
              {t('solutionsTitle')}
            </span>
          </h2>

          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300">
            Une suite de solutions AgriTech conçue pour couvrir le terrain,
            renforcer l’intelligence agricole et centraliser le pilotage au sein
            d’une même plateforme.
          </p>
        </div>

        <div className="mb-20">
          <SectionHeader
            badge="Solutions terrain"
            title="Mesurer, surveiller et agir directement sur le terrain"
            subtitle="Des solutions connectées pour collecter les bonnes données, optimiser les ressources et améliorer la réactivité au plus près des parcelles."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {terrainSolutions.map((solution, index) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                featured={index === 0}
              />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <SectionHeader
            badge="Intelligence agricole"
            title="Détecter, analyser et recommander avec plus de précision"
            subtitle="Des outils alimentés par l’IA pour transformer l’observation, les signaux faibles et les données agricoles en décisions plus fiables."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {intelligenceSolutions.map((solution, index) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                featured={index === 0}
              />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <SectionHeader
            badge="Plateformes & services"
            title="Centraliser les opérations, structurer les données et créer de la valeur"
            subtitle="Des briques digitales conçues pour piloter l’exploitation, suivre la durabilité et ouvrir de nouveaux leviers de valorisation."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {platformSolutions.map((solution, index) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                featured={index === 0}
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[#57D53B] to-emerald-600 p-8 text-white shadow-2xl md:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              <Zap className="mr-2 h-4 w-4" />
              Une plateforme, plusieurs leviers
            </div>

            <h3 className="mb-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Construisez la combinaison de solutions adaptée à votre réalité
              terrain
            </h3>

            <p className="mb-8 text-base leading-relaxed text-white/90 md:text-lg lg:text-xl">
              AgroNoya vous permet d’assembler les bons modules selon vos
              besoins : observation, irrigation, diagnostic, intelligence
              décisionnelle, durabilité et pilotage centralisé.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-bold text-emerald-600 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-2xl"
              >
                Demander une démo
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-emerald-600"
              >
                Parler à un expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;