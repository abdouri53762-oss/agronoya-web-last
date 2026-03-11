import React from 'react';
import { ArrowRight, CheckCircle, Plane, Camera, MapPin, Activity, Target, Zap, Clock, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import DroneSimulatorGameEnhanced from '../../components/DroneSimulatorGameEnhanced';

const DroneMultispectralPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0B0D]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/src/assets/drone_multispectral.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-red-900/30 to-pink-900/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <Plane className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-orange-400 font-medium">{t('droneMultispectralHeroBadge')}</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  {t('droneMultispectral')}
                </h1>
                
                <h2 className="text-2xl lg:text-3xl text-orange-400 mb-6 font-semibold">
                  {t('droneMultispectralHeroSubtitle')}
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {t('droneMultispectralHeroDesc')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    {t('droneMultispectralBookFlight')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    {t('droneMultispectralCustomQuote')}
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl p-8 backdrop-blur-sm border border-orange-500/30">
                  <img 
                    src="/src/assets/drone_multispectral.png" 
                    alt="Drone Multispectral" 
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
              {t('droneMultispectralFactsTitle')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('droneMultispectralFactsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                metric: t('droneMultispectralFact1Metric'),
                title: t('droneMultispectralFact1Title'),
                description: t('droneMultispectralFact1Desc')
              },
              {
                icon: <Clock className="w-8 h-8" />,
                metric: t('droneMultispectralFact2Metric'),
                title: t('droneMultispectralFact2Title'),
                description: t('droneMultispectralFact2Desc')
              },
              {
                icon: <Eye className="w-8 h-8" />,
                metric: t('droneMultispectralFact3Metric'),
                title: t('droneMultispectralFact3Title'),
                description: t('droneMultispectralFact3Desc')
              },
              {
                icon: <Activity className="w-8 h-8" />,
                metric: t('droneMultispectralFact4Metric'),
                title: t('droneMultispectralFact4Title'),
                description: t('droneMultispectralFact4Desc')
              }
            ].map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4">
                  <div className="text-orange-400">{fact.icon}</div>
                </div>
                <div className="text-3xl font-bold text-orange-400 mb-2">{fact.metric}</div>
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
              {t('droneMultispectralTechTitle')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('droneMultispectralTechDesc')}
            </p>
          </div>

          {/* Image principale drone */}
          <div className="mb-12">
            <img 
              src="/src/assets/drone_multispectral_field.jpg" 
              alt="Drone en action dans les champs" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="w-8 h-8" />,
                title: t('droneMultispectralTech1Title'),
                description: t('droneMultispectralTech1Desc'),
                image: "/src/assets/drone_agriculture.jpg"
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: t('droneMultispectralTech2Title'),
                description: t('droneMultispectralTech2Desc'),
                image: "/src/assets/drone_multispectral_field.jpg"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: t('droneMultispectralTech3Title'),
                description: t('droneMultispectralTech3Desc'),
                image: "/src/assets/drone_agriculture.jpg"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: t('droneMultispectralTech4Title'),
                description: t('droneMultispectralTech4Desc'),
                image: "/src/assets/drone_multispectral_field.jpg"
              }
            ].map((tech, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={tech.image} 
                    alt={tech.title} 
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-2 left-2 inline-flex items-center justify-center w-10 h-10 bg-orange-500/20 rounded-lg backdrop-blur-sm">
                    <div className="text-orange-400">{tech.icon}</div>
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
                {t('droneMultispectralFeatureTitle')}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {t('droneMultispectralFeatureDesc')}
              </p>

              <div className="space-y-4 mb-8">
                {[
                  t('droneMultispectralFeature1'),
                  t('droneMultispectralFeature2'),
                  t('droneMultispectralFeature3'),
                  t('droneMultispectralFeature4'),
                  t('droneMultispectralFeature5'),
                  t('droneMultispectralFeature6')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  {t('droneMultispectralMapExamples')}
                </button>
                <button className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Spécifications Techniques
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-2xl p-8 border border-orange-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-400 font-semibold mb-2">Altitude</h4>
                    <div className="text-2xl font-bold text-white">120m</div>
                    <div className="text-sm text-gray-400">Vol Standard</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-400 font-semibold mb-2">Résolution</h4>
                    <div className="text-2xl font-bold text-white">2cm</div>
                    <div className="text-sm text-gray-400">Par Pixel</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-400 font-semibold mb-2">Autonomie</h4>
                    <div className="text-2xl font-bold text-white">45min</div>
                    <div className="text-sm text-gray-400">Vol Continu</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-orange-400 font-semibold mb-2">Couverture</h4>
                    <div className="text-2xl font-bold text-white">50ha</div>
                    <div className="text-sm text-gray-400">Par Heure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Applications Pratiques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Détection Maladies",
                description: "Identification précoce des pathogènes avant apparition des symptômes visuels",
                benefits: ["Réduction 40% traitements", "Intervention ciblée", "Préservation rendements"]
              },
              {
                title: "Stress Hydrique",
                description: "Cartographie précise des zones en déficit hydrique pour optimisation irrigation",
                benefits: ["Économie 30% eau", "Irrigation de précision", "Amélioration qualité"]
              },
              {
                title: "Estimation Rendements",
                description: "Comptage automatique et prédiction des rendements par zone",
                benefits: ["Planification récolte", "Optimisation logistique", "Prévisions commerciales"]
              }
            ].map((app, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <div className="space-y-2">
                  {app.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Drone Simulator Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              🎮 Expérience Interactive
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Découvrez par vous-même la puissance des drones multispectraux ! 
              Contrôlez un drone virtuel, choisissez votre type d'analyse (NDVI ou NDWI) 
              et voyez l'IA analyser votre champ en temps réel.
            </p>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-orange-300 text-sm">
                ✨ <strong>Simulation réaliste</strong> : Basée sur de vraies données agricoles tunisiennes
              </p>
            </div>
          </div>
          
          <DroneSimulatorGameEnhanced />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prenez de la Hauteur sur Vos Cultures
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez ce que vos yeux ne peuvent pas voir. Nos drones révèlent 
            l'invisible pour des décisions agricoles éclairées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              Réserver un Vol d'Essai
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Demander un Devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroneMultispectralPage;

