import React from 'react';
import { ArrowRight, CheckCircle, ShoppingCart, Package, Truck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MarketplaceAgroStorePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0A0B0D]">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-orange-900/30 to-red-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-amber-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <ShoppingCart className="w-5 h-5 text-amber-400 mr-3" />
                  <span className="text-amber-400 font-medium">{t('marketplaceAgroStoreHeroBadge')}</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">{t('marketplaceAgroStoreTitle')}</h1>
                <h2 className="text-2xl lg:text-3xl text-amber-400 mb-6 font-semibold">{t('marketplaceAgroStoreSubtitle')}</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {t('marketplaceAgroStoreHeroDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    {t('marketplaceAgroStoreExploreButton')} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    {t('marketplaceAgroStoreBecomeSupplierButton')}
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl p-8 backdrop-blur-sm border border-amber-500/30">
                  <img src="/src/assets/marketplace_agro_store.png" alt={t('marketplaceAgroStoreImageAlt')} className="w-full h-auto rounded-lg" />
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
              { icon: <Package className="w-8 h-8" />, metric: "10k+", title: t('marketplaceAgroStoreFactProductsTitle'), description: t('marketplaceAgroStoreFactProductsDesc') },
              { icon: <Truck className="w-8 h-8" />, metric: "24h", title: t('marketplaceAgroStoreFactDeliveryTitle'), description: t('marketplaceAgroStoreFactDeliveryDesc') },
              { icon: <Star className="w-8 h-8" />, metric: "4.8/5", title: t('marketplaceAgroStoreFactSatisfactionTitle'), description: t('marketplaceAgroStoreFactSatisfactionDesc') },
              { icon: <ShoppingCart className="w-8 h-8" />, metric: "Auto", title: t('marketplaceAgroStoreFactOrdersTitle'), description: t('marketplaceAgroStoreFactOrdersDesc') }
            ].map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
                  <div className="text-amber-400">{fact.icon}</div>
                </div>
                <div className="text-3xl font-bold text-amber-400 mb-2">{fact.metric}</div>
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
              { title: t('marketplaceAgroStoreFeatureInputsTitle'), description: t('marketplaceAgroStoreFeatureInputsDesc'), benefits: [t('marketplaceAgroStoreFeatureInputsBenefit1'), t('marketplaceAgroStoreFeatureInputsBenefit2'), t('marketplaceAgroStoreFeatureInputsBenefit3')] },
              { title: t('marketplaceAgroStoreFeatureEquipmentTitle'), description: t('marketplaceAgroStoreFeatureEquipmentDesc'), benefits: [t('marketplaceAgroStoreFeatureEquipmentBenefit1'), t('marketplaceAgroStoreFeatureEquipmentBenefit2'), t('marketplaceAgroStoreFeatureEquipmentBenefit3')] },
              { title: t('marketplaceAgroStoreFeatureServicesTitle'), description: t('marketplaceAgroStoreFeatureServicesDesc'), benefits: [t('marketplaceAgroStoreFeatureServicesBenefit1'), t('marketplaceAgroStoreFeatureServicesBenefit2'), t('marketplaceAgroStoreFeatureServicesBenefit3')] }
            ].map((category, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="space-y-2">
                  {category.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-900/20 to-orange-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t('marketplaceAgroStoreCtaTitle')}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('marketplaceAgroStoreCtaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              {t('marketplaceAgroStoreCtaShopButton')} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              {t('marketplaceAgroStoreCtaSupplierButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketplaceAgroStorePage;

