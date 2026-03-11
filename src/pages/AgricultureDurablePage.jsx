import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// motion is used in JSX elements below
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
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
  const { t } = useTranslation();

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
                {t('agricultureDurableHeroBadge')}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-slate-900 dark:text-white">
              {t('agricultureDurable')}
              <span className="block text-emerald-500 dark:text-emerald-400 mt-3">
                {t('agricultureDurableHeroSubtitle')}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-light max-w-5xl mx-auto leading-relaxed">
              {t('agricultureDurableHeroDesc1')}
            </p>

            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-4xl mx-auto mb-14 leading-relaxed">
              {t('agricultureDurableHeroDesc2')}
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
                {t('agricultureDurableStatWaterLabel')}
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
                {t('agricultureDurableStatYieldLabel')}
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
                {t('agricultureDurableStatChemicalLabel')}
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
              {t('agricultureDurableRequestImpactStudy')}
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => navigate('/solutions/module-esg')}
              className="border-2 border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-900 px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3"
            >
              {t('agricultureDurableExploreESG')}
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
              {t('agricultureDurableStrategicTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold">
              {t('agricultureDurableStrategicSubtitle')}
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
                    {t('agricultureDurableContextTitle')}
                  </h3>

                  <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg">
                        {t('agricultureDurableContextPoint1')}
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg">
                        {t('agricultureDurableContextPoint2')}
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg">
                        {t('agricultureDurableContextPoint3')}
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg">
                        {t('agricultureDurableContextPoint4')}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-slate-900 border-l-4 border-emerald-500 p-8 rounded-r-2xl shadow-sm">
                  <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    {t('agricultureDurableThesisTitle')}
                  </h3>

                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    {t('agricultureDurableThesisDesc')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl transform rotate-2"></div>
                <img
                  src={smartFarmingImg}
                  alt={t('agricultureDurableSmartFarmingImgAlt')}
                  className="relative rounded-3xl shadow-2xl w-full transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg">
                    {t('agricultureDurableSmartFarmingOverlay')}
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
              {t('agricultureDurableOperatingTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold">
              {t('agricultureDurableOperatingSubtitle')}
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
                {t('agricultureDurableOperatingObserveTitle')}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                {t('agricultureDurableOperatingObserveDesc')}
              </p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>• {t('agricultureDurableOperatingObserveBullet1')}</div>
                <div>• {t('agricultureDurableOperatingObserveBullet2')}</div>
                <div>• {t('agricultureDurableOperatingObserveBullet3')}</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 border border-green-200 dark:border-slate-700 text-center shadow-sm">
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                {t('agricultureDurableOperatingModelTitle')}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                {t('agricultureDurableOperatingModelDesc')}
              </p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>• {t('agricultureDurableOperatingModelBullet1')}</div>
                <div>• {t('agricultureDurableOperatingModelBullet2')}</div>
                <div>• {t('agricultureDurableOperatingModelBullet3')}</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 border border-amber-200 dark:border-slate-700 text-center shadow-sm">
              <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-4">
                {t('agricultureDurableOperatingExecuteTitle')}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                {t('agricultureDurableOperatingExecuteDesc')}
              </p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div>• {t('agricultureDurableOperatingExecuteBullet1')}</div>
                <div>• {t('agricultureDurableOperatingExecuteBullet2')}</div>
                <div>• {t('agricultureDurableOperatingExecuteBullet3')}</div>
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
              {t('agricultureDurableCoreModulesTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold">
              {t('agricultureDurableCoreModulesSubtitle')}
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
                        {t('agricultureDurableAgroSolBadge')}
                      </span>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                        {t('agricultureDurableAgroSolTitle')}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xl text-amber-600 dark:text-amber-400 font-semibold mb-4">
                    {t('agricultureDurableAgroSolSubtitle')}
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    {t('agricultureDurableAgroSolDesc')}
                  </p>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-amber-100 dark:bg-amber-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        NPK
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t('agricultureDurableAgroSolStatNpk')}
                      </div>
                    </div>
                    <div className="bg-amber-100 dark:bg-amber-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        pH
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t('agricultureDurableAgroSolStatPh')}
                      </div>
                    </div>
                    <div className="bg-amber-100 dark:bg-amber-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        Continu
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t('agricultureDurableAgroSolStatContinuous')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src={agroSolImg}
                  alt={t('agricultureDurableAgroSolImgAlt')}
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
                  alt={t('agricultureDurableAgroIrrigationImgAlt')}
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
                        {t('agricultureDurableAgroIrrigationBadge')}
                      </span>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                        {t('agricultureDurableAgroIrrigationTitle')}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {t('agricultureDurableAgroIrrigationSubtitle')}
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    {t('agricultureDurableAgroIrrigationDesc')}
                  </p>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-100 dark:bg-blue-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {t('agricultureDurableAgroIrrigationStatWater')}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t('agricultureDurableAgroIrrigationStatWaterLabel')}
                      </div>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {t('agricultureDurableAgroIrrigationStatContinuous')}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t('agricultureDurableAgroIrrigationStatContinuousLabel')}
                      </div>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {t('agricultureDurableAgroIrrigationStatPriority')}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t('agricultureDurableAgroIrrigationStatPriorityLabel')}
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
                        {t('agricultureDurableNoyaSatBadge')}
                      </span>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                        {t('agricultureDurableNoyaSatTitle')}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-4">
                    {t('agricultureDurableNoyaSatSubtitle')}
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    {t('agricultureDurableNoyaSatDesc')}
                  </p>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-purple-100 dark:bg-purple-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {t('agricultureDurableNoyaSatStatNdvi')}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t('agricultureDurableNoyaSatStatNdviLabel')}
                      </div>
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {t('agricultureDurableNoyaSatStatZones')}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t('agricultureDurableNoyaSatStatZonesLabel')}
                      </div>
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-500/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {t('agricultureDurableNoyaSatStatEarly')}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t('agricultureDurableNoyaSatStatEarlyLabel')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src={agroSatImg}
                  alt={t('agricultureDurableNoyaSatImgAlt')}
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
              {t('agricultureDurableEsgTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-2xl text-green-600 dark:text-green-400 font-semibold">
              {t('agricultureDurableEsgSubtitle')}
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
                  {t('agricultureDurableEsgEnvTitle')}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {t('agricultureDurableEsgEnvDesc')}
                </p>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{t('agricultureDurableEsgEnvBenefit1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{t('agricultureDurableEsgEnvBenefit2')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{t('agricultureDurableEsgEnvBenefit3')}</span>
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
                  {t('agricultureDurableEsgSocialTitle')}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {t('agricultureDurableEsgSocialDesc')}
                </p>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{t('agricultureDurableEsgSocialBenefit1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{t('agricultureDurableEsgSocialBenefit2')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{t('agricultureDurableEsgSocialBenefit3')}</span>
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
                  {t('agricultureDurableEsgGovernanceTitle')}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {t('agricultureDurableEsgGovernanceDesc')}
                </p>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{t('agricultureDurableEsgGovernanceBenefit1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{t('agricultureDurableEsgGovernanceBenefit2')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{t('agricultureDurableEsgGovernanceBenefit3')}</span>
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
              {t('agricultureDurablePerformanceTitle')}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <CloudRain className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {t('agricultureDurablePerformanceMetricResource')}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {t('agricultureDurablePerformanceResourceDesc')}
                </p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <Sprout className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {t('agricultureDurablePerformanceMetricAgronomy')}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {t('agricultureDurablePerformanceAgronomyDesc')}
                </p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <LineChart className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {t('agricultureDurablePerformanceMetricExecution')}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {t('agricultureDurablePerformanceExecutionDesc')}
                </p>
              </div>
            </div>

            <div className="p-6 bg-emerald-100 dark:bg-emerald-500/10 rounded-2xl border border-emerald-300 dark:border-emerald-400/20">
              <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                {t('agricultureDurableSustainabilityValue')}
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
              {t('agricultureDurableFinalCtaTitle')}
              <span className="block text-emerald-500 dark:text-emerald-400 mt-3">
                {t('agricultureDurableFinalCtaSubtitle')}
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
                {t('agricultureDurableQuote')}
              </blockquote>

              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">
                {t('agricultureDurableQuoteAuthor')}
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
              {t('agricultureDurableAudienceDesc')}
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AgricultureDurablePage;