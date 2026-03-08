import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, TrendingUp, Plane, Target, Clock } from 'lucide-react';

const ServiceDroneFertilisationDetailPage = () => {
  return (
    <div className="min-h-screen bg-[#1C191F] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-white hover:text-red-200 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux Services
          </Link>
          <div className="flex items-center mb-4">
            <Plane className="w-12 h-12 text-red-300 mr-4" />
            <h1 className="text-5xl font-bold">Service Drone Fertilisation</h1>
          </div>
          <p className="text-xl text-red-100 max-w-3xl">
            Pulvérisation de Précision - Service de fertilisation et traitement phytosanitaire par drone haute précision
          </p>
          <div className="flex items-center mt-6">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
              60 DTN/ha
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
              <strong>Pulvérisation imprécise et gaspillage de produits phytosanitaires</strong>
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Les méthodes traditionnelles de pulvérisation entraînent un gaspillage de produits, 
              une couverture inégale et des risques pour l'environnement et la santé.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Estimé */}
      <div className="py-16 bg-red-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-400 mb-6">📈 Impact Estimé</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400">Précision</h3>
                <p className="text-gray-300">Centimétrique</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">-30%</h3>
                <p className="text-gray-300">Produits Utilisés</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-400">+25%</h3>
                <p className="text-gray-300">Efficacité</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spécifications Techniques */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Spécifications Techniques</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Drones Professionnels Haute Précision</h3>
                  <p className="text-gray-400">Flotte de drones agricoles équipés de systèmes de pulvérisation avancés</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cartographie Préalable</h3>
                  <p className="text-gray-400">Analyse complète du terrain avant intervention pour optimisation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pulvérisation Ciblée</h3>
                  <p className="text-gray-400">Application précise selon les besoins spécifiques de chaque zone</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Capacité 40kg</h3>
                  <p className="text-gray-400">Réservoir haute capacité pour traitement de grandes surfaces</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rendement 22 ha/h</h3>
                  <p className="text-gray-400">Traitement rapide et efficace de vos parcelles</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">GPS RTK</h3>
                  <p className="text-gray-400">Navigation ultra-précise pour application centimétrique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types de Traitements */}
      <div className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Types de Traitements</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Fertilisation</h3>
              <p className="text-gray-400">Application d'engrais liquides et nutriments essentiels</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Phytosanitaire</h3>
              <p className="text-gray-400">Traitement contre maladies, ravageurs et adventices</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Biostimulants</h3>
              <p className="text-gray-400">Application de stimulateurs de croissance naturels</p>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignage Client */}
      <div className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <blockquote className="text-2xl italic text-gray-300 mb-6">
              "Les drones traitent mes 50 hectares en 2 heures au lieu de 2 jours. Précision parfaite et économies garanties !"
            </blockquote>
            <div className="text-lg">
              <p className="font-semibold text-red-400">Nadia Hamdi</p>
              <p className="text-gray-400">Agricultrice - Bizerte</p>
            </div>
          </div>
        </div>
      </div>

      {/* Avantages Drone vs Traditionnel */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Drone vs Méthodes Traditionnelles</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-900/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-red-400 mb-6">❌ Méthodes Traditionnelles</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Gaspillage de 30-40% des produits</li>
                  <li>• Couverture inégale</li>
                  <li>• Temps de traitement long</li>
                  <li>• Risques pour l'opérateur</li>
                  <li>• Tassement du sol</li>
                  <li>• Dépendance météo forte</li>
                </ul>
              </div>
              <div className="bg-green-900/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-green-400 mb-6">✅ Service Drone AgroNoya</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Économie de 30% de produits</li>
                  <li>• Couverture homogène garantie</li>
                  <li>• Traitement ultra-rapide</li>
                  <li>• Sécurité maximale</li>
                  <li>• Aucun tassement</li>
                  <li>• Intervention flexible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Processus d'Intervention */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Processus d'Intervention</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planification</h3>
              <p className="text-gray-400">Analyse des besoins et planification de l'intervention</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cartographie</h3>
              <p className="text-gray-400">Survol préalable pour cartographie précise du terrain</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pulvérisation</h3>
              <p className="text-gray-400">Application précise selon le plan établi</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapport</h3>
              <p className="text-gray-400">Rapport détaillé d'intervention avec cartographie</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt pour la Précision Absolue ?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Révolutionnez vos traitements avec nos drones de précision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Demander une Intervention
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors">
              Contacter un Pilote Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDroneFertilisationDetailPage;

