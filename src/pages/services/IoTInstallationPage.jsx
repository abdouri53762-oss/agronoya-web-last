import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Cpu, CheckCircle, Clock, Euro } from 'lucide-react';
import { Link } from 'react-router-dom';

const IoTInstallationPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1C191F' }}>
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/services" 
          className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t('backToServices')}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-2xl mb-8">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {t('iotInstallationTitle')}
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              {t('iotInstallationDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                {t('requestQuote')}
              </button>
              <button className="border-2 border-gray-600 text-gray-300 hover:border-white hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                {t('contactExpert')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {t('serviceOverview')}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              {t('iotInstallationOverview')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {t('serviceFeatures')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-2xl">
                  <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {t(`iotInstallationFeature${index}`)}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {t('serviceBenefits')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">
                    {t(`iotInstallationBenefit${index}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Duration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 p-8 rounded-2xl text-center">
                <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('duration')}
                </h3>
                <p className="text-xl text-gray-300">
                  {t('iotInstallationDuration')}
                </p>
              </div>
              
              <div className="bg-gray-800/50 p-8 rounded-2xl text-center">
                <Euro className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('pricing')}
                </h3>
                <p className="text-xl text-gray-300">
                  {t('iotInstallationPrice')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('readyToStart')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('contactUsToday')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                {t('requestQuote')}
              </button>
              <Link 
                to="/contact"
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block"
              >
                {t('contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoTInstallationPage;

