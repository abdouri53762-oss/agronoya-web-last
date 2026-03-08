import React from 'react';
import { ArrowLeft, Plane, CheckCircle, Camera, Map, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import droneScanningImg from '../assets/drone_scanning.jpg';
import smartFarming1 from '../assets/smart_farming_1.jpg';
import smartFarming2 from '../assets/smart_farming_2.jpg';

const DroneScanningPage = () => {
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
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  {t("droneScanningPageTitle")}
                </h1>
              </div>
              
              <p className="text-xl text-foreground mb-8 leading-relaxed">
                {t("droneScanningPageDescription")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  {t('requestQuote')}
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300 transform hover:scale-105">
                  {t('viewDemo')}
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={droneScanningImg} 
                alt={t('droneScanningPageTitle')}
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Description détaillée */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              {t("advancedAerialTech")}
            </h2>
            
            <div className="prose prose-lg max-w-none text-foreground mb-12">
              <p className="text-xl leading-relaxed mb-6">
                {t("advancedAerialTechDesc1")}
              </p>
              
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#1C191F' }}>
                {t("advancedAerialTechDesc2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t('advancedTechnicalCapabilities')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Camera className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                {t('multispectralCameras')}
              </h3>
              <p className="text-agronoya-gray">
                {t('multispectralCamerasDesc')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Map className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                {t('preciseMapping')}
              </h3>
              <p className="text-agronoya-gray">
                {t('preciseMappingDesc')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                {t('realTimeProcessing')}
              </h3>
              <p className="text-agronoya-gray">
                {t('realTimeProcessingDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'analyses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t('availableAnalysisTypes')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-agronoya-primary/5 to-agronoya-primary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-agronoya-gray-darker mb-4">
                {t('plantHealth')}
              </h3>
              <ul className="space-y-3 text-agronoya-gray">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-agronoya-primary mr-3" />
                  {t('ndviNdREIndices')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-agronoya-primary mr-3" />
                  {t('diseaseDetection')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-agronoya-primary mr-3" />
                  {t('waterStress')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-agronoya-primary mr-3" />
                  {t('nutritionalDeficiencies')}
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-agronoya-primary/5 to-agronoya-primary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-agronoya-gray-darker mb-4">
                {t('cropManagement')}
              </h3>
              <ul className="space-y-3 text-agronoya-gray">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-agronoya-primary mr-3" />
                  {t('plantCounting')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-agronoya-primary mr-3" />
                  {t('biomassEstimation')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-agronoya-primary mr-3" />
                  {t('weedDetection')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-agronoya-primary mr-3" />
                  {t('yieldPrediction')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-8">
                {t('droneScanningBenefits')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      {t('rapidCoverage')}
                    </h3>
                    <p className="text-agronoya-gray">
                      {t('rapidCoverageDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      {t('exceptionalPrecision')}
                    </h3>
                    <p className="text-agronoya-gray">
                      {t('exceptionalPrecisionDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      {t('objectiveData')}
                    </h3>
                    <p className="text-agronoya-gray">
                      {t('objectiveDataDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <img 
                src={smartFarming1} 
                alt={t('droneScanningBenefits')}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src={smartFarming2} 
                alt={t('droneScanningBenefits')}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spécifications techniques */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t('technicalSpecifications')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">100 ha</div>
              <p className="text-agronoya-gray">{t('coveragePerFlight')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">2 cm</div>
              <p className="text-agronoya-gray">{t('spatialResolution')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">45 min</div>
              <p className="text-agronoya-gray">{t('flightAutonomy')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">5 bandes</div>
              <p className="text-agronoya-gray">{t('spectralSensors')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-agronoya-primary via-agronoya-primary-light to-agronoya-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('revolutionizeMonitoring')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('revolutionizeMonitoringDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              {t('scheduleDemoFlight')}
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300 transform hover:scale-105 inline-block"
            >
              {t('contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroneScanningPage;

