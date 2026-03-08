import React from 'react';
import { ArrowLeft, CloudRain, CheckCircle, Thermometer, Wind, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import satelliteAnalysisImg from '../assets/satellite_analysis.jpg';
import smartFarming5 from '../assets/smart_farming_5.jpg';
import smartFarming6 from '../assets/smart_farming_6.webp';

const WeatherForecastPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-agronoya-primary/5">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-agronoya-primary via-agronoya-primary-light to-agronoya-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-6">
            <Link 
              to="/" 
              className="flex items-center text-agronoya-primary hover:text-agronoya-primary-dark transition-colors duration-300 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                  <CloudRain className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Prévisions Météo
                </h1>
              </div>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Système de prévisions météorologiques hyper-locales et ultra-précises 
                pour optimiser vos décisions agricoles au quotidien.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Accéder aux prévisions
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300 transform hover:scale-105">
                  Documentation
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={satelliteAnalysisImg} 
                alt="Prévisions Météo"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Description détaillée */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-8 text-center">
              Météorologie de Précision pour l'Agriculture
            </h2>
            
            <div className="prose prose-lg max-w-none text-agronoya-gray mb-12">
              <p className="text-xl leading-relaxed mb-6">
                Notre système de prévisions météorologiques combine les données de multiples 
                sources (satellites, stations météo locales, radars) avec des modèles d'IA 
                avancés pour fournir des prévisions hyper-locales d'une précision exceptionnelle. 
                Spécialement conçu pour l'agriculture, il intègre des paramètres critiques comme 
                l'évapotranspiration, l'humidité du sol et les risques phytosanitaires.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Les prévisions sont mises à jour toutes les heures avec une résolution spatiale 
                de 1 km² et une précision temporelle de 15 minutes. Le système génère des alertes 
                automatiques pour les événements critiques (gel, grêle, vents forts) et fournit 
                des recommandations personnalisées pour optimiser vos opérations agricoles selon 
                les conditions météorologiques prévues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paramètres météorologiques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            Paramètres Surveillés
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Thermometer className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                Température
              </h3>
              <p className="text-agronoya-gray">
                Température de l'air et du sol, amplitude thermique, 
                risques de gel et stress thermique.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                Précipitations
              </h3>
              <p className="text-agronoya-gray">
                Quantité, intensité et probabilité de pluie, 
                risques d'orages et de grêle.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Wind className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-agronoya-gray-darker mb-4">
                Vent et Humidité
              </h3>
              <p className="text-agronoya-gray">
                Vitesse et direction du vent, humidité relative, 
                évapotranspiration et point de rosée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'alertes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            Alertes Météorologiques Intelligentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="text-xl font-bold text-red-800 mb-2">
                  Alertes Critiques
                </h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Risque de gel
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Orages violents
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Grêle annoncée
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Vents destructeurs
                  </li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-2xl">
                <h3 className="text-xl font-bold text-orange-800 mb-2">
                  Alertes Préventives
                </h3>
                <ul className="space-y-2 text-orange-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Conditions de traitement
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Fenêtres d'irrigation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Stress hydrique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Conditions de récolte
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Recommandations Opérationnelles
                </h3>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Planification des semis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Optimisation des traitements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Gestion de l'irrigation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Timing de récolte
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Indices Agro-Climatiques
                </h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Sommes de températures
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Bilan hydrique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Pression parasitaire
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Indices de stress
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-8">
                Avantages des Prévisions Précises
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      Optimisation des Interventions
                    </h3>
                    <p className="text-agronoya-gray">
                      Planifiez vos traitements, semis et récoltes au moment optimal 
                      pour maximiser leur efficacité.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      Réduction des Risques
                    </h3>
                    <p className="text-agronoya-gray">
                      Anticipez les événements météorologiques extrêmes et 
                      protégez vos cultures efficacement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      Économies d'Intrants
                    </h3>
                    <p className="text-agronoya-gray">
                      Évitez les applications inutiles et optimisez l'utilisation 
                      de l'eau et des produits phytosanitaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <img 
                src={smartFarming5} 
                alt="Station météo"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src={smartFarming6} 
                alt="Prévisions locales"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Précision des prévisions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            Précision de Nos Prévisions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">95%</div>
              <p className="text-agronoya-gray">Précision 24h</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">1 km²</div>
              <p className="text-agronoya-gray">Résolution spatiale</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">15 min</div>
              <p className="text-agronoya-gray">Résolution temporelle</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">15 jours</div>
              <p className="text-agronoya-gray">Horizon de prévision</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-agronoya-primary via-agronoya-primary-light to-agronoya-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Maîtrisez la Météo pour Optimiser Vos Cultures
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Accédez aux prévisions météorologiques les plus précises 
            du marché, spécialement conçues pour l'agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Essayer gratuitement
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeatherForecastPage;

