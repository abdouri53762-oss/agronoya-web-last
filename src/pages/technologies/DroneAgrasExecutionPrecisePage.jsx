import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plane, Target, Settings, Shield, Zap, CheckCircle } from 'lucide-react';

const DroneAgrasExecutionPrecisePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1C191F' }}>
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        <div className="relative z-10 container mx-auto px-4 py-16">
          <button
            onClick={() => navigate('/technologies')}
            className="flex items-center gap-2 text-gray-900 dark:text-slate-50/80 hover:text-white mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux Technologies
          </button>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl">
              <Plane className="w-12 h-12 text-gray-900 dark:text-slate-50" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                Drone Agras - Exécution Précise
              </h1>
              <p className="text-xl text-orange-200">
                Application Contrôlée par Technicien Pilote
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-900 dark:text-slate-50/90 max-w-3xl leading-relaxed">
            Notre drone DJI Agras assure une application ultra-précise des traitements avec supervision technique experte, combinant technologie de pointe et expertise humaine.
          </p>
        </div>
      </div>

      {/* Spécifications */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Spécifications Techniques</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Import Carte Prescription",
                description: "Radiocommande avec cartes de prescription détaillées",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Préparation Mélange",
                description: "Concentration exacte selon les besoins spécifiques",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Pilotage Supervisé",
                description: "Précision centimétrique avec supervision experte",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Expertise + Technologie",
                description: "Combinaison parfaite humain-machine",
                color: "from-orange-500 to-red-500"
              }
            ].map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                <div className={`p-3 bg-gradient-to-br ${spec.color} rounded-xl text-white mb-4 w-fit`}>
                  {spec.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{spec.title}</h3>
                <p className="text-gray-400">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Avantages Clés</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Précision centimétrique garantie",
              "Réduction des pertes de produits",
              "Application uniforme sur toute la surface",
              "Supervision technique experte",
              "Adaptation aux conditions météo",
              "Traçabilité complète des interventions"
            ].map((advantage, index) => (
              <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-900 dark:text-slate-50">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt pour l'Excellence ?</h2>
          <p className="text-xl text-orange-200 mb-8">Découvrez la précision du drone Agras</p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-2xl hover:from-orange-700 hover:to-red-700 transition-all duration-300"
          >
            Demander une Démonstration
          </button>
        </div>
      </section>
    </div>
  );
};

export default DroneAgrasExecutionPrecisePage;

