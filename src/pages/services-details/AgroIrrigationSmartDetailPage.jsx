import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, TrendingUp, Droplets, Brain, Zap } from 'lucide-react';

const AgroIrrigationSmartDetailPage = () => {
  return (
    <div className="min-h-screen bg-[#1C191F] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-white hover:text-purple-200 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">AgroIrrigation Smart</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Irrigation IA Avancée - Système intelligent avec optimisation automatique par intelligence artificielle
          </p>
          <div className="flex items-center mt-6">
            <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
              2000 DTN + 1000 DTN/an
            </span>
          </div>
        </div>
      </div>

      {/* Problème Résolu */}
      <div className="py-16 bg-red-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-400 mb-6">🚨 Problème Résolu</h2>
            <p className="text-xl text-gray-300">
              <strong>Gaspillage d'eau et stress hydrique dus à une irrigation non pilotée</strong>
            </p>
            <p className="text-lg text-gray-400 mt-4">
              L'irrigation traditionnelle ne s'adapte pas aux conditions changeantes, 
              causant un gaspillage d'eau et des stress hydriques coûteux.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Estimé */}
      <div className="py-16 bg-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">📈 Impact Estimé</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400">+15%</h3>
                <p className="text-gray-300">Productivité</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Droplets className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">-50%</h3>
                <p className="text-gray-300">Eau Utilisée</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-400">100%</h3>
                <p className="text-gray-300">Gestion IA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fonctionnalités Détaillées */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Fonctionnalités IA Avancées</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">IA d'Optimisation Avancée</h3>
                  <p className="text-gray-400">Intelligence artificielle qui apprend et s'adapte aux besoins spécifiques de vos cultures</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Capteurs Météo Intégrés</h3>
                  <p className="text-gray-400">Station météo locale pour prédictions précises et ajustement automatique</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Gestion Multi-Zones</h3>
                  <p className="text-gray-400">Contrôle indépendant de plusieurs zones avec besoins différents</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prédiction des Besoins</h3>
                  <p className="text-gray-400">Anticipation des besoins hydriques basée sur l'historique et les prévisions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Optimisation Énergétique</h3>
                  <p className="text-gray-400">Programmation intelligente pour réduire les coûts énergétiques</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Apprentissage Continu</h3>
                  <p className="text-gray-400">L'IA s'améliore constamment grâce aux données collectées</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignage Client */}
      <div className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <blockquote className="text-2xl italic text-gray-300 mb-6">
              "L'IA prédit parfaitement les besoins en eau. Mes oliviers n'ont jamais été aussi productifs avec si peu d'eau !"
            </blockquote>
            <div className="text-lg">
              <p className="font-semibold text-purple-400">Mohamed Gharbi</p>
              <p className="text-gray-400">Agriculteur - Monastir</p>
            </div>
          </div>
        </div>
      </div>

      {/* Avantages IA */}
      <div className="py-16 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Avantages de l'IA NoyaIrrigation</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Réactivité Instantanée</h3>
              <p className="text-gray-400">Ajustement automatique en temps réel selon les conditions</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Apprentissage Intelligent</h3>
              <p className="text-gray-400">L'IA apprend de vos cultures pour optimiser continuellement</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">ROI Maximisé</h3>
              <p className="text-gray-400">Retour sur investissement optimal grâce à l'efficacité IA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Processus d'Installation */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Processus d'Installation IA</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyse IA</h3>
              <p className="text-gray-400">Étude approfondie de votre exploitation par nos algorithmes</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation Smart</h3>
              <p className="text-gray-400">Déploiement du système IA et des capteurs intelligents</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Calibration IA</h3>
              <p className="text-gray-400">Paramétrage et apprentissage initial de l'intelligence artificielle</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimisation</h3>
              <p className="text-gray-400">Suivi et amélioration continue des performances IA</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt pour l'Irrigation du Futur ?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Laissez l'IA optimiser votre irrigation pour des rendements exceptionnels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Demander un Devis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              Contacter un Expert IA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroIrrigationSmartDetailPage;

