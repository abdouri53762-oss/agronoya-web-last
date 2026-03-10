import React from 'react';
import { ArrowLeft, Camera, CheckCircle, Zap, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComputerVisionPage = () => {

  return (
    <div className="min-h-screen bg-[#1C191F] text-gray-900 dark:text-slate-50">
      {/* Header avec breadcrumb */}
      <div className="bg-agronoya-blue-dark">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4 text-sm">
            <Link to="/" className="text-gray-900 dark:text-slate-50/70 hover:text-white transition-colors">
              Accueil
            </Link>
            <span className="text-gray-900 dark:text-slate-50/50">/</span>
            <Link to="/technologies" className="text-gray-900 dark:text-slate-50/70 hover:text-white transition-colors">
              Technologies
            </Link>
            <span className="text-gray-900 dark:text-slate-50/50">/</span>
            <span className="text-agronoya-primary">Vision par Ordinateur</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu */}
            <div>
              <Link 
                to="/technologies" 
                className="inline-flex items-center text-agronoya-primary hover:text-agronoya-primary-light mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Retour aux technologies
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-agronoya-primary rounded-2xl flex items-center justify-center mr-4">
                  <Camera className="w-8 h-8 text-gray-900 dark:text-slate-50" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    Vision par Ordinateur
                  </h1>
                  <p className="text-agronoya-primary text-lg">
                    OpenCV, YOLO, Detectron2
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-gray-900 dark:text-slate-50/80 mb-8 leading-relaxed">
                Analyse automatisée des images pour la détection des maladies, 
                le comptage des fruits et la surveillance de la croissance des cultures.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <CheckCircle className="w-5 h-5 text-agronoya-primary mr-2" />
                  <span className="text-sm">Détection en temps réel</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Zap className="w-5 h-5 text-agronoya-primary mr-2" />
                  <span className="text-sm">Précision &gt; 98%</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Target className="w-5 h-5 text-agronoya-primary mr-2" />
                  <span className="text-sm">Analyse multispectrale</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-eos-primary">
                  Documentation technique
                </button>
                <button className="btn-eos-secondary">
                  Demander une démo
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img 
                src="/src/assets/smart_farming_3.jpg" 
                alt="Vision par Ordinateur"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-sm font-semibold text-gray-800">
                    Caméras haute résolution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Technique */}
      <div className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Description Technique</h2>
            <p className="text-lg text-gray-900 dark:text-slate-50/80 leading-relaxed mb-8">
              Notre système de vision par ordinateur utilise des algorithmes de deep learning avancés 
              pour analyser les images de vos cultures. Les modèles sont capables de détecter les maladies, 
              compter les fruits, mesurer la croissance et identifier les stress des plantes avec une précision exceptionnelle.
            </p>
          </div>
        </div>
      </div>

      {/* Fonctionnalités Avancées */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Fonctionnalités Avancées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Détection de maladies",
                description: "Identification précoce des pathologies avec classification automatique"
              },
              {
                title: "Comptage automatique",
                description: "Estimation précise du nombre de fruits et légumes"
              },
              {
                title: "Analyse de croissance",
                description: "Suivi de l'évolution des cultures dans le temps"
              },
              {
                title: "Segmentation d'images",
                description: "Séparation précise des différents éléments de l'image"
              },
              {
                title: "Vision multispectrale",
                description: "Analyse dans différentes longueurs d'onde"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <div className="w-3 h-3 bg-agronoya-primary rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-900 dark:text-slate-50/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Avantages Techniques */}
      <div className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Avantages Techniques</h2>
              <div className="space-y-6">
                {[
                  "Détection en temps réel avec latence < 100ms",
                  "Précision de détection supérieure à 98%",
                  "Support de multiples formats d'image",
                  "Traitement edge computing pour réduire la bande passante"
                ].map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-agronoya-primary mr-4 flex-shrink-0" />
                    <span className="text-gray-900 dark:text-slate-50/80">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-agronoya-primary/20 to-transparent rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Spécifications</h3>
                <p className="text-gray-900 dark:text-slate-50/70">OpenCV, YOLO, Detectron2</p>
              </div>
              
              <div className="bg-gradient-to-r from-agronoya-primary/20 to-transparent rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Compatibilité</h3>
                <p className="text-gray-900 dark:text-slate-50/70">Caméras haute résolution</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à voir vos cultures différemment ?
          </h2>
          <p className="text-xl text-gray-900 dark:text-slate-50/80 mb-8 max-w-2xl mx-auto">
            Découvrez comment notre vision par ordinateur peut transformer la surveillance de vos cultures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-eos-primary">
              Commencer maintenant
            </button>
            <button className="btn-eos-secondary">
              Planifier une consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerVisionPage;

