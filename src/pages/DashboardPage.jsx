import React from 'react';
import { ArrowLeft, LayoutDashboard, CheckCircle, BarChart3, Bell, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import smartFarming1 from '../assets/smart_farming_1.jpg';
import smartFarming7 from '../assets/smart_farming_7.png';
import smartFarming8 from '../assets/smart_farming_8.png';

const DashboardPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1C191F' }}>
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden" style={{ backgroundColor: '#1C191F' }}>
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
                  <LayoutDashboard className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  {t("dashboardPageTitle")}
                </h1>
              </div>
              
              <p className="text-xl text-foreground mb-8 leading-relaxed">
                {t("dashboardPageDescription")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  {t("viewDemo")}
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300 transform hover:scale-105">
                  {t("freeTrial")}
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={smartFarming1} 
                alt="Dashboard Intelligent"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-8 text-center">
              {t("centralizedManagement")}
            </h2>
            
            <div className="prose prose-lg max-w-none text-agronoya-gray mb-12">
              <p className="text-xl leading-relaxed mb-6">
                {t("centralizedManagementDesc1")}
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                {t("centralizedManagementDesc2")}
              </p>
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
                {t("dashboardBenefitsTitle")}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      {t("globalVisionTitle")}
                    </h3>
                    <p className="text-agronoya-gray">
                      {t("globalVisionDesc")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      {t("quickDecisionTitle")}
                    </h3>
                    <p className="text-agronoya-gray">
                      {t("quickDecisionDesc")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      {t("resourceOptimizationTitle")}
                    </h3>
                    <p className="text-agronoya-gray">
                      {t("resourceOptimizationDesc")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      {t("continuousOptimizationTitle")}
                    </h3>
                    <p className="text-agronoya-gray">
                      {t("continuousOptimizationDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={smartFarming7} 
                alt="Dashboard Aperçu"
                className="w-full h-auto object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-agronoya-primary-light text-white">
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

export default DashboardPage;

