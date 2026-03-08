import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, TrendingUp, Droplets, Clock } from 'lucide-react';

const AgroIrrigationStandardDetailPage = () => {
  return (
    <div className="min-h-screen bg-[#1C191F] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-white hover:text-blue-200 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">AgroIrrigation Standard</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Système d'irrigation intelligent avec électrovannes moyennes pour une gestion optimisée de l'eau
          </p>
          <div className="flex items-center mt-6">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
              1100 DTN
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
              L'irrigation manuelle ou mal programmée entraîne un gaspillage d'eau important 
              et des stress hydriques qui réduisent les rendements.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Estimé */}
      <div className="py-16 bg-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">📈 Impact Estimé</h2>
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
                <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-400">100%</h3>
                <p className="text-gray-300">Gestion Optimisée</p>
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
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Électrovannes Moyennes (3 unités)</h3>
                  <p className="text-gray-400">Contrôle automatique de l'irrigation sur 3 zones distinctes</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Système de Contrôle Intelligent</h3>
                  <p className="text-gray-400">Pilotage automatique basé sur les besoins des cultures</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Programmation Automatique</h3>
                  <p className="text-gray-400">Planification des cycles d'irrigation selon les conditions météo</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Capteurs d'Humidité</h3>
                  <p className="text-gray-400">Mesure en temps réel de l'humidité du sol</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interface Mobile</h3>
                  <p className="text-gray-400">Contrôle à distance via application smartphone</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Alertes Intelligentes</h3>
                  <p className="text-gray-400">Notifications en cas de dysfonctionnement ou besoin d'intervention</p>
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
            <Users className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <blockquote className="text-2xl italic text-gray-300 mb-6">
              "L'irrigation intelligente a transformé ma production. 40% d'économie d'eau et des légumes plus beaux que jamais !"
            </blockquote>
            <div className="text-lg">
              <p className="font-semibold text-blue-400">Fatma Trabelsi</p>
              <p className="text-gray-400">Agricultrice - Sfax</p>
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
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Étude Hydraulique</h3>
              <p className="text-gray-400">Analyse du réseau d'eau existant et définition des zones d'irrigation</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation</h3>
              <p className="text-gray-400">Pose des électrovannes et raccordement au système de contrôle</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Configuration</h3>
              <p className="text-gray-400">Paramétrage des cycles d'irrigation et test du système</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Formation</h3>
              <p className="text-gray-400">Formation à l'utilisation et maintenance du système</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Optimiser Votre Irrigation ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Économisez l'eau tout en augmentant vos rendements avec AgroIrrigation Standard
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Demander un Devis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Contacter un Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroIrrigationStandardDetailPage;

