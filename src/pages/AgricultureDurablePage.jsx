import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  TrendingUp, 
  Leaf, 
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Zap,
  Brain,
  Satellite,
  Target,
  BarChart3,
  Recycle
} from 'lucide-react';

const AgricultureDurablePage = () => {
  const [waterSavings, setWaterSavings] = useState(0);
  const [yieldIncrease, setYieldIncrease] = useState(0);
  const [chemicalReduction, setChemicalReduction] = useState(0);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const waterTarget = 30;
      const yieldTarget = 15;
      const chemicalTarget = 25;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setWaterSavings(Math.floor(waterTarget * progress));
        setYieldIncrease(Math.floor(yieldTarget * progress));
        setChemicalReduction(Math.floor(chemicalTarget * progress));

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, duration / steps);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-dark dark:bg-slate-900">
      {/* Section Héro */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark dark:bg-slate-900 pt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div 
            className="max-w-5xl mx-auto mt-16"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-slate-900 dark:text-white">
              AgroNoya : Le Futur de l'Agriculture
              <span className="block text-green-500 dark:text-green-400 mt-4">
                de Précision
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-16 font-light">
              Connectée, Durable et Rentable
            </p>
          </motion.div>

          {/* Compteurs animés */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16 max-w-6xl mx-auto"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-8 border border-blue-200 dark:border-slate-700 hover:shadow-xl dark:hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-3">+{waterSavings}%</div>
              <div className="text-lg font-medium text-slate-700 dark:text-slate-300">Économie d'Eau</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-8 border border-green-200 dark:border-slate-700 hover:shadow-xl dark:hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-green-600 dark:text-green-400 mb-3">+{yieldIncrease}%</div>
              <div className="text-lg font-medium text-slate-700 dark:text-slate-300">Augmentation du Rendement</div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-8 border border-amber-200 dark:border-slate-700 hover:shadow-xl dark:hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-amber-600 dark:text-amber-400 mb-3">-{chemicalReduction}%</div>
              <div className="text-lg font-medium text-slate-700 dark:text-slate-300">Réduction des Intrants Chimiques</div>
            </div>
          </motion.div>

          <motion.button 
            className="bg-gradient-to-r from-emerald-500 to-gray-600 hover:from-emerald-600 hover:to-blue-700 text-white px-12 py-6 rounded-2xl text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
            variants={itemVariants}
          >
            Démarrer ma Transformation Agricole
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.section>

      {/* Section 1: Le Défi & La Vision */}
      <motion.section 
        className="py-24 bg-slate-50 dark:bg-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              L'Agriculture face au Défi de l'Eau & du Climat
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-emerald-400 dark:to-blue-400 mx-auto mb-6"></div>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold">
              La réponse AgroNoya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <div className="bg-red-50 dark:bg-slate-800/50 dark:backdrop-blur-xl border-l-4 border-red-500 p-8 rounded-r-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">!</span>
                    </div>
                    Le Défi
                  </h3>
                  <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg">Pénurie d'eau croissante dans la région MENA</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg">Vulnérabilité climatique des cultures traditionnelles</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg">Surconsommation d'intrants chimiques</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 dark:bg-slate-800/50 dark:backdrop-blur-xl border-l-4 border-emerald-500 p-8 rounded-r-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    Notre Vision
                  </h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Digitaliser et automatiser l'agriculture via <strong className="text-emerald-700 dark:text-emerald-400">IoT</strong>, <strong className="text-emerald-700 dark:text-emerald-400">Intelligence Artificielle</strong> et <strong className="text-emerald-700 dark:text-emerald-400">Imagerie Satellite</strong> pour créer une agriculture résiliente, précise et rentable. Ne plus estimer, mais <strong className="text-emerald-700 dark:text-emerald-400">calculer</strong> avec précision.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl transform rotate-3"></div>
                <img 
                  src="/assets/smart_farming_1.jpg" 
                  alt="Agriculture moderne" 
                  className="relative rounded-3xl shadow-2xl w-full transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg">
                    La Fiabilité par l'Intégration
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Écosystème de Précision */}
      <motion.section 
        className="py-24 bg-dark dark:bg-slate-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              De l'Estimation au <span className="text-green-500 dark:text-green-400">Calcul Précis</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-emerald-400 dark:to-blue-400 mx-auto mb-6"></div>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold">
              La Révolution de l'Agriculture Connectée
            </p>
          </motion.div>

          {/* Processus en 3 étapes */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-8 border border-blue-200 dark:border-slate-700 hover:shadow-xl dark:hover:bg-slate-800/70 transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Satellite className="w-10 h-10 text-dark" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Collecte</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">Capteurs IoT + Imagerie Satellite temps réel</p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>• Humidité du sol</div>
                <div>• Indices NDVI</div>
                <div>• Météo hyperlocale</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-8 border border-green-200 dark:border-slate-700 hover:shadow-xl dark:hover:bg-slate-800/70 transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-dark" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">Analyse</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">Moteurs IA spécialisés par domaine</p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>• NoyaSol (NPK)</div>
                <div>• NoyaIrrigation</div>
                <div>• NoyaSat (Maladies)</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-8 border border-amber-200 dark:border-slate-700 hover:shadow-xl dark:hover:bg-slate-800/70 transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-4">Action</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">Automatisation + Conseils précis</p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>• Irrigation auto</div>
                <div>• Dosage optimal</div>
                <div>• Intervention ciblée</div>
              </div>
            </div>
          </motion.div>

          {/* Flèches de connexion */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <ArrowRight className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
            <ArrowRight className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
          </div>
        </div>
      </motion.section>

      {/* Section 3: Les 3 Piliers */}
      <motion.section 
        className="py-24 bg-slate-50 dark:bg-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Les 3 Piliers <span className="text-green-500 dark:text-green-400">Technologiques</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-emerald-400 dark:to-blue-400 mx-auto mb-6"></div>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold">
              Une Expertise Sectorielle Unique
            </p>
          </motion.div>

          <div className="space-y-24 max-w-7xl mx-auto">
            {/* AgroSol */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              variants={itemVariants}
            >
              <div className="order-2 lg:order-1">
                <div className="bg-white dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">MODULE AGROSOL</span>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">AgroSol</h3>
                    </div>
                  </div>
                  <p className="text-xl text-amber-600 dark:text-amber-400 font-semibold mb-4">
                    Maîtrise des intrants au service du sol
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    Mesure temps réel des paramètres NPK, pH et humidité pour un dosage précis des fertilisants et amendements.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-amber-100 dark:bg-amber-500/20 rounded-xl p-4">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">-40%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Coûts intrants</div>
                    </div>
                    <div className="bg-amber-100 dark:bg-amber-500/20 rounded-xl p-4">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">+25%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Santé des sols</div>
                    </div>
                    <div className="bg-amber-100 dark:bg-amber-500/20 rounded-xl p-4">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">100%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Calcul précis</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/assets/agro_sol.png" 
                  alt="AgroSol - Analyse du sol" 
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </motion.div>

            {/* AgroIrrigation */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              variants={itemVariants}
            >
              <div>
                <img 
                  src="/assets/agro_irrigation.png" 
                  alt="AgroIrrigation - Gestion de l'eau" 
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
              <div>
                <div className="bg-white dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                      <Droplets className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">MODULE AGROIRRIGATION</span>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">AgroIrrigation</h3>
                    </div>
                  </div>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    L'or bleu géré au litre près
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    Calcul croisant besoins de la plante, prévisions météo et capacité de rétention du sol pour une irrigation optimale.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-100 dark:bg-blue-500/20 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">30%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Économie garantie</div>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-500/20 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Irrigation auto</div>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-500/20 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">0</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Stress hydrique</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* NoyaSat */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              variants={itemVariants}
            >
              <div className="order-2 lg:order-1">
                <div className="bg-white dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                      <Satellite className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">MODULE NOYASAT</span>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">NoyaSat</h3>
                    </div>
                  </div>
                  <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-4">
                    Diagnostic précoce et localisé
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    Indices NDVI et imagerie multispectrale pour détecter stress, maladies et carences avant qu'elles ne soient visibles à l'œil nu.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-purple-100 dark:bg-purple-500/20 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">7j</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Détection précoce</div>
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-500/20 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">1m²</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Précision carto</div>
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-500/20 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">80%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Intervention ciblée</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/assets/agro_sat.png" 
                  alt="NoyaSat - Imagerie satellite" 
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 4: L'Engagement ESG */}
      <motion.section 
        className="py-24 bg-white dark:bg-slate-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              La Durabilité est notre <span className="text-green-500 dark:text-green-400">Performance</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400 mx-auto mb-6"></div>
            <p className="text-2xl text-green-600 dark:text-green-400 font-semibold">
              Un Engagement ESG Normé
            </p>
          </motion.div>

          {/* Piliers ESG */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto"
            variants={itemVariants}
          >
            {/* Environnement */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-8 border border-green-200 dark:border-slate-700 hover:shadow-xl dark:hover:bg-slate-800/70 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Environnement</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  Réduction de l'empreinte carbone alignée sur ISO 14064 / GHG Protocol
                </p>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
                    <span>-40% émissions CO₂</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
                    <span>Préservation des ressources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
                    <span>Biodiversité protégée</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-8 border border-blue-200 dark:border-slate-700 hover:shadow-xl dark:hover:bg-slate-800/70 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Social</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  Amélioration de la qualité de vie et autonomie des agriculteurs
                </p>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                    <span>Formation continue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                    <span>Sécurité alimentaire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                    <span>Emploi rural durable</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gouvernance */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-8 border border-purple-200 dark:border-slate-700 hover:shadow-xl dark:hover:bg-slate-800/70 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Gouvernance</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  Transparence et traçabilité des données (100%)
                </p>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full"></div>
                    <span>Conformité IFRS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full"></div>
                    <span>Audit transparent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full"></div>
                    <span>Éthique des données</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bloc Scopes */}
          <motion.div 
            className="bg-gradient-to-br from-slate-50 to-gray-100 dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-12 border border-slate-200 dark:border-slate-700 max-w-5xl mx-auto shadow-xl"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">Impact par Scope d'Émissions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-white dark:bg-slate-700/50 rounded-2xl shadow-lg border border-red-200 dark:border-slate-600">
                <div className="text-5xl font-bold text-red-500 dark:text-red-400 mb-3">Scope 1</div>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">Émissions directes</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Réduction des machines agricoles</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-700/50 rounded-2xl shadow-lg border border-orange-200 dark:border-slate-600">
                <div className="text-5xl font-bold text-orange-500 dark:text-orange-400 mb-3">Scope 2</div>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">Énergie indirecte</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Optimisation pompage irrigation</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-700/50 rounded-2xl shadow-lg border border-green-200 dark:border-slate-600">
                <div className="text-5xl font-bold text-green-500 dark:text-green-400 mb-3">Scope 3</div>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">Chaîne de valeur</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Réduction transport intrants</p>
              </div>
            </div>
            <div className="p-6 bg-green-100 dark:bg-green-500/20 rounded-2xl border border-green-300 dark:border-green-400/30">
              <p className="text-center text-slate-700 dark:text-slate-300 text-lg">
                <strong className="text-green-600 dark:text-green-400">75% de notre impact</strong> se concentre sur le Scope 3, 
                là où AgroNoya excelle par la réduction des intrants et du transport.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 5: Call to Action Final */}
      <motion.section 
        className="py-24 bg-slate-50 dark:bg-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
              Ne vous contentez plus d'estimer. <span className="text-green-500 dark:text-green-400">Calculez.</span>
            </h2>
          </motion.div>

          {/* Témoignage */}
          <motion.div 
            className="bg-white dark:bg-slate-800/50 dark:backdrop-blur-xl rounded-3xl p-12 border border-slate-200 dark:border-slate-700 max-w-4xl mx-auto mb-16 shadow-lg"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">IA</span>
              </div>
              <blockquote className="text-xl text-slate-700 dark:text-slate-300 mb-6 italic">
                "Avec AgroNoya, j'ai économisé 35% d'eau et augmenté mes rendements de 18% dès la première saison. 
                Le retour sur investissement a été de 12 000 DT. C'est la révolution que j'attendais."
              </blockquote>
              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Ibrahim Abbassi, Agriculteur - Kairouan (45 hectares)
              </div>
            </div>
          </motion.div>

          {/* CTA Final */}
          <motion.div className="text-center space-y-8" variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-12 py-6 rounded-2xl text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                Demander une Étude d'Impact Personnalisée
                <ArrowRight className="w-6 h-6" />
              </button>
              <button className="border-2 border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-900 px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-300 flex items-center gap-3">
                Lire notre Rapport ESG Complet
                <BarChart3 className="w-6 h-6" />
              </button>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              <strong className="text-emerald-600 dark:text-emerald-400">500+ agriculteurs</strong> ont déjà transformé leur exploitation avec AgroNoya
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AgricultureDurablePage;
