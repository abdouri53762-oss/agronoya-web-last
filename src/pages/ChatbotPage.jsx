import React from 'react';
import { ArrowLeft, MessageCircle, CheckCircle, Brain, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import aiChatbotImg from '../assets/ai_chatbot.jpg';
import smartFarming7 from '../assets/smart_farming_7.png';
import smartFarming8 from '../assets/smart_farming_8.png';

const ChatbotPage = () => {
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
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  {t("chatbotPageTitle")}
                </h1>
              </div>
              
              <p className="text-xl text-foreground mb-8 leading-relaxed">
                {t("chatbotPageDescription")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  {t('tryNow')}
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300 transform hover:scale-105">
                  {t('documentation')}
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={aiChatbotImg} 
                alt={t('chatbotPageTitle')}
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
              {t('yourPersonalAgriculturalExpert')}
            </h2>
            
            <div className="prose prose-lg max-w-none text-agronoya-gray mb-12">
              <p className="text-xl leading-relaxed mb-6">
                {t('yourPersonalAgriculturalExpertDesc1')}
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                {t('yourPersonalAgriculturalExpertDesc2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t('intelligentCapabilities')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                {t('personalizedAdvice')}
              </h3>
              <p className="text-agronoya-gray">
                {t('personalizedAdviceDesc')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                {t('available247')}
              </h3>
              <p className="text-agronoya-gray">
                {t('available247Desc')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                {t('continuousLearning')}
              </h3>
              <p className="text-agronoya-gray">
                {t('continuousLearningDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exemples de questions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            {t('exampleQuestions')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-agronoya-primary/5 p-6 rounded-2xl border-l-4 border-agronoya-primary">
                <h3 className="font-semibold text-agronoya-gray-darker mb-2">
                  {t('whenToIrrigateTomatoes')}
                </h3>
                <p className="text-agronoya-gray text-sm">
                  {t('whenToIrrigateTomatoesDesc')}
                </p>
              </div>
              
              <div className="bg-agronoya-primary/5 p-6 rounded-2xl border-l-4 border-agronoya-primary">
                <h3 className="font-semibold text-agronoya-gray-darker mb-2">
                  {t('nitrogenDose')}
                </h3>
                <p className="text-agronoya-gray text-sm">
                  {t('nitrogenDoseDesc')}
                </p>
              </div>
              
              <div className="bg-agronoya-primary/5 p-6 rounded-2xl border-l-4 border-agronoya-primary">
                <h3 className="font-semibold text-agronoya-gray-darker mb-2">
                  {t('howToTreatDisease')}
                </h3>
                <p className="text-agronoya-gray text-sm">
                  {t('howToTreatDiseaseDesc')}
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-agronoya-primary/5 p-6 rounded-2xl border-l-4 border-agronoya-primary">
                <h3 className="font-semibold text-agronoya-gray-darker mb-2">
                  {t('bestTimeToSow')}
                </h3>
                <p className="text-agronoya-gray text-sm">
                  {t('bestTimeToSowDesc')}
                </p>
              </div>
              
              <div className="bg-agronoya-primary/5 p-6 rounded-2xl border-l-4 border-agronoya-primary">
                <h3 className="font-semibold text-agronoya-gray-darker mb-2">
                  {t('optimizeCropRotation')}
                </h3>
                <p className="text-agronoya-gray text-sm">
                  {t('optimizeCropRotationDesc')}
                </p>
              </div>
              
              <div className="bg-agronoya-primary/5 p-6 rounded-2xl border-l-4 border-agronoya-primary">
                <h3 className="font-semibold text-agronoya-gray-darker mb-2">
                  {t('weatherRisksThisWeek')}
                </h3>
                <p className="text-agronoya-gray text-sm">
                  {t('weatherRisksThisWeekDesc')}
                </p>
              </div>
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
                {t('aiAssistantBenefits')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      {t('timeSaving')}
                    </h3>
                    <p className="text-agronoya-gray">
                      {t('timeSavingDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      {t('informedDecisions')}
                    </h3>
                    <p className="text-agronoya-gray">
                      {t('informedDecisionsDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      {t('continuousTraining')}
                    </h3>
                    <p className="text-agronoya-gray">
                      {t('continuousTrainingDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <img 
                src={smartFarming7} 
                alt={t('aiAssistantBenefits')}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src={smartFarming8} 
                alt={t('personalizedAdvice')}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-agronoya-primary via-agronoya-primary-light to-agronoya-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('startChattingWithAIAssistant')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('startChattingWithAIAssistantDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              {t('tryForFree')}
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300 transform hover:scale-105 inline-block"
            >
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatbotPage;

