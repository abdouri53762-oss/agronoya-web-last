import React, { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const [activeChallenge, setActiveChallenge] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    const element = document.getElementById('about-agronoya');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChallenge((prev) => (prev + 1) % challenges.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const challenges = [
    {
      icon: TrendingUp,
      title: 'Baisse des rendements',
      description:
        "Les exploitations agricoles doivent faire face à une baisse progressive des performances sous l'effet des variations climatiques et de la pression sur les ressources.",
      accent: 'rgb(239 68 68)'
    },
    {
      icon: Droplets,
      title: 'Stress hydrique',
      description:
        "L'eau devient une ressource stratégique. Une irrigation mal pilotée impacte directement la productivité et la durabilité des cultures.",
      accent: 'rgb(59 130 246)'
    },
    {
      icon: Bug,
      title: 'Ravageurs et maladies',
      description:
        'Les pertes causées par les menaces biologiques restent élevées et demandent une détection plus rapide pour limiter les dommages.',
      accent: 'rgb(249 115 22)'
    },
    {
      icon: Thermometer,
      title: 'Pression climatique',
      description:
        "Les températures extrêmes, les sécheresses et l'irrégularité météo rendent les décisions agricoles plus complexes et plus risquées.",
      accent: 'rgb(168 85 247)'
    },
    {
      icon: DollarSign,
      title: 'Coûts croissants',
      description:
        "L'augmentation du coût des intrants et des opérations impose une gestion plus précise pour protéger la rentabilité.",
      accent: 'rgb(234 179 8)'
    }
  ];

  const solutions = [
    {
      icon: Target,
      title: 'Précision',
      description:
        "Des analyses ciblées pour intervenir au bon moment, au bon endroit et avec les bonnes priorités."
    },
    {
      icon: Zap,
      title: 'Efficacité',
      description:
        "Une meilleure utilisation de l'eau, des intrants et du temps pour améliorer les performances globales."
    },
    {
      icon: Shield,
      title: 'Prévention',
      description:
        'Une détection anticipée des signaux faibles pour agir avant que les problèmes ne deviennent critiques.'
    },
    {
      icon: BarChart3,
      title: 'Pilotage',
      description:
        'Des données exploitables pour prendre des décisions plus rapides, plus fiables et mieux contextualisées.'
    }
  ];

  const stats = [
    {
      value: '2M+',
      label: 'Hectares surveillés',
      description:
        'Suivi intelligent des parcelles et des cultures à grande échelle.',
      icon: Globe
    },
    {
      value: '35%',
      label: 'Gain de rendement',
      description:
        'Une meilleure lecture des données pour améliorer les performances agricoles.',
      icon: TrendingUp
    },
    {
      value: '40%',
      label: 'Économie d’eau',
      description:
        "Une irrigation mieux pilotée pour optimiser l'usage des ressources.",
      icon: Droplets
    },
    {
      value: '60%',
      label: 'Réduction des pertes',
      description:
        'Détection précoce des risques pour limiter les impacts sur la production.',
      icon: Shield
    }
  ];

  return (
    <section
      id="about-agronoya"
      className={`relative overflow-hidden py-20 md:py-24 lg:py-28 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        background:
          'linear-gradient(135deg, rgb(var(--bg-primary-rgb)) 0%, rgb(var(--bg-secondary-rgb)) 52%, rgb(var(--bg-primary-rgb)) 100%)'
      }}
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 left-1/4 h-72 w-72 rounded-full blur-3xl"
          style={{ background: 'rgb(var(--primary-rgb) / 0.10)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full blur-3xl"
          style={{ background: 'rgb(34 197 94 / 0.08)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: 'rgb(var(--primary-rgb) / 0.04)' }}
        />
        <div className="absolute top-24 left-10 h-2 w-2 rounded-full bg-primary/30 animate-pulse" />
        <div className="absolute top-44 right-24 h-3 w-3 rounded-full bg-green-400/30 animate-pulse delay-300" />
        <div className="absolute bottom-28 left-16 h-2 w-2 rounded-full bg-blue-400/30 animate-pulse delay-700" />
        <div className="absolute bottom-16 right-28 h-3 w-3 rounded-full bg-purple-400/30 animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-5xl text-center md:mb-20">
          <div
            className="inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm"
            style={{
              background:
                'linear-gradient(135deg, rgb(var(--primary-rgb) / 0.10), rgb(var(--primary-rgb) / 0.05))',
              borderColor: 'rgb(var(--primary-rgb) / 0.18)',
              color: 'rgb(var(--primary-rgb))'
            }}
          >
            <Lightbulb className="h-4 w-4" />
            <span>Notre mission</span>
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          </div>

          <h2 className="mb-6 text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-foreground via-text-secondary to-foreground bg-clip-text text-transparent">
              C&apos;est quoi
            </span>
            <br />
            <span className="relative inline-block bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
              AgroNoya
              <span className="absolute -right-4 top-1 hidden h-3 w-3 rounded-full bg-primary opacity-80 blur-[1px] lg:block" />
            </span>
            <span className="block mt-3 text-2xl font-medium text-text-secondary lg:text-4xl">
              pour l’agriculture de demain ?
            </span>
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-text-secondary md:text-xl lg:text-2xl">
            AgroNoya accompagne les acteurs agricoles avec une approche plus
            <span className="text-primary font-semibold"> intelligente</span>,
            plus <span className="text-primary font-semibold"> durable</span> et
            mieux <span className="text-primary font-semibold"> connectée</span>,
            grâce à l’intelligence artificielle, à l’imagerie satellite et à un
            pilotage orienté terrain.
          </p>
        </div>

        {/* Challenges */}
        <div className="mb-20 md:mb-24">
          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-5"
              style={{
                background: 'rgb(var(--primary-rgb) / 0.10)',
                color: 'rgb(var(--primary-rgb))',
                border: '1px solid rgb(var(--primary-rgb) / 0.18)'
              }}
            >
              <Sprout className="w-4 h-4" />
              Les enjeux du terrain
            </div>

            <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Les défis d’une agriculture
              <span className="text-primary"> plus complexe</span>
            </h3>

            <p className="text-base leading-relaxed text-text-secondary md:text-lg lg:text-xl">
              Les exploitations agricoles évoluent dans un contexte de pression
              climatique, de hausse des coûts et de besoin croissant en pilotage
              précis.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {challenges.map((challenge, index) => {
              const isActive = activeChallenge === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveChallenge(index)}
                  className={`group relative cursor-pointer overflow-hidden rounded-[28px] border p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 ${
                    isActive ? 'shadow-2xl scale-[1.02]' : 'hover:shadow-xl'
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
                        background: `${challenge.accent.replace('rgb(', 'rgb(').replace(')', ' / 0.14)')}`,
                        border: `1px solid ${challenge.accent.replace('rgb(', 'rgb(').replace(')', ' / 0.24)')}`
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Our approach */}
        <div className="mb-20 md:mb-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-5"
                style={{
                  background: 'rgb(var(--primary-rgb) / 0.10)',
                  color: 'rgb(var(--primary-rgb))',
                  border: '1px solid rgb(var(--primary-rgb) / 0.18)'
                }}
              >
                <Zap className="w-4 h-4" />
                Notre approche
              </div>

              <h3 className="mb-5 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Une technologie pensée pour
                <span className="text-primary"> agir concrètement</span>
              </h3>

              <p className="mb-8 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg lg:text-xl">
                AgroNoya combine l’intelligence artificielle, l’imagerie
                satellite et les données terrain pour aider les exploitations à
                mieux observer, mieux anticiper et mieux décider.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
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
                  className="inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgb(var(--primary-rgb)), rgb(var(--primary-hover-rgb)))'
                  }}
                >
                  <span>Découvrir nos solutions</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  className="rounded-xl border px-7 py-4 font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                  style={{
                    borderColor: 'rgb(var(--primary-rgb) / 0.28)',
                    background: 'rgb(var(--primary-rgb) / 0.03)'
                  }}
                >
                  Demander une démo
                </button>
              </div>
            </div>

            <div className="relative">
              <div
                className="relative overflow-hidden rounded-[30px] border p-5 md:p-6 shadow-2xl"
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
                    <h4 className="text-2xl font-bold text-foreground mb-2">
                      Écosystème AgroNoya
                    </h4>
                    <p className="text-sm md:text-base text-text-secondary">
                      Une plateforme intégrée pour piloter une agriculture plus
                      intelligente.
                    </p>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border bg-background/60">
                    <img
                      src="/agronoyaeco-sys.gif"
                      alt="Écosystème AgroNoya - Agriculture intelligente"
                      className="w-full h-auto rounded-2xl"
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

        {/* Impact */}
        <div className="relative mb-20 md:mb-24">
          <div
            className="relative overflow-hidden rounded-[32px] border px-6 py-12 md:px-10 md:py-14 lg:px-14 lg:py-16 shadow-2xl"
            style={{
              background:
                'linear-gradient(135deg, rgb(var(--bg-secondary-rgb)), rgb(var(--bg-tertiary-rgb)))',
              borderColor: 'rgb(var(--border-light-rgb))'
            }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
                style={{
                  background: 'rgb(var(--primary-rgb) / 0.10)'
                }}
              />
              <div
                className="absolute bottom-0 right-0 h-40 w-40 rounded-full blur-3xl"
                style={{
                  background: 'rgb(var(--primary-rgb) / 0.08)'
                }}
              />
              <div
                className="absolute left-0 top-0 h-px w-full"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgb(var(--primary-rgb) / 0.35), transparent)'
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-5"
                  style={{
                    background: 'rgb(var(--primary-rgb) / 0.10)',
                    color: 'rgb(var(--primary-rgb))',
                    border: '1px solid rgb(var(--primary-rgb) / 0.18)'
                  }}
                >
                  <BarChart3 className="w-4 h-4" />
                  Résultats concrets
                </div>

                <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                  Notre <span className="text-primary">Impact</span>
                </h3>

                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  Des indicateurs clairs qui montrent comment AgroNoya aide à
                  rendre l’agriculture plus performante, plus durable et mieux
                  pilotée.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative rounded-3xl border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      background:
                        'linear-gradient(180deg, rgb(var(--bg-primary-rgb) / 0.72), rgb(var(--bg-secondary-rgb) / 0.92))',
                      borderColor: 'rgb(var(--border-light-rgb) / 0.9)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                        style={{
                          background:
                            'linear-gradient(135deg, rgb(var(--primary-rgb) / 0.16), rgb(var(--primary-rgb) / 0.07))',
                          border: '1px solid rgb(var(--primary-rgb) / 0.18)'
                        }}
                      >
                        <stat.icon className="h-7 w-7 text-primary" />
                      </div>

                      <div
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: 'rgb(var(--primary-rgb))' }}
                      />
                    </div>

                    <div className="mb-3 text-4xl md:text-5xl font-black tracking-tight text-foreground">
                      <span className="text-primary">{stat.value}</span>
                    </div>

                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {stat.label}
                    </h4>

                    <p className="text-sm leading-relaxed text-text-secondary">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div
            className="relative overflow-hidden rounded-[32px] border p-10 md:p-14 shadow-2xl"
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
                className="inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold mb-6 shadow-lg"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(var(--primary-rgb) / 0.10), rgb(var(--primary-rgb) / 0.05))',
                  color: 'rgb(var(--primary-rgb))',
                  border: '1px solid rgb(var(--primary-rgb) / 0.18)'
                }}
              >
                <Users className="w-4 h-4" />
                <span>Rejoignez la transformation</span>
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              </div>

              <h3 className="mb-5 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Prêt à <span className="text-primary">transformer</span> votre
                agriculture ?
              </h3>

              <p className="mb-10 text-base leading-relaxed text-text-secondary md:text-lg lg:text-xl">
                Découvrez comment AgroNoya peut accompagner votre exploitation
                avec des solutions d’intelligence artificielle, de surveillance
                satellite et de pilotage agricole orienté données.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  className="inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgb(var(--primary-rgb)), rgb(var(--primary-hover-rgb)))'
                  }}
                >
                  <span>Commencer maintenant</span>
                  <ArrowRight className="h-5 w-5" />
                </button>

                <button
                  className="rounded-xl border px-8 py-4 text-base font-bold text-foreground transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:shadow-lg"
                  style={{
                    borderColor: 'rgb(var(--border-default-rgb))',
                    background: 'rgb(var(--bg-primary-rgb) / 0.35)'
                  }}
                >
                  En savoir plus
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