import React from 'react';
import { ArrowRight, CheckCircle, AlertTriangle, Droplets, Wifi, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const IrrigationFailureMonitoringPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0B0D]">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-purple-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <AlertTriangle className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-blue-400 font-medium">Monitoring Avancé</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Monitoring Pannes Irrigation</h1>
                <h2 className="text-2xl lg:text-3xl text-blue-400 mb-6 font-semibold">Surveillance Intelligente</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Surveillance continue des systèmes d'irrigation avec détection automatique des pannes. 
                  Alertes instantanées et diagnostic à distance pour intervention rapide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    Installer Monitoring <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    Diagnostic Gratuit
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30">
                  <img src="/src/assets/irrigation_failure_monitoring.png" alt="Monitoring Irrigation" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <AlertTriangle className="w-8 h-8" />, metric: "< 1min", title: "Détection Panne", description: "Alerte instantanée" },
              { icon: <Droplets className="w-8 h-8" />, metric: "99.9%", title: "Disponibilité", description: "Système fiable" },
              { icon: <Wifi className="w-8 h-8" />, metric: "IoT", title: "Capteurs", description: "Surveillance continue" },
              { icon: <Zap className="w-8 h-8" />, metric: "Auto", title: "Diagnostic", description: "IA intégrée" }
            ].map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                  <div className="text-blue-400">{fact.icon}</div>
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{fact.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{fact.title}</h3>
                <p className="text-gray-400 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Détection Pannes", description: "Identification automatique des dysfonctionnements", benefits: ["Capteurs pression", "Débitmètres", "Vannes électriques"] },
              { title: "Alertes Temps Réel", description: "Notifications instantanées multi-canaux", benefits: ["SMS urgents", "Email détaillé", "App mobile"] },
              { title: "Maintenance Prédictive", description: "Anticipation des pannes avant qu'elles surviennent", benefits: ["IA prédictive", "Historique pannes", "Planning maintenance"] }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Zéro Panne Non Détectée</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Protégez vos cultures avec une surveillance 24/7 de vos systèmes d'irrigation. Intervention rapide garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              Sécuriser Mon Système <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Audit Irrigation Gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IrrigationFailureMonitoringPage;

