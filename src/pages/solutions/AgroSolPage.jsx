import React from 'react';
import { ArrowRight, CheckCircle, Cpu, Wifi, BarChart3, Zap, Target, TrendingUp, Shield, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AgroSolPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0B0D]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/src/assets/agro_sol.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-teal-900/30 to-blue-900/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <Cpu className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-emerald-400 font-medium">Solution IoT Avancée</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Agro Sol
                </h1>
                
                <h2 className="text-2xl lg:text-3xl text-emerald-400 mb-6 font-semibold">
                  Analyse Intelligente des Sols
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Révolutionnez votre approche de la fertilisation avec nos capteurs NPK/pH/température 
                  connectés et l'intelligence artificielle NoyaSol pour des recommandations localisées ultra-précises.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    Demander une Démonstration
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    Obtenir un Devis
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-emerald-500/30">
                  <img 
                    src="/src/assets/agro_sol.png" 
                    alt="Capteur Agro Sol" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Faits Marquants
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Des résultats concrets qui transforment votre agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                metric: "+25%",
                title: "Augmentation Rendements",
                description: "Optimisation précise de la nutrition"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                metric: "-30%",
                title: "Réduction Coûts",
                description: "Application ciblée des fertilisants"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                metric: "95%",
                title: "Précision Mesures",
                description: "Fiabilité des capteurs IoT"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                metric: "15 min",
                title: "Fréquence Données",
                description: "Mise à jour en temps réel"
              }
            ].map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4">
                  <div className="text-emerald-400">{fact.icon}</div>
                </div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">{fact.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{fact.title}</h3>
                <p className="text-gray-400 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies de Pointe
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Notre solution combine les dernières innovations en IoT, IA et analyse de données
            </p>
          </div>

          {/* Image principale des technologies */}
          <div className="mb-12">
            <img 
              src="/src/assets/iot_soil_monitoring.jpg" 
              alt="Système IoT de surveillance des sols" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Capteurs IoT",
                description: "Mesure NPK, pH, température en temps réel",
                image: "/src/assets/npk_sensor.jpg"
              },
              {
                icon: <Wifi className="w-8 h-8" />,
                title: "LoRaWAN",
                description: "Connectivité longue portée, faible consommation",
                image: "/src/assets/iot_sensors_system.jpg"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "IA NoyaSol",
                description: "Algorithmes d'apprentissage automatique",
                image: "/src/assets/agriculture_dashboard.png"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Temps Réel",
                description: "Données actualisées toutes les 15 minutes",
                image: "/src/assets/iot_soil_monitoring.jpg"
              }
            ].map((tech, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={tech.image} 
                    alt={tech.title} 
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-2 left-2 inline-flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-lg backdrop-blur-sm">
                    <div className="text-emerald-400">{tech.icon}</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Surveillance Continue de la Fertilité
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Nos capteurs IoT de dernière génération mesurent en continu plus de 15 paramètres 
                essentiels de votre sol. L'IA NoyaSol analyse ces données pour générer des 
                recommandations personnalisées et optimiser votre fertilisation.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Mesure NPK (Azote, Phosphore, Potassium) en temps réel",
                  "Monitoring pH et conductivité électrique",
                  "Analyse température et humidité du sol",
                  "Détection matière organique",
                  "Recommandations IA personnalisées",
                  "Cartographie variabilité haute résolution"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Voir la Démonstration
                </button>
                <button className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Documentation Technique
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/10 to-blue-600/10 rounded-2xl p-8 border border-emerald-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-emerald-400 font-semibold mb-2">NPK</h4>
                    <div className="text-2xl font-bold text-white">13.2</div>
                    <div className="text-sm text-gray-400">mg/kg</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-emerald-400 font-semibold mb-2">pH</h4>
                    <div className="text-2xl font-bold text-white">6.8</div>
                    <div className="text-sm text-gray-400">Optimal</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-emerald-400 font-semibold mb-2">Temp</h4>
                    <div className="text-2xl font-bold text-white">18°C</div>
                    <div className="text-sm text-gray-400">Sol</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-emerald-400 font-semibold mb-2">Humidité</h4>
                    <div className="text-2xl font-bold text-white">65%</div>
                    <div className="text-sm text-gray-400">Optimal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Specifications Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pricing */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-600/10 rounded-2xl p-8 border border-emerald-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Tarification</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300">Kit AgroSol Complet</span>
                  <span className="text-2xl font-bold text-emerald-400">2,500 TND</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300">Abonnement IA NoyaSol</span>
                  <span className="text-xl font-semibold text-emerald-400">1,200 TND/an</span>
                </div>
                <div className="text-sm text-gray-400 mt-4">
                  • Installation et formation incluses<br/>
                  • Garantie 3 ans sur le matériel<br/>
                  • Support technique 24/7<br/>
                  • Mises à jour IA automatiques
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Spécifications Techniques</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Capteurs</div>
                    <div className="text-white font-semibold">NPK, pH, EC, T°, H%</div>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Connectivité</div>
                    <div className="text-white font-semibold">LoRaWAN, WiFi</div>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Autonomie</div>
                    <div className="text-white font-semibold">2 ans (batterie)</div>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Précision</div>
                    <div className="text-white font-semibold">±2% NPK, ±0.1 pH</div>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Profondeur</div>
                    <div className="text-white font-semibold">10-30 cm</div>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Résistance</div>
                    <div className="text-white font-semibold">IP67</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Retour sur Investissement
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Des résultats mesurables dès la première saison
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "+25%",
                title: "Augmentation des Rendements",
                description: "Optimisation précise de la nutrition permet d'atteindre le potentiel maximum",
                color: "emerald"
              },
              {
                metric: "-30%",
                title: "Réduction des Coûts",
                description: "Application ciblée des fertilisants selon les besoins réels élimine le gaspillage",
                color: "blue"
              },
              {
                metric: "< 2 ans",
                title: "Retour sur Investissement",
                description: "Amortissement rapide grâce aux économies d'intrants et augmentation rendements",
                color: "teal"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <div className={`text-4xl font-bold text-${benefit.color}-400 mb-4`}>{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Révolutionner Votre Gestion des Sols ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez plus de 1500 agriculteurs qui ont déjà transformé leur approche 
            de la fertilisation avec Agro Sol.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              Commencer Maintenant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Parler à un Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgroSolPage;

