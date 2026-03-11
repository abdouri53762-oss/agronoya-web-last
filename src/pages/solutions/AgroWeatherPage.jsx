import React from 'react';
import { ArrowRight, CheckCircle, CloudRain, Thermometer, Wind, Sun, Target, Globe, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AgroWeatherPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0A0B0D]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/src/assets/agro_weather.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-sky-900/30 to-blue-900/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-cyan-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <CloudRain className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-cyan-400 font-medium">{t('agroWeatherHeroBadge')}</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  {t('agroWeather')}
                </h1>
                
                <h2 className="text-2xl lg:text-3xl text-cyan-400 mb-6 font-semibold">
                  {t('agroWeatherHeroSubtitle')}
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {t('agroWeatherHeroDesc')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    {t('agroWeatherHeroDemo')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    {t('agroWeatherHeroInstall')}
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                  <img 
                    src="/src/assets/agro_weather.png" 
                    alt={t('agroWeatherImageAlt')} 
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
              {t('agroWeatherKeyFactsTitle')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('agroWeatherKeyFactsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                metric: "500m",
                title: t('agroWeatherKeyFactLocalTitle'),
                description: t('agroWeatherKeyFactLocalDesc')
              },
              {
                icon: <Globe className="w-8 h-8" />,
                metric: "3 sources",
                title: t('agroWeatherKeyFactCombinedTitle'),
                description: t('agroWeatherKeyFactCombinedDesc')
              },
              {
                icon: <Clock className="w-8 h-8" />,
                metric: "15 jours",
                title: t('agroWeatherKeyFactExtendedTitle'),
                description: t('agroWeatherKeyFactExtendedDesc')
              },
              {
                icon: <Zap className="w-8 h-8" />,
                metric: "5 min",
                title: t('agroWeatherKeyFactUpdateTitle'),
                description: t('agroWeatherKeyFactUpdateDesc')
              }
            ].map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                  <div className="text-cyan-400">{fact.icon}</div>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{fact.metric}</div>
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
              {t('agroWeatherTechTitle')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('agroWeatherTechSubtitle')}
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="/src/assets/weather_station.webp" 
              alt={t('agroWeatherTechImageAlt')} 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Thermometer className="w-8 h-8" />,
                title: t('agroWeatherTechTempSensorsTitle'),
                description: t('agroWeatherTechTempSensorsDesc'),
                image: "/src/assets/weather_monitoring.jpg"
              },
              {
                icon: <CloudRain className="w-8 h-8" />,
                title: t('agroWeatherTechRainGaugeTitle'),
                description: t('agroWeatherTechRainGaugeDesc'),
                image: "/src/assets/weather_station_field.png"
              },
              {
                icon: <Wind className="w-8 h-8" />,
                title: t('agroWeatherTechAnemometerTitle'),
                description: t('agroWeatherTechAnemometerDesc'),
                image: "/src/assets/weather_monitoring.jpg"
              },
              {
                icon: <Sun className="w-8 h-8" />,
                title: t('agroWeatherTechRadiometerTitle'),
                description: t('agroWeatherTechRadiometerDesc'),
                image: "/src/assets/weather_station_field.png"
              }
            ].map((tech, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={tech.image} 
                    alt={tech.title} 
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-2 left-2 inline-flex items-center justify-center w-10 h-10 bg-cyan-500/20 rounded-lg backdrop-blur-sm">
                    <div className="text-cyan-400">{tech.icon}</div>
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
                {t('agroWeatherMainFeaturesTitle')}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {t('agroWeatherMainFeaturesDesc')}
              </p>

              <div className="space-y-4 mb-8">
                {[
                  t('agroWeatherMainFeatureFrostAlerts'),
                  t('agroWeatherMainFeatureRainForecasts'),
                  t('agroWeatherMainFeatureEvapotranspiration'),
                  t('agroWeatherMainFeatureWeatherIndices'),
                  t('agroWeatherMainFeatureHistory'),
                  t('agroWeatherMainFeatureAISupport')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  {t('agroWeatherDashboardButton')}
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  {t('agroWeatherApiButton')}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-cyan-400 font-semibold mb-2">{t('agroWeatherStatTempTitle')}</h4>
                    <div className="text-2xl font-bold text-white">22°C</div>
                    <div className="text-sm text-gray-400">{t('agroWeatherStatTempLabel')}</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-cyan-400 font-semibold mb-2">{t('agroWeatherStatHumidityTitle')}</h4>
                    <div className="text-2xl font-bold text-white">68%</div>
                    <div className="text-sm text-gray-400">{t('agroWeatherStatHumidityLabel')}</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-cyan-400 font-semibold mb-2">{t('agroWeatherStatWindTitle')}</h4>
                    <div className="text-2xl font-bold text-white">12 km/h</div>
                    <div className="text-sm text-gray-400">{t('agroWeatherStatWindLabel')}</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-cyan-400 font-semibold mb-2">{t('agroWeatherStatRainTitle')}</h4>
                    <div className="text-2xl font-bold text-white">0mm</div>
                    <div className="text-sm text-gray-400">{t('agroWeatherStatRainLabel')}</div>
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
              {t('agroWeatherAppsTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('agroWeatherAppFrostTitle'),
                description: t('agroWeatherAppFrostDesc'),
                benefits: [
                  t('agroWeatherAppFrostBenefit1'),
                  t('agroWeatherAppFrostBenefit2'),
                  t('agroWeatherAppFrostBenefit3')
                ]
              },
              {
                title: t('agroWeatherAppTreatmentTitle'),
                description: t('agroWeatherAppTreatmentDesc'),
                benefits: [
                  t('agroWeatherAppTreatmentBenefit1'),
                  t('agroWeatherAppTreatmentBenefit2'),
                  t('agroWeatherAppTreatmentBenefit3')
                ]
              },
              {
                title: t('agroWeatherAppIrrigationTitle'),
                description: t('agroWeatherAppIrrigationDesc'),
                benefits: [
                  t('agroWeatherAppIrrigationBenefit1'),
                  t('agroWeatherAppIrrigationBenefit2'),
                  t('agroWeatherAppIrrigationBenefit3')
                ]
              }
            ].map((app, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <div className="space-y-2">
                  {app.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('agroWeatherCtaTitle')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('agroWeatherCtaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              {t('agroWeatherCtaInstall')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              {t('agroWeatherCtaDemo')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgroWeatherPage;

