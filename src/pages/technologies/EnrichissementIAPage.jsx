import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Brain, 
  Database,
  Search,
  BookOpen,
  Lightbulb,
  Target,
  Zap,
  Globe,
  MapPin,
  Leaf,
  Beaker,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Clock,
  Users,
  Award,
  Cpu,
  Network,
  FileText,
  BarChart3,
  Settings,
  Eye,
  MessageSquare,
  Sparkles
} from 'lucide-react';

const EnrichissementIAPage = () => {
  const navigate = useNavigate();
  const [activeKnowledgeBase, setActiveKnowledgeBase] = useState(0);
  const [aiThinking, setAiThinking] = useState(false);

  // Simulation IA en action
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const simulateAIQuery = (query) => {
    setAiThinking(true);
    setAiQuery(query);
    
    setTimeout(() => {
      const responses = {
        "stress hydrique oliviers": "Basé sur les données locales de Kairouan, les oliviers Chemlali montrent des signes de stress hydrique quand l'humidité du sol descend sous 35%. Recommandation: irrigation de 25mm avec un intervalle de 7 jours selon les conditions météo actuelles.",
        "fertilisation maraîchage": "Pour les cultures maraîchères en sol argileux tunisien, l'analyse NPK recommande un apport de 120-80-100 kg/ha. Les variétés locales de tomates nécessitent un supplément potassique de 20% pendant la fructification.",
        "maladies citrus": "Détection précoce de la gommose sur agrumes: surveillance des taches brunes sur tronc. Traitement préventif avec bouillie bordelaise à 1% recommandé selon les pratiques locales validées."
      };
      
      setAiResponse(responses[query] || "Analyse en cours basée sur la base de connaissances locale...");
      setAiThinking(false);
    }, 2000);
  };

  const knowledgeBases = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Sols Région Kairouan",
      subtitle: "Expertise Pédologique Locale",
      description: "Base de connaissances spécialisée sur les caractéristiques des sols de la région de Kairouan et leurs spécificités agronomiques.",
      color: "from-amber-500 to-orange-500",
      stats: [
        { label: "Types de sols", value: "12", icon: <Leaf className="w-4 h-4" /> },
        { label: "Analyses", value: "2,847", icon: <Beaker className="w-4 h-4" /> },
        { label: "Parcelles", value: "1,250", icon: <MapPin className="w-4 h-4" /> },
        { label: "Précision", value: "96.8%", icon: <Target className="w-4 h-4" /> }
      ],
      knowledge: [
        "Sols argileux lourds: rétention hydrique élevée",
        "Sols sableux: drainage rapide, irrigation fréquente",
        "Sols calcaires: pH élevé, carence fer fréquente",
        "Sols salins: gestion spécifique salinité",
        "Croûte de battance: techniques travail adaptées",
        "Matière organique: taux moyens 1.2-2.8%"
      ]
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Variétés Locales",
      subtitle: "Cultivars Tunisiens Adaptés",
      description: "Encyclopédie complète des variétés locales tunisiennes avec leurs besoins spécifiques et techniques culturales optimisées.",
      color: "from-green-500 to-emerald-500",
      stats: [
        { label: "Variétés", value: "89", icon: <Leaf className="w-4 h-4" /> },
        { label: "Cultivars", value: "156", icon: <Sparkles className="w-4 h-4" /> },
        { label: "Fiches", value: "245", icon: <FileText className="w-4 h-4" /> },
        { label: "Mise à jour", value: "Mensuelle", icon: <Clock className="w-4 h-4" /> }
      ],
      knowledge: [
        "Oliviers Chemlali: résistance sécheresse exceptionnelle",
        "Tomates Marmande: adaptation climat méditerranéen",
        "Agrumes Maltaise: variété locale premium",
        "Blé dur: variétés résistantes maladies",
        "Maraîchage: calendrier cultural optimisé",
        "Arboriculture: porte-greffes adaptés"
      ]
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Seuils Stress Hydrique",
      subtitle: "Critères Physiologiques Précis",
      description: "Seuils critiques de stress hydrique contextualisés pour chaque culture selon les conditions climatiques tunisiennes.",
      color: "from-red-500 to-pink-500",
      stats: [
        { label: "Cultures", value: "45", icon: <Leaf className="w-4 h-4" /> },
        { label: "Seuils", value: "180", icon: <Target className="w-4 h-4" /> },
        { label: "Stades", value: "12", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Validation", value: "Terrain", icon: <CheckCircle className="w-4 h-4" /> }
      ],
      knowledge: [
        "Oliviers: seuil critique 35% humidité sol",
        "Agrumes: stress à 40% capacité au champ",
        "Maraîchage: seuils variables selon stade",
        "Céréales: période critique épiaison",
        "Légumineuses: sensibilité floraison",
        "Adaptation variétale: coefficients spécifiques"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Agronome Expert Virtuel",
      subtitle: "Intelligence Collective Permanente",
      description: "Système expert intégrant l'expérience de dizaines d'agronomes tunisiens pour des conseils personnalisés 24/7.",
      color: "from-blue-500 to-indigo-500",
      stats: [
        { label: "Experts", value: "24", icon: <Users className="w-4 h-4" /> },
        { label: "Expérience", value: "340 ans", icon: <Award className="w-4 h-4" /> },
        { label: "Cas traités", value: "15,680", icon: <BarChart3 className="w-4 h-4" /> },
        { label: "Satisfaction", value: "94.2%", icon: <CheckCircle className="w-4 h-4" /> }
      ],
      knowledge: [
        "Diagnostic maladies: reconnaissance visuelle IA",
        "Conseils fertilisation: calculs personnalisés",
        "Planning cultural: optimisation calendaire",
        "Gestion phytosanitaire: traitements raisonnés",
        "Économie agricole: analyses rentabilité",
        "Formation continue: mise à jour permanente"
      ]
    }
  ];

  const ragProcess = [
    {
      step: 1,
      title: "Réception Requête",
      description: "L'IA reçoit une question ou détecte un besoin d'information contextuelle",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Recherche Sémantique",
      description: "Recherche intelligente dans les bases de connaissances locales pertinentes",
      icon: <Search className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      step: 3,
      title: "Extraction Contexte",
      description: "Extraction des informations les plus pertinentes selon le contexte local",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 4,
      title: "Génération Réponse",
      description: "Génération d'une réponse personnalisée intégrant l'expertise locale",
      icon: <Brain className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const aiCapabilities = [
    {
      category: "Analyse Prédictive",
      description: "Prédiction des besoins basée sur l'historique et les patterns locaux",
      features: [
        "Prévision besoins irrigation 7 jours",
        "Anticipation maladies saisonnières",
        "Optimisation calendrier cultural",
        "Prédiction rendements par parcelle"
      ],
      accuracy: "94.5%"
    },
    {
      category: "Diagnostic Intelligent",
      description: "Identification rapide des problèmes avec solutions adaptées",
      features: [
        "Reconnaissance maladies par image",
        "Diagnostic carences nutritionnelles",
        "Détection stress abiotiques",
        "Analyse symptômes complexes"
      ],
      accuracy: "91.8%"
    },
    {
      category: "Recommandations Personnalisées",
      description: "Conseils sur-mesure selon le contexte spécifique de chaque exploitation",
      features: [
        "Doses fertilisation optimisées",
        "Stratégies irrigation adaptées",
        "Choix variétés recommandées",
        "Planning traitements raisonnés"
      ],
      accuracy: "96.2%"
    },
    {
      category: "Apprentissage Continu",
      description: "Amélioration constante grâce aux retours terrain et nouvelles données",
      features: [
        "Intégration feedback agriculteurs",
        "Mise à jour connaissances automatique",
        "Adaptation conditions changeantes",
        "Optimisation algorithmes en continu"
      ],
      accuracy: "Évolutif"
    }
  ];

  const queryExamples = [
    "stress hydrique oliviers",
    "fertilisation maraîchage", 
    "maladies citrus"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <button
            onClick={() => navigate('/technologies')}
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux Technologies
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-8">
              <Brain className="w-10 h-10 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enrichissement IA
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                (RAG)
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Consultation base connaissances locale. L'IA puise dans l'expertise tunisienne 
              pour des conseils ultra-personnalisés et contextualisés.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full">
                <Brain className="w-4 h-4 inline mr-2" />
                IA Contextuelle
              </span>
              <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full">
                <Database className="w-4 h-4 inline mr-2" />
                Expertise Locale
              </span>
              <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full">
                <Lightbulb className="w-4 h-4 inline mr-2" />
                Conseils 24/7
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Demo Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            <Brain className="w-6 h-6 inline mr-2" />
            Démonstration IA en Action
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Query Interface */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Posez votre question</h3>
              <div className="space-y-3 mb-4">
                {queryExamples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => simulateAIQuery(example)}
                    className="w-full text-left px-4 py-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-gray-300 transition-colors"
                    disabled={aiThinking}
                  >
                    "{example}"
                  </button>
                ))}
              </div>
              
              {aiQuery && (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-400 font-medium mb-2">Question posée:</p>
                  <p className="text-gray-900 dark:text-slate-50">"{aiQuery}"</p>
                </div>
              )}
            </div>

            {/* AI Response */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Réponse de l'IA</h3>
              <div className="bg-slate-700/30 rounded-lg p-6 min-h-[200px]">
                {aiThinking ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Brain className="w-8 h-8 text-purple-400 animate-pulse mx-auto mb-3" />
                      <p className="text-gray-400">L'IA analyse les bases de connaissances...</p>
                      <div className="flex justify-center mt-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : aiResponse ? (
                  <div>
                    <div className="flex items-center mb-3">
                      <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-purple-400 font-medium">Réponse personnalisée</span>
                    </div>
                    <p className="text-white leading-relaxed">{aiResponse}</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Cliquez sur une question pour voir la magie opérer...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* RAG Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Processus RAG (Retrieval-Augmented Generation)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ragProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {step.icon}
                </div>
                <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                  <div className="text-2xl font-bold text-white mb-2">{step.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Bases Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {knowledgeBases.map((base, index) => (
            <button
              key={index}
              onClick={() => setActiveKnowledgeBase(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeKnowledgeBase === index
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-gray-900 dark:text-slate-50'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
              }`}
            >
              {base.title}
            </button>
          ))}
        </div>

        {/* Active Knowledge Base Details */}
        <div className="mb-12">
          {knowledgeBases.map((base, index) => (
            <div
              key={index}
              className={`${activeKnowledgeBase === index ? 'block' : 'hidden'}`}
            >
              <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${base.color} rounded-2xl flex items-center justify-center mr-6`}>
                    {base.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">{base.title}</h3>
                    <p className="text-purple-400 font-medium">{base.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8">{base.description}</p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Statistics */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Statistiques</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {base.stats.map((stat, idx) => (
                        <div key={idx} className="bg-slate-700/30 rounded-lg p-4">
                          <div className="flex items-center mb-2 text-purple-400">
                            {stat.icon}
                            <span className="ml-2 text-xs font-medium">●</span>
                          </div>
                          <div className="text-lg font-bold text-gray-900 dark:text-slate-50">{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Knowledge Items */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Connaissances Clés</h4>
                    <ul className="space-y-3">
                      {base.knowledge.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <BookOpen className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Capabilities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Capacités IA Avancées
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-slate-50">{capability.category}</h3>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    {capability.accuracy}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Zap className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Video/GIF Placeholder */}
        <div className="mb-12">
          <div className="bg-gray-50 dark:bg-slate-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              IA en Action - Démonstration Visuelle
            </h3>
            <div className="aspect-video bg-gray-50 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-purple-500/30">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10 text-white animate-pulse" />
                </div>
                <p className="text-white font-medium mb-2">Vidéo Interactive</p>
                <p className="text-gray-400 text-sm">Processus RAG et consultation des bases de connaissances</p>
                <div className="mt-4 px-6 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  🎥 Vidéo à intégrer
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 dark:bg-slate-900 rounded-2xl p-12 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            L'Expertise Tunisienne à Portée de Clic
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez comment l'IA enrichie par les connaissances locales peut transformer 
            vos décisions agricoles avec une précision inégalée.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
              Tester l'IA
            </button>
            <button className="px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all">
              Base de Connaissances
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrichissementIAPage;

