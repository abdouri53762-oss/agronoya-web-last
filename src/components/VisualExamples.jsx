import React from 'react';
import { MapPin, Eye, Layers } from 'lucide-react';

const VisualExamples = () => {
  const examples = [
    {
      title: "Détection Des Limites Des Champs De Canne À Sucre Au Brésil",
      location: "Brésil",
      description: "Délimitation précise des champs de canne à sucre avec une précision de 89% sur plus de 50 000 hectares.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Ukraine. Exemple de masque de délimitation de champ",
      location: "Ukraine",
      description: "Cartographie automatisée des limites de champs agricoles avec validation par méthode IOU.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Classification des cultures par réseau neuronal",
      location: "France",
      description: "Résultats améliorés grâce à la délimitation précise des champs et classification automatique des cultures.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))]">
      <div className="container mx-auto px-4">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Exemples Visuels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos réalisations concrètes à travers le monde avec des exemples 
            de délimitation de champs et de classification des cultures.
          </p>
        </div>

        {/* Grille des exemples */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={example.image} 
                  alt={example.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--overlay-rgb)/0.50)] to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{example.location}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {example.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {example.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section avant/après */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Avant / Après Délimitation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Visualisez la différence entre une image satellite brute et le résultat 
                après application de nos algorithmes de détection des limites de champs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Détection automatique des contours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Layers className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Superposition des délimitations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Géolocalisation précise</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Avant délimitation"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Avant
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Après délimitation"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    Après
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à détecter vos limites de champs ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez les centaines d'agriculteurs et d'organisations qui font confiance 
            à notre technologie pour optimiser leur gestion des terres.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
            DÉTECTER LES LIMITES DU CHAMP
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisualExamples;

