import React, { useState } from 'react';
import {
  Sparkles,
  Droplets,
  Eye,
  Thermometer,
  Database,
  TrendingUp,
  Leaf,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PROBLEMATIQUES = [
  {
    id: 1,
    icon: Droplets,
    title: "Gestion inefficace de l’eau",
    short:
      "Le stress hydrique et l’absence de pilotage précis de l’irrigation fragilisent durablement la performance des exploitations.",
    content:
      "En Tunisie, la rareté de l’eau impose une gestion beaucoup plus fine des ressources. Pourtant, l’absence de capteurs de sol, de supervision à distance et de détection précoce des anomalies d’irrigation favorise le gaspillage, les pannes non détectées et les décisions d’arrosage peu adaptées aux besoins réels des cultures.",
    accent: 'from-cyan-500/20 to-blue-500/10',
    iconColor: 'text-cyan-400',
    border: 'border-cyan-400/20'
  },
  {
    id: 2,
    icon: Eye,
    title: 'Surveillance terrain limitée',
    short:
      "Le suivi continu des parcelles reste difficile, coûteux et souvent insuffisant pour agir au bon moment.",
    content:
      "Qu’il s’agisse de grandes surfaces ou d’exploitations dispersées, les moyens de surveillance restent souvent manuels, ponctuels et peu réactifs. Les anomalies localisées, les premiers signes de stress ou les défauts d’irrigation sont donc repérés tardivement, ce qui réduit l’efficacité des interventions et augmente les pertes potentielles.",
    accent: 'from-blue-500/20 to-indigo-500/10',
    iconColor: 'text-blue-400',
    border: 'border-blue-400/20'
  },
  {
    id: 3,
    icon: Thermometer,
    title: 'Pression climatique croissante',
    short:
      "Sécheresse, chaleur extrême et microclimats locaux rendent les décisions agricoles plus complexes et plus risquées.",
    content:
      "Les prévisions météorologiques générales restent souvent trop larges pour refléter les réalités locales. Dans un pays marqué par une forte diversité climatique, cette limite réduit la capacité des agriculteurs à anticiper correctement l’irrigation, les traitements, les récoltes et l’ensemble des décisions sensibles aux conditions du terrain.",
    accent: 'from-orange-500/20 to-red-500/10',
    iconColor: 'text-orange-400',
    border: 'border-orange-400/20'
  },
  {
    id: 4,
    icon: Database,
    title: 'Données dispersées et sous-exploitées',
    short:
      "Les données agricoles existent, mais elles restent fragmentées entre plusieurs outils, fichiers et observations isolées.",
    content:
      "Analyses de sol, météo, observations manuelles, tableaux Excel et applications diverses ne communiquent pas entre eux. Cette fragmentation empêche une vision globale de l’exploitation, limite les corrélations utiles entre les données et réduit fortement leur impact sur la qualité des décisions agronomiques et opérationnelles.",
    accent: 'from-violet-500/20 to-purple-500/10',
    iconColor: 'text-violet-400',
    border: 'border-violet-400/20'
  },
  {
    id: 5,
    icon: TrendingUp,
    title: 'Décisions encore peu pilotées par la donnée',
    short:
      "Fertilisation, irrigation, prévention des risques et interventions terrain reposent encore trop souvent sur l’intuition.",
    content:
      "Le manque de données continues, localisées et directement exploitables empêche de transformer l’information en recommandations simples et actionnables. Les exploitations peinent ainsi à prioriser les bonnes actions, à intervenir avec précision et à optimiser leurs ressources dans un contexte économique de plus en plus exigeant.",
    accent: 'from-emerald-500/20 to-green-500/10',
    iconColor: 'text-emerald-400',
    border: 'border-emerald-400/20'
  },
  {
    id: 6,
    icon: Leaf,
    title: 'Faible valorisation de la durabilité',
    short:
      "Les efforts agricoles durables restent peu reconnus, peu tracés et insuffisamment valorisés économiquement.",
    content:
      "Réduction des intrants, meilleure gestion de l’eau, pratiques agroécologiques ou contribution à la séquestration du carbone demeurent difficilement mesurables et peu rémunérées. À cela s’ajoutent des circuits de commercialisation souvent longs et peu transparents, qui limitent la marge des producteurs et freinent l’investissement durable.",
    accent: 'from-lime-500/20 to-emerald-500/10',
    iconColor: 'text-lime-400',
    border: 'border-lime-400/20'
  }
];

const ProblematiquesSection = () => {
  const [openCard, setOpenCard] = useState(1);
  const navigate = useNavigate();

  const toggleCard = (id) => {
    setOpenCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden bg-[rgb(var(--bg-primary-rgb))] py-20 text-[rgb(var(--text-primary-rgb))] md:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-16 top-16 h-72 w-72 rounded-full bg-gradient-to-br from-[#57D53B]/15 to-emerald-500/12 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/12 to-cyan-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-green-400/8 to-cyan-400/8 blur-3xl" />
        <div className="absolute left-12 top-24 h-2 w-2 animate-pulse rounded-full bg-primary/30" />
        <div className="absolute right-24 top-40 h-3 w-3 animate-pulse rounded-full bg-emerald-400/30 delay-300" />
        <div className="absolute bottom-24 left-1/3 h-2 w-2 animate-pulse rounded-full bg-cyan-400/30 delay-700" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
          <div className="mb-8 inline-flex items-center rounded-full border border-[#57D53B]/20 bg-gradient-to-r from-[#57D53B]/10 to-emerald-500/10 px-6 py-3 text-sm font-semibold text-[#57D53B] shadow-lg backdrop-blur-sm">
            <Sparkles className="mr-2 h-5 w-5" />
            Réalités du terrain tunisien
          </div>

          <h2 className="mb-6 text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-[#57D53B]">Les grands défis</span>
            <span> de l’agriculture</span>
            <br />
            <span>en </span>
            <span className="text-[#57D53B]">Tunisie</span>
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Pilier stratégique de l’économie nationale, l’agriculture tunisienne
            fait face à une pression croissante : rareté de l’eau, instabilité
            climatique, fragmentation des données et faible digitalisation des
            pratiques. Pour rester performantes et résilientes, les
            exploitations ont besoin d’outils plus intelligents pour mieux
            observer, mieux anticiper et mieux décider.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROBLEMATIQUES.map((item) => {
            const isOpen = openCard === item.id;

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-[30px] border ${item.border} bg-gradient-to-br ${item.accent} p-[1px] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="relative h-full rounded-[29px] bg-[rgb(var(--bg-secondary-rgb))]/90 p-7 backdrop-blur-xl">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/5 blur-2xl transition-all duration-500 group-hover:scale-125" />

                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 ${item.iconColor}`}
                    >
                      <item.icon className="h-7 w-7" />
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
                      {item.id.toString().padStart(2, '0')}
                    </div>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold leading-tight text-foreground">
                    {item.title}
                  </h3>

                  <p className="mb-5 text-base leading-7 text-text-secondary">
                    {item.short}
                  </p>

                  {isOpen && (
                    <div className="animate-fade-in">
                      <p className="mb-5 text-sm leading-7 text-text-secondary md:text-base">
                        {item.content}
                      </p>

                      <div className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <p className="text-sm leading-6 text-text-secondary">
                          Ce défi peut être mieux piloté avec une approche
                          fondée sur la donnée, l’observation terrain et
                          l’automatisation intelligente.
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => toggleCard(item.id)}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#57D53B] to-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <span>{isOpen ? 'Voir moins' : 'Voir plus'}</span>
                    <ArrowRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center md:mt-24">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[34px] border border-[#57D53B]/20 bg-gradient-to-br from-[#57D53B]/8 via-emerald-500/8 to-cyan-500/6 p-10 shadow-2xl backdrop-blur-sm md:p-14">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#57D53B]/20 bg-white/5 px-4 py-2 text-sm font-semibold text-[#57D53B]">
              <Sparkles className="mr-2 h-4 w-4" />
              Une réponse intégrée
            </div>

            <h3 className="mb-5 text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              AgroNoya transforme ces défis en
              <span className="text-[#57D53B]"> opportunités d’action</span>
            </h3>

            <p className="mx-auto mb-8 max-w-4xl text-base leading-relaxed text-text-secondary md:text-lg lg:text-xl">
              Notre plateforme combine intelligence artificielle, données
              terrain, imagerie satellite et outils de pilotage pour aider les
              agriculteurs et les acteurs du secteur à détecter plus tôt,
              intervenir plus juste et prendre des décisions plus rentables,
              plus durables et mieux contextualisées.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate('/solutions')}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#57D53B] to-emerald-600 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Découvrir nos solutions</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="rounded-2xl border border-[#57D53B]/20 bg-white/5 px-8 py-4 text-base font-bold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-[#57D53B]/40 hover:text-[#57D53B] hover:shadow-lg"
              >
                Demander une démo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblematiquesSection;