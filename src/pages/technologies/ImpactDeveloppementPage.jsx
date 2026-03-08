import React from 'react';
import { ArrowLeft, TrendingUp, Users, MapPin, Handshake, Building, Heart, CheckCircle, Target, Globe, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImpactDeveloppementPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
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
              <Heart className="w-10 h-10 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Impact Développement
            </h1>
            <p className="text-xl text-gray-900 dark:text-slate-50/90 max-w-3xl mx-auto">
              Moteur économie locale - Catalyseur de transformation sociale et économique des territoires ruraux
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
                Révitaliser les Territoires Ruraux
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Impact Développement transcende la simple technologie agricole pour devenir un véritable moteur de transformation 
                socio-économique. Notre approche holistique renforce l'autonomie des agriculteurs, dynamise l'économie locale 
                et crée un écosystème durable de prospérité partagée.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dynamisation Économie Locale</h3>
                    <p className="text-gray-600">Création d'emplois et stimulation des circuits économiques régionaux</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Autonomie et Pouvoir de Négociation</h3>
                    <p className="text-gray-600">Renforcement de l'indépendance des agriculteurs face aux marchés</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Revenus Supplémentaires Durabilité</h3>
                    <p className="text-gray-600">Nouvelles sources de revenus basées sur les pratiques écologiques</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">5,000+</h3>
                    <p className="text-gray-600">Emplois créés</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">+65%</h3>
                    <p className="text-gray-600">Revenus agriculteurs</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">150+</h3>
                    <p className="text-gray-600">Entreprises locales</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">25</h3>
                    <p className="text-gray-600">Régions transformées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Piliers du Développement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Les 4 Piliers du Développement Territorial
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une approche systémique pour transformer durablement les territoires ruraux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dynamisation Économique */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dynamisation Économique</h3>
              <p className="text-gray-600 mb-6">
                Stimulation de l'activité économique locale par la création de nouvelles filières et opportunités.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" />Création d'emplois qualifiés</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" />Nouvelles filières agricoles</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" />Investissements locaux</li>
              </ul>
            </div>

            {/* Circuits Courts */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Circuits Courts</h3>
              <p className="text-gray-600 mb-6">
                Favorisation des échanges locaux pour réduire les intermédiaires et maximiser la valeur ajoutée.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Vente directe producteur</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Marchés locaux digitaux</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Logistique de proximité</li>
              </ul>
            </div>

            {/* Autonomie Renforcée */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomie Renforcée</h3>
              <p className="text-gray-600 mb-6">
                Renforcement du pouvoir de négociation et de l'indépendance des agriculteurs face aux marchés.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" />Coopératives digitales</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" />Négociation collective</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" />Indépendance technologique</li>
              </ul>
            </div>

            {/* Revenus Durables */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revenus Durables</h3>
              <p className="text-gray-600 mb-6">
                Création de nouvelles sources de revenus basées sur la durabilité et l'innovation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Crédits carbone</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Certifications bio</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Services écosystémiques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Concrètes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Initiatives Concrètes de Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des programmes d'impact mesurable pour revitaliser les territoires ruraux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Formation et Accompagnement */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Formation & Accompagnement</h3>
              <p className="text-gray-600 mb-6">
                Programmes de formation continue pour développer les compétences locales et créer de l'emploi qualifié.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                  <span>2,500 agriculteurs formés/an</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                  <span>150 techniciens certifiés</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                  <span>50 centres de formation</span>
                </div>
              </div>
            </div>

            {/* Incubation Entreprises */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Incubation Entreprises</h3>
              <p className="text-gray-600 mb-6">
                Soutien à la création d'entreprises locales dans l'écosystème agricole et technologique.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>200 startups accompagnées</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>€15M investissements levés</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>85% taux de survie 3 ans</span>
                </div>
              </div>
            </div>

            {/* Coopératives Digitales */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Handshake className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coopératives Digitales</h3>
              <p className="text-gray-600 mb-6">
                Création de coopératives modernes utilisant le digital pour renforcer le pouvoir collectif.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  <span>75 coopératives créées</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  <span>12,000 membres actifs</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  <span>+40% pouvoir négociation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mesure d'Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mesure d'Impact Territorial
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Indicateurs clés de performance pour mesurer la transformation des territoires
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5,000+</h3>
              <p className="text-gray-600 font-medium">Emplois Créés</p>
              <p className="text-sm text-gray-500 mt-2">Dans l'écosystème agricole</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">+65%</h3>
              <p className="text-gray-600 font-medium">Revenus Agriculteurs</p>
              <p className="text-sm text-gray-500 mt-2">Augmentation moyenne</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600 font-medium">Entreprises Locales</p>
              <p className="text-sm text-gray-500 mt-2">Créées ou développées</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25</h3>
              <p className="text-gray-600 font-medium">Régions Transformées</p>
              <p className="text-sm text-gray-500 mt-2">À travers la Tunisie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision d'Avenir */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vision 2030 : Territoires Ruraux Prospères
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Notre vision pour 2030 est de transformer radicalement les territoires ruraux tunisiens en écosystèmes 
                prospères, autonomes et durables, où la technologie sert l'humain et l'environnement.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">100,000 Emplois Créés</h3>
                    <p className="text-gray-600">Objectif de création d'emplois qualifiés dans l'agriculture 4.0</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Autonomie Énergétique</h3>
                    <p className="text-gray-600">Territoires 100% autonomes en énergie renouvelable</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Rayonnement International</h3>
                    <p className="text-gray-600">Modèle de développement rural exportable mondialement</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Objectifs 2030</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Emplois créés</span>
                    <span className="font-bold text-purple-600">100,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Régions transformées</span>
                    <span className="font-bold text-green-600">100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Entreprises créées</span>
                    <span className="font-bold text-blue-600">5,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Revenus augmentés</span>
                    <span className="font-bold text-orange-600">+100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Participez à la Transformation de Votre Territoire
          </h2>
          <p className="text-xl text-gray-900 dark:text-slate-50/90 mb-8">
            Rejoignez le mouvement de revitalisation des territoires ruraux avec Impact Développement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Rejoindre le Mouvement
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

export default ImpactDeveloppementPage;

