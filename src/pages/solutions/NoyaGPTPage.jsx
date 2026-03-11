import React from 'react';
import { ArrowRight, CheckCircle, MessageSquare, Brain, Smartphone, Zap, Users, Globe, Clock, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NoyaGPTPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0A0B0D]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/src/assets/noya_gpt.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-blue-900/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <Bot className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-purple-400 font-medium">{t('noyaGptHeroBadge')}</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  {t('noyaGPT')}
                </h1>

                <h2 className="text-2xl lg:text-3xl text-purple-400 mb-6 font-semibold">
                  {t('noyaGptHeroSubtitle')}
                </h2>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {t('noyaGptHeroDesc')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    {t('noyaGptTryNow')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    {t('noyaGptApiIntegration')}
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
                  <img
                    src="/src/assets/noya_gpt.png"
                    alt={t('noyaGptImageAlt')}
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
            <h2 className="text-3xl font-bold text-white mb-4">{t('noyaGptKeyFactsTitle')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('noyaGptKeyFactsDesc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                metric: "GPT-4",
                title: t('noyaGptFactModelTitle'),
                description: t('noyaGptFactModelDesc')
              },
              {
                icon: <Users className="w-8 h-8" />,
                metric: "50k+",
                title: t('noyaGptFactFarmersTitle'),
                description: t('noyaGptFactFarmersDesc')
              },
              {
                icon: <Globe className="w-8 h-8" />,
                metric: "12 langues",
                title: t('noyaGptFactMultilingualTitle'),
                description: t('noyaGptFactMultilingualDesc')
              },
              {
                icon: <Clock className="w-8 h-8" />,
                metric: "24/7",
                title: t('noyaGptFactAvailabilityTitle'),
                description: t('noyaGptFactAvailabilityDesc')
              }
            ].map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                  <div className="text-purple-400">{fact.icon}</div>
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{fact.metric}</div>
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
            <h2 className="text-3xl font-bold text-white mb-4">{t('noyaGptTechTitle')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t('noyaGptTechDesc')}</p>
          </div>

          <div className="mb-12">
            <img
              src="/src/assets/plant_care_chatbot.jpg"
              alt={t('noyaGptTechImageAlt')}
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: t('noyaGptTechChatTitle'),
                description: t('noyaGptTechChatDesc'),
                image: "/src/assets/agri_chatbot.webp"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: t('noyaGptTechSpecializedTitle'),
                description: t('noyaGptTechSpecializedDesc'),
                image: "/src/assets/plant_care_chatbot.jpg"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: t('noyaGptTechMultiPlatformTitle'),
                description: t('noyaGptTechMultiPlatformDesc'),
                image: "/src/assets/agri_chatbot.webp"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: t('noyaGptTechInstantResponsesTitle'),
                description: t('noyaGptTechInstantResponsesDesc'),
                image: "/src/assets/plant_care_chatbot.jpg"
              }
            ].map((tech, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-2 left-2 inline-flex items-center justify-center w-10 h-10 bg-purple-500/20 rounded-lg backdrop-blur-sm">
                    <div className="text-purple-400">{tech.icon}</div>
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
              <h2 className="text-4xl font-bold text-white mb-6">{t('noyaGptMainFeaturesTitle')}</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">{t('noyaGptMainFeaturesDesc')}</p>

              <div className="space-y-4 mb-8">
                {[
                  t('noyaGptMainFeature1'),
                  t('noyaGptMainFeature2'),
                  t('noyaGptMainFeature3'),
                  t('noyaGptMainFeature4'),
                  t('noyaGptMainFeature5'),
                  t('noyaGptMainFeature6')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  {t('noyaGptMainActionDemo')}
                </button>
                <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  {t('noyaGptMainActionDocs')}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-2xl p-8 border border-purple-500/20">
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-purple-400 font-semibold">{t('noyaGPT')}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{t('noyaGptChatGreeting')}</p>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 ml-8">
                    <p className="text-gray-300 text-sm">{t('noyaGptChatUserExample')}</p>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-purple-400 font-semibold">{t('noyaGPT')}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{t('noyaGptChatResponse')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('noyaGptUseCasesTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('noyaGptUseCaseDiagnosisTitle'),
                description: t('noyaGptUseCaseDiagnosisDesc'),
                benefits: [
                  t('noyaGptUseCaseDiagnosisBenefit1'),
                  t('noyaGptUseCaseDiagnosisBenefit2'),
                  t('noyaGptUseCaseDiagnosisBenefit3')
                ]
              },
              {
                title: t('noyaGptUseCaseAdviceTitle'),
                description: t('noyaGptUseCaseAdviceDesc'),
                benefits: [
                  t('noyaGptUseCaseAdviceBenefit1'),
                  t('noyaGptUseCaseAdviceBenefit2'),
                  t('noyaGptUseCaseAdviceBenefit3')
                ]
              },
              {
                title: t('noyaGptUseCaseTrainingTitle'),
                description: t('noyaGptUseCaseTrainingDesc'),
                benefits: [
                  t('noyaGptUseCaseTrainingBenefit1'),
                  t('noyaGptUseCaseTrainingBenefit2'),
                  t('noyaGptUseCaseTrainingBenefit3')
                ]
              }
            ].map((useCase, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-indigo-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t('noyaGptCtaTitle')}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{t('noyaGptCtaDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              {t('noyaGptCtaDemoButton')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              {t('noyaGptCtaIntegrateButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoyaGPTPage;

