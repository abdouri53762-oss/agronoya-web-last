import React from 'react';
import { Building, Factory, Leaf, TrendingUp } from 'lucide-react';

const ApplicationsSection = () => {
  return (
    <section className="py-20 bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))]">
      <div className="container mx-auto px-4">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Applications
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Notre solution de détection des limites de champ s'adapte aux besoins spécifiques 
            des gouvernements et des entreprises agricoles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pour les gouvernements */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mr-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Pour les gouvernements</h3>
            </div>
            
            <p className="text-foreground mb-6 leading-relaxed">
              La détection automatique de limite de champ permet de cartographier de manière rentable 
              la répartition des terres cultivées dans différentes régions et pays.
            </p>
            
            <p className="text-foreground mb-6 leading-relaxed">
              Les gouvernements et les institutions administratives ont la possibilité d'utiliser cette 
              solution pour évaluer les subventions, suivre l'évolution des cultures dans la zone d'intérêt, 
              surveiller l'efficacité de la production, entre autres applications.
            </p>
            
            <div className="flex items-start space-x-3 mb-4">
              <Leaf className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-foreground">
                Il existe également un aspect lié à la durabilité, car des cartes précises des limites 
                des champs garantissent la mise en œuvre réussie de nouvelles réglementations agricoles 
                visant à réduire l'impact négatif sur l'environnement.
              </p>
            </div>
          </div>

          {/* Pour les entreprises */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mr-4">
                <Factory className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Pour les entreprises</h3>
            </div>
            
            <p className="text-foreground mb-6 leading-relaxed">
              Dans la gestion d'une entreprise agricole, l'information est essentielle.
            </p>
            
            <p className="text-foreground mb-6 leading-relaxed">
              Des cartes précises des limites des champs forment la fondation de vastes bases de données 
              détaillées concernant divers aspects des cultures cultivées, tels que la rotation des cultures, 
              la teneur en chlorophylle, et bien d'autres.
            </p>
            
            <div className="flex items-start space-x-3 mb-4">
              <TrendingUp className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-foreground">
                La classification des cultures, l'estimation des rendements, le suivi de l'évolution des 
                récoltes, ainsi que d'autres solutions reposant sur la délimitation précise des champs, 
                offrent aux décideurs l'opportunité de réduire leurs dépenses et d'augmenter leurs profits.
              </p>
            </div>
          </div>
        </div>

        {/* Section technologie */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Notre Technologie</h3>
            <p className="text-lg mb-6 max-w-4xl mx-auto text-foreground">
              La plateforme AgroNoya utilise sa propre méthode innovante de délimitation des champs en 
              exploitant les réseaux neuronaux convolutionnels (CNN) et l'intelligence artificielle (IA).
            </p>
            <p className="max-w-4xl mx-auto text-foreground">
              Cette méthode nous permet d'automatiquement repérer les terres cultivées, tracer les limites 
              de la ferme sur la carte, et déterminer la superficie de la zone cultivée. L'acquisition de 
              ces données améliore considérablement la précision de la classification des cultures à grande échelle.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
            DÉTECTER LES LIMITES DU CHAMP
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;

