import React from 'react';
import { ArrowLeft, Store, ShoppingCart, Users, TrendingUp, Zap, Shield, Globe, Smartphone, BarChart3, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgroNoyaStorePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="absolute inset-0 bg-gray-50 dark:bg-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/technologies" 
            className="inline-flex items-center text-gray-900 dark:text-slate-50/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux Technologies
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6">
              <Store className="w-10 h-10 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AgroNoya Store
            </h1>
            <p className="text-xl text-gray-900 dark:text-slate-50/90 max-w-3xl mx-auto">
              Marketplace agricole intelligente - L'écosystème commercial complet pour l'agriculture moderne
            </p>
          </div>
        </div>
      </div>

      {/* Vue d'ensemble */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Révolutionner le Commerce Agricole
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                AgroNoya Store transcende la simple marketplace pour devenir un véritable écosystème commercial intelligent, 
                connectant producteurs, fournisseurs et consommateurs dans un environnement B2B/B2C unifié et optimisé par l'IA.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Monde Virtuel Agricole Complet</h3>
                    <p className="text-gray-600">Écosystème B2B/B2C intégré pour tous les acteurs de la chaîne agricole</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Connexion Intelligente aux Diagnostics</h3>
                    <p className="text-gray-600">Recommandations produits basées sur l'analyse temps réel de vos cultures</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Court-circuitage des Intermédiaires</h3>
                    <p className="text-gray-600">Connexion directe producteur-consommateur pour maximiser les marges</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">10,000+</h3>
                    <p className="text-gray-600">Utilisateurs actifs</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <ShoppingCart className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">50,000+</h3>
                    <p className="text-gray-600">Produits référencés</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">+35%</h3>
                    <p className="text-gray-600">Revenus agriculteurs</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">24/7</h3>
                    <p className="text-gray-600">Support IA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Principales */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fonctionnalités Avancées
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une plateforme complète qui révolutionne chaque aspect du commerce agricole
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Marketplace Intelligente */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Store className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketplace Intelligente</h3>
              <p className="text-gray-600 mb-6">
                Plateforme unifiée pour l'achat/vente de produits agricoles avec recommandations IA personnalisées.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Catalogue produits intelligent</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Système de notation vendeurs</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Comparateur de prix automatique</li>
              </ul>
            </div>

            {/* Services Centralisés */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Services Centralisés</h3>
              <p className="text-gray-600 mb-6">
                Hub de services agricoles complet : consultation, maintenance, formation et support technique.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Réservation services experts</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Formation en ligne</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Support technique 24/7</li>
              </ul>
            </div>

            {/* Connexion Diagnostics */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connexion Diagnostics</h3>
              <p className="text-gray-600 mb-6">
                Recommandations produits automatiques basées sur l'analyse temps réel de vos cultures.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Analyse besoins automatique</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Recommandations personnalisées</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Optimisation des achats</li>
              </ul>
            </div>

            {/* Circuits Courts */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Circuits Courts</h3>
              <p className="text-gray-600 mb-6">
                Élimination des intermédiaires pour maximiser les revenus des producteurs et réduire les coûts.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Vente directe producteur</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Géolocalisation proximité</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Logistique optimisée</li>
              </ul>
            </div>

            {/* Application Mobile */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Application Mobile</h3>
              <p className="text-gray-600 mb-6">
                Interface mobile intuitive pour gérer vos achats/ventes depuis le terrain.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Interface tactile optimisée</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Mode hors-ligne</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Notifications temps réel</li>
              </ul>
            </div>

            {/* Analytics Avancés */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics Avancés</h3>
              <p className="text-gray-600 mb-6">
                Tableaux de bord détaillés pour optimiser vos stratégies commerciales et opérationnelles.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Analyse des ventes</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Prévisions de demande</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />ROI détaillé</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact et Bénéfices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Impact Transformateur
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AgroNoya Store révolutionne l'économie agricole en créant un écosystème commercial équitable et efficace
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">+35% Revenus</h3>
              <p className="text-gray-600">
                Augmentation moyenne des revenus des agriculteurs grâce à l'élimination des intermédiaires
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">10,000+ Utilisateurs</h3>
              <p className="text-gray-600">
                Communauté active d'agriculteurs, fournisseurs et consommateurs connectés
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4.8/5 Satisfaction</h3>
              <p className="text-gray-600">
                Note moyenne de satisfaction utilisateur grâce à l'expérience optimisée par l'IA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Rejoignez la Révolution du Commerce Agricole
          </h2>
          <p className="text-xl text-gray-900 dark:text-slate-50/90 mb-8">
            Découvrez comment AgroNoya Store peut transformer votre activité agricole
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Demander une Démo
            </Link>
            <Link 
              to="/technologies" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Retour aux Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgroNoyaStorePage;

