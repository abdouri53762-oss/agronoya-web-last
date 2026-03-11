import React from 'react';
import { ArrowRight, CheckCircle, Brain, Camera, Smartphone, Zap, Target, Eye, Clock, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NoyaDiagPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0A0B0D]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/src/assets/noya_diag.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-teal-900/30 to-green-900/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <Brain className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-emerald-400 font-medium">{t('noyaDiagHeroBadge')}</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  {t('noyaDiagTitle')}
                </h1>

                <h2 className="text-2xl lg:text-3xl text-emerald-400 mb-6 font-semibold">
                  {t('noyaDiagSubtitle')}
                </h2>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {t('noyaDiagHeroDesc')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    {t('noyaDiagTryButton')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    {t('noyaDiagApiIntegrationButton')}
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl p-8 backdrop-blur-sm border border-emerald-500/30">
                  <img
                    src="/src/assets/noya_diag.png"
                    alt={t('noyaDiagImageAlt')}
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
              {t('noyaDiagKeyFactsTitle')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('noyaDiagKeyFactsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                metric: "97%",
                title: t('noyaDiagFactAccuracyTitle'),
                description: t('noyaDiagFactAccuracyDesc')
              },
              {
                icon: <Eye className="w-8 h-8" />,
                metric: "10k+",
                title: t('noyaDiagFactDiseasesTitle'),
                description: t('noyaDiagFactDiseasesDesc')
              },
              {
                icon: <Clock className="w-8 h-8" />,
                metric: "3 sec",
                title: t('noyaDiagFactSpeedTitle'),
                description: t('noyaDiagFactSpeedDesc')
              },
              {
                icon: <Activity className="w-8 h-8" />,
                metric: "50+",
                title: t('noyaDiagFactCropsTitle'),
                description: t('noyaDiagFactCropsDesc')
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
              {t('noyaDiagTechTitle')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('noyaDiagTechDesc')}
            </p>
          </div>

          <div className="mb-12">
            <img
              src="/src/assets/plant_disease_ai.png"
              alt={t('noyaDiagTechImageAlt')}
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="w-8 h-8" />,
                title: t('noyaDiagTechVisionTitle'),
                description: t('noyaDiagTechVisionDesc'),
                image: "/src/assets/ai_plant_diagnosis.jpg"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: t('noyaDiagTechDeepLearningTitle'),
                description: t('noyaDiagTechDeepLearningDesc'),
                image: "/src/assets/plant_disease_ai.png"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: t('noyaDiagTechMobileTitle'),
                description: t('noyaDiagTechMobileDesc'),
                image: "/src/assets/ai_plant_diagnosis.jpg"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: t('noyaDiagTechRealtimeTitle'),
                description: t('noyaDiagTechRealtimeDesc'),
                image: "/src/assets/plant_disease_ai.png"
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
                {t('noyaDiagMainFeaturesTitle')}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {t('noyaDiagMainFeaturesDesc')}
              </p>

              <div className="space-y-4 mb-8">
                {[
                  t('noyaDiagMainFeature1'),
                  t('noyaDiagMainFeature2'),
                  t('noyaDiagMainFeature3'),
                  t('noyaDiagMainFeature4'),
                  t('noyaDiagMainFeature5'),
                  t('noyaDiagMainFeature6')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  {t('noyaDiagMainActionTest')}
                </button>
                <button className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  {t('noyaDiagMainActionGuide')}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-2xl p-8 border border-emerald-500/20">
                <div className="space-y-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-emerald-400 font-semibold mb-2">{t('noyaDiagExampleDiagnosticTitle')}</h4>
                    <div className="text-lg font-bold text-white mb-1">{t('noyaDiagExampleDiagnosticValue')}</div>
                    <div className="text-sm text-gray-400">{t('noyaDiagExampleDiagnosticConfidence')}</div>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-emerald-400 font-semibold mb-2">{t('noyaDiagExampleTreatmentTitle')}</h4>
                    <div className="text-sm text-gray-300">{t('noyaDiagExampleTreatmentValue')}</div>
                    <div className="text-sm text-gray-400">{t('noyaDiagExampleTreatmentFrequency')}</div>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-emerald-400 font-semibold mb-2">{t('noyaDiagExamplePreventionTitle')}</h4>
                    <div className="text-sm text-gray-300">{t('noyaDiagExamplePreventionTip1')}</div>
                    <div className="text-sm text-gray-400">{t('noyaDiagExamplePreventionTip2')}</div>
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
              {t('noyaDiagAppsTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('noyaDiagAppFieldTitle'),
                description: t('noyaDiagAppFieldDesc'),
                benefits: [t('noyaDiagAppFieldBenefit1'), t('noyaDiagAppFieldBenefit2'), t('noyaDiagAppFieldBenefit3')]
              },
              {
                title: t('noyaDiagAppMonitoringTitle'),
                description: t('noyaDiagAppMonitoringDesc'),
                benefits: [t('noyaDiagAppMonitoringBenefit1'), t('noyaDiagAppMonitoringBenefit2'), t('noyaDiagAppMonitoringBenefit3')]
              },
              {
                title: t('noyaDiagAppAdviceTitle'),
                description: t('noyaDiagAppAdviceDesc'),
                benefits: [t('noyaDiagAppAdviceBenefit1'), t('noyaDiagAppAdviceBenefit2'), t('noyaDiagAppAdviceBenefit3')]
              }
            ].map((app, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <div className="space-y-2">
                  {app.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('noyaDiagCtaTitle')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('noyaDiagCtaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              {t('noyaDiagCtaDownloadButton')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              {t('noyaDiagCtaIntegrateButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoyaDiagPage;

