import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, TrendingUp, Star, Crown, Zap } from 'lucide-react';

const PackPremiumDetailPage = () => {
  return (
    <div className="min-h-screen bg-[#1C191F] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-white hover:text-yellow-200 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux Services
          </Link>
          <div className="flex items-center mb-4">
            <Crown className="w-12 h-12 text-yellow-300 mr-4" />
            <h1 className="text-5xl font-bold">Pack Premium</h1>
          </div>
          <p className="text-xl text-yellow-100 max-w-3xl">
            IoT + Smart Irrigation - Solution complète premium incluant AgroSol + AgroIrrigation Smart
          </p>
          <div className="flex items-center mt-6">
            <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-lg font-semibold">
              4300 DTN + 2000 DTN/an
            </span>
            <span className="ml-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
              ÉCONOMIE 15%
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
              <strong>Données multiples, dispersées et difficiles à interpréter pour l'agriculteur</strong>
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Les agriculteurs sont submergés par des données provenant de sources multiples 
              sans avoir une vision unifiée pour prendre des décisions optimales.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Estimé */}
      <div className="py-16 bg-yellow-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">📈 Impact Estimé</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400">Solution</h3>
                <p className="text-gray-300">Complète</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">Réduction</h3>
                <p className="text-gray-300">Complexité Décisionnelle</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-400">Actions</h3>
                <p className="text-gray-300">Prioritaires</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu du Pack */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contenu du Pack Premium</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* AgroSol Inclus */}
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-6">🌱 AgroSol Inclus</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Capteurs NPK/pH/température</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">IA NoyaSol intégrée</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Recommandations personnalisées</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Monitoring temps réel</p>
                </div>
              </div>
            </div>

            {/* AgroIrrigation Smart Inclus */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">💧 AgroIrrigation Smart Inclus</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">IA d'optimisation avancée</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Capteurs météo intégrés</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Gestion multi-zones</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Prédiction des besoins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Avantages Exclusifs Premium */}
      <div className="py-16 bg-gradient-to-r from-yellow-900/30 to-orange-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Avantages Exclusifs Premium</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Dashboard Unifié</h3>
              <p className="text-gray-400">Interface unique pour gérer sol et irrigation ensemble</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <Zap className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">IA Intégrée Complète</h3>
              <p className="text-gray-400">Synergie entre NoyaSol et NoyaIrrigation pour optimisation maximale</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Support Premium 24/7</h3>
              <p className="text-gray-400">Assistance prioritaire et expertise dédiée</p>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignage Client */}
      <div className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <blockquote className="text-2xl italic text-gray-300 mb-6">
              "Le Pack Premium a révolutionné mon exploitation. 18% d'augmentation de rendement et 35% d'économies !"
            </blockquote>
            <div className="text-lg">
              <p className="font-semibold text-yellow-400">Sami Bouazizi</p>
              <p className="text-gray-400">Agriculteur - Sousse</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparaison Prix */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Économie Garantie</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-red-400 mb-4">Achat Séparé</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>AgroSol: 2500 DTN + 1200 DTN/an</p>
                    <p>AgroIrrigation Smart: 2000 DTN + 1000 DTN/an</p>
                    <hr className="my-4 border-gray-600" />
                    <p className="text-xl font-bold">Total: 4500 DTN + 2200 DTN/an</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Pack Premium</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>AgroSol + AgroIrrigation Smart</p>
                    <p>Dashboard unifié inclus</p>
                    <p>Support premium inclus</p>
                    <hr className="my-4 border-gray-600" />
                    <p className="text-xl font-bold text-green-400">Total: 4300 DTN + 2000 DTN/an</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-lg inline-block">
                  <p className="text-xl font-bold">ÉCONOMIE: 200 DTN + 200 DTN/an</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Processus d'Installation */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Processus d'Installation Premium</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Audit Complet</h3>
              <p className="text-gray-400">Analyse approfondie de votre exploitation par nos experts</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation Intégrée</h3>
              <p className="text-gray-400">Déploiement coordonné des systèmes sol et irrigation</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Configuration IA</h3>
              <p className="text-gray-400">Paramétrage des IA pour synergie optimale</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Suivi Premium</h3>
              <p className="text-gray-400">Accompagnement dédié et optimisation continue</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt pour l'Excellence Agricole ?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Rejoignez l'élite des agriculteurs avec notre solution premium complète
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Demander un Devis Premium
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-colors">
              Contacter un Expert Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackPremiumDetailPage;

