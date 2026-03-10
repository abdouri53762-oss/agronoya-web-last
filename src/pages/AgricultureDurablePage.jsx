import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Recycle,
  Gauge,
  Sprout,
  CloudRain,
  LineChart,
} from 'lucide-react';

import smartFarmingImg from '../assets/smart_farming_1.jpg';
import agroSolImg from '../assets/agro_sol.png';
import agroIrrigationImg from '../assets/agro_irrigation.png';
import agroSatImg from '../assets/agro_sat.png';

const AgricultureDurablePage = () => {
  const navigate = useNavigate();

  const [waterSavings, setWaterSavings] = useState(0);
  const [yieldIncrease, setYieldIncrease] = useState(0);
  const [chemicalReduction, setChemicalReduction] = useState(0);

  useEffect(() => {
    let interval;

    const animateCounters = () => {
      const duration = 1800;
      const steps = 60;
      const waterTarget = 30;
      const yieldTarget = 15;
      const chemicalTarget = 25;

      let currentStep = 0;

      interval = setInterval(() => {
        currentStep += 1;
        const progress = currentStep / steps;

        setWaterSavings(Math.floor(waterTarget * progress));
        setYieldIncrease(Math.floor(yieldTarget * progress));
        setChemicalReduction(Math.floor(chemicalTarget * progress));

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, duration / steps);
    };

    const timer = setTimeout(animateCounters, 350);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.12,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 18, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero */}
      <motion.section
        className="relative overflow-hidden pt-28 pb-24 bg-white dark:bg-slate-900"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.10),transparent_38%)] dark:bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_38%)]"></div>

        <div className="relative container mx-auto px-6">
          <motion.div className="max-w-6xl mx-auto text-center" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-400/20 mb-8">
              <Recycle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Sustainable agriculture, elevated by intelligence
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-slate-900 dark:text-white">
              L’agriculture durable
              <span className="block text-emerald-500 dark:text-emerald-400 mt-3">
                devient une discipline de pilotage
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-light max-w-5xl mx-auto leading-relaxed">
              AgroNoya transforme l’exploitation agricole en système piloté par
              la donnée : plus sobre dans l’usage de l’eau, plus précis dans les
              interventions, plus lisible dans la performance et plus robuste face
              à l’incertitude climatique.
            </p>

            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-4xl mx-auto mb-14 leading-relaxed">
              Notre ambition n’est pas d’ajouter une couche technologique de plus.
              Elle est de rendre chaque décision agronomique plus fondée, plus
              traçable et plus rentable dans le temps.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 border border-blue-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                {waterSavings}%
              </div>
              <div className="text-lg font-medium text-slate-700 dark:text-slate-300">
                Jusqu’à d’optimisation hydrique
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 border border-green-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-green-600 dark:text-green-400 mb-3">
                +{yieldIncrease}%
              </div>
              <div className="text-lg font-medium text-slate-700 dark:text-slate-300">
                Potentiel de performance agronomique
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 border border-amber-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-amber-600 dark:text-amber-400 mb-3">
                -{chemicalReduction}%
              </div>
              <div className="text-lg font-medium text-slate-700 dark:text-slate-300">
                Réduction ciblée des intrants
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            variants={itemVariants}
          >
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              Demander une étude d’impact
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => navigate('/solutions/module-esg')}
              className="border-2 border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-900 px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3"
            >
              Explorer le module ESG
              <BarChart3 className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Strategic section */}
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
              La durabilité n’est plus un discours
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold">
              Elle devient une architecture de décision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-900 border-l-4 border-red-500 p-8 rounded-r-2xl shadow-sm">
                  <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">!</span>
                    </div>
                    Le nouveau contexte agricole
                  </h3>

                  <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg">
                        La rareté de l’eau redéfinit la performance des exploitations
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg">
                        Le climat augmente la variabilité et le coût de l’erreur
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg">
                        Les intrants mal ciblés détruisent de la marge et de la résilience
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg">
                        Les décisions intuitives atteignent leurs limites à grande échelle
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-slate-900 border-l-4 border-emerald-500 p-8 rounded-r-2xl shadow-sm">
                  <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    La thèse AgroNoya
                  </h3>

                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Une agriculture durable ne repose pas uniquement sur de
                    bonnes intentions. Elle exige une meilleure lecture du terrain,
                    une meilleure hiérarchisation des actions et une meilleure
                    continuité entre mesure, analyse et exécution. C’est exactement
                    ce que construit AgroNoya.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl transform rotate-2"></div>
                <img
                  src={smartFarmingImg}
                  alt="Pilotage durable de l’exploitation agricole"
                  className="relative rounded-3xl shadow-2xl w-full transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg">
                    Mieux piloter, c’est d’abord mieux observer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Operating model */}
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
              Un operating system pour l’agriculture durable
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold">
              Observer → Modéliser → Exécuter
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 border border-blue-200 dark:border-slate-700 text-center shadow-sm">
              <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Satellite className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Observer
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Capteurs, météo et imagerie forment une couche d’observation
                continue du système sol-plante-climat.
              </p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>• Paramètres terrain</div>
                <div>• Indices végétatifs</div>
                <div>• Variabilité intra-parcellaire</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 border border-green-200 dark:border-slate-700 text-center shadow-sm">
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                Modéliser
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Les moteurs AgroNoya traduisent les signaux disponibles en
                priorités métier et en recommandations plus fiables.
              </p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>• Analyse multi-source</div>
                <div>• Lecture de criticité</div>
                <div>• Recommandations contextualisées</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 border border-amber-200 dark:border-slate-700 text-center shadow-sm">
              <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-4">
                Exécuter
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                La décision se prolonge dans le pilotage irrigation, le ciblage
                des interventions et le suivi de la performance réelle.
              </p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>• Aide à l’irrigation</div>
                <div>• Réduction des actions inutiles</div>
                <div>• Traçabilité des résultats</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Core modules */}
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
              Trois moteurs de valeur durable
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold">
              Sol, eau et diagnostic spatial au cœur du modèle
            </p>
          </motion.div>

          <div className="space-y-24 max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              variants={itemVariants}
            >
              <div className="order-2 lg:order-1">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                        AGROSOL
                      </span>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Intelligence du sol
                      </h3>
                    </div>
                  </div>

                  <p className="text-xl text-amber-600 dark:text-amber-400 font-semibold mb-4">
                    La qualité des décisions commence sous la surface
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    AgroSol fournit une lecture plus fine des paramètres critiques
                    du sol afin d’aider à ajuster les apports, réduire les dérives
                    de dosage et préserver la qualité productive du terrain.
                  </p>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-amber-100 dark:bg-amber-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        NPK
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Lecture nutritive
                      </div>
                    </div>
                    <div className="bg-amber-100 dark:bg-amber-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        pH
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Équilibre chimique
                      </div>
                    </div>
                    <div className="bg-amber-100 dark:bg-amber-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        Continu
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Suivi vivant du sol
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src={agroSolImg}
                  alt="AgroSol - intelligence du sol"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              variants={itemVariants}
            >
              <div>
                <img
                  src={agroIrrigationImg}
                  alt="AgroIrrigation - pilotage de l'eau"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>

              <div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                      <Droplets className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        AGROIRRIGATION
                      </span>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Pilotage hydrique
                      </h3>
                    </div>
                  </div>

                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    L’eau devient une variable maîtrisée, non subie
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    AgroIrrigation croise l’état hydrique, la dynamique culturale,
                    la météo et les caractéristiques du sol pour soutenir une
                    irrigation plus cohérente avec le besoin réel.
                  </p>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-100 dark:bg-blue-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        Eau
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Ressource pilotée
                      </div>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        Continu
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Lecture dynamique
                      </div>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        Priorité
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Décision assistée
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              variants={itemVariants}
            >
              <div className="order-2 lg:order-1">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                      <Satellite className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                        NOYASAT
                      </span>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Vision spatiale de la parcelle
                      </h3>
                    </div>
                  </div>

                  <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-4">
                    Détecter plus tôt pour agir avec plus de justesse
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    NoyaSat apporte une lecture visuelle et spatiale de la
                    parcelle, identifie les zones sous tension et oriente des
                    vérifications ou interventions mieux ciblées.
                  </p>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-purple-100 dark:bg-purple-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        NDVI
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Lecture végétative
                      </div>
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        Zones
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Diagnostic spatial
                      </div>
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        Précoce
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Détection avancée
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src={agroSatImg}
                  alt="NoyaSat - vision satellite"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ESG premium */}
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
              Une lecture ESG ancrée dans le réel
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-2xl text-green-600 dark:text-green-400 font-semibold">
              Des indicateurs utiles avant d’être déclaratifs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 border border-green-200 dark:border-slate-700 shadow-sm">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  Environnement
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  Réduire les gaspillages, mieux allouer les ressources et
                  documenter les gains environnementaux dans le temps.
                </p>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Efficience hydrique mesurable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Intrants mieux ciblés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Base de suivi environnemental</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 border border-blue-200 dark:border-slate-700 shadow-sm">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  Social
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  Équiper les équipes terrain et les exploitants d’outils plus
                  lisibles, plus rapides et plus utiles à la décision.
                </p>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Montée en compétence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Réduction de l’incertitude terrain</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Meilleure continuité opérationnelle</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 border border-purple-200 dark:border-slate-700 shadow-sm">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  Gouvernance
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  Structurer les données, historiser les décisions et améliorer la
                  qualité du reporting technique et de gestion.
                </p>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Traçabilité des actions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Historique opérationnel consolidé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Base exploitable pour pilotage & ESG</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-12 border border-slate-200 dark:border-slate-700 max-w-6xl mx-auto shadow-sm"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
              Une performance durable se suit selon trois horizons
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <CloudRain className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Ressource
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Eau, fréquence d’irrigation, efficience d’usage
                </p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <Sprout className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Agronomie
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Sol, culture, stress, régularité des performances
                </p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <LineChart className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Exécution
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Décisions, interventions, stabilité opérationnelle
                </p>
              </div>
            </div>

            <div className="p-6 bg-emerald-100 dark:bg-emerald-500/10 rounded-2xl border border-emerald-300 dark:border-emerald-400/20">
              <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                La durabilité a de la valeur lorsqu’elle améliore la qualité des
                décisions, réduit les pertes évitables et rend la performance plus
                résiliente dans le temps. C’est ce lien entre impact et pilotage
                qu’AgroNoya cherche à matérialiser.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
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
              Construire une exploitation plus durable,
              <span className="block text-emerald-500 dark:text-emerald-400 mt-3">
                c’est d’abord construire un meilleur système de décision
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-slate-900 rounded-3xl p-12 border border-slate-200 dark:border-slate-700 max-w-4xl mx-auto mb-16 shadow-sm"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gauge className="w-10 h-10 text-white" />
              </div>

              <blockquote className="text-xl text-slate-700 dark:text-slate-300 mb-6 italic leading-relaxed">
                “AgroNoya positionne la donnée agricole comme un levier de
                résilience, d’efficience et de performance. Notre objectif est de
                rendre chaque hectare plus lisible, chaque décision plus défendable
                et chaque saison plus pilotable.”
              </blockquote>

              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Vision produit AgroNoya
              </div>
            </div>
          </motion.div>

          <motion.div className="text-center space-y-8" variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-12 py-6 rounded-2xl text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                Demander une étude d’impact
                <ArrowRight className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/solutions/module-esg')}
                className="border-2 border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-900 px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-300 flex items-center gap-3"
              >
                Découvrir notre approche ESG
                <BarChart3 className="w-6 h-6" />
              </button>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Une page pensée pour parler autant aux exploitants qu’aux partenaires,
              décideurs et acteurs de transformation du secteur agricole.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AgricultureDurablePage;