import React from 'react';
import { ArrowLeft, Brain, CheckCircle, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import diseaseDetectionImg from '../assets/disease_detection.jpg';

const DiseaseDetectionPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-agronoya-primary hover:text-agronoya-primary-dark mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t('backToHome')}
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-agronoya-primary/10 rounded-2xl flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-agronoya-primary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                {t("diseaseDetectionPageTitle")}
              </h1>
            </div>
            <p className="text-xl text-foreground mb-6">
              {t("diseaseDetectionPageDescription")}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-800 font-medium">{t('precisionRate')}</span>
              </div>
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">{t('earlyDetection')}</span>
              </div>
              <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-purple-800 font-medium">{t('automaticPrevention')}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={diseaseDetectionImg} 
              alt={t('diseaseDetectionPageTitle')}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-agronoya-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t("realTimeAnalysis")}
            </h3>
            <p className="text-foreground">
              {t("realTimeAnalysisDesc")}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-agronoya-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t("extendedDatabase")}
            </h3>
            <p className="text-foreground">
              {t("extendedDatabaseDesc")}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-agronoya-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t("intelligentRecommendations")}
            </h3>
            <p className="text-foreground">
              {t("intelligentRecommendationsDesc")}
            </p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-agronoya-primary/20 mb-16">
          <h2 className="text-3xl font-bold text-agronoya-gray-darker mb-6">
            {t('howItWorks')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-agronoya-primary mb-4">
                {t('cuttingEdgeTechnology')}
              </h3>
              <ul className="space-y-3 text-agronoya-gray">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-agronoya-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t('cnnAnalysis')}
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-agronoya-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t('computerVision')}
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-agronoya-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t('machineLearning')}
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-agronoya-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {t('iotIntegration')}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-agronoya-primary mb-4">
                {t('analysisProcess')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-agronoya-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                  <span className="text-agronoya-gray">{t('highResCapture')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-agronoya-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                  <span className="text-agronoya-gray">{t('aiAnalysis')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-agronoya-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                  <span className="text-agronoya-gray">{t('anomalyIdentification')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-agronoya-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                  <span className="text-agronoya-gray">{t('treatmentRecommendations')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {t('readyToProtect')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('readyToProtectDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              {t('requestDemo')}
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300">
              {t('downloadDocumentation')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetectionPage;

