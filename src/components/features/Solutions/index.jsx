import React from 'react';
import { Brain, Cpu, Satellite, MessageCircle, Plane, Sprout, CloudRain, Droplets, ArrowRight, LayoutDashboard, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
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

  const solutions = [
    {
      id: 1,
      icon: <Cpu className="w-8 h-8" />,
      title: t("agroSol"),
      description: t("agroSolDesc"),
      shortDescription: t("agroSolDesc"),
      image: agroSolImg,
      gradient: "from-emerald-500 to-teal-600",
      category: t("categorySoilAnalysis"),
      badge: t("badgeAdvancedAI"),
      link: "/solutions/agro-sol"
    },
    {
      id: 2,
      icon: <Satellite className="w-8 h-8" />,
      title: t("agroSat"),
      description: t("agroSatDesc"),
      shortDescription: t("agroSatDesc"),
      image: agroSatImg,
      gradient: "from-blue-500 to-indigo-600",
      category: t("categorySatellite"),
      badge: t("badgeRealTime"),
      link: "/solutions/agro-sat"
    },
    {
      id: 3,
      icon: <Plane className="w-8 h-8" />,
      title: t("droneMultispectral"),
      description: t("droneMultispectralDesc"),
      shortDescription: t("droneMultispectralDesc"),
      image: droneMultispectralImg,
      gradient: "from-purple-500 to-pink-600",
      category: t("categoryDrone"),
      badge: t("badgeHighPrecision"),
      link: "/solutions/drone-multispectral"
    },
    {
      id: 4,
      icon: <Droplets className="w-8 h-8" />,
      title: t("agroIrrigation"),
      description: t("agroIrrigationDesc"),
      shortDescription: t("agroIrrigationDesc"),
      image: agroIrrigationImg,
      gradient: "from-cyan-500 to-blue-600",
      category: t("categoryIrrigation"),
      badge: t("badgeSmartWater"),
      link: "/solutions/agro-irrigation"
    },
    {
      id: 5,
      icon: <CloudRain className="w-8 h-8" />,
      title: t("agroWeather"),
      description: t("agroWeatherDesc"),
      shortDescription: t("agroWeatherDesc"),
      image: agroWeatherImg,
      gradient: "from-orange-500 to-red-600",
      category: t("categoryWeather"),
      badge: t("badgePredictive"),
      link: "/solutions/agro-weather"
    },
    {
      id: 6,
      icon: <Brain className="w-8 h-8" />,
      title: t("noyaDiag"),
      description: t("noyaDiagDesc"),
      shortDescription: t("noyaDiagDesc"),
      image: noyaDiagImg,
      gradient: "from-green-500 to-emerald-600",
      category: t("categoryDiagnostics"),
      badge: t("badgeAI"),
      link: "/solutions/noya-diag"
    },
    {
      id: 7,
      icon: <MessageCircle className="w-8 h-8" />,
      title: t("noyaGPT"),
      description: t("noyaGPTDesc"),
      shortDescription: t("noyaGPTDesc"),
      image: noyaGPTImg,
      gradient: "from-violet-500 to-purple-600",
      category: t("categoryIA"),
      badge: t("badgeChatGPT"),
      link: "/solutions/noya-gpt"
    },
    {
      id: 8,
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: t("dashboardAgroNoya"),
      description: t("dashboardAgroNoyaDesc"),
      shortDescription: t("dashboardAgroNoyaDesc"),
      image: dashboardAgroNoyaImg,
      gradient: "from-slate-500 to-gray-600",
      category: t("categoryDashboard"),
      badge: t("badgeAllInOne"),
      link: "/solutions/dashboard-agronoya"
    },
    {
      id: 9,
      icon: <TrendingUp className="w-8 h-8" />,
      title: t("moduleESG"),
      description: t("moduleESGDesc"),
      shortDescription: t("moduleESGDesc"),
      image: moduleESGImg,
      gradient: "from-lime-500 to-green-600",
      category: t("categorySustainability"),
      badge: t("badgeESGReady"),
      link: "/solutions/module-esg"
    },
    {
      id: 10,
      icon: <Shield className="w-8 h-8" />,
      title: t("marketplaceAgroStore"),
      description: t("marketplaceAgroStoreDesc"),
      shortDescription: t("marketplaceAgroStoreDesc"),
      image: marketplaceAgroStoreImg,
      gradient: "from-amber-500 to-orange-600",
      category: t("categoryMarketplace"),
      badge: t("badgeEcommerce"),
      link: "/solutions/marketplace-agro-store"
    },
    {
      id: 11,
      icon: <Zap className="w-8 h-8" />,
      title: t("collectiveAlertSystem"),
      description: t("collectiveAlertSystemDesc"),
      shortDescription: t("collectiveAlertSystemDesc"),
      image: collectiveAlertSystemImg,
      gradient: "from-red-500 to-pink-600",
      category: t("categoryAlerts"),
      badge: t("badgeCommunity"),
      link: "/solutions/collective-alert-system"
    },
    {
      id: 12,
      icon: <Droplets className="w-8 h-8" />,
      title: t("irrigationFailureMonitoring"),
      description: t("irrigationFailureMonitoringDesc"),
      shortDescription: t("irrigationFailureMonitoringDesc"),
      image: irrigationFailureMonitoringImg,
      gradient: "from-teal-500 to-cyan-600",
      category: t("categoryMonitoring"),
      badge: t("badgePrevention"),
      link: "/solutions/irrigation-failure-monitoring"
    },
    {
      id: 13,
      icon: <Sprout className="w-8 h-8" />,
      title: t("carbonCertification"),
      description: t("carbonCertificationDesc"),
      shortDescription: t("carbonCertificationDesc"),
      image: carbonCertificationImg,
      gradient: "from-emerald-500 to-green-600",
      category: t("categoryCertification"),
      badge: t("badgeCarbonPlus"),
      link: "/solutions/carbon-certification"
    }
  ];

  const SolutionCard = ({ solution, index }) => (
    <div 
      className="group relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${solution.gradient} text-white shadow-lg`}>
          <Sparkles className="w-3 h-3 mr-1" />
          {solution.badge}
        </span>
      </div>

      {/* Category */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm">
          {solution.category}
        </span>
      </div>

      {/* Image avec overlay moderne */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={solution.image} 
          alt={solution.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--overlay-rgb)/0.60)] via-[rgb(var(--overlay-rgb)/0.20)] to-transparent"></div>
        
        {/* Icon flottant */}
        <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
          {solution.icon}
        </div>
      </div>

      {/* Contenu moderne */}
      <div className="p-6 relative z-10">
        <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300`}>
          {solution.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {solution.shortDescription}
        </p>
        
        {/* CTA Button moderne */}
        <Link 
          to={solution.link || "#"} 
          className={`inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r ${solution.gradient} text-white font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/btn`}
        >
          <span>{t('decouvrir')}</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>

      {/* Effet de brillance */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(var(--overlay-rgb)/0.10)] to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000"></div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#57D53B]/20 to-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header moderne */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#57D53B]/10 text-[#57D53B] text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            {t('solutionsBadge')}
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-[#57D53B] dark:text-gray-100 mb-6 bg-gradient-to-r from-[#57D53B] to-emerald-600 bg-clip-text">
            {t("solutionsTitle")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {t("solutionsSubtitle")}
          </p>
        </div>

        {/* Grille de solutions simplifiée */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-[#57D53B] to-emerald-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <Zap className="w-5 h-5 mr-2" />
            {t('solutionsCTA')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

