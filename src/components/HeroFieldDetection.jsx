import React from 'react';
import { ArrowRight, Satellite, Target, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroFieldDetection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Satellite Image Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 pt-32">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-sm font-medium text-orange-300">Solutions Agricoles</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Détection automatique des limites du champ à l'aide de{' '}
              <span className="text-orange-400">réseaux neuronaux</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              L'agriculture du 21e siècle doit relever des défis considérables : nourrir une population en 
              croissance de manière durable ne sera pas une tâche facile. À AgroNoya, nous sommes pleinement 
              conscients de ce problème et nous nous efforçons constamment de présenter des solutions 
              technologiques de plus en plus avancées.
            </p>

            <p className="text-lg text-white/80 mb-8">
              Nous exploitons des images haute résolution ainsi que des algorithmes de détection des limites 
              puissantes élaborés par notre équipe de scientifiques expérimentés. Cette approche nous permet 
              d'atteindre un niveau de détail exceptionnel lors de la délimitation des champs.
            </p>

            {/* CTA Principal */}
            <div className="mb-12">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center group transition-all duration-300 hover:scale-105 hover:shadow-xl">
                DÉTECTER LES LIMITES DU CHAMP
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Badges de confiance */}
            <div className="flex items-center space-x-6 pt-8 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-orange-400" />
                <span className="text-sm text-white/80">Précision &gt; 90%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-orange-400" />
                <span className="text-sm text-white/80">Traitement instantané</span>
              </div>
            </div>
          </div>

          {/* Satellite 3D */}
          <div className="relative">
            <div className="relative z-10 flex justify-center">
              <div className="relative">
                {/* Satellite Icon avec animation */}
                <div className="w-64 h-64 relative animate-pulse">
                  <Satellite className="w-full h-full text-orange-400 drop-shadow-2xl" />
                  
                  {/* Orbites animées */}
                  <div className="absolute inset-0 border-2 border-orange-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute inset-4 border border-orange-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-8 border border-orange-400/10 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                </div>

                {/* Signaux de transmission */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-8 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-6 bg-orange-400/70 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-4 bg-orange-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Particules flottantes */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroFieldDetection;

