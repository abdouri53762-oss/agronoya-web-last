import React from 'react';
import { ArrowLeft, Droplets, CheckCircle, Smartphone, Timer, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import soilAnalysisImg from '../assets/soil_analysis.jpg';
import smartFarming1 from '../assets/smart_farming_1.jpg';
import smartFarming5 from '../assets/smart_farming_5.jpg';
import { useTranslation } from 'react-i18next';

const IrrigationPage = () => {
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
              className="flex items-center text-white hover:text-white/80 transition-colors duration-300 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t("backToHome")}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  {t("irrigationPageTitle")}
                </h1>
              </div>
              
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#1C191F' }}>
                {t("irrigationPageDescription")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  {t("requestQuote")}
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300 transform hover:scale-105">
                  {t("viewDemo")}
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={soilAnalysisImg} 
                alt="Irrigation Intelligente"
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
              {t("intelligentWaterManagement")}
            </h2>
            
            <div className="prose prose-lg max-w-none text-foreground mb-12">
              <p className="text-xl leading-relaxed mb-6">
                {t("intelligentWaterManagementDesc1")}
              </p>
              
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#1C191F' }}>
                {t("intelligentWaterManagementDesc2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-16 text-center">
            {t("advancedFeatures")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t("remoteControl")}
              </h3>
              <p className="text-foreground">
                {t("remoteControlDesc")}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Timer className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t("smartProgramming")}
              </h3>
              <p className="text-foreground">
                {t("smartProgrammingDesc")}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Gauge className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t("continuousMonitoring")}
              </h3>
              <p className="text-foreground">
                {t("continuousMonitoringDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de systèmes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t("adaptedIrrigationSolutions")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                {t("dripIrrigation")}
              </h3>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  {t("dripIrrigationDesc1")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  {t("dripIrrigationDesc2")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  {t("dripIrrigationDesc3")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  {t("dripIrrigationDesc4")}
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                {t("smartSprinkler")}
              </h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  {t("smartSprinklerDesc1")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  {t("smartSprinklerDesc2")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  {t("smartSprinklerDesc3")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  {t("smartSprinklerDesc4")}
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                {t("microIrrigation")}
              </h3>
              <ul className="space-y-3 text-purple-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  {t("microIrrigationDesc1")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  {t("microIrrigationDesc2")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  {t("microIrrigationDesc3")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  {t("microIrrigationDesc4")}
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
                {t("benefitsOfSmartIrrigation")}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      {t("waterSaving")}
                    </h3>
                    <p className="text-agronoya-gray">
                      {t("waterSavingDesc")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      {t("yieldImprovement")}
                    </h3>
                    <p className="text-agronoya-gray">
                      {t("yieldImprovementDesc")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      {t("timeSaving")}
                    </h3>
                    <p className="text-agronoya-gray">
                      {t("timeSavingDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <img 
                src={smartFarming1} 
                alt="Système d'irrigation"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src={smartFarming5} 
                alt="Contrôle intelligent"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités de l'application */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t("intuitiveMobileApp")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-agronoya-primary/5 p-6 rounded-2xl border-l-4 border-agronoya-primary">
                <h3 className="font-semibold text-agronoya-gray-darker mb-2">
                  {t("realTimeControl")}
                </h3>
                <p className="text-agronoya-gray text-sm">
                  {t("realTimeControlDesc")}
                </p>
              </div>
              
              <div className="bg-agronoya-primary/5 p-6 rounded-2xl border-l-4 border-agronoya-primary">
                <h3 className="font-semibold text-agronoya-gray-darker mb-2">
                  {t("sensorMonitoring")}
                </h3>
                <p className="text-agronoya-gray text-sm">
                  {t("sensorMonitoringDesc")}
                </p>
              </div>
              
              <div className="bg-agronoya-primary/5 p-6 rounded-2xl border-l-4 border-agronoya-primary">
                <h3 className="font-semibold text-agronoya-gray-darker mb-2">
                  {t("smartAlerts")}
                </h3>
                <p className="text-agronoya-gray text-sm">
                  {t("smartAlertsDesc")}
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-agronoya-primary/5 p-6 rounded-2xl border-l-4 border-agronoya-primary">
                <h3 className="font-semibold text-agronoya-gray-darker mb-2">
                  {t("dataAnalysis")}
                </h3>
                <p className="text-agronoya-gray text-sm">
                  {t("dataAnalysisDesc")}
                </p>
              </div>
              
              <div className="bg-agronoya-primary/5 p-6 rounded-2xl border-l-4 border-agronoya-primary">
                <h3 className="font-semibold text-agronoya-gray-darker mb-2">
                  {t("customizableSchedules")}
                </h3>
                <p className="text-agronoya-gray text-sm">
                  {t("customizableSchedulesDesc")}
                </p>
              </div>
              
              <div className="bg-agronoya-primary/5 p-6 rounded-2xl border-l-4 border-agronoya-primary">
                <h3 className="font-semibold text-agronoya-gray-darker mb-2">
                  {t("remoteAccess")}
                </h3>
                <p className="text-agronoya-gray text-sm">
                  {t("remoteAccessDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t("keyMetrics")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-5xl font-bold text-agronoya-primary mb-2">+20%</p>
              <p className="text-agronoya-gray text-lg">{t("yieldIncreaseStat")}</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-5xl font-bold text-agronoya-primary mb-2">95%</p>
              <p className="text-agronoya-gray text-lg">{t("userSatisfactionStat")}</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-5xl font-bold text-agronoya-primary mb-2">40%</p>
              <p className="text-agronoya-gray text-lg">{t("timeReductionStat")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-agronoya-primary via-agronoya-primary-light to-agronoya-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t("getStartedToday")}
          </h2>
          <p className="text-xl mb-10 leading-relaxed">
            {t("getStartedTodayDesc")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              {t("requestPersonalizedDemo")}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300 transform hover:scale-105">
              {t("startFreeTrial")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IrrigationPage;

