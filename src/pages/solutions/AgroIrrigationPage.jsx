import React from 'react';
import { ArrowRight, CheckCircle, Droplets, Wifi, Smartphone, Zap, Target, TrendingDown, Clock, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AgroIrrigationPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0A0B0D]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/src/assets/agro_irrigation.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-cyan-900/30 to-teal-900/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <Droplets className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-blue-400 font-medium">Irrigation Intelligente</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Agro Irrigation
                </h1>
                
                <h2 className="text-2xl lg:text-3xl text-blue-400 mb-6 font-semibold">
                  Gestion Intelligente de l'Eau
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Optimisez votre consommation d'eau avec nos capteurs d'humidité connectés et l'IA NoyaIrrigation. 
                  Irrigation de précision pour des économies d'eau jusqu'à 40%.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    Démo Interactive
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    Calculer Économies
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30">
                  <img 
                    src="/src/assets/agro_irrigation.png" 
                    alt="Système d'irrigation intelligent" 
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
              Économies Exceptionnelles
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              L'irrigation intelligente qui révolutionne votre gestion de l'eau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingDown className="w-8 h-8" />,
                metric: "-40%",
                title: "Économie d'Eau",
                description: "Réduction consommation garantie"
              },
              {
                icon: <Target className="w-8 h-8" />,
                metric: "95%",
                title: "Précision Arrosage",
                description: "Irrigation au bon moment"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                metric: "24/7",
                title: "Surveillance Continue",
                description: "Monitoring automatique"
              },
              {
                icon: <Activity className="w-8 h-8" />,
                metric: "+30%",
                title: "Amélioration Rendement",
                description: "Stress hydrique éliminé"
              }
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

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies d'Irrigation Avancées
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Capteurs intelligents et IA pour une gestion optimale de l'eau
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="/src/assets/smart_irrigation_system.jpg" 
              alt="Système d'irrigation intelligent" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Capteurs Humidité",
                description: "Mesure précise du taux d'humidité du sol",
                image: "/src/assets/irrigation_sensors.jpg"
              },
              {
                icon: <Wifi className="w-8 h-8" />,
                title: "Connectivité IoT",
                description: "Transmission temps réel des données",
                image: "/src/assets/smart_irrigation_system.jpg"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "App Mobile",
                description: "Contrôle à distance de l'irrigation",
                image: "/src/assets/irrigation_sensors.jpg"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "IA NoyaIrrigation",
                description: "Optimisation automatique des cycles",
                image: "/src/assets/smart_irrigation_system.jpg"
              }
            ].map((tech, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={tech.image} 
                    alt={tech.title} 
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-2 left-2 inline-flex items-center justify-center w-10 h-10 bg-blue-500/20 rounded-lg backdrop-blur-sm">
                    <div className="text-blue-400">{tech.icon}</div>
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
                Irrigation de Précision Automatisée
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Notre système analyse en continu l'humidité du sol, les conditions météo et les besoins 
                spécifiques de vos cultures. L'IA NoyaIrrigation déclenche automatiquement l'arrosage 
                au moment optimal avec la quantité d'eau exacte nécessaire.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Déclenchement automatique selon humidité sol",
                  "Intégration données météo en temps réel",
                  "Programmation personnalisée par zone",
                  "Détection fuites et dysfonctionnements",
                  "Rapports consommation détaillés",
                  "Contrôle mobile à distance complet"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Voir Simulation
                </button>
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Guide Installation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-blue-400 font-semibold mb-2">Humidité</h4>
                    <div className="text-2xl font-bold text-white">45%</div>
                    <div className="text-sm text-gray-400">Sol Optimal</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-blue-400 font-semibold mb-2">Économie</h4>
                    <div className="text-2xl font-bold text-white">-35%</div>
                    <div className="text-sm text-gray-400">Consommation</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-blue-400 font-semibold mb-2">Zones</h4>
                    <div className="text-2xl font-bold text-white">8</div>
                    <div className="text-sm text-gray-400">Actives</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-blue-400 font-semibold mb-2">Statut</h4>
                    <div className="text-2xl font-bold text-white">ON</div>
                    <div className="text-sm text-gray-400">Automatique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Specifications Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pricing */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Options Tarifaires</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300">AgroIrrigation Standard</span>
                  <span className="text-2xl font-bold text-blue-400">1,400 TND</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300">AgroIrrigation Smart</span>
                  <span className="text-2xl font-bold text-blue-400">3,000 TND</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300">Abonnement IA</span>
                  <span className="text-xl font-semibold text-blue-400">600-1,000 TND/an</span>
                </div>
                <div className="text-sm text-gray-400 mt-4">
                  • Électrovannes incluses (3-5 selon modèle)<br/>
                  • Installation et configuration<br/>
                  • Formation utilisateur complète<br/>
                  • Garantie 5 ans système complet
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-teal-600/10 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Spécifications Techniques</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Capteurs</div>
                    <div className="text-white font-semibold">Humidité, T°, EC</div>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Électrovannes</div>
                    <div className="text-white font-semibold">3-16 zones</div>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Débit</div>
                    <div className="text-white font-semibold">0.5-50 L/min</div>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Pression</div>
                    <div className="text-white font-semibold">1-10 bars</div>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Connectivité</div>
                    <div className="text-white font-semibold">WiFi, LoRa, 4G</div>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Alimentation</div>
                    <div className="text-white font-semibold">Solaire + Batterie</div>
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
              Retour sur Investissement Rapide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "-40%",
                title: "Réduction Facture Eau",
                description: "Économies immédiates sur la consommation d'eau grâce à l'irrigation précise",
                color: "blue"
              },
              {
                metric: "+25%",
                title: "Amélioration Rendements",
                description: "Stress hydrique éliminé, croissance optimale des cultures",
                color: "cyan"
              },
              {
                metric: "18 mois",
                title: "Amortissement",
                description: "Retour sur investissement rapide grâce aux économies d'eau",
                color: "teal"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className={`text-4xl font-bold text-${benefit.color}-400 mb-4`}>{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Économisez l'Eau, Maximisez les Rendements
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez les agriculteurs qui ont réduit leur consommation d'eau de 40% 
            tout en améliorant leurs rendements avec Agro Irrigation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              Calculer Mes Économies
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Demander Installation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgroIrrigationPage;

