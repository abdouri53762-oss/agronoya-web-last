import React from 'react';
import { ArrowRight, CheckCircle, Leaf, Award, TrendingDown, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarbonCertificationPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0B0D]">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-emerald-900/30 to-teal-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <Leaf className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-green-400 font-medium">Crédits Carbone</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Certification Carbone</h1>
                <h2 className="text-2xl lg:text-3xl text-green-400 mb-6 font-semibold">Monétisation CO2</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Certification et monétisation de votre séquestration carbone. Génération automatique de crédits 
                  carbone vérifiés et vendables sur les marchés internationaux.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    Calculer Mes Crédits <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    Certification Officielle
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl p-8 backdrop-blur-sm border border-green-500/30">
                  <img src="/src/assets/carbon_certification.png" alt="Certification Carbone" className="w-full h-auto rounded-lg" />
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
              { icon: <TrendingDown className="w-8 h-8" />, metric: "€25/t", title: "Prix Crédit CO2", description: "Marché européen" },
              { icon: <Award className="w-8 h-8" />, metric: "VCS", title: "Standard Vérifié", description: "Certification internationale" },
              { icon: <Globe className="w-8 h-8" />, metric: "Global", title: "Marchés", description: "Vente mondiale" },
              { icon: <Leaf className="w-8 h-8" />, metric: "Auto", title: "Calcul", description: "Mesure automatique" }
            ].map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                  <div className="text-green-400">{fact.icon}</div>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">{fact.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{fact.title}</h3>
                <p className="text-gray-400 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <img src="/src/assets/esg_certification.png" alt="Certification ESG" className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Mesure Automatique", description: "Calcul précis du carbone séquestré par vos pratiques", benefits: ["Capteurs sol", "Satellite", "IA calcul"] },
              { title: "Certification VCS", description: "Validation selon standards internationaux reconnus", benefits: ["Audit tiers", "Traçabilité", "Conformité"] },
              { title: "Vente Crédits", description: "Monétisation sur marchés carbone européens et mondiaux", benefits: ["€25/tonne CO2", "Paiement garanti", "Contrats long terme"] }
            ].map((process, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                <p className="text-gray-300 mb-6">{process.description}</p>
                <div className="space-y-2">
                  {process.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Transformez Votre Impact en Revenus</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vos pratiques durables valent de l'or. Générez des revenus supplémentaires avec vos crédits carbone certifiés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              Estimer Mes Revenus <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Démarrer Certification
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarbonCertificationPage;

