import React from 'react';
import { ArrowRight, CheckCircle, MessageSquare, Brain, Smartphone, Zap, Users, Globe, Clock, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const NoyaGPTPage = () => {

  return (
    <div className="min-h-screen bg-[#0A0B0D]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/src/assets/noya_gpt.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-blue-900/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center bg-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                  <Bot className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-purple-400 font-medium">IA Conversationnelle</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Noya GPT
                </h1>
                
                <h2 className="text-2xl lg:text-3xl text-purple-400 mb-6 font-semibold">
                  Assistant IA Agricole
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Chatbot IA spécialisé en agriculture avec accès à vos données parcellaires. 
                  Conseils personnalisés, diagnostic instantané et support technique 24/7.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
                    Essayer Maintenant
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <Link to="/contact" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300">
                    Intégration API
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
                  <img 
                    src="/src/assets/noya_gpt.png" 
                    alt="Interface Noya GPT" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Intelligence Artificielle Avancée
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              L'assistant IA qui comprend votre agriculture et vos défis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                metric: "GPT-4",
                title: "Modèle IA Avancé",
                description: "Dernière génération OpenAI"
              },
              {
                icon: <Users className="w-8 h-8" />,
                metric: "50k+",
                title: "Agriculteurs Formés",
                description: "Base de connaissances étendue"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                metric: "12 langues",
                title: "Support Multilingue",
                description: "Communication naturelle"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                metric: "24/7",
                title: "Disponibilité",
                description: "Support continu"
              }
            ].map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                  <div className="text-purple-400">{fact.icon}</div>
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{fact.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{fact.title}</h3>
                <p className="text-gray-400 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies d'IA Conversationnelle
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Assistant intelligent connecté à vos données agricoles
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="/src/assets/plant_care_chatbot.jpg" 
              alt="Interface chatbot agricole" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Chat Intelligent",
                description: "Conversation naturelle en langage courant",
                image: "/src/assets/agri_chatbot.webp"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "IA Spécialisée",
                description: "Entraînée sur données agricoles",
                image: "/src/assets/plant_care_chatbot.jpg"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Multi-Plateforme",
                description: "Web, mobile, WhatsApp, Telegram",
                image: "/src/assets/agri_chatbot.webp"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Réponses Instantanées",
                description: "Diagnostic et conseils en temps réel",
                image: "/src/assets/plant_care_chatbot.jpg"
              }
            ].map((tech, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={tech.image} 
                    alt={tech.title} 
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-2 left-2 inline-flex items-center justify-center w-10 h-10 bg-purple-500/20 rounded-lg backdrop-blur-sm">
                    <div className="text-purple-400">{tech.icon}</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Assistant IA Personnalisé pour Votre Exploitation
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Noya GPT accède à vos données parcellaires, historiques météo et pratiques 
                agricoles pour fournir des conseils ultra-personnalisés. Posez vos questions 
                en langage naturel et obtenez des réponses expertes instantanées.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Diagnostic maladies par photo instantané",
                  "Conseils fertilisation personnalisés",
                  "Planification interventions optimales",
                  "Support technique multilingue 24/7",
                  "Intégration données IoT temps réel",
                  "Formation continue agriculteurs"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Démo Interactive
                </button>
                <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Documentation API
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-2xl p-8 border border-purple-500/20">
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-purple-400 font-semibold">Noya GPT</span>
                    </div>
                    <p className="text-gray-300 text-sm">Bonjour ! Comment puis-je vous aider avec vos cultures aujourd'hui ?</p>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 ml-8">
                    <p className="text-gray-300 text-sm">Mes tomates ont des taches brunes sur les feuilles</p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-purple-400 font-semibold">Noya GPT</span>
                    </div>
                    <p className="text-gray-300 text-sm">D'après vos symptômes, il s'agit probablement du mildiou. Je recommande un traitement au cuivre. Voulez-vous que je vérifie les conditions météo pour le timing optimal ?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Cas d'Usage Noya GPT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Diagnostic Maladies",
                description: "Identification instantanée par photo avec recommandations de traitement",
                benefits: ["Photo diagnostic", "Base 10k+ maladies", "Traitements bio/chimie"]
              },
              {
                title: "Conseils Personnalisés",
                description: "Recommandations basées sur vos données parcellaires et historiques",
                benefits: ["Accès données IoT", "Historique parcelles", "Conseils contextuels"]
              },
              {
                title: "Formation Continue",
                description: "Apprentissage interactif des meilleures pratiques agricoles",
                benefits: ["Modules formation", "Quiz interactifs", "Certification"]
              }
            ].map((useCase, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-indigo-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Votre Expert Agricole Personnel 24/7
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ne restez plus seul face aux défis agricoles. Noya GPT vous accompagne 
            avec des conseils d'expert personnalisés à tout moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300">
              Commencer Gratuitement
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link to="/contact" className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Intégrer à Mon Système
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoyaGPTPage;

