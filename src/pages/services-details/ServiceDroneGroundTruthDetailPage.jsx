import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, TrendingUp, Plane, Eye, Search } from 'lucide-react';

const ServiceDroneGroundTruthDetailPage = () => {
  return (
    <div className="min-h-screen bg-[#1C191F] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-white hover:text-cyan-200 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux Services
          </Link>
          <div className="flex items-center mb-4">
            <Eye className="w-12 h-12 text-cyan-300 mr-4" />
            <h1 className="text-5xl font-bold">Service Drone Ground Truth</h1>
          </div>
          <p className="text-xl text-cyan-100 max-w-3xl">
            Surveillance et Analyse - Service de surveillance aérienne par drone pour cartographie, analyse NDVI/NDWI et détection précoce
          </p>
          <div className="flex items-center mt-6">
            <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
              45 DTN/ha
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
              <strong>Résolution insuffisante pour détecter les anomalies localisées</strong>
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Les images satellites manquent de résolution pour détecter les problèmes localisés, 
              retardant les interventions et causant des pertes importantes.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Estimé */}
      <div className="py-16 bg-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">📈 Impact Estimé</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <Search className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400">Détection</h3>
                <p className="text-gray-300">Précoce</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">Intervention</h3>
                <p className="text-gray-300">Ciblée</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Eye className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-cyan-400">Réduction</h3>
                <p className="text-gray-300">Pertes Phytosanitaires</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies de Surveillance */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Technologies de Surveillance Avancées</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cartographie Multispectrale</h3>
                  <p className="text-gray-400">Imagerie haute résolution dans plusieurs bandes spectrales pour analyse complète</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analyse NDVI/NDWI</h3>
                  <p className="text-gray-400">Indices de végétation et d'humidité pour évaluation précise de la santé des cultures</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Détection des Maladies</h3>
                  <p className="text-gray-400">Identification précoce des stress biotiques et abiotiques</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Résolution Centimétrique</h3>
                  <p className="text-gray-400">Précision GPS RTK pour géolocalisation exacte des anomalies</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analyse Temporelle</h3>
                  <p className="text-gray-400">Suivi de l'évolution des cultures dans le temps</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rapports Détaillés</h3>
                  <p className="text-gray-400">Documentation complète avec cartes et recommandations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types d'Analyses */}
      <div className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Types d'Analyses Disponibles</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Santé Végétale</h3>
              <p className="text-gray-400">Évaluation de la vigueur et détection des stress</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Stress Hydrique</h3>
              <p className="text-gray-400">Détection des zones en déficit ou excès hydrique</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🦠</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Maladies</h3>
              <p className="text-gray-400">Identification précoce des foyers infectieux</p>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignage Client */}
      <div className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <blockquote className="text-2xl italic text-gray-300 mb-6">
              "Le drone détecte les problèmes 2 semaines avant que je les voie. J'ai sauvé ma récolte d'agrumes grâce à ça !"
            </blockquote>
            <div className="text-lg">
              <p className="font-semibold text-cyan-400">Karim Sassi</p>
              <p className="text-gray-400">Agriculteur - Gabès</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparaison Résolutions */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Résolution: Satellite vs Drone</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-900/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-red-400 mb-6">📡 Images Satellites</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Résolution: 10-30 mètres/pixel</li>
                  <li>• Fréquence: 3-5 jours</li>
                  <li>• Couverture: Très large</li>
                  <li>• Détail: Limité</li>
                  <li>• Coût: Modéré</li>
                  <li>• Météo: Dépendant</li>
                </ul>
              </div>
              <div className="bg-cyan-900/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">🚁 Drones AgroNoya</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Résolution: 2-5 cm/pixel</li>
                  <li>• Fréquence: À la demande</li>
                  <li>• Couverture: Ciblée</li>
                  <li>• Détail: Ultra-précis</li>
                  <li>• Coût: Optimisé</li>
                  <li>• Météo: Flexible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Livrables */}
      <div className="py-16 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Livrables Inclus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🗺️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cartes NDVI</h3>
              <p className="text-gray-400 text-sm">Indices de végétation haute résolution</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cartes NDWI</h3>
              <p className="text-gray-400 text-sm">Indices d'humidité et stress hydrique</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Rapport d'Analyse</h3>
              <p className="text-gray-400 text-sm">Interprétation experte des données</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Recommandations</h3>
              <p className="text-gray-400 text-sm">Actions prioritaires géolocalisées</p>
            </div>
          </div>
        </div>
      </div>

      {/* Processus d'Intervention */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Processus de Surveillance</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planification</h3>
              <p className="text-gray-400">Définition des objectifs et zones prioritaires</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Acquisition</h3>
              <p className="text-gray-400">Vol de surveillance avec capteurs multispectraux</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyse</h3>
              <p className="text-gray-400">Traitement des données et calcul des indices</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Livraison</h3>
              <p className="text-gray-400">Rapport complet avec cartes et recommandations</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-cyan-600 to-cyan-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt pour la Surveillance de Précision ?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Anticipez les problèmes avec notre surveillance drone ultra-précise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Programmer un Vol
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors">
              Contacter un Analyste
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDroneGroundTruthDetailPage;

