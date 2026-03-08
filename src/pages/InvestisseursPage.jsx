import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  TrendingUp, 
  MapPin, 
  Users, 
  Leaf, 
  BarChart3, 
  Shield, 
  Mail, 
  Building, 
  User,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Target
} from 'lucide-react';

const InvestisseursPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    organisation: '',
    role: '',
    ticket: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire investisseur soumis:', formData);
    // Ici on pourrait ajouter la logique d'envoi
    alert('Demande envoyée ! Nous vous contacterons sous 48h.');
  };

  const scrollToForm = () => {
    document.getElementById('investir').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0B0D]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/assets/hero_satellite_monitoring.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[rgb(var(--overlay-rgb)/0.55)]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Investir dans l'agriculture{' '}
            <span className="text-[#28a745] dark:text-agronoya-green">intelligente</span>
          </h1>
          
          <p className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            AgroNoya — Connecter la terre, révéler l'avenir
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-[#cfb989]/30">
              <div className="flex items-center justify-center mb-4">
                <Droplets className="w-8 h-8 text-[#28a745] dark:text-agronoya-green" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-900 dark:text-[#57D53B] mb-2">-50%</div>
              <div className="text-gray-700 dark:text-gray-300">d'eau consommée</div>
            </div>
            
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-[#cfb989]/30">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-[#28a745] dark:text-agronoya-green" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-900 dark:text-[#57D53B] mb-2">+10-15%</div>
              <div className="text-gray-700 dark:text-gray-300">de rendement</div>
            </div>
            
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-[#cfb989]/30">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-[#28a745] dark:text-agronoya-green" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-900 dark:text-[#57D53B] mb-2">2,500</div>
              <div className="text-gray-700 dark:text-gray-300">hectares monitorés</div>
            </div>
          </div>
          
          <button 
            onClick={scrollToForm}
            className="bg-[#28a745] hover:bg-[#218838] dark:bg-agronoya-green dark:hover:bg-agronoya-green-dark text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Demander notre deck
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Section Problématique */}
      <section className="py-20 bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-900 dark:text-[#57D53B] mb-8">
              Les défis de l'agriculture moderne
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              L'agriculture tunisienne fait face à des défis majeurs : stress hydrique croissant avec moins de 450 m³ d'eau par habitant, 
              pertes de rendement dues aux pratiques traditionnelles, et fragmentation des données agricoles entre multiples sources 
              non connectées. Ces problèmes structurels nécessitent une approche technologique intégrée pour assurer la durabilité 
              et la rentabilité du secteur.
            </p>
          </div>
        </div>
      </section>

      {/* Section Notre Solution */}
      <section className="py-20 bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-900 dark:text-[#57D53B] mb-6">
              L'écosystème <span className="text-[#28a745] dark:text-agronoya-green">AgroNoya</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Une plateforme intégrée qui révolutionne l'agriculture grâce à l'IA, l'IoT et l'analyse satellite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Agro Irrigation */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-[#cfb989]/30">
              <div className="w-16 h-16 bg-[#28a745]/10 dark:bg-agronoya-green/10 rounded-xl flex items-center justify-center mb-4">
                <Droplets className="w-8 h-8 text-[#28a745] dark:text-agronoya-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Agro Irrigation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Système d'irrigation intelligent avec capteurs IoT et automatisation complète
              </p>
            </div>
            
            {/* AgroSol */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-[#cfb989]/30">
              <div className="w-16 h-16 bg-[#28a745]/10 dark:bg-agronoya-green/10 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-[#28a745] dark:text-agronoya-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AgroSol</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Analyse avancée du sol avec recommandations personnalisées d'amendements
              </p>
            </div>
            
            {/* NoyaModels */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-[#cfb989]/30">
              <div className="w-16 h-16 bg-[#28a745]/10 dark:bg-agronoya-green/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-[#28a745] dark:text-agronoya-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">NoyaModels</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Modèles prédictifs IA pour optimiser les rendements et anticiper les risques
              </p>
            </div>
            
            {/* AgroSat/Drone */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-[#cfb989]/30">
              <div className="w-16 h-16 bg-[#28a745]/10 dark:bg-agronoya-green/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-[#28a745] dark:text-agronoya-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AgroSat/Drone</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Surveillance satellite et drone pour monitoring en temps réel des cultures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Opportunité de Marché */}
      <section className="py-20 bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-900 dark:text-[#57D53B] mb-6">
              Opportunité de marché
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Un marché en forte croissance avec des besoins technologiques urgents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#28a745] dark:text-agronoya-green mb-4">4.8M</div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Hectares</div>
              <div className="text-gray-700 dark:text-gray-300">Surface agricole utile en Tunisie</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-[#28a745] dark:text-agronoya-green mb-4">€2.1B</div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Pertes annuelles</div>
              <div className="text-gray-700 dark:text-gray-300">Dues au manque d'irrigation optimisée</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-[#28a745] dark:text-agronoya-green mb-4">65%</div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fermes &gt;10 ha</div>
              <div className="text-gray-700 dark:text-gray-300">Marché cible pour nos solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="py-20 bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-900 dark:text-[#57D53B] mb-6">
              Notre équipe
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Une équipe d'experts passionnés par l'innovation agricole
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* CEO */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ahmed Benali</h3>
              <div className="text-[#28a745] dark:text-agronoya-green font-semibold mb-2">CEO & Fondateur</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                15 ans d'expérience en agtech, ex-directeur innovation chez AgriTech MENA
              </p>
            </div>
            
            {/* CTO */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fatma Trabelsi</h3>
              <div className="text-[#28a745] dark:text-agronoya-green font-semibold mb-2">CTO</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                PhD en IA appliquée, spécialiste en machine learning pour l'agriculture
              </p>
            </div>
            
            {/* Head of Sales */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mohamed Gharbi</h3>
              <div className="text-[#28a745] dark:text-agronoya-green font-semibold mb-2">Directeur Commercial</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Expert en développement commercial B2B, réseau de 500+ agriculteurs
              </p>
            </div>
            
            {/* Head of Operations */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Leila Mansouri</h3>
              <div className="text-[#28a745] dark:text-agronoya-green font-semibold mb-2">Directrice Opérations</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Ingénieure agronome, spécialiste en déploiement de solutions IoT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Impact & ESG */}
      <section className="py-20 bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-900 dark:text-[#57D53B] mb-6">
              Impact & ESG
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Notre engagement pour une agriculture durable et responsable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-[#cfb989]/30">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-900 dark:text-[#57D53B] mb-2">2.5M L</div>
              <div className="text-gray-700 dark:text-gray-300">Eau économisée par mois</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-[#cfb989]/30">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-900 dark:text-[#57D53B] mb-2">-30%</div>
              <div className="text-gray-700 dark:text-gray-300">Réduction des intrants chimiques</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-[#cfb989]/30">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-900 dark:text-[#57D53B] mb-2">-25%</div>
              <div className="text-gray-700 dark:text-gray-300">Réduction empreinte carbone</div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire Investisseur */}
      <section id="investir" className="py-20 bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-900 dark:text-[#57D53B] mb-6">
                Rejoignez l'aventure
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Demandez notre deck investisseur et découvrez comment participer à la révolution agricole
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-[#cfb989]/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#28a745] dark:focus:ring-agronoya-green focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#28a745] dark:focus:ring-agronoya-green focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Organisation
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#28a745] dark:focus:ring-agronoya-green focus:border-transparent"
                      placeholder="Nom de votre organisation"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Rôle *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#28a745] dark:focus:ring-agronoya-green focus:border-transparent"
                    >
                      <option value="">Sélectionnez votre rôle</option>
                      <option value="investisseur">Investisseur</option>
                      <option value="corporate">Corporate</option>
                      <option value="partenaire">Partenaire</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ticket d'investissement / Intérêt
                  </label>
                  <input
                    type="text"
                    name="ticket"
                    value={formData.ticket}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#28a745] dark:focus:ring-agronoya-green focus:border-transparent"
                    placeholder="Ex: 100K€ - 500K€ ou type de partenariat"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#28a745] dark:focus:ring-agronoya-green focus:border-transparent"
                    placeholder="Parlez-nous de votre intérêt pour AgroNoya..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#28a745] hover:bg-[#218838] dark:bg-agronoya-green dark:hover:bg-agronoya-green-dark text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  >
                    Demander le deck
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestisseursPage;

