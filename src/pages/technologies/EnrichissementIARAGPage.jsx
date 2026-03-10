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
  Sparkles,
  ChevronRight,
  Star,
  Shield
} from 'lucide-react';

const EnrichissementIARAGPage = () => {
  const navigate = useNavigate();
  const [activeKnowledgeBase, setActiveKnowledgeBase] = useState(0);
  const [aiThinking, setAiThinking] = useState(false);
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const knowledgeBases = [
    {
      title: "Base Sols Tunisiens",
      icon: <Globe className="w-6 h-6" />,
      description: "Données géologiques et pédologiques spécifiques à la Tunisie",
      color: "from-blue-500 to-cyan-500",
      entries: "12,450+ analyses",
      coverage: "Région Kairouan, Sfax, Sousse"
    },
    {
      title: "Variétés Locales",
      icon: <Leaf className="w-6 h-6" />,
      description: "Catalogue complet des cultivars tunisiens adaptés",
      color: "from-green-500 to-emerald-500",
      entries: "850+ variétés",
      coverage: "Oliviers Chemlali, Maraîchères, Céréales"
    },
    {
      title: "Expertise Agronomique",
      icon: <Users className="w-6 h-6" />,
      description: "Savoir-faire des agronomes tunisiens expérimentés",
      color: "from-purple-500 to-pink-500",
      entries: "2,300+ recommandations",
      coverage: "Pratiques locales validées"
    }
  ];

  const ragProcess = [
    {
      step: 1,
      title: "Analyse de la Requête",
      description: "L'IA comprend le contexte et identifie les informations nécessaires",
      icon: <Search className="w-8 h-8" />,
      color: "text-blue-400"
    },
    {
      step: 2,
      title: "Recherche Sémantique",
      description: "Exploration intelligente dans les bases de connaissances locales",
      icon: <Database className="w-8 h-8" />,
      color: "text-green-400"
    },
    {
      step: 3,
      title: "Enrichissement Contextuel",
      description: "Intégration des données IoT avec l'expertise locale",
      icon: <Brain className="w-8 h-8" />,
      color: "text-purple-400"
    },
    {
      step: 4,
      title: "Génération de Réponse",
      description: "Synthèse personnalisée et recommandations actionables",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "text-orange-400"
    }
  ];

  const simulateAIQuery = (query) => {
    setAiThinking(true);
    setAiQuery(query);
    
    setTimeout(() => {
      const responses = {
        "stress hydrique oliviers": "Basé sur les données locales de Kairouan, les oliviers Chemlali montrent des signes de stress hydrique quand l'humidité du sol descend sous 35%. Recommandation: irrigation de 25mm avec un intervalle de 7 jours selon les conditions météo actuelles.",
        "fertilisation maraîchage": "Pour les cultures maraîchères en sol argileux tunisien, l'analyse NPK recommande un apport de 120-80-100 kg/ha. Les variétés locales de tomates nécessitent un supplément potassique de 20% pendant la fructification.",
        "maladies oliviers": "Les oliviers Chemlali sont sensibles à la mouche de l'olive (Bactrocera oleae) entre juin-septembre. Traitement préventif recommandé avec des pièges à phéromones et pulvérisation de spinosad à 0.02%."
      };
      setAiResponse(responses[query] || "Analyse en cours avec les données locales...");
      setAiThinking(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1C191F' }}>
      {/* Header avec navigation */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-50 dark:bg-slate-900"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <button
            onClick={() => navigate('/technologies')}
            className="flex items-center gap-2 text-gray-900 dark:text-slate-50/80 hover:text-white mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux Technologies
          </button>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
              <Brain className="w-12 h-12 text-gray-900 dark:text-slate-50" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                Enrichissement IA (RAG)
              </h1>
              <p className="text-xl text-purple-200">
                Consultation Base Connaissances Locale
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-900 dark:text-slate-50/90 max-w-3xl leading-relaxed">
            Notre système RAG (Retrieval-Augmented Generation) enrichit l'intelligence artificielle avec des connaissances spécifiques à l'agriculture tunisienne, permettant des recommandations ultra-précises et contextualisées.
          </p>
        </div>
      </div>

      {/* Section Processus RAG */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Processus RAG Intelligent
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              De la question à la recommandation : comment l'IA exploite l'expertise locale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ragProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl ${process.color}`}>
                      {process.icon}
                    </div>
                    <span className="text-2xl font-bold text-purple-400">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {process.description}
                  </p>
                </div>
                
                {index < ragProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Bases de Connaissances */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Bases de Connaissances Spécialisées
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              L'expertise agricole tunisienne digitalisée et accessible instantanément
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {knowledgeBases.map((base, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${base.color} p-1 cursor-pointer transform hover:scale-105 transition-all duration-300 ${activeKnowledgeBase === index ? 'ring-4 ring-white' : ''}`}
                onClick={() => setActiveKnowledgeBase(index)}
              >
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${base.color} rounded-xl text-gray-900 dark:text-slate-50`}>
                      {base.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-slate-50">
                        {base.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {base.entries}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {base.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {base.coverage}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Démonstration IA */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              IA en Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Testez l'enrichissement IA avec des questions agricoles réelles
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <button
                  onClick={() => simulateAIQuery("stress hydrique oliviers")}
                  className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Leaf className="w-6 h-6 mx-auto mb-2" />
                  Stress Hydrique Oliviers
                </button>
                <button
                  onClick={() => simulateAIQuery("fertilisation maraîchage")}
                  className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Beaker className="w-6 h-6 mx-auto mb-2" />
                  Fertilisation Maraîchage
                </button>
                <button
                  onClick={() => simulateAIQuery("maladies oliviers")}
                  className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Shield className="w-6 h-6 mx-auto mb-2" />
                  Maladies Oliviers
                </button>
              </div>
              
              {aiQuery && (
                <div className="space-y-6">
                  <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-medium">Question</span>
                    </div>
                    <p className="text-gray-900 dark:text-slate-50">{aiQuery}</p>
                  </div>
                  
                  <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Brain className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-400 font-medium">Réponse IA Enrichie</span>
                      {aiThinking && (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-400"></div>
                          <span className="text-sm text-purple-400">Analyse en cours...</span>
                        </div>
                      )}
                    </div>
                    {aiResponse && !aiThinking && (
                      <p className="text-white leading-relaxed">{aiResponse}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Avantages Concurrentiels
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pourquoi l'enrichissement IA fait la différence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Précision Locale",
                description: "Recommandations basées sur les spécificités tunisiennes",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Réponse Instantanée",
                description: "Consultation de l'expertise en temps réel",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Expertise Validée",
                description: "Savoir-faire d'agronomes expérimentés",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Amélioration Continue",
                description: "Apprentissage et mise à jour permanents",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Couverture Complète",
                description: "Toutes les régions agricoles tunisiennes",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Innovation IA",
                description: "Technologies de pointe adaptées localement",
                color: "from-pink-500 to-purple-500"
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className={`p-3 bg-gradient-to-br ${advantage.color} rounded-xl text-white mb-4 w-fit`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-400">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Prêt à Bénéficier de l'IA Enrichie ?
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Découvrez comment l'enrichissement IA peut transformer votre agriculture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Demander une Démonstration
            </button>
            <button
              onClick={() => navigate('/solutions')}
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-bold rounded-2xl hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Voir Toutes les Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnrichissementIARAGPage;

