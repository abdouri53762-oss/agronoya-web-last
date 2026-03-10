import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Sprout,
  TrendingUp,
  Droplets,
  Thermometer,
  Bug,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Users,
  Globe,
  Lightbulb,
  Shield,
  BarChart3,
  Leaf
} from 'lucide-react';

const AboutAgroNoya = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const CHALLENGES = useMemo(() => [
    {
      icon: TrendingUp,
      title: t('challengeRendements'),
      description: t('challengeRendementsDesc'),
      accent: 'rgb(239 68 68)'
    },
    {
      icon: Droplets,
      title: t('challengeHydrique'),
      description: t('challengeHydriqueDesc'),
      accent: 'rgb(59 130 246)'
    },
    {
      icon: Bug,
      title: t('challengeRavageurs'),
      description: t('challengeRavageursDesc'),
      accent: 'rgb(249 115 22)'
    },
    {
      icon: Thermometer,
      title: t('challengeClimatique'),
      description: t('challengeClimatiqueDesc'),
      accent: 'rgb(168 85 247)'
    },
    {
      icon: DollarSign,
      title: t('challengeCouts'),
      description: t('challengeCoutsDesc'),
      accent: 'rgb(234 179 8)'
    }
  ], [t]);

  const SOLUTIONS = useMemo(() => [
    {
      icon: Target,
      title: t('solutionPrecision'),
      description: t('solutionPrecisionDesc')
    },
    {
      icon: Zap,
      title: t('solutionEfficacite'),
      description: t('solutionEfficaciteDesc')
    },
    {
      icon: Shield,
      title: t('solutionPrevention'),
      description: t('solutionPreventionDesc')
    },
    {
      icon: BarChart3,
      title: t('solutionPilotage'),
      description: t('solutionPilotageDesc')
    }
  ], [t]);

  const STATS = useMemo(() => [
    {
      value: '2M+',
      label: t('statsHectares'),
      description: t('statsHectaresDesc'),
      icon: Globe
    },
    {
      value: t('statsGainValue'),
      label: t('statsGainLabel'),
      description: t('statsGainDesc'),
      icon: TrendingUp
    },
    {
      value: t('statsEauValue'),
      label: t('statsEauLabel'),
      description: t('statsEauDesc'),
      icon: Droplets
    },
    {
      value: t('statsPertesValue'),
      label: t('statsPertesLabel'),
      description: t('statsPertesDesc'),
      icon: Shield
    }
  ], [t]);

  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const currentChallenge = useMemo(
    () => CHALLENGES[activeChallenge],
    [activeChallenge]
  );

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.12 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isHovered) return undefined;

    const interval = setInterval(() => {
      setActiveChallenge((prev) => (prev + 1) % CHALLENGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, isHovered]);

  const goToSolutions = () => navigate('/solutions');
  const goToContact = () => navigate('/contact');

  return (
    <section
      id="about-agronoya"
      ref={sectionRef}
      className={`relative overflow-hidden py-20 md:py-24 lg:py-28 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{
        background:
          'linear-gradient(135deg, rgb(var(--bg-primary-rgb)) 0%, rgb(var(--bg-secondary-rgb)) 52%, rgb(var(--bg-primary-rgb)) 100%)'
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-20 left-1/4 h-72 w-72 rounded-full blur-3xl"
          style={{ background: 'rgb(var(--primary-rgb) / 0.10)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full blur-3xl"
          style={{ background: 'rgb(34 197 94 / 0.08)' }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: 'rgb(var(--primary-rgb) / 0.04)' }}
        />
        <div className="absolute left-10 top-24 h-2 w-2 animate-pulse rounded-full bg-primary/30" />
        <div className="absolute right-24 top-44 h-3 w-3 animate-pulse rounded-full bg-green-400/30 delay-300" />
        <div className="absolute bottom-28 left-16 h-2 w-2 animate-pulse rounded-full bg-blue-400/30 delay-700" />
        <div className="absolute bottom-16 right-28 h-3 w-3 animate-pulse rounded-full bg-purple-400/30 delay-500" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-16 max-w-5xl text-center md:mb-20">
          <div
            className="mb-6 inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-semibold shadow-lg backdrop-blur-sm"
            style={{
              background:
                'linear-gradient(135deg, rgb(var(--primary-rgb) / 0.10), rgb(var(--primary-rgb) / 0.05))',
              borderColor: 'rgb(var(--primary-rgb) / 0.18)',
              color: 'rgb(var(--primary-rgb))'
            }}
          >
            <Lightbulb className="h-4 w-4" />
            <span>{t('notreMission')}</span>
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          </div>

          <h2 className="mb-6 text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-foreground via-text-secondary to-foreground bg-clip-text text-transparent">
              {t('agronoyaPlatform')}
            </span>
            <br />
            <span className="relative inline-block bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
              {t('platformHelps')}
              <span className="absolute -right-4 top-1 hidden h-3 w-3 rounded-full bg-primary opacity-80 blur-[1px] lg:block" />
            </span>
            <span className="mt-3 block text-2xl font-medium text-text-secondary lg:text-4xl">
              {t('farmsProduceBetter')}
            </span>
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-text-secondary md:text-xl lg:text-2xl">
            {t('agronoyaHelps')}
          </p>
        </div>

        <div className="mb-20 md:mb-24">
          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                background: 'rgb(var(--primary-rgb) / 0.10)',
                color: 'rgb(var(--primary-rgb))',
                border: '1px solid rgb(var(--primary-rgb) / 0.18)'
              }}
            >
              <Sprout className="h-4 w-4" />
              {t('enjeuxTerrain')}
            </div>

            <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {t('defisAgriculture')}
              <span className="text-primary"> {t('plusExigeante')}</span>
            </h3>

            <p className="text-base leading-relaxed text-text-secondary md:text-lg lg:text-xl">
              {t('pressionClimatique')}
            </p>
          </div>

          <div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {CHALLENGES.map((challenge, index) => {
              const isActive = activeChallenge === index;

              return (
                <button
                  key={challenge.title}
                  type="button"
                  onClick={() => setActiveChallenge(index)}
                  className={`group relative overflow-hidden rounded-[28px] border p-6 text-left transition-all duration-500 hover:-translate-y-1 md:p-7 ${
                    isActive ? 'scale-[1.02] shadow-2xl' : 'hover:shadow-xl'
                  }`}
                  style={{
                    background: isActive
                      ? 'linear-gradient(180deg, rgb(var(--bg-primary-rgb) / 0.95), rgb(var(--bg-secondary-rgb) / 0.98))'
                      : 'linear-gradient(180deg, rgb(var(--bg-secondary-rgb) / 0.8), rgb(var(--bg-tertiary-rgb) / 0.92))',
                    borderColor: isActive
                      ? 'rgb(var(--primary-rgb) / 0.28)'
                      : 'rgb(var(--border-light-rgb) / 0.9)',
                    boxShadow: isActive
                      ? '0 24px 60px -20px rgb(var(--primary-rgb) / 0.22)'
                      : undefined
                  }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: isActive
                        ? 'linear-gradient(90deg, transparent, rgb(var(--primary-rgb) / 0.65), transparent)'
                        : 'linear-gradient(90deg, transparent, rgb(var(--primary-rgb) / 0.15), transparent)'
                    }}
                  />

                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: challenge.accent.replace(
                          ')',
                          ' / 0.14)'
                        ),
                        border: `1px solid ${challenge.accent.replace(
                          ')',
                          ' / 0.24)'
                        )}`
                      }}
                    >
                      <challenge.icon
                        className="h-7 w-7"
                        style={{ color: challenge.accent }}
                      />
                    </div>

                    {isActive && (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary shadow-lg">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>

                  <h4 className="mb-3 text-xl font-bold text-foreground">
                    {challenge.title}
                  </h4>

                  <p className="text-sm leading-7 text-text-secondary md:text-base">
                    {challenge.description}
                  </p>

                  <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                      style={{
                        background:
                          'linear-gradient(90deg, rgb(var(--primary-rgb)), rgb(var(--primary-hover-rgb)))'
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-sm text-text-secondary md:text-base">
              {t('defiMisEnAvant')}
              <span className="ml-2 font-semibold text-foreground">
                {currentChallenge.title}
              </span>
            </p>
          </div>
        </div>

        <div className="mb-20 md:mb-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div
                className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  background: 'rgb(var(--primary-rgb) / 0.10)',
                  color: 'rgb(var(--primary-rgb))',
                  border: '1px solid rgb(var(--primary-rgb) / 0.18)'
                }}
              >
                <Zap className="h-4 w-4" />
                {t('notreApproche')}
              </div>

              <h3 className="mb-5 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {t('plateformeConcue')}
                <span className="text-primary">
                  {' '}
                  {t('transformerObservation')}
                </span>
              </h3>

              <p className="mb-8 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg lg:text-xl">
                {t('agronoyaCentralise')}
              </p>

              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {SOLUTIONS.map((solution) => (
                  <div
                    key={solution.title}
                    className="group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      background:
                        'linear-gradient(135deg, rgb(var(--bg-secondary-rgb)), rgb(var(--bg-tertiary-rgb)))',
                      borderColor: 'rgb(var(--border-light-rgb) / 0.9)'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                        style={{
                          background:
                            'linear-gradient(135deg, rgb(var(--primary-rgb) / 0.16), rgb(var(--primary-rgb) / 0.07))',
                          border: '1px solid rgb(var(--primary-rgb) / 0.18)'
                        }}
                      >
                        <solution.icon className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <h4 className="mb-2 text-lg font-semibold text-foreground">
                          {solution.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-text-secondary">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={goToSolutions}
                  className="group inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgb(var(--primary-rgb)), rgb(var(--primary-hover-rgb)))'
                  }}
                >
                  <span>{t('voirSolutions')}</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={goToContact}
                  className="rounded-xl border px-7 py-4 font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                  style={{
                    borderColor: 'rgb(var(--primary-rgb) / 0.28)',
                    background: 'rgb(var(--primary-rgb) / 0.03)'
                  }}
                >
                  {t('demanderDemo')}
                </button>
              </div>
            </div>

            <div className="relative">
              <div
                className="relative overflow-hidden rounded-[30px] border p-5 shadow-2xl md:p-6"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(var(--bg-secondary-rgb) / 0.95), rgb(var(--bg-tertiary-rgb) / 0.95))',
                  borderColor: 'rgb(var(--border-light-rgb) / 0.9)'
                }}
              >
                <div
                  className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl"
                  style={{
                    background: 'rgb(var(--primary-rgb) / 0.12)'
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-5 text-center">
                    <h4 className="mb-2 text-2xl font-bold text-foreground">
                      {t('plateformeUnifiee')}
                    </h4>
                    <p className="text-sm text-text-secondary md:text-base">
                      {t('supervisionAnalyse')}
                    </p>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border bg-background/60">
                    <img
                      src="/agronoyaeco-sys.gif"
                      alt={t('plateformeAgroNoyaSupervision')}
                      className="h-auto w-full rounded-2xl"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to top, rgb(var(--primary-rgb) / 0.14) 0%, transparent 45%, transparent 100%)'
                      }}
                    />
                  </div>

                  <div className="pointer-events-none absolute -left-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div className="pointer-events-none absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg">
                    <Sprout className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="relative mb-20 md:mb-24">
  <div
    className="relative overflow-hidden rounded-[36px] border px-6 py-12 shadow-2xl md:px-10 md:py-14 lg:px-14 lg:py-16"
    style={{
      background:
        'linear-gradient(135deg, rgb(var(--bg-secondary-rgb)) 0%, rgb(var(--bg-tertiary-rgb)) 55%, rgb(var(--bg-secondary-rgb)) 100%)',
      borderColor: 'rgb(var(--border-light-rgb) / 0.9)'
    }}
  >
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: 'rgb(var(--primary-rgb) / 0.14)'
        }}
      />
      <div
        className="absolute bottom-0 left-0 h-44 w-44 rounded-full blur-3xl"
        style={{
          background: 'rgb(34 197 94 / 0.10)'
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-44 w-44 rounded-full blur-3xl"
        style={{
          background: 'rgb(59 130 246 / 0.10)'
        }}
      />
      <div
        className="absolute left-0 top-0 h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgb(var(--primary-rgb) / 0.45), transparent)'
        }}
      />
      <div className="absolute left-12 top-12 h-2 w-2 rounded-full bg-primary/30 animate-pulse" />
      <div className="absolute right-20 top-20 h-3 w-3 rounded-full bg-green-400/30 animate-pulse delay-300" />
      <div className="absolute bottom-16 left-1/4 h-2 w-2 rounded-full bg-blue-400/30 animate-pulse delay-700" />
    </div>

    <div className="relative z-10">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <div
          className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur-sm"
          style={{
            background:
              'linear-gradient(135deg, rgb(var(--primary-rgb) / 0.12), rgb(34 197 94 / 0.08))',
            color: 'rgb(var(--primary-rgb))',
            border: '1px solid rgb(var(--primary-rgb) / 0.18)'
          }}
        >
          <BarChart3 className="h-4 w-4" />
          {t('resultatsImpact')}
        </div>

        <h3 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
          {t('indicateursParlent')}
          <span className="text-primary"> {t('terrainRendement')}</span>
        </h3>

        <p className="text-base leading-relaxed text-text-secondary md:text-lg">
          AgroNoya transforme les données agricoles en décisions plus précises,
          plus rentables et plus durables pour les exploitations.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-[28px] border p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:p-7"
            style={{
              background:
                'linear-gradient(180deg, rgb(var(--bg-primary-rgb) / 0.82), rgb(var(--bg-secondary-rgb) / 0.96))',
              borderColor: 'rgb(var(--border-light-rgb) / 0.85)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 20px 50px -30px rgb(0 0 0 / 0.45)'
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background:
                  index === 0
                    ? 'linear-gradient(90deg, rgb(34 197 94), rgb(16 185 129))'
                    : index === 1
                    ? 'linear-gradient(90deg, rgb(59 130 246), rgb(99 102 241))'
                    : index === 2
                    ? 'linear-gradient(90deg, rgb(14 165 233), rgb(34 197 94))'
                    : 'linear-gradient(90deg, rgb(168 85 247), rgb(59 130 246))'
              }}
            />

            <div
              className="absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition-all duration-500 group-hover:scale-125"
              style={{
                background:
                  index === 0
                    ? 'rgb(34 197 94 / 0.10)'
                    : index === 1
                    ? 'rgb(59 130 246 / 0.10)'
                    : index === 2
                    ? 'rgb(6 182 212 / 0.10)'
                    : 'rgb(168 85 247 / 0.10)'
              }}
            />

            <div className="relative z-10">
              <div className="mb-5 flex items-center justify-between">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110"
                  style={{
                    background:
                      'linear-gradient(135deg, rgb(var(--primary-rgb) / 0.16), rgb(34 197 94 / 0.08))',
                    borderColor: 'rgb(var(--primary-rgb) / 0.18)'
                  }}
                >
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>

                <div
                  className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{
                    background: 'rgb(var(--primary-rgb) / 0.10)',
                    color: 'rgb(var(--primary-rgb))',
                    border: '1px solid rgb(var(--primary-rgb) / 0.16)'
                  }}
                >
                  Impact
                </div>
              </div>

              <div className="mb-3">
                <div className="text-4xl font-black leading-none tracking-tight text-foreground md:text-5xl">
                  <span className="bg-gradient-to-r from-primary via-green-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
              </div>

              <h4 className="mb-2 text-lg font-bold text-foreground">
                {stat.label}
              </h4>

              <p className="text-sm leading-7 text-text-secondary">
                {stat.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>Analyse pilotée par la donnée</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-text-secondary/80 md:text-sm">
          Les chiffres affichés représentent des résultats observés ou des gains
          potentiels selon les contextes d’exploitation.
        </p>
      </div>
    </div>
  </div>
</div>
        <div className="text-center">
          <div
            className="relative overflow-hidden rounded-[32px] border p-10 shadow-2xl md:p-14"
            style={{
              background:
                'linear-gradient(135deg, rgb(var(--bg-secondary-rgb)), rgb(var(--bg-tertiary-rgb)))',
              borderColor: 'rgb(var(--border-light-rgb))'
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgb(var(--primary-rgb) / 0.05) 0%, transparent 50%, rgb(var(--primary-rgb) / 0.05) 100%)'
              }}
            />

            <div className="relative z-10 mx-auto max-w-4xl">
              <div
                className="mb-6 inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(var(--primary-rgb) / 0.10), rgb(var(--primary-rgb) / 0.05))',
                  color: 'rgb(var(--primary-rgb))',
                  border: '1px solid rgb(var(--primary-rgb) / 0.18)'
                }}
              >
                <Users className="h-4 w-4" />
                <span>Rejoignez la transformation</span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              </div>

              <h3 className="mb-5 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Voyez comment <span className="text-primary">AgroNoya</span>{' '}
                peut améliorer vos décisions dès cette saison
              </h3>

              <p className="mb-10 text-base leading-relaxed text-text-secondary md:text-lg lg:text-xl">
                Réservez une démonstration et découvrez comment notre plateforme
                peut vous aider à mieux surveiller, mieux anticiper et mieux
                rentabiliser vos opérations agricoles.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={goToContact}
                  className="group inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgb(var(--primary-rgb)), rgb(var(--primary-hover-rgb)))'
                  }}
                >
                  <span>Demander une démo</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={goToSolutions}
                  className="rounded-xl border px-8 py-4 text-base font-bold text-foreground transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:shadow-lg"
                  style={{
                    borderColor: 'rgb(var(--border-default-rgb))',
                    background: 'rgb(var(--bg-primary-rgb) / 0.35)'
                  }}
                >
                  Voir les solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgroNoya;