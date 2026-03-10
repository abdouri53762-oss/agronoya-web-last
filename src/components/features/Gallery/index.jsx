import React, { useState } from 'react';
import { X, ZoomIn, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import smartFarming1 from '../../../assets/smart_farming_1.jpg';
import smartFarming2 from '../../../assets/smart_farming_2.jpg';
import smartFarming3 from '../../../assets/smart_farming_3.jpg';
import smartFarming5 from '../../../assets/smart_farming_5.jpg';
import smartFarming7 from '../../../assets/smart_farming_7.png';
import smartFarming8 from '../../../assets/smart_farming_8.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();

  const galleryImages = [
    {
      id: 1,
      src: smartFarming1,
      title: t('precisionAgricultureTitle'),
      description: t('precisionAgricultureDesc')
    },
    {
      id: 2,
      src: smartFarming2,
      title: t('agriculturalDronesTitle'),
      description: t('agriculturalDronesDesc')
    },
    {
      id: 3,
      src: smartFarming3,
      title: t('agriculturalRoboticsTitle'),
      description: t('agriculturalRoboticsDesc')
    },
    {
      id: 4,
      src: smartFarming5,
      title: t('sustainableAgricultureTitle'),
      description: t('sustainableAgricultureDesc')
    },
    {
      id: 5,
      src: smartFarming7,
      title: t('embeddedTechnologyTitle'),
      description: t('embeddedTechnologyDesc')
    },
    {
      id: 6,
      src: smartFarming8,
      title: t('dataAnalysisTitle'),
      description: t('dataAnalysisDesc')
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="technologies" className="py-20 bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))]">
      <div className="container mx-auto px-4">
        {/* En-tête de section optimisé */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#57D53B]/10 to-emerald-500/10 border border-[#57D53B]/20 text-[#57D53B] text-sm font-semibold mb-8">
            <ZoomIn className="w-5 h-5 mr-2" />
            {t('galerieTechnologique')}
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-[#57D53B]">{t('solutionsEnAction')}</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            {t('decouvrezTechnologies')}
            <span className="text-[#57D53B] font-semibold"> {t('agricultureIntelligenteDemain')}</span>
          </p>
        </div>

        {/* Grille de galerie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover-lift cursor-pointer ${
                index % 2 === 0 ? 'slide-up' : 'fade-in'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(image)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--overlay-rgb)/0.70)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2 text-white">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
                
                {/* Icône zoom */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-[rgb(var(--overlay-rgb)/0.20)] backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <button className="bg-agronoya-green hover:bg-agronoya-green-dark text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center mx-auto group transition-all duration-300 hover-lift">
            {t('viewAllAchievements')}
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Modal pour image agrandie */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 popup-overlay flex items-center justify-center p-4" onClick={closeModal}>
          <div className="popup-content bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Bouton fermer */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Informations */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-agronoya-gray-darker mb-2">{selectedImage.title}</h3>
              <p className="text-agronoya-gray">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

