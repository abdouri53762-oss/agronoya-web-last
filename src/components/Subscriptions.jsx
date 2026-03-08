import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Subscriptions = () => {
  const { t } = useTranslation();

  const plans = [
    {
      id: 1,
      name: t('planStarterName'),
      price: "99",
      period: t('perMonth'),
      description: t('planStarterDescription'),
      icon: <Star className="w-6 h-6" />,
      popular: false,
      features: [
        t('starterFeature1'),
        t('starterFeature2'),
        t('starterFeature3'),
        t('starterFeature4'),
        t('starterFeature5')
      ],
      color: "border-agronoya-gray-light"
    },
    {
      id: 2,
      name: t('planProfessionalName'),
      price: "299",
      period: t('perMonth'),
      description: t('planProfessionalDescription'),
      icon: <Zap className="w-6 h-6" />,
      popular: true,
      features: [
        t('professionalFeature1'),
        t('professionalFeature2'),
        t('professionalFeature3'),
        t('professionalFeature4'),
        t('professionalFeature5'),
        t('professionalFeature6'),
        t('professionalFeature7')
      ],
      color: "border-primary"
    },
    {
      id: 3,
      name: t('planEnterpriseName'),
      price: "799",
      period: t('perMonth'),
      description: t('planEnterpriseDescription'),
      icon: <Crown className="w-6 h-6" />,
      popular: false,
      features: [
        t('enterpriseFeature1'),
        t('enterpriseFeature2'),
        t('enterpriseFeature3'),
        t('enterpriseFeature4'),
        t('enterpriseFeature5'),
        t('enterpriseFeature6'),
        t('enterpriseFeature7'),
        t('enterpriseFeature8'),
        t('enterpriseFeature9')
      ],
      color: "border-agronoya-gray-dark"
    }
  ];

  return (
    <section id="tarifs" className="py-20 bg-background text-foreground">      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("chooseYourPlanTitle")}
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            {t("chooseYourPlanSubtitle")}
          </p>
        </div>

        {/* Grille des plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg border-2 ${plan.color} hover-lift transition-all duration-300 ${
                plan.popular ? 'scale-105 shadow-2xl' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge populaire */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-agronoya-green text-white px-6 py-2 rounded-full text-sm font-semibold">
                    {t('mostPopular')}
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* En-tête du plan */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.popular ? 'bg-agronoya-green text-white' : 'bg-agronoya-beige text-agronoya-green'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-agronoya-gray mb-4">{plan.description}</p>
                  
                  {/* Prix */}
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-agronoya-gray-darker">{plan.price} TND</span>
                    <span className="text-agronoya-gray">/{plan.period}</span>
                  </div>
                </div>

                {/* Liste des fonctionnalités */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-agronoya-green rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-agronoya-gray-dark">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bouton CTA */}
                <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-agronoya-green hover:bg-agronoya-green-dark text-white' 
                    : 'border-2 border-primary text-agronoya-green hover:bg-agronoya-green hover:text-white'
                }`}>
                  {plan.popular ? t('startNow') : t('chooseThisPlan')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section garantie */}
        <div className="text-center mt-16 fade-in">
          <div className="inline-flex items-center bg-agronoya-beige rounded-full px-6 py-3">
            <Check className="w-5 h-5 text-agronoya-green mr-2" />
            <span className="text-agronoya-gray-dark font-medium">
              {t('moneyBackGuarantee')}
            </span>
          </div>
        </div>

        {/* FAQ rapide */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-agronoya-gray-darker mb-8">
            {t('faqTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="fade-in">
              <h4 className="font-semibold text-agronoya-gray-darker mb-2">
                {t('faqQuestion1')}
              </h4>
              <p className="text-agronoya-gray">
                {t('faqAnswer1')}
              </p>
            </div>
            <div className="fade-in">
              <h4 className="font-semibold text-agronoya-gray-darker mb-2">
                {t('faqQuestion2')}
              </h4>
              <p className="text-agronoya-gray">
                {t('faqAnswer2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;

