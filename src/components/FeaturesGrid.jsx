import React from 'react';
import { 
  Map, 
  Zap, 
  Target, 
  Layers, 
  Clock, 
  Bot, 
  RefreshCw, 
  Globe, 
  Minimize, 
  GitCompare, 
  Maximize, 
  Settings 
} from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      icon: Map,
      title: "Délimitation complète du champ",
      description: "Obtenez des cartes détaillées des limites de champs pour de grandes surfaces, ce qui facilite grandement la classification des cultures. Nous proposons des cartes aux formats .shp et .geotiff."
    },
    {
      icon: Layers,
      title: "Délimitation des champs et API",
      description: "En plus des cartes de limites de champs, nous offrons un accès rapide et facile à l'API afin que vous puissiez obtenir toutes les informations dont vous avez besoin sur les champs particuliers de vos clients."
    },
    {
      icon: Target,
      title: "Haute précision",
      description: "Une imagerie satellitaire fiable et des algorithmes innovants de détection des limites de champs garantissent la grande précision de la délimitation des champs."
    },
    {
      icon: Settings,
      title: "Autonome et combinée",
      description: "Nous proposons notre détection des limites de champ à la fois comme solution autonome et comme première étape d'autres solutions AgroNoya, telles que la classification des cultures."
    },
    {
      icon: Zap,
      title: "Efficacité",
      description: "La détection des limites du champ est réalisée instantanément et à distance."
    },
    {
      icon: Bot,
      title: "Entièrement automatisé",
      description: "Aucune intervention manuelle n'est requise pour délimiter le champ ; les algorithmes accomplissent cette tâche de manière autonome."
    },
    {
      icon: RefreshCw,
      title: "Mise à jour",
      description: "Notre satellite nous permettra d'utiliser les images satellites les plus récentes, ce qui garantira la mise à jour des cartes de délimitation des champs."
    },
    {
      icon: Globe,
      title: "Précision à l'échelle nationale",
      description: "Un haut degré de précision est garanti même sur d'immenses étendues, comme celles d'un pays."
    },
    {
      icon: Minimize,
      title: "Délimitation de la taille du champ",
      description: "Nos algorithmes sont capables de détecter les limites des champs les plus petits."
    },
    {
      icon: GitCompare,
      title: "Détection des changements",
      description: "Détecter les changements dans les contours du champ en comparant les nouvelles limites avec les bases de données existantes."
    },
    {
      icon: Maximize,
      title: "Scalabilité",
      description: "Nous pouvons former nos algorithmes de délimitation des champs pour n'importe quel emplacement et n'importe quelle résolution."
    },
    {
      icon: Clock,
      title: "Cartes prêtes à l'emploi",
      description: "Plusieurs cartes de délimitation des champs sont déjà disponibles."
    }
  ];

  return (
    <section className="py-20 bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))]">
      <div className="container mx-auto px-4">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Fonctionnalités Avancées
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Notre plateforme de détection des limites de champ offre une gamme complète de fonctionnalités 
            pour répondre à tous vos besoins en agriculture de précision.
          </p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-orange-500" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-foreground leading-relaxed">
                {feature.description}
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

export default FeaturesGrid;

