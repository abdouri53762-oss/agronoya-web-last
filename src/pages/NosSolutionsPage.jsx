import React from 'react';
import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Solutions from '../components/features/Solutions';
const NosSolutionsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-[#0b1f1a] text-white">
      <div className="relative overflow-hidden px-4 pb-16 pt-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-500/5 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#57D53B]/20 bg-[#57D53B]/10 px-4 py-2 text-sm font-semibold text-[#57D53B]">
            <Sparkles className="mr-2 h-4 w-4" />
            {t('agronoyaEcosystem')}
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#57D53B] to-emerald-400 bg-clip-text text-transparent">
              {t('nosSolutions')}
            </span>
          </h1>

          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl">
            {t('nosSolutionsIntro')}
          </p>
        </div>
      </div>

      <Solutions />
    </div>
  );
};

export default NosSolutionsPage;