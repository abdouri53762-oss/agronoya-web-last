import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, Sparkles, Database, Eye, Satellite, Droplets, Cloud, Stethoscope, BarChart3, Server, Leaf, ShoppingCart, AlertTriangle, Wrench, Award } from 'lucide-react';

// Composant pour les vidéos placeholder avec design moderne
const VideoPlaceholder = ({ index, isLeft }) => {
  // Couleurs de badges uniques pour chaque problématique
  const badgeColors = [
    'from-red-500 to-pink-600',      // 1 - Données
    'from-blue-500 to-indigo-600',   // 2 - Surveillance  
    'from-purple-500 to-violet-600', // 3 - Satellite
    'from-cyan-500 to-blue-600',     // 4 - Eau
    'from-orange-500 to-red-600',    // 5 - Météo
    'from-green-500 to-emerald-600', // 6 - Diagnostic
    'from-violet-500 to-purple-600', // 7 - Données multiples
    'from-slate-500 to-gray-600',    // 8 - Plateforme
    'from-lime-500 to-green-600',    // 9 - Valorisation
    'from-amber-500 to-orange-600',  // 10 - Commerce
    'from-red-600 to-rose-600',      // 11 - Alerte
    'from-teal-500 to-cyan-600',     // 12 - Irrigation
    'from-emerald-500 to-green-600'  // 13 - Reconnaissance
  ];

  const badgeIcons = [
    Database, Eye, Satellite, Droplets, Cloud, Stethoscope, BarChart3, Server, Leaf, ShoppingCart, AlertTriangle, Wrench, Award
  ];

  const BadgeIcon = badgeIcons[index - 1] || Database;

  return (
    <div className="relative group">
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        {/* Badge coloré moderne */}
        <div className={`absolute top-4 ${isLeft ? 'right-4' : 'left-4'} z-10`}>
          <div className={`inline-flex items-center px-3 py-2 rounded-xl bg-gradient-to-r ${badgeColors[index - 1]} text-white text-sm font-semibold shadow-lg`}>
            <BadgeIcon className="w-4 h-4 mr-1" />
            {index}
          </div>
        </div>

        {/* Contenu vidéo */}
        <div className="aspect-video flex items-center justify-center p-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-[rgb(var(--overlay-rgb)/0.20)] dark:bg-gray-700/50 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-gray-600 dark:text-gray-300 ml-1" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">Vidéo explicative</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">Problématique {index}</p>
          </div>
        </div>

        {/* Effet de brillance */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(var(--overlay-rgb)/0.10)] to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

const ProblematiquesSection = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Données des problématiques avec badges et catégories
  const problematiques = [
    {
      index: 1,
      badge: "Données Sol",
      category: "Analyse",
      titre: "Manque de données locales et continues… et rareté de l'analyse quotidienne des sols",
      introduction: "En Tunisie, la superficie agricole utile dépasse 10,45 millions d'hectares, mais sa répartition met en évidence la fragilité du système : Seulement 458 000 hectares sont irrigués, soit moins de 5 % de la surface totale.",
      contenu: "Cette situation révèle un défi majeur : comment optimiser la productivité sur des terres souvent marginales, avec des ressources en eau limitées ? La réponse réside dans une connaissance précise et continue des sols. Pourtant, en Tunisie, l'analyse des sols reste une pratique occasionnelle, souvent réalisée une fois par an, voire moins. Les agriculteurs manquent de données locales et continues sur la composition chimique, la structure physique et l'activité biologique de leurs sols. Cette lacune les prive d'informations essentielles pour adapter leurs pratiques : choix des cultures, dosage des engrais, gestion de l'irrigation, travail du sol. Sans ces données, les décisions se basent sur l'expérience et l'intuition, avec des risques de sous-fertilisation, de sur-fertilisation, de gaspillage d'intrants et de dégradation des sols à long terme."
    },
    {
      index: 2,
      badge: "Surveillance",
      category: "Monitoring",
      titre: "Difficulté de surveillance des grandes parcelles en temps réel",
      introduction: "Le secteur agricole tunisien est confronté à un défi structurel majeur : assurer une surveillance continue et efficace des grandes superficies cultivées. Sur plus de 516 000 exploitations agricoles, une proportion significative — plus de 20 % — couvre des superficies dépassant les 20 hectares.",
      contenu: "Ces grandes exploitations, bien qu'elles représentent une minorité en nombre, concentrent une part importante de la production agricole nationale. Surveiller efficacement de telles étendues nécessite des moyens humains et techniques considérables. Les méthodes traditionnelles de surveillance — inspection visuelle à pied ou en véhicule — deviennent rapidement insuffisantes et coûteuses. Un agriculteur ne peut physiquement parcourir l'intégralité de ses parcelles chaque jour pour détecter les premiers signes de stress hydrique, d'attaques parasitaires, de maladies ou de carences nutritionnelles. Cette limitation temporelle et physique entraîne des retards dans la détection des problèmes, réduisant l'efficacité des interventions et augmentant les pertes de rendement."
    },
    {
      index: 3,
      badge: "Satellite",
      category: "Imagerie",
      titre: "Limites des images satellitaires pour la surveillance agricole",
      introduction: "En Tunisie, les images satellitaires gratuites telles que celles de la mission Sentinel-2 offrent un accès inédit à l'observation des terres agricoles. Avec une résolution de 10 mètres par pixel, elles permettent de suivre l'évolution de la végétation et de disposer d'indicateurs globaux de santé des cultures.",
      contenu: "Cependant, cette résolution présente des limites importantes pour une agriculture de précision. Un pixel de 10 mètres représente une surface de 100 m², ce qui peut englober plusieurs rangs de cultures ou masquer des variations locales importantes. De plus, la fréquence de passage des satellites (tous les 5 jours dans le meilleur des cas) ne permet pas un suivi quotidien des évolutions rapides. Les conditions météorologiques (nuages, brume) peuvent également compromettre la qualité des images pendant plusieurs semaines consécutives. Enfin, l'interprétation des données satellitaires nécessite une expertise technique que tous les agriculteurs ne possèdent pas, limitant leur adoption et leur utilisation effective sur le terrain."
    },
    {
      index: 4,
      badge: "Gestion Eau",
      category: "Irrigation",
      titre: "Gaspillage d'eau et stress hydrique",
      introduction: "L'agriculture tunisienne évolue dans un contexte de rareté croissante des ressources hydriques. Le pays dispose en moyenne de moins de 450 m³ d'eau douce par habitant et par an, un seuil largement inférieur au seuil de stress hydrique fixé par la FAO (1 000 m³/habitant/an).",
      contenu: "Dans ce contexte, chaque goutte d'eau compte, mais les pratiques d'irrigation restent souvent inefficaces. L'irrigation gravitaire, encore largement répandue, présente des rendements de 40 à 60 %, signifiant qu'une part importante de l'eau se perd par évaporation, infiltration ou ruissellement. L'irrigation par aspersion, plus efficace, atteint des rendements de 70 à 80 %, mais reste sous-utilisée. Quant à l'irrigation localisée (goutte-à-goutte), la plus efficace avec des rendements supérieurs à 90 %, elle ne couvre qu'une fraction limitée des surfaces irriguées. Au-delà des techniques d'irrigation, c'est la gestion temporelle de l'arrosage qui pose problème : irrigation aux mauvaises heures (en pleine chaleur), fréquences inadaptées aux besoins réels des plantes, absence de prise en compte des prévisions météorologiques."
    },
    {
      index: 5,
      badge: "Météo Locale",
      category: "Climat",
      titre: "Prévisions météorologiques globales peu adaptées aux réalités locales",
      introduction: "L'agriculture tunisienne est fortement dépendante du climat, mais les prévisions disponibles restent essentiellement globales et souvent peu adaptées aux microclimats locaux. Le pays est marqué par une diversité climatique importante : zones côtières humides, régions intérieures semi-arides et zones du Sud arides.",
      contenu: "Cette diversité crée des microclimats qui peuvent varier significativement sur de courtes distances. Les prévisions météorologiques nationales ou régionales, bien qu'utiles, ne capturent pas ces variations locales. Un agriculteur situé dans une vallée peut connaître des conditions très différentes de celles annoncées pour sa région administrative. Ces écarts se traduisent par des décisions d'irrigation, de traitement ou de récolte inadaptées aux conditions réelles du terrain. L'absence de stations météorologiques locales et de capteurs de terrain limite la précision des données disponibles. Les agriculteurs se retrouvent ainsi à prendre des décisions cruciales sur la base d'informations approximatives, augmentant les risques de pertes et réduisant l'efficacité des pratiques agricoles."
    },
    {
      index: 6,
      badge: "Diagnostic IA",
      category: "Santé Plantes",
      titre: "Diagnostic tardif des maladies et des carences nutritionnelles",
      introduction: "Dans l'agriculture tunisienne, le diagnostic des maladies des plantes et des carences nutritionnelles se fait souvent trop tard, lorsque les symptômes deviennent visibles à l'œil nu. À ce stade, les dégâts sont déjà largement installés et, dans la majorité des cas, irréversibles.",
      contenu: "Cette détection tardive s'explique par plusieurs facteurs : manque de formation technique des agriculteurs, absence d'outils de diagnostic précoce, et surveillance insuffisante des parcelles. Les premiers signes de stress, de maladie ou de carence sont souvent subtils : léger changement de couleur des feuilles, modification de la croissance, altération de la texture. Ces signaux faibles passent inaperçus lors des inspections visuelles classiques. Quand les symptômes deviennent évidents, la maladie s'est déjà propagée ou la carence a déjà affecté le développement de la plante. Les traitements curatifs, plus coûteux et moins efficaces que la prévention, ne permettent souvent que de limiter les dégâts sans restaurer le potentiel de rendement initial."
    },
    {
      index: 7,
      badge: "Big Data",
      category: "Données",
      titre: "Données agricoles multiples mais fragmentées",
      introduction: "Le secteur agricole tunisien génère de plus en plus de données : relevés climatiques, analyses de sol, observations de terrain, fichiers Excel, applications diverses. Pourtant, ces informations restent dispersées et fragmentées entre plusieurs sources non connectées.",
      contenu: "Cette fragmentation crée plusieurs problèmes majeurs. D'abord, l'impossibilité de croiser les données pour obtenir une vision globale et cohérente de l'exploitation. Les analyses de sol restent isolées des données météorologiques, elles-mêmes déconnectées des observations de terrain. Ensuite, la duplication des efforts : les mêmes informations sont saisies plusieurs fois dans différents systèmes. Enfin, la perte d'informations précieuses : des données collectées ne sont pas exploitées faute d'outils d'analyse appropriés. Cette situation prive les agriculteurs d'une ressource stratégique : la capacité à analyser les corrélations entre différents facteurs, à identifier les tendances et à prendre des décisions basées sur une compréhension globale de leur système de production."
    },
    {
      index: 8,
      badge: "Plateforme IA",
      category: "Intégration",
      titre: "Absence d'une plateforme centralisée et intelligente",
      introduction: "En Tunisie, les données agricoles existent mais elles sont orphelines : relevés climatiques, analyses de sol, observations de terrain, fichiers Excel, applications ponctuelles. Chacune vit dans son propre silo.",
      contenu: "Cette situation révèle l'absence d'une plateforme centralisée capable d'agréger, d'analyser et de valoriser l'ensemble de ces informations. Les agriculteurs jonglent entre plusieurs outils, plusieurs interfaces, plusieurs formats de données, sans pouvoir bénéficier d'une vision unifiée et intelligente de leur exploitation. L'absence d'intelligence artificielle pour traiter ces données représente une perte d'opportunité considérable. Les technologies modernes permettraient d'identifier automatiquement des patterns, de prédire des évolutions, de recommander des actions optimales. Sans plateforme centralisée, les agriculteurs tunisiens passent à côté des bénéfices de la révolution numérique agricole : agriculture de précision, optimisation des ressources, prédiction des risques, aide à la décision."
    },
    {
      index: 9,
      badge: "Valorisation ESG",
      category: "Durabilité",
      titre: "Faible valorisation économique des pratiques agricoles durables",
      introduction: "En Tunisie, l'agriculture biologique et les pratiques agroécologiques progressent, mais leur valorisation économique reste faible. En 2022, la superficie certifiée en agriculture biologique atteignait environ 227 582 hectares, soit à peine 2,3 % de la surface agricole utile.",
      contenu: "Cette faible valorisation s'explique par plusieurs facteurs structurels. D'abord, l'absence de circuits de commercialisation spécialisés qui permettraient aux produits biologiques et durables de bénéficier d'une prime de prix significative. Ensuite, le manque de certification et de traçabilité qui empêche les consommateurs de distinguer et de valoriser les pratiques durables. Enfin, l'insuffisance des mécanismes de soutien public et privé pour accompagner la transition vers des pratiques plus respectueuses de l'environnement. Cette situation décourage les agriculteurs d'investir dans des pratiques durables, pourtant essentielles pour l'avenir de l'agriculture tunisienne face aux défis climatiques et environnementaux."
    },
    {
      index: 10,
      badge: "E-commerce",
      category: "Commerce",
      titre: "Circuits de commercialisation longs et peu transparents",
      introduction: "En Tunisie, l'un des principaux freins à la rentabilité agricole réside dans les chaînes de commercialisation. Entre le champ et le consommateur final, le produit passe par une succession d'intermédiaires : collecteurs, grossistes, transporteurs, marchés de gros, distributeurs.",
      contenu: "Cette multiplication des intermédiaires a plusieurs conséquences négatives. D'abord, elle réduit drastiquement la part de la valeur finale qui revient au producteur : souvent moins de 30 % du prix payé par le consommateur. Ensuite, elle allonge les délais de commercialisation, augmentant les risques de détérioration des produits frais et réduisant leur qualité à l'arrivée. Enfin, elle crée une opacité sur les prix et les conditions de vente, privant les agriculteurs d'informations essentielles pour planifier leur production. L'absence de circuits courts et de plateformes de vente directe limite les possibilités pour les producteurs de valoriser leur travail et d'établir une relation directe avec leurs clients."
    },
    {
      index: 11,
      badge: "Alerte Collective",
      category: "Communication",
      titre: "Absence d'alerte collective : une faiblesse structurelle aux conséquences lourdes",
      introduction: "En Tunisie, lorsqu'une maladie ou un ravageur apparaît dans une région agricole, l'information circule rarement de manière rapide et structurée. Chaque agriculteur découvre le problème seul dans son champ, et le temps que la nouvelle atteigne d'autres producteurs ou les services techniques, l'infestation s'est déjà propagée.",
      contenu: "Cette absence de système d'alerte collective a des conséquences dramatiques. Les maladies et ravageurs se propagent plus rapidement et plus largement qu'ils ne le devraient. Les traitements préventifs, plus efficaces et moins coûteux, ne peuvent pas être déployés à temps. Les agriculteurs subissent des pertes qui auraient pu être évitées ou limitées par une intervention coordonnée et rapide. L'absence de partage d'information prive également la communauté agricole d'un apprentissage collectif : les solutions trouvées par un agriculteur ne bénéficient pas aux autres, chacun devant réinventer les mêmes réponses aux mêmes problèmes."
    },
    {
      index: 12,
      badge: "Smart Irrigation",
      category: "Maintenance",
      titre: "Détection tardive des défaillances dans l'irrigation",
      introduction: "En Tunisie, les réseaux d'irrigation sont souvent vétustes, non automatisés et insuffisamment entretenus. Cette situation conduit à un gaspillage massif de ressources en eau : Les canalisations irriguant les périmètres d'État (Saqwa) subissent des pertes quotidiennes de 3 à 4 % d'eau, dues à des installations obsolètes et des pannes fréquentes.",
      contenu: "La détection tardive des pannes aggrave considérablement cette situation. Une fuite non détectée peut gaspiller des milliers de litres d'eau avant d'être repérée. Un système d'irrigation défaillant peut priver les cultures d'eau pendant des heures ou des jours critiques, compromettant irrémédiablement les rendements. L'absence de monitoring en temps réel des installations d'irrigation prive les agriculteurs d'informations essentielles : débit réel, pression, état des équipements. Cette cécité technologique se traduit par une maintenance curative coûteuse plutôt que préventive, des pannes répétées, et une inefficacité chronique des systèmes d'irrigation."
    },
    {
      index: 13,
      badge: "Certification",
      category: "Reconnaissance",
      titre: "Manque de reconnaissance des agriculteurs durables",
      introduction: "En Tunisie, de nombreux agriculteurs commencent à intégrer des pratiques plus respectueuses de l'environnement : réduction des intrants chimiques, recours aux engrais organiques, gestion raisonnée de l'irrigation, plantation d'arbres pour améliorer la séquestration du carbone. Pourtant, ces efforts restent invisibles sur le plan économique et institutionnel.",
      contenu: "Cette invisibilité décourage les bonnes pratiques et freine la transition vers une agriculture plus durable. Les agriculteurs qui investissent temps et argent dans des pratiques respectueuses de l'environnement ne bénéficient d'aucune reconnaissance, ni économique ni sociale. L'absence de systèmes de certification et de traçabilité empêche la valorisation de ces efforts sur les marchés. L'absence de mécanismes de compensation carbone prive les agriculteurs d'une source de revenus potentielle pour leurs pratiques de séquestration. Cette situation crée une injustice : ceux qui contribuent le plus à la durabilité du secteur agricole ne sont pas récompensés, tandis que les pratiques intensives continuent d'être économiquement favorisées."
    }
  ];

  // Couleurs de gradients pour les titres
  const titleGradients = [
    'from-red-600 to-pink-600',      // 1
    'from-blue-600 to-indigo-600',   // 2  
    'from-purple-600 to-violet-600', // 3
    'from-cyan-600 to-blue-600',     // 4
    'from-orange-600 to-red-600',    // 5
    'from-green-600 to-emerald-600', // 6
    'from-violet-600 to-purple-600', // 7
    'from-slate-600 to-gray-600',    // 8
    'from-lime-600 to-green-600',    // 9
    'from-amber-600 to-orange-600',  // 10
    'from-red-700 to-rose-600',      // 11
    'from-teal-600 to-cyan-600',     // 12
    'from-emerald-600 to-green-600'  // 13
  ];  return (
    <section className="py-20 bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))] relative overflow-hidden">
      
      {/* Éléments décoratifs de fond optimisés pour mode clair */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#57D53B]/15 to-emerald-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/8 to-cyan-400/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Titre principal optimisé */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#57D53B]/10 to-emerald-500/10 border border-[#57D53B]/20 text-[#57D53B] text-sm font-semibold mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            Défis Agricoles Tunisiens
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[#57D53B]">Problématiques</span>
            <span className="text-gray-800"> du secteur</span>
            <br />
            <span className="text-gray-800">agricole en </span>
            <span className="text-[#57D53B]">Tunisie</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Découvrez les 13 défis majeurs que rencontrent les agriculteurs tunisiens et comment 
            <span className="text-[#57D53B] font-semibold"> AgroNoya apporte des solutions innovantes</span> 
            pour transformer l'agriculture de demain.
          </p>
        </div>

        {/* Problématiques avec layout alternée moderne */}
        <div className="space-y-16">
          {problematiques.map((problematique, index) => {
            const isExpanded = expandedCards[problematique.index];
            const isLeft = problematique.index % 2 === 1;

            return (
              <div
                key={problematique.index}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isLeft ? 'lg:grid-flow-col-dense' : ''}`}>
                  
                  {/* Section Vidéo */}
                  <div className={`${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                    <VideoPlaceholder index={problematique.index} isLeft={isLeft} />
                  </div>

                  {/* Section Contenu */}
                  <div className={`space-y-6 ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Badge et numérotation optimisés */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#57D53B]/10 to-emerald-500/10 border border-[#57D53B]/20 text-[#57D53B] text-sm font-semibold">
                        {problematique.category}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        Problématique {problematique.index}/13
                      </div>
                    </div>

                    {/* Titre avec couleur verte attractive */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-[#57D53B]">
                      {problematique.titre}
                    </h3>
                    
                    {/* Contenu optimisé pour lisibilité */}
                    <div className="space-y-4">
                      <p className="text-gray-700 text-base md:text-lg font-light leading-relaxed text-justify tracking-wide">
                        {problematique.introduction}
                        {!isExpanded && <span className="text-[#57D53B] font-medium">…</span>}
                      </p>

                      {/* Contenu étendu avec meilleure lisibilité */}
                      {isExpanded && (
                        <div className="space-y-4 animate-fade-in">
                          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed text-justify tracking-wide">
                            {(() => {
                              // Extraire seulement la partie qui suit l'introduction
                              const contenuSansIntro = problematique.contenu
                                .replace(problematique.introduction, '')
                                .replace(/^\s*:\s*/, '') // Enlever les ":" au début
                                .replace(/^\s*\n+/, '') // Enlever les sauts de ligne au début
                                .replace(/\n\n/g, ' ')
                                .replace(/\n/g, ' ')
                                .trim();
                              return contenuSansIntro;
                            })()}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Bouton Voir plus moderne */}
                    <button
                      onClick={() => toggleCard(problematique.index)}
                      className="group/btn inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#57D53B] to-emerald-600 text-white font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <span>{isExpanded ? 'Voir moins' : 'Voir plus'}</span>
                      {isExpanded ? (
                        <ChevronUp className="ml-2 w-4 h-4 transition-transform group-hover/btn:-translate-y-1" />
                      ) : (
                        <ChevronDown className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-y-1" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTA finale optimisée pour mode clair */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-br from-[#57D53B]/8 to-emerald-500/8 backdrop-blur-sm rounded-3xl border border-[#57D53B]/20 p-12 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#57D53B]">
              AgroNoya : La Solution Complète
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              Découvrez comment nos technologies révolutionnent l'agriculture tunisienne en apportant des réponses concrètes à chacune de ces problématiques.
            </p>
            <a
              href="/solutions"
              className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-[#57D53B] to-emerald-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              <span>Découvrir Nos Solutions</span>
              <ChevronDown className="ml-3 w-5 h-5 rotate-[-90deg] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblematiquesSection;

