import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, MessageSquare, Facebook, Linkedin } from 'lucide-react';

// Icône TikTok personnalisée
const TikTokIcon = () => (
  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["agronoyasmartfarm@gmail.com"],
      description: "Contactez-nous par email"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      details: ["+216 95 569 319"],
      description: "Appelez-nous directement"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      details: ["Kairouan, Tunisia"],
      description: "Notre siège social"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      details: ["Lun - Ven: 8h00 - 18h00", "Sam: 9h00 - 13h00"],
      description: "Heures d'ouverture"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-slate-50 mb-6">
            Contactez AgroNoya
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
            Prêt à révolutionner votre agriculture ? Notre équipe d'experts est là pour vous accompagner dans votre transformation digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-slate-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50 mb-6">
              Envoyez-nous un message
            </h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-full focus:ring-2 focus:ring-[#57D53B] focus:border-transparent transition-all duration-300 text-gray-900 dark:text-slate-50 placeholder-gray-500 dark:placeholder-slate-400"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-full focus:ring-2 focus:ring-[#57D53B] focus:border-transparent transition-all duration-300 text-gray-900 dark:text-slate-50 placeholder-gray-500 dark:placeholder-slate-400"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                      Entreprise/Exploitation
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-full focus:ring-2 focus:ring-[#57D53B] focus:border-transparent transition-all duration-300 text-gray-900 dark:text-slate-50 placeholder-gray-500 dark:placeholder-slate-400"
                      placeholder="Nom de votre exploitation"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-full focus:ring-2 focus:ring-[#57D53B] focus:border-transparent transition-all duration-300 text-gray-900 dark:text-slate-50 placeholder-gray-500 dark:placeholder-slate-400"
                        placeholder="+216 XX XXX XXX"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-full focus:ring-2 focus:ring-[#57D53B] focus:border-transparent transition-all duration-300 text-gray-900 dark:text-slate-50"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="demo">Demande de démonstration</option>
                    <option value="quote">Demande de devis</option>
                    <option value="support">Support technique</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-500 dark:text-slate-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-2xl focus:ring-2 focus:ring-[#57D53B] focus:border-transparent transition-all duration-300 resize-none text-gray-900 dark:text-slate-50 placeholder-gray-500 dark:placeholder-slate-400"
                      placeholder="Décrivez votre projet ou vos besoins..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#57D53B] hover:bg-[#57D53B]/90 text-white py-4 rounded-full font-semibold flex items-center justify-center group transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Envoyer le message
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-slate-50 mb-2">
                  Message envoyé avec succès !
                </h4>
                <p className="text-gray-700 dark:text-slate-300">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            )}
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Cartes d'information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-600 hover:border-[#57D53B]/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#57D53B] rounded-full flex items-center justify-center text-white mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-slate-50">{info.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-slate-400">{info.description}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 dark:text-slate-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-600">
              <h4 className="text-xl font-bold text-gray-900 dark:text-slate-50 mb-6">
                Suivez-nous sur les réseaux sociaux
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61579487317817" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-110"
                  aria-label="Suivez-nous sur Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/feed/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110"
                  aria-label="Suivez-nous sur LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://www.tiktok.com/@agronoya.tn?_t=ZM-8z4AFZEH7E0&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-[#cfb989]/20 to-[#cfb989]/10 rounded-full flex items-center justify-center hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-110 border border-gray-600"
                  aria-label="Suivez-nous sur TikTok"
                >
                  <TikTokIcon />
                </a>
                <a 
                  href="https://youtube.com/@agronoya?si=ccGDELIV-BOUwA70" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110"
                  aria-label="Suivez-nous sur YouTube"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* CTA rapide */}
            <div className="bg-[#57D53B] rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Réponse rapide garantie</h4>
              <p className="mb-4 opacity-90">
                Notre équipe vous répond sous 24h pour toute demande d'information ou de démonstration.
              </p>
              <button className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-300">
                Planifier un appel
              </button>
            </div>
          </div>
        </div>

        {/* Section FAQ rapide */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50 mb-8">
            Questions fréquentes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-600">
              <h4 className="font-bold text-gray-900 dark:text-slate-50 mb-2">
                Quel est le délai de réponse ?
              </h4>
              <p className="text-gray-700 dark:text-slate-300 text-sm">
                Nous répondons à toutes les demandes sous 24h ouvrées maximum.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-600">
              <h4 className="font-bold text-gray-900 dark:text-slate-50 mb-2">
                Proposez-vous une démonstration gratuite ?
              </h4>
              <p className="text-gray-700 dark:text-slate-300 text-sm">
                Oui, nous offrons une démonstration personnalisée gratuite de nos solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-600">
              <h4 className="font-bold text-gray-900 dark:text-slate-50 mb-2">
                Quel support technique proposez-vous ?
              </h4>
              <p className="text-gray-700 dark:text-slate-300 text-sm">
                Support 24/7 avec assistance technique dédiée et formation complète.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

