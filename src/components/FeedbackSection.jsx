import React, { useState, useEffect } from 'react';
import { Star, Send, MessageCircle, Users, TrendingUp, CheckCircle, Quote, ChevronLeft, ChevronRight, Heart, Award, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeedbackSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('feedback');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    comment: '',
    rating: 0
  });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animation d'apparition au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('feedback-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Auto-rotation des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { id: 'agrosol', name: 'AgroSol - Analyse du Sol', icon: '🌱' },
    { id: 'irrigation', name: 'AgroIrrigation - Irrigation Intelligente', icon: '💧' },
    { id: 'noyagpt', name: 'Noya GPT - Assistant IA', icon: '🤖' },
    { id: 'agrosat', name: 'AgroSat - Surveillance Satellite', icon: '🛰️' },
    { id: 'agrodrone', name: 'AgroDrone - Surveillance Aérienne', icon: '🚁' },
    { id: 'agrostore', name: 'AgroStore - Marché Digital', icon: '🛒' },
    { id: 'dashboard', name: 'AgroDashboard - Tableau de Bord', icon: '📊' }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Ben Salem",
      company: "Ferme Olivia",
      location: "Kairouan, Tunisie",
      service: "AgroSol",
      rating: 5,
      comment: "AgroNoya a révolutionné ma compréhension du sol. Mes rendements ont augmenté de 25% dès la première année grâce à l'analyse précise des nutriments !",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "Il y a 2 jours",
      verified: true
    },
    {
      id: 2,
      name: "Fatma Trabelsi",
      company: "Exploitation Bio Sfax",
      location: "Sfax, Tunisie",
      service: "AgroIrrigation",
      rating: 5,
      comment: "L'irrigation intelligente m'a fait économiser 40% d'eau tout en améliorant la qualité de mes légumes. Un investissement rentabilisé en 6 mois !",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      date: "Il y a 5 jours",
      verified: true
    },
    {
      id: 3,
      name: "Mohamed Gharbi",
      company: "Domaine Gharbi",
      location: "Monastir, Tunisie",
      service: "Noya GPT",
      rating: 5,
      comment: "L'assistant IA répond à toutes mes questions agricoles avec une précision impressionnante. C'est comme avoir un agronome expert disponible 24h/24 !",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "Il y a 1 semaine",
      verified: true
    },
    {
      id: 4,
      name: "Leila Mansouri",
      company: "Coopérative Agricole du Nord",
      location: "Bizerte, Tunisie",
      service: "AgroSat",
      rating: 5,
      comment: "La surveillance satellite nous permet de détecter les problèmes avant qu'ils ne deviennent critiques. Nos pertes ont diminué de 60% !",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "Il y a 2 semaines",
      verified: true
    }
  ];

  const stats = [
    { icon: Users, value: "2,500+", label: "Agriculteurs Satisfaits", color: "text-blue-600" },
    { icon: Star, value: "4.9/5", label: "Note Moyenne", color: "text-yellow-500" },
    { icon: TrendingUp, value: "+35%", label: "Augmentation Rendement", color: "text-green-600" },
    { icon: Award, value: "98%", label: "Taux de Satisfaction", color: "text-purple-600" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.comment && rating > 0) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', company: '', email: '', service: '', comment: '', rating: 0 });
        setRating(0);
      }, 3000);
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="feedback-section"
      className={`py-20 bg-gradient-to-br from-[rgb(var(--bg-primary-rgb))] via-[rgb(var(--bg-secondary-rgb))] to-[rgb(var(--bg-primary-rgb))] relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--agronoya-primary-rgb)/0.05)] via-transparent to-[rgb(var(--agronoya-primary-rgb)/0.05)]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgb(var(--agronoya-primary-rgb)/0.1)] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[rgb(var(--agronoya-primary-rgb)/0.1)] text-[rgb(var(--agronoya-primary-rgb))] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Votre Avis Compte Pour Nous
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(var(--text-primary-rgb))] mb-6">
            Partagez Votre Expérience
            <span className="block text-[rgb(var(--agronoya-primary-rgb))] mt-2">AgroNoya</span>
          </h2>
          <p className="text-xl text-[rgb(var(--text-secondary-rgb))] max-w-3xl mx-auto leading-relaxed">
            Rejoignez notre communauté d'agriculteurs innovants et partagez votre expérience avec nos solutions. 
            Votre feedback nous aide à améliorer continuellement nos services.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-[rgb(var(--bg-primary-rgb))] rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[rgb(var(--border-light-rgb))]"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-2xl font-bold text-[rgb(var(--text-primary-rgb))] mb-1">{stat.value}</div>
              <div className="text-sm text-[rgb(var(--text-secondary-rgb))]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-[rgb(var(--bg-primary-rgb))] rounded-2xl p-2 shadow-lg border border-[rgb(var(--border-light-rgb))]">
            <button
              onClick={() => setActiveTab('feedback')}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'feedback'
                  ? 'bg-[rgb(var(--agronoya-primary-rgb))] text-white shadow-lg'
                  : 'text-[rgb(var(--text-secondary-rgb))] hover:text-[rgb(var(--agronoya-primary-rgb))]'
              }`}
            >
              <MessageCircle className="w-5 h-5 inline-block mr-2" />
              Laisser un Avis
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'testimonials'
                  ? 'bg-[rgb(var(--agronoya-primary-rgb))] text-white shadow-lg'
                  : 'text-[rgb(var(--text-secondary-rgb))] hover:text-[rgb(var(--agronoya-primary-rgb))]'
              }`}
            >
              <Quote className="w-5 h-5 inline-block mr-2" />
              Témoignages
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'feedback' && (
            <div className="bg-[rgb(var(--bg-primary-rgb))] rounded-3xl shadow-2xl p-8 md:p-12 border border-[rgb(var(--border-light-rgb))]">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[rgb(var(--text-primary-rgb))] mb-4">
                      Partagez Votre Expérience
                    </h3>
                    <p className="text-[rgb(var(--text-secondary-rgb))]">
                      Votre avis nous aide à améliorer nos services et aide d'autres agriculteurs à faire le bon choix
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[rgb(var(--text-primary-rgb))] mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-[rgb(var(--border-default-rgb))] rounded-lg bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))] focus:ring-2 focus:ring-[rgb(var(--agronoya-primary-rgb))] focus:border-transparent transition-all duration-300"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[rgb(var(--text-primary-rgb))] mb-2">
                        Entreprise/Exploitation
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 border border-[rgb(var(--border-default-rgb))] rounded-lg bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))] focus:ring-2 focus:ring-[rgb(var(--agronoya-primary-rgb))] focus:border-transparent transition-all duration-300"
                        placeholder="Nom de votre exploitation"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[rgb(var(--text-primary-rgb))] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-[rgb(var(--border-default-rgb))] rounded-lg bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))] focus:ring-2 focus:ring-[rgb(var(--agronoya-primary-rgb))] focus:border-transparent transition-all duration-300"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[rgb(var(--text-primary-rgb))] mb-2">
                        Service utilisé
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 border border-[rgb(var(--border-default-rgb))] rounded-lg bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))] focus:ring-2 focus:ring-[rgb(var(--agronoya-primary-rgb))] focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.icon} {service.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[rgb(var(--text-primary-rgb))] mb-2">
                      Évaluation *
                    </label>
                    <div className="flex items-center gap-2 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => {
                            setRating(star);
                            setFormData({...formData, rating: star});
                          }}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="transition-all duration-200 hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= (hoveredRating || rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-[rgb(var(--border-medium-rgb))]'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-2 text-[rgb(var(--text-secondary-rgb))]">
                        {rating > 0 && `${rating}/5 étoiles`}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[rgb(var(--text-primary-rgb))] mb-2">
                      Votre commentaire *
                    </label>
                    <textarea
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 border border-[rgb(var(--border-default-rgb))] rounded-lg bg-[rgb(var(--bg-primary-rgb))] text-[rgb(var(--text-primary-rgb))] focus:ring-2 focus:ring-[rgb(var(--agronoya-primary-rgb))] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Partagez votre expérience avec AgroNoya..."
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-[rgb(var(--agronoya-primary-rgb))] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[rgb(var(--agronoya-primary-hover-rgb))] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Publier mon avis
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[rgb(var(--text-primary-rgb))] mb-4">
                    Merci pour votre avis !
                  </h3>
                  <p className="text-[rgb(var(--text-secondary-rgb))] mb-6">
                    Votre témoignage a été soumis avec succès. Il sera publié après modération.
                  </p>
                  <div className="flex justify-center">
                    <Heart className="w-6 h-6 text-red-500 animate-pulse" />
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-8">
              {/* Testimonial Carousel */}
              <div className="relative bg-[rgb(var(--bg-primary-rgb))] rounded-3xl shadow-2xl p-8 md:p-12 border border-[rgb(var(--border-light-rgb))] overflow-hidden">
                <div className="absolute top-6 right-6">
                  <Quote className="w-12 h-12 text-[rgb(var(--agronoya-primary-rgb)/0.2)]" />
                </div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <button
                      onClick={prevTestimonial}
                      className="w-12 h-12 bg-[rgb(var(--bg-secondary-rgb))] rounded-full flex items-center justify-center text-[rgb(var(--agronoya-primary-rgb))] hover:bg-[rgb(var(--agronoya-primary-rgb))] hover:text-white transition-all duration-300 shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <div className="flex-1 mx-8">
                      <div className="text-center">
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-xl md:text-2xl text-[rgb(var(--text-primary-rgb))] leading-relaxed mb-8 font-medium">
                          "{testimonials[currentTestimonial].comment}"
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                          <img
                            src={testimonials[currentTestimonial].avatar}
                            alt={testimonials[currentTestimonial].name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-[rgb(var(--agronoya-primary-rgb))]"
                          />
                          <div className="text-left">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold text-[rgb(var(--text-primary-rgb))] text-lg">
                                {testimonials[currentTestimonial].name}
                              </div>
                              {testimonials[currentTestimonial].verified && (
                                <CheckCircle className="w-5 h-5 text-blue-500" />
                              )}
                            </div>
                            <div className="text-[rgb(var(--text-secondary-rgb))] text-sm">
                              {testimonials[currentTestimonial].company}
                            </div>
                            <div className="text-[rgb(var(--text-tertiary-rgb))] text-xs">
                              {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={nextTestimonial}
                      className="w-12 h-12 bg-[rgb(var(--bg-secondary-rgb))] rounded-full flex items-center justify-center text-[rgb(var(--agronoya-primary-rgb))] hover:bg-[rgb(var(--agronoya-primary-rgb))] hover:text-white transition-all duration-300 shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {/* Dots indicator */}
                  <div className="flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? 'bg-[rgb(var(--agronoya-primary-rgb))] w-8'
                            : 'bg-[rgb(var(--border-medium-rgb))]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* All Testimonials Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-[rgb(var(--bg-primary-rgb))] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[rgb(var(--border-light-rgb))]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-[rgb(var(--text-primary-rgb))]">
                            {testimonial.name}
                          </h4>
                          {testimonial.verified && (
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                        <p className="text-sm text-[rgb(var(--text-secondary-rgb))]">
                          {testimonial.company}
                        </p>
                      </div>
                      <div className="text-xs text-[rgb(var(--text-tertiary-rgb))]">
                        {testimonial.date}
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-[rgb(var(--text-primary-rgb))] leading-relaxed mb-3">
                      "{testimonial.comment}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-[rgb(var(--agronoya-primary-rgb)/0.1)] text-[rgb(var(--agronoya-primary-rgb))] px-2 py-1 rounded-full">
                        {testimonial.service}
                      </span>
                      <span className="text-xs text-[rgb(var(--text-tertiary-rgb))]">
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[rgb(var(--agronoya-primary-rgb))] to-[rgb(var(--agronoya-primary-hover-rgb))] rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à Transformer Votre Agriculture ?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Rejoignez plus de 2,500 agriculteurs qui ont déjà révolutionné leur exploitation avec AgroNoya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[rgb(var(--agronoya-primary-rgb))] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Demander une Démo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[rgb(var(--agronoya-primary-rgb))] transition-all duration-300">
                Voir Nos Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;

