import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react';

const AgroSolDetailPage = () => {
  return (
    <div className="min-h-screen bg-[#1C191F] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-white hover:text-green-200 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">AgroSol</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Capteurs IoT Intelligents pour l'analyse complète de vos sols avec IA NoyaSol
          </p>
          <div className="flex items-center mt-6">
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
              2500 DTN + 1200 DTN/an
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
              <strong>Manque de données continues et localisées sur la fertilité des sols</strong>
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Les agriculteurs manquent d'informations précises sur l'état de leurs sols, 
              ce qui entraîne un gaspillage d'engrais et des rendements sous-optimaux.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Estimé */}
      <div className="py-16 bg-green-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-400 mb-6">📈 Impact Estimé</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400">+10-15%</h3>
                <p className="text-gray-300">Rendement</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">-30%</h3>
                <p className="text-gray-300">Intrants</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-400">100%</h3>
                <p className="text-gray-300">Recommandations Localisées</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fonctionnalités Détaillées */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Fonctionnalités Complètes</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Capteurs NPK Haute Précision</h3>
                  <p className="text-gray-400">Mesure en temps réel des niveaux d'azote, phosphore et potassium dans le sol</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analyse pH Continue</h3>
                  <p className="text-gray-400">Surveillance permanente de l'acidité du sol pour optimiser les conditions de croissance</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Monitoring Température</h3>
                  <p className="text-gray-400">Suivi thermique du sol pour anticiper les stress thermiques</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">IA NoyaSol Intégrée</h3>
                  <p className="text-gray-400">Intelligence artificielle pour analyse prédictive et recommandations personnalisées</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Recommandations Localisées</h3>
                  <p className="text-gray-400">Conseils spécifiques à votre parcelle et type de culture</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Connectivité IoT</h3>
                  <p className="text-gray-400">Transmission des données en temps réel vers votre dashboard</p>
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
            <Users className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <blockquote className="text-2xl italic text-gray-300 mb-6">
              "Avec AgroSol, j'ai augmenté mes rendements de 12% tout en réduisant mes coûts d'engrais de 25%. 
              Un investissement rentabilisé en 8 mois !"
            </blockquote>
            <div className="text-lg">
              <p className="font-semibold text-green-400">Ahmed Ben Salem</p>
              <p className="text-gray-400">Agriculteur - Kairouan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Processus d'Installation */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Processus d'Installation</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyse du Site</h3>
              <p className="text-gray-400">Évaluation de votre parcelle et définition des points de mesure optimaux</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation</h3>
              <p className="text-gray-400">Pose des capteurs IoT et configuration du réseau de communication</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Calibration</h3>
              <p className="text-gray-400">Étalonnage des capteurs et paramétrage de l'IA NoyaSol</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Formation</h3>
              <p className="text-gray-400">Formation à l'utilisation du dashboard et interprétation des données</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Optimiser Vos Sols ?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Rejoignez les agriculteurs qui ont déjà transformé leur exploitation avec AgroSol
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Demander un Devis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors">
              Contacter un Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroSolDetailPage;

