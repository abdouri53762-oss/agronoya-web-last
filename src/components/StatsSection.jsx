import React from 'react';
import { Target, Ruler, CheckCircle } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Target,
      title: "Précision",
      value: "plus de 80%",
      description: "Nous offrons une précision supérieure à 80% en fonction de la région, des caractéristiques de l'image et de la saison."
    },
    {
      icon: Ruler,
      title: "Taille minimale du champ",
      value: "3 ha",
      description: "Cette solution est adaptée aux projets dépassant 10 000 hectares de terrain."
    },
    {
      icon: CheckCircle,
      title: "Validation des données",
      value: "Méthode l'Intersection sur l'Union (IOU)",
      description: "Nous utilisons la méthode de l'Intersection sur l'Union (IOU) pour valider les résultats, c'est-à-dire pour comparer les limites du champ que nous avons détectées avec les données reçues du client."
    }
  ];

  return (
    <section className="py-20 bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))]">
      <div className="container mx-auto px-4">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Performances et Précision
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            La délimitation précise des champs est la base des meilleures pratiques de gestion des cultures. 
            Augmentez vos profits de manière durable avec notre solution de détection de limites de champ.
          </p>
        </div>

        {/* Grille des statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-[rgb(var(--bg-secondary-rgb))] p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                <stat.icon className="w-8 h-8 text-orange-500" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {stat.title}
              </h3>
              
              <div className="text-3xl font-bold text-orange-500 mb-4 text-center">
                {stat.value}
              </div>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
            DÉTECTER LES LIMITES DU CHAMP
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

