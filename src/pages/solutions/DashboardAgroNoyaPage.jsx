import React from 'react';
import { ArrowRight, CheckCircle, LayoutDashboard, BarChart3, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardAgroNoyaPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0B0D]">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-blue-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-indigo-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <LayoutDashboard className="w-5 h-5 text-indigo-400 mr-3" />
                  <span className="text-indigo-400 font-medium">Analytics Avancées</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Dashboard AgroNoya</h1>
                <h2 className="text-2xl lg:text-3xl text-indigo-400 mb-6 font-semibold">Pilotage Intelligent</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Tableau de bord unifié avec analytics avancées, KPIs temps réel et aide à la décision par IA. 
                  Pilotez votre exploitation avec des données actionables.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    Voir Demo Live <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    Personnaliser Dashboard
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-indigo-500/30">
                  <img src="/src/assets/dashboard_agronoya.png" alt="Dashboard AgroNoya" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Analytics en Temps Réel</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BarChart3 className="w-8 h-8" />, metric: "50+", title: "KPIs Agricoles", description: "Indicateurs personnalisés" },
              { icon: <TrendingUp className="w-8 h-8" />, metric: "Real-time", title: "Données Live", description: "Mise à jour continue" },
              { icon: <Zap className="w-8 h-8" />, metric: "IA", title: "Recommandations", description: "Aide décision automatique" },
              { icon: <LayoutDashboard className="w-8 h-8" />, metric: "360°", title: "Vue Globale", description: "Toutes données centralisées" }
            ].map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-indigo-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-500/20 rounded-full mb-4">
                  <div className="text-indigo-400">{fact.icon}</div>
                </div>
                <div className="text-3xl font-bold text-indigo-400 mb-2">{fact.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{fact.title}</h3>
                <p className="text-gray-400 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <img src="/src/assets/agriculture_dashboard.png" alt="Dashboard Analytics" className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "KPIs Personnalisés", description: "Indicateurs adaptés à votre exploitation", image: "/src/assets/dashboard_analytics.jpg" },
              { title: "Alertes Intelligentes", description: "Notifications proactives par IA", image: "/src/assets/agriculture_dashboard.png" },
              { title: "Rapports Automatiques", description: "Génération rapports périodiques", image: "/src/assets/agriculture_bi_dashboard.webp" },
              { title: "Mobile Responsive", description: "Accès terrain sur smartphone", image: "/src/assets/dashboard_analytics.jpg" }
            ].map((tech, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img src={tech.image} alt={tech.title} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pilotez Votre Exploitation en Temps Réel</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Centralisez toutes vos données agricoles dans un dashboard intelligent qui vous guide vers les meilleures décisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              Accéder au Dashboard <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Configuration Personnalisée
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardAgroNoyaPage;

