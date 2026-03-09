import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  Facebook,
  Linkedin,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

// Icône TikTok personnalisée
const TikTokIcon = () => (
  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['agronoyasmartfarm@gmail.com'],
      description: 'Contactez-nous par email',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      details: ['+216 95 569 319'],
      description: 'Appelez-nous directement',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adresse',
      details: ['Kairouan, Tunisia'],
      description: 'Notre siège social',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horaires',
      details: ['Lun - Ven: 8h00 - 18h00', 'Sam: 9h00 - 13h00'],
      description: "Heures d'ouverture",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-200 dark:border-emerald-400/20">
            <Sparkles className="w-4 h-4" />
            Contact AgroNoya
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-slate-50 mb-6 leading-tight">
            Parlons de votre
            <span className="block text-[#57D53B] dark:text-green-400 mt-2">
              transformation agricole
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Prêt à révolutionner votre agriculture ? Notre équipe vous accompagne
            pour comprendre vos besoins, cadrer votre projet et vous orienter vers
            la meilleure solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          {/* Form */}
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-[2rem] shadow-2xl p-8 border border-gray-200 dark:border-slate-700">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50 mb-2">
                Envoyez-nous un message
              </h3>
              <p className="text-gray-600 dark:text-slate-400">
                Décrivez votre besoin et nous reviendrons vers vous rapidement.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-2xl focus:ring-2 focus:ring-[#57D53B] focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-slate-50 placeholder-gray-500 dark:placeholder-slate-400"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-2xl focus:ring-2 focus:ring-[#57D53B] focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-slate-50 placeholder-gray-500 dark:placeholder-slate-400"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                      Entreprise / Exploitation
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-2xl focus:ring-2 focus:ring-[#57D53B] focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-slate-50 placeholder-gray-500 dark:placeholder-slate-400"
                      placeholder="Nom de votre exploitation"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-2xl focus:ring-2 focus:ring-[#57D53B] focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-slate-50 placeholder-gray-500 dark:placeholder-slate-400"
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
                    className="w-full px-4 py-3.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-2xl focus:ring-2 focus:ring-[#57D53B] focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-slate-50"
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
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 dark:text-slate-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-3xl focus:ring-2 focus:ring-[#57D53B] focus:border-transparent outline-none transition-all duration-300 resize-none text-gray-900 dark:text-slate-50 placeholder-gray-500 dark:placeholder-slate-400"
                      placeholder="Décrivez votre projet, vos besoins ou votre contexte..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#57D53B] hover:bg-[#4fc433] text-white py-4 rounded-2xl font-semibold flex items-center justify-center group transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Envoyer le message
                </button>
              </form>
            ) : (
              <div className="text-center py-14">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-slate-50 mb-3">
                  Message envoyé avec succès
                </h4>
                <p className="text-gray-600 dark:text-slate-300">
                  Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                </p>
              </div>
            )}
          </div>

          {/* Right side */}
          <div className="space-y-8">
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-slate-700 hover:border-[#57D53B]/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#57D53B] rounded-2xl flex items-center justify-center text-white mr-4 shadow-md">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-slate-50">
                        {info.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-slate-400">
                        {info.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-gray-700 dark:text-slate-300 leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-slate-700">
              <h4 className="text-xl font-bold text-gray-900 dark:text-slate-50 mb-6">
                Suivez-nous sur les réseaux sociaux
              </h4>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61579487317817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md"
                  aria-label="Suivez-nous sur Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md"
                  aria-label="Suivez-nous sur LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>

                <a
                  href="https://www.tiktok.com/@agronoya.tn?_t=ZM-8z4AFZEH7E0&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-gray-800 to-black rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md"
                  aria-label="Suivez-nous sur TikTok"
                >
                  <TikTokIcon />
                </a>

                <a
                  href="https://youtube.com/@agronoya?si=ccGDELIV-BOUwA70"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md"
                  aria-label="Suivez-nous sur YouTube"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-gradient-to-br from-[#57D53B] to-green-600 rounded-[2rem] p-7 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-3">Réponse rapide garantie</h4>
              <p className="mb-5 text-green-50 leading-relaxed">
                Notre équipe vous répond sous 24h pour toute demande d'information,
                de démonstration ou de devis.
              </p>

              <button className="bg-white/15 border border-white/20 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/25 transition-all duration-300 inline-flex items-center gap-2">
                Planifier un appel
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-slate-50 mb-3">
              Questions fréquentes
            </h3>
            <p className="text-gray-600 dark:text-slate-300">
              Les réponses rapides aux questions les plus courantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-slate-700">
              <h4 className="font-bold text-gray-900 dark:text-slate-50 mb-3">
                Quel est le délai de réponse ?
              </h4>
              <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
                Nous répondons à toutes les demandes sous 24h ouvrées maximum.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-slate-700">
              <h4 className="font-bold text-gray-900 dark:text-slate-50 mb-3">
                Proposez-vous une démonstration gratuite ?
              </h4>
              <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
                Oui, nous offrons une démonstration personnalisée gratuite de nos solutions.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-slate-700">
              <h4 className="font-bold text-gray-900 dark:text-slate-50 mb-3">
                Quel support technique proposez-vous ?
              </h4>
              <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
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