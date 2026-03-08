import React from 'react';
import { ArrowLeft, Satellite, CheckCircle, Eye, Globe, BarChart3, MapPin, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import satelliteAnalysisImg from '../assets/satellite_analysis.jpg';
import smartFarming3 from '../assets/smart_farming_3.jpg';
import smartFarming5 from '../assets/smart_farming_5.jpg';

const SatelliteAnalysisPage = () => {
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
                  <Satellite className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  {t("satelliteAnalysisPageTitle")}
                </h1>
              </div>
              
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#1C191F' }}>
                {t("satelliteAnalysisPageDescription")}
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
                src={satelliteAnalysisImg} 
                alt={t('satelliteAnalysisPageTitle')}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              {t("spatialAgricultureInAction")}
            </h2>
            <p className="text-xl mb-12 leading-relaxed" style={{ color: '#1C191F' }}>
              {t("spatialAgricultureInActionDesc")}
            </p>
            
            <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl">
              <iframe 
                className="w-full h-64 md:h-96"
                src="https://www.youtube.com/embed/6wwgaLb7dW4"
                title={t('spatialAgricultureInAction')}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              {t("cropSpatialMonitoring")}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="prose prose-lg max-w-none text-agronoya-gray">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t("advancedSatelliteTechnology")}
                </h3>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#1C191F' }}>
                  {t('advancedSatelliteTechnologyDesc1')}
                </p>
                
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#1C191F' }}>
                  {t("advancedSatelliteTechnologyDesc2")}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-agronoya-primary/10 to-agronoya-primary/5 p-6 rounded-2xl border border-agronoya-primary/20">
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    {t("satellitesUsed")}
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-agronoya-primary mr-2" />
                        {t('sentinel2')}
                      </span>
                      <span className="text-foreground">10m - 5 jours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-agronoya-primary mr-2" />
                        {t('landsat89')}
                      </span>
                      <span className="text-foreground">30m - 16 jours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-agronoya-primary mr-2" />
                        {t('modisTerraAqua')}
                      </span>
                      <span className="text-foreground">250m - 1 jour</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-agronoya-primary mr-2" />
                        {t('planetLabs')}
                      </span>
                      <span className="text-foreground">3m - quotidien</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">
                    {t('advancedAIProcessing')}
                  </h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    {t('advancedAIProcessingDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indices et analyses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t('vegetationIndicesCalculated')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                {t('ndviHealth')}
              </h3>
              <p className="text-agronoya-gray text-sm leading-relaxed mb-4">
                {t('ndviHealthDesc')}
              </p>
              <div className="bg-green-50 p-3 rounded-lg">
                <code className="text-xs text-green-800">NDVI = (NIR - Red) / (NIR + Red)</code>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                {t('ndwiWaterStress')}
              </h3>
              <p className="text-agronoya-gray text-sm leading-relaxed mb-4">
                {t('ndwiWaterStressDesc')}
              </p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <code className="text-xs text-blue-800">NDWI = (Green - NIR) / (Green + NIR)</code>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                {t('ndreNitrogen')}
              </h3>
              <p className="text-agronoya-gray text-sm leading-relaxed mb-4">
                {t('ndreNitrogenDesc')}
              </p>
              <div className="bg-purple-50 p-3 rounded-lg">
                <code className="text-xs text-purple-800">NDRE = (NIR - RedEdge) / (NIR + RedEdge)</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications pratiques */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t('practicalApplications')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-6">
                  {t('earlyDetection')}
                </h3>
                <ul className="space-y-4 text-green-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <strong>{t('waterStress')}</strong> {t('waterStressDesc')}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <strong>{t('fungalDiseases')}</strong> {t('fungalDiseasesDesc')}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <strong>{t('nutritionalDeficiencies')}</strong> {t('nutritionalDeficienciesDesc')}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <strong>{t('climaticDamage')}</strong> {t('climaticDamageDesc')}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  {t('cropOptimization')}
                </h3>
                <ul className="space-y-4 text-blue-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <strong>{t('prescriptionMaps')}</strong> {t('prescriptionMapsDesc')}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <strong>{t('yieldPrediction')}</strong> {t('yieldPredictionDesc')}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <strong>{t('phenologicalMonitoring')}</strong> {t('phenologicalMonitoringDesc')}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <strong>{t('parcelZoning')}</strong> {t('parcelZoningDesc')}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages économiques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-8">
                {t('immediateROI')}
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-3">
                      {t('unlimitedCoverage')}
                    </h3>
                    <p className="text-agronoya-gray leading-relaxed">
                      {t('unlimitedCoverageDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-3">
                      {t('centimetricPrecision')}
                    </h3>
                    <p className="text-agronoya-gray leading-relaxed">
                      {t('centimetricPrecisionDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-3">
                      {t('exceptionalReactivity')}
                    </h3>
                    <p className="text-agronoya-gray leading-relaxed">
                      {t('exceptionalReactivityDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <img 
                src={smartFarming3} 
                alt={t('satelliteAnalysisPageTitle')}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src={smartFarming5} 
                alt={t('ndviHealth')}
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
                  <span className="text-agronoya-primary font-bold">AL</span>
                </div>
                <div>
                  <h4 className="font-bold text-agronoya-gray-darker">{t('antoineLeclerc')}</h4>
                  <p className="text-sm text-agronoya-gray">{t('antoineLeclercRole')}</p>
                </div>
              </div>
              <p className="text-agronoya-gray italic leading-relaxed">
                {t('antoineLeclercTestimonial')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-agronoya-primary">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-agronoya-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-agronoya-primary font-bold">MR</span>
                </div>
                <div>
                  <h4 className="font-bold text-agronoya-gray-darker">{t('marieRousseau')}</h4>
                  <p className="text-sm text-agronoya-gray">{t('marieRousseauRole')}</p>
                </div>
              </div>
              <p className="text-agronoya-gray italic leading-relaxed">
                {t('marieRousseauTestimonial')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-agronoya-primary">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-agronoya-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-agronoya-primary font-bold">TD</span>
                </div>
                <div>
                  <h4 className="font-bold text-agronoya-gray-darker">{t('thomasDurand')}</h4>
                  <p className="text-sm text-agronoya-gray">{t('thomasDurandRole')}</p>
                </div>
              </div>
              <p className="text-agronoya-gray italic leading-relaxed">
                {t('thomasDurandTestimonial')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spécifications techniques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t('technicalPerformance')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">10m</div>
              <p className="opacity-90">{t('spatialResolution')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">2-3 jours</div>
              <p className="opacity-90">{t('passageFrequency')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">13 bandes</div>
              <p className="opacity-90">{t('spectralBands')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">95%</div>
              <p className="opacity-90">{t('predictionAccuracy')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section enrichie */}
      <section className="py-20 bg-gradient-to-r from-agronoya-primary via-agronoya-primary-light to-agronoya-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('monitorCropsFromSpace')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            {t('monitorCropsFromSpaceDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              {t('freeTrial30Days')}
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300 transform hover:scale-105 inline-block"
            >
              {t('requestDemo')}
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5000+</div>
              <p className="opacity-90">{t('userFarmers')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500000+</div>
              <p className="opacity-90">{t('monitoredHectares')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2-3 jours</div>
              <p className="opacity-90">{t('monitoringFrequency')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SatelliteAnalysisPage;

