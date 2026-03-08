import React from 'react';
import { ArrowLeft, Sprout, CheckCircle, Target, Leaf, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import droneScanningImg from '../assets/drone_scanning.jpg';
import smartFarming1 from '../assets/smart_farming_1.jpg';
import smartFarming3 from '../assets/smart_farming_3.jpg';

const DroneSprayPage = () => {
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
                  <Sprout className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Traitement par Drone
                </h1>
              </div>
              
              <p className="text-xl text-foreground mb-8 leading-relaxed">
                Application précise et efficace d'engrais, pesticides et herbicides par drone 
                pour une agriculture de précision respectueuse de l'environnement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Demander un devis
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-agronoya-primary transition-all duration-300 transform hover:scale-105">
                  Voir une démo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={droneScanningImg} 
                alt="Traitement par Drone"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Pulvérisation de Précision par Drone
            </h2>
            
            <div className="prose prose-lg max-w-none text-foreground mb-12">
              <p className="text-xl leading-relaxed mb-6">
                Notre flotte de drones agricoles spécialisés dans la pulvérisation révolutionne 
                l'application des traitements phytosanitaires. Équipés de systèmes de pulvérisation 
                haute précision et guidés par GPS RTK, ils assurent une distribution uniforme et 
                ciblée des produits, réduisant significativement les pertes et l'impact environnemental.
              </p>
              
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#1C191F' }}>
                Chaque drone peut transporter jusqu'à 20 litres de produit et couvrir 15 hectares 
                par heure. Le système de pulvérisation adaptatif ajuste automatiquement le débit 
                et la taille des gouttelettes en fonction de la vitesse du vent, de l'humidité et 
                du type de culture. Les cartes de prescription générées par nos analyses permettent 
                une application variable selon les besoins spécifiques de chaque zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-16 text-center">
            Technologies de Pulvérisation Avancées
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Précision GPS RTK
              </h3>
              <p className="text-foreground">
                Guidage centimétrique pour une application exacte selon 
                les cartes de prescription personnalisées.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Débit Variable
              </h3>
              <p className="text-foreground">
                Ajustement automatique du débit selon les besoins de 
                chaque zone pour optimiser l'efficacité.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-agronoya-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-agronoya-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Sécurité Maximale
              </h3>
              <p className="text-foreground">
                Systèmes de sécurité avancés avec arrêt automatique 
                et évitement d'obstacles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de traitements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-16 text-center">
            Types de Traitements Disponibles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Fertilisation
              </h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-center" style={{ color: '#1C191F' }}>
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Engrais liquides NPK
                </li>
                <li className="flex items-center" style={{ color: '#1C191F' }}>
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Micro-éléments
                </li>
                <li className="flex items-center" style={{ color: '#1C191F' }}>
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Biostimulants
                </li>
                <li className="flex items-center" style={{ color: '#1C191F' }}>
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Amendements foliaires
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Protection Phytosanitaire
              </h3>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-center" style={{ color: '#1C191F' }}>
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  Fongicides
                </li>
                <li className="flex items-center" style={{ color: '#1C191F' }}>
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  Insecticides
                </li>
                <li className="flex items-center" style={{ color: '#1C191F' }}>
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  Produits biologiques
                </li>
                <li className="flex items-center" style={{ color: '#1C191F' }}>
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  Régulateurs de croissance
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Désherbage
              </h3>
              <ul className="space-y-3 text-orange-700">
                <li className="flex items-center" style={{ color: '#1C191F' }}>
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  Herbicides sélectifs
                </li>
                <li className="flex items-center" style={{ color: '#1C191F' }}>
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  Herbicides totaux
                </li>
                <li className="flex items-center" style={{ color: '#1C191F' }}>
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  Solutions biologiques
                </li>
                <li className="flex items-center" style={{ color: '#1C191F' }}>
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  Traitement localisé
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Avantages du Traitement par Drone
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      Réduction des Intrants
                    </h3>
                    <p className="text-agronoya-gray">
                      Économisez jusqu'à 30% de produits grâce à l'application précise 
                      et ciblée selon les besoins réels de chaque zone.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      Rapidité d'Intervention
                    </h3>
                    <p className="text-agronoya-gray">
                      Traitez 15 hectares par heure, soit 5 fois plus rapide 
                      qu'un pulvérisateur traditionnel.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-agronoya-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-agronoya-gray-darker mb-2">
                      Protection Environnementale
                    </h3>
                    <p className="text-agronoya-gray">
                      Réduisez la dérive et les pertes de produit grâce à 
                      l'application basse hauteur et contrôlée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <img 
                src={smartFarming1} 
                alt="Drone de traitement"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src={smartFarming3} 
                alt="Application précise"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spécifications techniques */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-agronoya-gray-darker mb-16 text-center">
            Performances Techniques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">20 L</div>
              <p className="text-agronoya-gray">Capacité du réservoir</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">15 ha/h</div>
              <p className="text-agronoya-gray">Débit de traitement</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">2 cm</div>
              <p className="text-agronoya-gray">Précision GPS</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl font-bold text-agronoya-primary mb-2">30%</div>
              <p className="text-agronoya-gray">Économie d'intrants</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-agronoya-primary via-agronoya-primary-light to-agronoya-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Optimisez Vos Traitements Agricoles
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Découvrez comment nos drones de traitement peuvent révolutionner 
            votre approche de la protection des cultures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-agronoya-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Demander une démonstration
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

export default DroneSprayPage;

