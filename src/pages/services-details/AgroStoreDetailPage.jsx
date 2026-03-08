import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, TrendingUp, Store, ShoppingCart, Globe } from 'lucide-react';

const AgroStoreDetailPage = () => {
  return (
    <div className="min-h-screen bg-[#1C191F] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-white hover:text-emerald-200 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux Services
          </Link>
          <div className="flex items-center mb-4">
            <Store className="w-12 h-12 text-emerald-300 mr-4" />
            <h1 className="text-5xl font-bold">AgroStore</h1>
          </div>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Marketplace Agricole - Plateforme de vente en ligne pour commercialiser vos produits agricoles directement aux consommateurs
          </p>
          <div className="flex items-center mt-6">
            <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
              Commission 3%
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
              <strong>Circuits de commercialisation longs, coûteux et peu transparents</strong>
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Les agriculteurs perdent une grande partie de leur marge à cause des intermédiaires multiples 
              et manquent de visibilité sur les prix finaux de leurs produits.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Estimé */}
      <div className="py-16 bg-emerald-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6">📈 Impact Estimé</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400">+10%</h3>
                <p className="text-gray-300">Chiffre d'Affaires</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400">Circuits</h3>
                <p className="text-gray-300">Courts</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <ShoppingCart className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-emerald-400">Réduction</h3>
                <p className="text-gray-300">Intermédiaires</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fonctionnalités de la Plateforme */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Fonctionnalités de la Plateforme</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Boutique en Ligne Personnalisée</h3>
                  <p className="text-gray-400">Interface dédiée avec vos couleurs et votre identité de marque</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Gestion des Commandes</h3>
                  <p className="text-gray-400">Système complet de suivi des commandes et notifications automatiques</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Paiement Sécurisé</h3>
                  <p className="text-gray-400">Intégration de solutions de paiement sécurisées et multiples</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Traçabilité Intégrée</h3>
                  <p className="text-gray-400">Suivi complet de la ferme à l'assiette pour rassurer les consommateurs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Marketing Digital</h3>
                  <p className="text-gray-400">Outils de promotion et référencement pour augmenter votre visibilité</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analytics Avancés</h3>
                  <p className="text-gray-400">Tableaux de bord détaillés sur vos ventes et performances</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types de Produits */}
      <div className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Types de Produits Supportés</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥬</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Légumes Frais</h3>
              <p className="text-gray-400 text-sm">Légumes de saison et primeurs</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍎</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fruits</h3>
              <p className="text-gray-400 text-sm">Fruits frais et transformés</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Céréales</h3>
              <p className="text-gray-400 text-sm">Blé, orge, avoine bio</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🫒</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Huiles & Olives</h3>
              <p className="text-gray-400 text-sm">Huile d'olive et dérivés</p>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignage Client */}
      <div className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <blockquote className="text-2xl italic text-gray-300 mb-6">
              "AgroStore m'a permis de vendre mes fraises directement. 40% de marge en plus et des clients fidèles !"
            </blockquote>
            <div className="text-lg">
              <p className="font-semibold text-emerald-400">Leila Mejri</p>
              <p className="text-gray-400">Agricultrice - Nabeul</p>
            </div>
          </div>
        </div>
      </div>

      {/* Avantages vs Circuits Traditionnels */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">AgroStore vs Circuits Traditionnels</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-900/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-red-400 mb-6">❌ Circuits Traditionnels</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• 3-5 intermédiaires</li>
                  <li>• Marge agriculteur: 20-30%</li>
                  <li>• Délais de paiement longs</li>
                  <li>• Pas de contact client</li>
                  <li>• Prix imposés</li>
                  <li>• Pas de traçabilité</li>
                </ul>
              </div>
              <div className="bg-emerald-900/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-emerald-400 mb-6">✅ AgroStore</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Vente directe</li>
                  <li>• Marge agriculteur: 70-80%</li>
                  <li>• Paiement immédiat</li>
                  <li>• Relation client directe</li>
                  <li>• Prix libres</li>
                  <li>• Traçabilité complète</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modèle Économique */}
      <div className="py-16 bg-gradient-to-r from-emerald-900/30 to-green-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Modèle Économique Transparent</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Commission</h3>
                  <p className="text-4xl font-bold text-white mb-2">3%</p>
                  <p className="text-gray-400">Sur chaque vente réalisée</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Frais d'Installation</h3>
                  <p className="text-4xl font-bold text-white mb-2">0 DTN</p>
                  <p className="text-gray-400">Configuration gratuite</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Abonnement</h3>
                  <p className="text-4xl font-bold text-white mb-2">0 DTN</p>
                  <p className="text-gray-400">Pas de frais fixes</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-300">
                  <strong>Vous ne payez que si vous vendez !</strong> Notre succès dépend du vôtre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Processus d'Inscription */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Processus d'Inscription</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inscription</h3>
              <p className="text-gray-400">Création de votre compte vendeur gratuit</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Configuration</h3>
              <p className="text-gray-400">Personnalisation de votre boutique en ligne</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Produits</h3>
              <p className="text-gray-400">Ajout de vos produits avec photos et descriptions</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vente</h3>
              <p className="text-gray-400">Lancement et promotion de votre boutique</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Vendre Directement ?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Rejoignez AgroStore et augmentez vos marges dès aujourd'hui
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Créer ma Boutique
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors">
              Voir une Démo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroStoreDetailPage;

