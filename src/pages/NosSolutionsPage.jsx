import React from 'react';
import { useTranslation } from 'react-i18next';
import Solutions from '../components/features/Solutions';

const NosSolutionsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-24 pb-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#57D53B] mb-6">
            Nos Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de solutions agricoles intelligentes. 
            De l'analyse du sol à la commercialisation, nous révolutionnons chaque étape 
            de votre agriculture avec des technologies de pointe pour optimiser vos rendements 
            et maximiser vos profits durablement.
          </p>
        </div>
      </div>

      {/* Solutions Component */}
      <Solutions />
    </div>
  );
};

export default NosSolutionsPage;

