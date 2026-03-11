import React from 'react';
import { ArrowRight, CheckCircle, Bell, Users, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CollectiveAlertSystemPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0A0B0D]">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-pink-900/30 to-rose-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <Bell className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-red-400 font-medium">{t('collectiveAlertHeroBadge')}</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">{t('collectiveAlertTitle')}</h1>
                <h2 className="text-2xl lg:text-3xl text-red-400 mb-6 font-semibold">{t('collectiveAlertSubtitle')}</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {t('collectiveAlertDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    {t('collectiveAlertJoinButton')} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    {t('collectiveAlertCreateButton')}
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-red-500/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-red-500/30">
                  <img src="/src/assets/collective_alert_system.png" alt={t('collectiveAlertImageAlt')} className="w-full h-auto rounded-lg" />
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
              { icon: <Users className="w-8 h-8" />, metric: "5000+", title: t('collectiveAlertFactFarmersTitle'), description: t('collectiveAlertFactFarmersDesc') },
              { icon: <Zap className="w-8 h-8" />, metric: "< 5min", title: t('collectiveAlertFactAlertTimeTitle'), description: t('collectiveAlertFactAlertTimeDesc') },
              { icon: <Shield className="w-8 h-8" />, metric: "24/7", title: t('collectiveAlertFactSurveillanceTitle'), description: t('collectiveAlertFactSurveillanceDesc') },
              { icon: <Bell className="w-8 h-8" />, metric: "Multi", title: t('collectiveAlertFactChannelsTitle'), description: t('collectiveAlertFactChannelsDesc') }
            ].map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                  <div className="text-red-400">{fact.icon}</div>
                </div>
                <div className="text-3xl font-bold text-red-400 mb-2">{fact.metric}</div>
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
              {
                title: t('collectiveAlertAppWeatherTitle'),
                description: t('collectiveAlertAppWeatherDesc'),
                benefits: [
                  t('collectiveAlertAppWeatherBenefit1'),
                  t('collectiveAlertAppWeatherBenefit2'),
                  t('collectiveAlertAppWeatherBenefit3')
                ]
              },
              {
                title: t('collectiveAlertAppHealthTitle'),
                description: t('collectiveAlertAppHealthDesc'),
                benefits: [
                  t('collectiveAlertAppHealthBenefit1'),
                  t('collectiveAlertAppHealthBenefit2'),
                  t('collectiveAlertAppHealthBenefit3')
                ]
              },
              {
                title: t('collectiveAlertAppCoordinationTitle'),
                description: t('collectiveAlertAppCoordinationDesc'),
                benefits: [
                  t('collectiveAlertAppCoordinationBenefit1'),
                  t('collectiveAlertAppCoordinationBenefit2'),
                  t('collectiveAlertAppCoordinationBenefit3')
                ]
              }
            ].map((alert, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{alert.title}</h3>
                <p className="text-gray-300 mb-6">{alert.description}</p>
                <div className="space-y-2">
                  {alert.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-red-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t('collectiveAlertCtaTitle')}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('collectiveAlertCtaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              {t('collectiveAlertCtaJoin')} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              {t('collectiveAlertCtaCreate')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectiveAlertSystemPage;

