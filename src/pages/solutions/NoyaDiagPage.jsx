import React from 'react';
import { ArrowRight, CheckCircle, Brain, Camera, Smartphone, Zap, Target, Eye, Clock, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const NoyaDiagPage = () => {

  return (
    <div className="min-h-screen bg-[#0A0B0D]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/src/assets/noya_diag.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-teal-900/30 to-green-900/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <Brain className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-emerald-400 font-medium">Diagnostic IA</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Noya Diag
                </h1>
                
                <h2 className="text-2xl lg:text-3xl text-emerald-400 mb-6 font-semibold">
                  Diagnostic Maladies par IA
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Diagnostic instantané des maladies végétales par photo avec IA avancée. 
                  Identification précise de plus de 10 000 pathologies et recommandations de traitement.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    Essayer Diagnostic
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    API Intégration
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl p-8 backdrop-blur-sm border border-emerald-500/30">
                  <img 
                    src="/src/assets/noya_diag.png" 
                    alt="Interface Noya Diag" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Précision Diagnostique Exceptionnelle
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              L'IA la plus avancée pour le diagnostic des maladies végétales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                metric: "97%",
                title: "Précision Diagnostic",
                description: "Fiabilité clinique validée"
              },
              {
                icon: <Eye className="w-8 h-8" />,
                metric: "10k+",
                title: "Maladies Référencées",
                description: "Base de données exhaustive"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                metric: "3 sec",
                title: "Temps Diagnostic",
                description: "Résultat instantané"
              },
              {
                icon: <Activity className="w-8 h-8" />,
                metric: "50+",
                title: "Cultures Supportées",
                description: "Toutes cultures principales"
              }
            ].map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4">
                  <div className="text-emerald-400">{fact.icon}</div>
                </div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">{fact.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{fact.title}</h3>
                <p className="text-gray-400 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies de Vision par IA
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Deep Learning et Computer Vision pour diagnostic médical végétal
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="/src/assets/plant_disease_ai.png" 
              alt="IA diagnostic maladies végétales" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="w-8 h-8" />,
                title: "Vision par Ordinateur",
                description: "Analyse automatique des symptômes visuels",
                image: "/src/assets/ai_plant_diagnosis.jpg"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Deep Learning",
                description: "Réseaux de neurones convolutionnels",
                image: "/src/assets/plant_disease_ai.png"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "App Mobile",
                description: "Diagnostic terrain en temps réel",
                image: "/src/assets/ai_plant_diagnosis.jpg"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "IA Temps Réel",
                description: "Traitement instantané des images",
                image: "/src/assets/plant_disease_ai.png"
              }
            ].map((tech, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={tech.image} 
                    alt={tech.title} 
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-2 left-2 inline-flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-lg backdrop-blur-sm">
                    <div className="text-emerald-400">{tech.icon}</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Diagnostic Médical Végétal de Précision
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Noya Diag utilise l'intelligence artificielle la plus avancée pour analyser 
                les photos de vos plantes et identifier instantanément maladies, carences et 
                stress. Recommandations de traitement personnalisées incluses.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Identification 10 000+ maladies et pathologies",
                  "Diagnostic différentiel multi-pathologies",
                  "Recommandations traitement bio et chimique",
                  "Suivi évolution maladie dans le temps",
                  "Base de données mise à jour en continu",
                  "Intégration données météo et sol"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Tester Diagnostic
                </button>
                <button className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Guide Utilisation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-2xl p-8 border border-emerald-500/20">
                <div className="space-y-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-emerald-400 font-semibold mb-2">Diagnostic</h4>
                    <div className="text-lg font-bold text-white mb-1">Mildiou de la Tomate</div>
                    <div className="text-sm text-gray-400">Confiance: 97%</div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-emerald-400 font-semibold mb-2">Traitement</h4>
                    <div className="text-sm text-gray-300">Bouillie bordelaise 20g/L</div>
                    <div className="text-sm text-gray-400">Application: 3 fois, 7 jours</div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-emerald-400 font-semibold mb-2">Prévention</h4>
                    <div className="text-sm text-gray-300">Éviter arrosage feuillage</div>
                    <div className="text-sm text-gray-400">Aération serre recommandée</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Applications Noya Diag
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Diagnostic Terrain",
                description: "Identification instantanée des maladies directement au champ",
                benefits: ["Photo smartphone", "Résultat 3 secondes", "Mode hors-ligne"]
              },
              {
                title: "Suivi Sanitaire",
                description: "Monitoring continu de l'état sanitaire des cultures",
                benefits: ["Historique maladies", "Alertes précoces", "Cartographie parcelles"]
              },
              {
                title: "Conseil Technique",
                description: "Recommandations personnalisées de traitement et prévention",
                benefits: ["Traitements bio/chimie", "Dosages précis", "Calendrier application"]
              }
            ].map((app, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <div className="space-y-2">
                  {app.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Votre Phytopathologiste de Poche
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ne laissez plus les maladies détruire vos cultures. Diagnostic instantané 
            et précis pour des interventions rapides et efficaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              Télécharger l'App
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Intégrer à Mon Système
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoyaDiagPage;

