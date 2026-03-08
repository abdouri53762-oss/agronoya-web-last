import React from 'react';
import { ArrowLeft, Cpu, CheckCircle, TrendingUp, Zap, Shield, Play, BarChart3, Microscope, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import soilAnalysisImg from '../assets/soil_analysis.jpg';
import smartFarming1 from '../assets/smart_farming_1.jpg';
import smartFarming2 from '../assets/smart_farming_2.jpg';

const SoilAnalysisPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-agronoya-primary/5">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-agronoya-primary via-agronoya-primary-light to-agronoya-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-6">
            <Link 
              to="/" 
              className="flex items-center text-agronoya-primary hover:text-agronoya-primary-dark transition-colors duration-300 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t('backToHome')}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  {t("soilAnalysisPageTitle")}
                </h1>
              </div>
              
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#1C191F' }}>
                {t("soilAnalysisPageDescription")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  {t('requestQuote')}
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300 transform hover:scale-105">
                  {t('technicalDocumentation')}
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={soilAnalysisImg} 
                alt={t('soilAnalysisPageTitle')}
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vidéo explicative */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-8">
              {t('discoverSoilAnalysis')}
            </h2>
            <p className="text-xl text-agronoya-gray mb-12 leading-relaxed">
              {t('discoverSoilAnalysisDesc')}
            </p>
            
            <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl">
              <iframe 
                className="w-full h-64 md:h-96"
                src="https://www.youtube.com/embed/-REPA1uPqng"
                title={t('discoverSoilAnalysis')}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Description détaillée enrichie */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-12 text-center">
              {t('cuttingEdgeSoilTech')}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="prose prose-lg max-w-none text-agronoya-gray">
                <h3 className="text-2xl font-bold text-agronoya-gray-darker mb-6">
                  {t('innovationTechnology')}
                </h3>
                <p className="text-lg leading-relaxed mb-6">
                  {t('innovationTechnologyDesc1')}
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  {t('innovationTechnologyDesc2')}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-agronoya-primary/10 to-agronoya-primary/5 p-6 rounded-2xl border border-agronoya-primary/20">
                  <h4 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                    {t('measuredParameters')}
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agronoya-primary mr-2" />
                      {t('phSoil')}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agronoya-primary mr-2" />
                      {t('volumetricHumidity')}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agronoya-primary mr-2" />
                      {t('temperature')}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agronoya-primary mr-2" />
                      {t('conductivityEC')}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agronoya-primary mr-2" />
                      {t('nitrogenN')}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agronoya-primary mr-2" />
                      {t('phosphorusP')}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agronoya-primary mr-2" />
                      {t('potassiumK')}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agronoya-primary mr-2" />
                      {t('organicMatter')}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">
                    {t('artificialIntelligence')}
                  </h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    {t('artificialIntelligenceDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités avancées */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t('advancedFeatures')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-agronoya-primary/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                {t('realTimeMonitoring')}
              </h3>
              <p className="text-agronoya-gray text-sm leading-relaxed">
                {t('realTimeMonitoringDesc')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-agronoya-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                {t('aiRecommendations')}
              </h3>
              <p className="text-agronoya-gray text-sm leading-relaxed">
                {t('aiRecommendationsDesc')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-agronoya-primary/20 transition-colors">
                <BarChart3 className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                {t('preciseMapping')}
              </h3>
              <p className="text-agronoya-gray text-sm leading-relaxed">
                {t('preciseMappingDesc')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-agronoya-primary/20 transition-colors">
                <Shield className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                {t('durableSensors')}
              </h3>
              <p className="text-agronoya-gray text-sm leading-relaxed">
                {t('durableSensorsDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'analyse détaillé */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t('completeAnalysisProcess')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-agronoya-primary to-agronoya-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Microscope className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-agronoya-gray-darker mb-4">
                {t('dataCollection')}
              </h3>
              <p className="text-agronoya-gray leading-relaxed">
                {t('dataCollectionDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-agronoya-primary to-agronoya-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-agronoya-gray-darker mb-4">
                {t('intelligentAnalysis')}
              </h3>
              <p className="text-agronoya-gray leading-relaxed">
                {t('intelligentAnalysisDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-agronoya-primary to-agronoya-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-agronoya-gray-darker mb-4">
                {t('recommendations')}
              </h3>
              <p className="text-agronoya-gray leading-relaxed">
                {t('recommendationsDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages économiques détaillés */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-8">
                {t('provenROI')}
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-3">
                      {t('yieldIncreaseROI')}
                    </h3>
                    <p className="text-agronoya-gray leading-relaxed">
                      {t('yieldIncreaseROIDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-3">
                      {t('costReductionROI')}
                    </h3>
                    <p className="text-agronoya-gray leading-relaxed">
                      {t('costReductionROIDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-3">
                      {t('environmentalImpactROI')}
                    </h3>
                    <p className="text-agronoya-gray leading-relaxed">
                      {t('environmentalImpactROIDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <img 
                src={smartFarming1} 
                alt={t('precisionAgricultureTitle')}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src={smartFarming2} 
                alt={t('iotInstallationTitle')}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages clients */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t('clientTestimonials')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-agronoya-primary">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-agronoya-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-agronoya-primary font-bold">JM</span>
                </div>
                <div>
                  <h4 className="font-bold text-agronoya-gray-darker">{t('jeanMartin')}</h4>
                  <p className="text-sm text-agronoya-gray">{t('jeanMartinRole')}</p>
                </div>
              </div>
              <p className="text-agronoya-gray italic leading-relaxed">
                {t('jeanMartinTestimonial')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-agronoya-primary">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-agronoya-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-agronoya-primary font-bold">SD</span>
                </div>
                <div>
                  <h4 className="font-bold text-agronoya-gray-darker">{t('sophieDubois')}</h4>
                  <p className="text-sm text-agronoya-gray">{t('sophieDuboisRole')}</p>
                </div>
              </div>
              <p className="text-agronoya-gray italic leading-relaxed">
                {t('sophieDuboisTestimonial')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-agronoya-primary">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-agronoya-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-agronoya-primary font-bold">PL</span>
                </div>
                <div>
                  <h4 className="font-bold text-agronoya-gray-darker">{t('pierreLeroy')}</h4>
                  <p className="text-sm text-agronoya-gray">{t('pierreLeroyRole')}</p>
                </div>
              </div>
              <p className="text-agronoya-gray italic leading-relaxed">
                {t('pierreLeroyTestimonial')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section enrichie */}
      <section className="py-20 bg-gradient-to-r from-agronoya-primary via-agronoya-primary-light to-agronoya-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('transformAgricultureToday')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            {t('transformAgricultureTodayDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              {t('requestFreeDemo')}
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300 transform hover:scale-105 inline-block"
            >
              {t('talkToAnExpert')}
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2000+</div>
              <p className="opacity-90">{t('equippedFarmers')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50000+</div>
              <p className="opacity-90">{t('monitoredHectares')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25%</div>
              <p className="opacity-90">{t('averageYieldIncrease')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoilAnalysisPage;

