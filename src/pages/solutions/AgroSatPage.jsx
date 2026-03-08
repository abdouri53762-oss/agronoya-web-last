import React from 'react';
import { ArrowRight, CheckCircle, Satellite, Eye, Map, TrendingUp, Target, Globe, Zap, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AgroSatPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0B0D]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/src/assets/agro_sat.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <Satellite className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-blue-400 font-medium">Surveillance Spatiale</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Agro Sat
                </h1>
                
                <h2 className="text-2xl lg:text-3xl text-blue-400 mb-6 font-semibold">
                  Surveillance Satellite NDVI
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Surveillez vos cultures depuis l'espace avec notre analyse multispectrale par satellite. 
                  Détectez les anomalies, suivez l'état végétatif et optimisez vos interventions sur grandes surfaces.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    Voir une Démonstration
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    Demander un Devis
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30">
                  <img 
                    src="/src/assets/agro_sat.png" 
                    alt="Analyse Satellite" 
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
              La puissance de l'observation spatiale au service de votre agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                metric: "10m",
                title: "Résolution Spatiale",
                description: "Précision exceptionnelle Sentinel-2"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                metric: "100%",
                title: "Couverture Parcellaire",
                description: "Surveillance complète de vos terres"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                metric: "2-3 jours",
                title: "Fréquence Passage",
                description: "Mise à jour régulière des données"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                metric: "13 bandes",
                title: "Analyse Spectrale",
                description: "Données multispectrales complètes"
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
              Technologies Satellite de Pointe
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Notre plateforme exploite les données des satellites les plus avancés
            </p>
          </div>

          {/* Image principale NDVI */}
          <div className="mb-12">
            <img 
              src="/src/assets/ndvi_monitoring.jpg" 
              alt="Surveillance NDVI par satellite" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Satellite className="w-8 h-8" />,
                title: "Sentinel-2A/B",
                description: "Résolution 10m, passage tous les 2-3 jours",
                image: "/src/assets/satellite_ndvi.webp"
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "13 Bandes Spectrales",
                description: "Analyse multispectrale complète",
                image: "/src/assets/ndvi_monitoring.jpg"
              },
              {
                icon: <Map className="w-8 h-8" />,
                title: "Indices NDVI/NDWI",
                description: "Santé végétale et stress hydrique",
                image: "/src/assets/satellite_ndvi.webp"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "IA Prédictive",
                description: "Détection précoce des anomalies",
                image: "/src/assets/ndvi_monitoring.jpg"
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
                Surveillance Spatiale Ultra-Précise
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Grâce aux satellites Sentinel-2 et Landsat, surveillez l'état de santé de vos cultures 
                en temps quasi-réel. Nos algorithmes d'IA analysent les indices NDVI et NDWI pour 
                détecter stress hydrique, maladies et variations de croissance.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Couverture globale avec résolution 10 mètres",
                  "Indices NDVI pour la santé végétale",
                  "Indices NDWI pour le stress hydrique",
                  "Détection précoce des anomalies",
                  "Cartographie de variabilité intra-parcellaire",
                  "Historique multi-années pour comparaisons"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Explorer les Cartes
                </button>
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Guide Technique
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-blue-400 font-semibold mb-2">NDVI</h4>
                    <div className="text-2xl font-bold text-white">0.75</div>
                    <div className="text-sm text-gray-400">Santé Végétale</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-blue-400 font-semibold mb-2">NDWI</h4>
                    <div className="text-2xl font-bold text-white">0.42</div>
                    <div className="text-sm text-gray-400">Stress Hydrique</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-blue-400 font-semibold mb-2">Couverture</h4>
                    <div className="text-2xl font-bold text-white">95%</div>
                    <div className="text-sm text-gray-400">Végétation</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-blue-400 font-semibold mb-2">Résolution</h4>
                    <div className="text-2xl font-bold text-white">10m</div>
                    <div className="text-sm text-gray-400">Pixel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indices Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Indices Satellite Analysés
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">NDVI - Normalized Difference Vegetation Index</h3>
              <p className="text-gray-300 mb-6">
                Mesure la vigueur et la santé de la végétation en analysant la réflectance 
                dans le rouge et le proche infrarouge.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Valeurs NDVI :</span>
                  <span className="text-white">-1 à +1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Végétation saine :</span>
                  <span className="text-green-400">0.6 à 0.9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Stress végétal :</span>
                  <span className="text-yellow-400">0.2 à 0.6</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">NDWI - Normalized Difference Water Index</h3>
              <p className="text-gray-300 mb-6">
                Évalue le contenu en eau de la végétation et détecte le stress hydrique 
                avant qu'il ne soit visible à l'œil nu.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Valeurs NDWI :</span>
                  <span className="text-white">-1 à +1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bien hydraté :</span>
                  <span className="text-blue-400">0.3 à 1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Stress hydrique :</span>
                  <span className="text-red-400">-1 à 0.3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Surveillez Vos Cultures Depuis l'Espace
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez la puissance de l'analyse satellite pour optimiser vos rendements 
            et anticiper les problèmes avant qu'ils n'impactent vos cultures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              Essayer Gratuitement
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Planifier une Démo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgroSatPage;

