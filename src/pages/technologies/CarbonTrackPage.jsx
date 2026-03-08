import React from 'react';
import { ArrowLeft, Leaf, TrendingUp, Globe, Award, BarChart3, Zap, Shield, Satellite, Calculator, CheckCircle, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarbonTrackPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 py-16">
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
              <Leaf className="w-10 h-10 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              CarbonTrack
            </h1>
            <p className="text-xl text-gray-900 dark:text-slate-50/90 max-w-3xl mx-auto">
              Monétisation agriculture durable - Transformez vos pratiques écologiques en revenus tangibles
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
                L'Agriculture Durable Devient Rentable
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                CarbonTrack révolutionne l'économie agricole en transformant chaque geste écologique en valeur économique mesurable. 
                Notre plateforme utilise l'intelligence artificielle et l'imagerie satellite pour quantifier, certifier et monétiser 
                vos efforts de durabilité.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Mesure Google Earth Engine Multi-années</h3>
                    <p className="text-gray-600">Analyse satellite précise de l'évolution de vos pratiques sur plusieurs années</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Certification Économies Eau/Réduction Intrants</h3>
                    <p className="text-gray-600">Validation officielle de vos efforts de conservation et d'optimisation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Génération Crédits Carbone Vendables</h3>
                    <p className="text-gray-600">Création automatique de crédits carbone certifiés et commercialisables</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">2.5M</h3>
                    <p className="text-gray-600">Tonnes CO₂ séquestrées</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">€850K</h3>
                    <p className="text-gray-600">Revenus générés</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">1,200+</h3>
                    <p className="text-gray-600">Certifications délivrées</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">+45%</h3>
                    <p className="text-gray-600">Revenus supplémentaires</p>
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
              Technologies de Pointe pour la Durabilité
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une suite complète d'outils pour mesurer, certifier et monétiser vos pratiques durables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mesure Satellite */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Satellite className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mesure Google Earth Engine</h3>
              <p className="text-gray-600 mb-6">
                Analyse satellite multi-temporelle pour quantifier précisément l'évolution de vos pratiques agricoles.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Imagerie satellite haute résolution</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Analyse temporelle multi-années</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Détection changements automatique</li>
              </ul>
            </div>

            {/* Certification Officielle */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certification Officielle</h3>
              <p className="text-gray-600 mb-6">
                Validation et certification de vos économies d'eau et réduction d'intrants selon les standards internationaux.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Standards ISO 14064</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Audit tiers indépendant</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Certificats blockchain</li>
              </ul>
            </div>

            {/* Quantification Carbone */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quantification Séquestration</h3>
              <p className="text-gray-600 mb-6">
                Calcul précis du carbone séquestré dans vos sols et biomasse végétale avec méthodologies scientifiques.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Modèles IPCC validés</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Mesure biomasse aérienne</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Analyse carbone organique sol</li>
              </ul>
            </div>

            {/* Génération Crédits */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Génération Crédits Carbone</h3>
              <p className="text-gray-600 mb-6">
                Création automatique de crédits carbone certifiés et prêts à la commercialisation sur les marchés internationaux.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Crédits VCS/Gold Standard</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Marketplace intégrée</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Paiements automatisés</li>
              </ul>
            </div>

            {/* Monitoring Continu */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monitoring Continu</h3>
              <p className="text-gray-600 mb-6">
                Surveillance en temps réel de vos indicateurs de durabilité avec alertes et recommandations automatiques.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Tableaux de bord temps réel</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Alertes automatiques</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Rapports périodiques</li>
              </ul>
            </div>

            {/* Blockchain Sécurisé */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Blockchain Sécurisé</h3>
              <p className="text-gray-600 mb-6">
                Traçabilité et transparence totales grâce à la technologie blockchain pour tous vos crédits carbone.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Immutabilité des données</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Traçabilité complète</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Smart contracts automatisés</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processus de Monétisation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Processus de Monétisation en 4 Étapes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              De la mesure à la monétisation, un processus automatisé et transparent
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mesure</h3>
              <p className="text-gray-600">
                Analyse satellite automatique de vos pratiques agricoles et quantification des impacts environnementaux
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certification</h3>
              <p className="text-gray-600">
                Validation par des organismes tiers et génération de certificats blockchain sécurisés
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Génération</h3>
              <p className="text-gray-600">
                Création automatique de crédits carbone conformes aux standards internationaux VCS/Gold Standard
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monétisation</h3>
              <p className="text-gray-600">
                Vente sur marketplace intégrée avec paiements automatisés et revenus directs vers votre compte
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Économique */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Impact Économique Transformateur
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CarbonTrack génère des revenus supplémentaires significatifs tout en préservant l'environnement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">€2,500/ha/an</h3>
              <p className="text-gray-600">
                Revenus moyens supplémentaires par hectare grâce aux crédits carbone et certifications durables
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">+45% ROI</h3>
              <p className="text-gray-600">
                Augmentation du retour sur investissement grâce à la valorisation des pratiques durables
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2.5M Tonnes</h3>
              <p className="text-gray-600">
                CO₂ séquestrées par notre communauté d'agriculteurs, contribuant à la lutte contre le changement climatique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transformez Votre Agriculture en Source de Revenus Durables
          </h2>
          <p className="text-xl text-gray-900 dark:text-slate-50/90 mb-8">
            Rejoignez les agriculteurs qui monétisent déjà leurs pratiques écologiques avec CarbonTrack
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Calculer Mon Potentiel
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

export default CarbonTrackPage;

