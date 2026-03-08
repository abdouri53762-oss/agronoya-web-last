import React from 'react';
import { Building2, Factory, Leaf, TrendingUp, ArrowRight, Cpu, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const APPLICATIONS = [
  {
    icon: Building2,
    title: 'Pour les gouvernements',
    badge: 'Pilotage territorial',
    accent: 'from-blue-500/20 to-cyan-500/10',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    border: 'border-blue-400/20',
    points: [
      "Cartographier les terres cultivées à grande échelle avec plus de précision et à moindre coût.",
      "Suivre l’évolution des cultures, mieux encadrer les subventions et améliorer les politiques agricoles.",
      "Renforcer les stratégies de durabilité grâce à des données fiables sur les parcelles et leur usage."
    ]
  },
  {
    icon: Factory,
    title: 'Pour les entreprises',
    badge: 'Performance opérationnelle',
    accent: 'from-emerald-500/20 to-lime-500/10',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    border: 'border-emerald-400/20',
    points: [
      "Créer une base de données parcellaire fiable pour mieux suivre les cultures, les rotations et les indicateurs agronomiques.",
      "Améliorer la planification, l’analyse de rendement et le suivi des campagnes à partir de limites de champs précises.",
      "Réduire les coûts opérationnels et améliorer la rentabilité grâce à une meilleure qualité de décision."
    ]
  }
];

const TECHNOLOGY_FEATURES = [
  {
    icon: Cpu,
    title: 'IA & Deep Learning',
    description:
      'Des modèles avancés pour détecter automatiquement les terres cultivées et structurer les données à grande échelle.'
  },
  {
    icon: Map,
    title: 'Cartographie de précision',
    description:
      'Des limites de champs plus fiables pour améliorer les analyses, la planification et le pilotage agricole.'
  },
  {
    icon: TrendingUp,
    title: 'Décision orientée performance',
    description:
      'Des données plus propres pour mieux estimer, comparer, anticiper et rentabiliser les opérations.'
  }
];

const ApplicationsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-20 text-[rgb(var(--text-primary-rgb))] bg-[rgb(var(--bg-primary-rgb))] md:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute left-16 top-20 h-2 w-2 rounded-full bg-primary/30 animate-pulse" />
        <div className="absolute right-20 top-40 h-3 w-3 rounded-full bg-emerald-400/30 animate-pulse delay-300" />
        <div className="absolute bottom-20 left-1/4 h-2 w-2 rounded-full bg-cyan-400/30 animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-lg backdrop-blur-sm">
            <Leaf className="h-4 w-4" />
            Cas d’usage
          </div>

          <h2 className="mb-5 text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Une solution pensée pour les
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {' '}
              acteurs qui pilotent l’agriculture
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">
            AgroNoya aide les institutions et les entreprises agricoles à mieux
            cartographier, analyser et exploiter les données des parcelles pour
            améliorer la planification, la durabilité et la performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {APPLICATIONS.map((item) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-[30px] border ${item.border} bg-gradient-to-br ${item.accent} p-[1px] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="relative h-full rounded-[29px] bg-[rgb(var(--bg-secondary-rgb))]/90 p-8 backdrop-blur-xl md:p-10">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/5 blur-2xl transition-all duration-500 group-hover:scale-125" />

                <div className="mb-6 flex items-start justify-between gap-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 ${item.iconBg} backdrop-blur-sm`}
                  >
                    <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
                    {item.badge}
                  </div>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                  {item.title}
                </h3>

                <p className="mb-8 text-base leading-relaxed text-text-secondary md:text-lg">
                  Une approche plus précise, plus scalable et plus exploitable
                  pour transformer la délimitation des champs en levier de
                  décision.
                </p>

                <div className="space-y-5">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Leaf className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <p className="text-sm leading-7 text-text-secondary md:text-base">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 shadow-2xl md:p-10 lg:p-12">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  <Cpu className="h-4 w-4" />
                  Notre technologie
                </div>

                <h3 className="mb-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
                  Une technologie conçue pour
                  <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {' '}
                    détecter, délimiter et exploiter
                  </span>
                </h3>

                <p className="mx-auto max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">
                  AgroNoya s’appuie sur l’intelligence artificielle et les
                  réseaux neuronaux convolutionnels pour détecter automatiquement
                  les terres cultivées, tracer les limites des exploitations et
                  produire des données plus fiables pour l’analyse agricole à
                  grande échelle.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {TECHNOLOGY_FEATURES.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-white">
                      {feature.title}
                    </h4>
                    <p className="text-sm leading-7 text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <p className="mx-auto max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
                  Cette précision améliore la qualité de la classification des
                  cultures, du suivi des campagnes, de l’estimation des
                  rendements et de l’ensemble des décisions qui reposent sur une
                  cartographie fiable des parcelles.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary to-emerald-500 px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <span>Demander une démonstration</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="text-sm text-text-secondary">
              Découvrez comment AgroNoya peut s’intégrer à vos besoins métier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;