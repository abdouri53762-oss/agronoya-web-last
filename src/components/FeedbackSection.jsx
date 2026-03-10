import React, { useEffect, useRef, useState } from 'react';
import {
  Star,
  Send,
  MessageCircle,
  Users,
  TrendingUp,
  CheckCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SERVICES = [
  { id: 'agrosol', name: 'AgroSol - Analyse du Sol', icon: '🌱' },
  {
    id: 'irrigation',
    name: 'AgroIrrigation - Irrigation Intelligente',
    icon: '💧'
  },
  { id: 'noyagpt', name: 'Noya GPT - Assistant IA', icon: '🤖' },
  { id: 'agrosat', name: 'AgroSat - Surveillance Satellite', icon: '🛰️' },
  { id: 'agrodrone', name: 'AgroDrone - Surveillance Aérienne', icon: '🚁' },
  { id: 'agrostore', name: 'AgroStore - Marché Digital', icon: '🛒' },
  { id: 'dashboard', name: 'AgroDashboard - Tableau de Bord', icon: '📊' }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ahmed Ben Salem',
    company: 'Ferme Olivia',
    location: 'Kairouan, Tunisie',
    service: 'AgroSol',
    rating: 5,
    comment:
      "AgroNoya nous a aidés à mieux comprendre l’état de nos sols et à ajuster nos décisions plus rapidement. Nous avons gagné en visibilité et en précision sur des choix qui étaient auparavant beaucoup plus empiriques.",
    impact: 'Meilleure précision agronomique',
    initials: 'AB',
    date: 'Utilisateur récent',
    verified: true
  },
  {
    id: 2,
    name: 'Fatma Trabelsi',
    company: 'Exploitation Bio Sfax',
    location: 'Sfax, Tunisie',
    service: 'AgroIrrigation',
    rating: 5,
    comment:
      "La logique de pilotage de l’irrigation nous a permis de mieux répartir l’eau et d’éviter plusieurs décisions approximatives. La plateforme apporte surtout plus de confiance dans le suivi quotidien.",
    impact: 'Pilotage hydrique amélioré',
    initials: 'FT',
    date: 'Cas client',
    verified: true
  },
  {
    id: 3,
    name: 'Mohamed Gharbi',
    company: 'Domaine Gharbi',
    location: 'Monastir, Tunisie',
    service: 'Noya GPT',
    rating: 5,
    comment:
      "L’assistant IA rend les informations beaucoup plus accessibles. Il nous fait gagner du temps, simplifie les analyses et nous aide à poser les bonnes questions au bon moment.",
    impact: 'Décision plus rapide',
    initials: 'MG',
    date: 'Utilisateur actif',
    verified: true
  }
];

const STATS = [
  {
    icon: Users,
    value: '2 500+',
    label: 'Exploitations accompagnées',
    color: 'text-blue-400'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Satisfaction moyenne',
    color: 'text-yellow-400'
  },
  {
    icon: TrendingUp,
    value: 'Jusqu’à 35%',
    label: 'd’amélioration du pilotage',
    color: 'text-emerald-400'
  }
];

const FeedbackSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const [activeTab, setActiveTab] = useState('testimonials');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    comment: '',
    rating: 0
  });

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isCarouselPaused || activeTab !== 'testimonials') return undefined;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isCarouselPaused, activeTab]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.comment || rating === 0) return;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        service: '',
        comment: '',
        rating: 0
      });
      setRating(0);
      setHoveredRating(0);
    }, 2500);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const featured = TESTIMONIALS[currentTestimonial];

  return (
    <section
      id="feedback-section"
      ref={sectionRef}
      className={`relative overflow-hidden bg-[rgb(var(--bg-primary-rgb))] py-20 text-[rgb(var(--text-primary-rgb))] transition-all duration-1000 md:py-24 lg:py-28 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[rgb(var(--agronoya-primary-rgb)/0.10)] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-16 top-24 h-2 w-2 animate-pulse rounded-full bg-primary/30" />
        <div className="absolute right-20 top-36 h-3 w-3 animate-pulse rounded-full bg-emerald-400/30 delay-300" />
        <div className="absolute bottom-16 left-1/3 h-2 w-2 animate-pulse rounded-full bg-blue-400/30 delay-700" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--agronoya-primary-rgb)/0.18)] bg-[rgb(var(--agronoya-primary-rgb)/0.10)] px-5 py-2.5 text-sm font-semibold text-[rgb(var(--agronoya-primary-rgb))] shadow-lg backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            {t('ilsFontConfiance')}
          </div>

          <h2 className="mb-6 text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {t('ceQueUtilisateurs')}
            <span className="block text-[rgb(var(--agronoya-primary-rgb))]">
              {t('disentAgroNoya')}
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">
            {t('retoursConcrets')}
          </p>
        </div>

        <div className="mx-auto mb-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[26px] border border-[rgb(var(--border-light-rgb))] bg-[rgb(var(--bg-secondary-rgb))]/90 p-6 text-center shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <stat.icon className={`mx-auto mb-4 h-8 w-8 ${stat.color}`} />
              <div className="mb-1 text-3xl font-black text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-12 flex justify-center">
          <div className="rounded-2xl border border-[rgb(var(--border-light-rgb))] bg-[rgb(var(--bg-secondary-rgb))]/90 p-2 shadow-lg backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setActiveTab('testimonials')}
              className={`rounded-xl px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === 'testimonials'
                  ? 'bg-[rgb(var(--agronoya-primary-rgb))] text-white shadow-lg'
                  : 'text-text-secondary hover:text-[rgb(var(--agronoya-primary-rgb))]'
              }`}
            >
              <Quote className="mr-2 inline-block h-5 w-5" />
              {t('temoignages')}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('feedback')}
              className={`rounded-xl px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === 'feedback'
                  ? 'bg-[rgb(var(--agronoya-primary-rgb))] text-white shadow-lg'
                  : 'text-text-secondary hover:text-[rgb(var(--agronoya-primary-rgb))]'
              }`}
            >
              <MessageCircle className="mr-2 inline-block h-5 w-5" />
              Laisser un avis
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          {activeTab === 'testimonials' && (
            <div className="space-y-8">
              <div
                className="relative overflow-hidden rounded-[34px] border border-[rgb(var(--border-light-rgb))] bg-[rgb(var(--bg-secondary-rgb))]/95 p-8 shadow-2xl backdrop-blur-xl md:p-12"
                onMouseEnter={() => setIsCarouselPaused(true)}
                onMouseLeave={() => setIsCarouselPaused(false)}
              >
                <div className="absolute right-6 top-6">
                  <Quote className="h-14 w-14 text-[rgb(var(--agronoya-primary-rgb)/0.16)]" />
                </div>

                <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                  <div>
                    <div className="mb-5 flex items-center gap-2">
                      {Array.from({ length: featured.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-current text-yellow-400"
                        />
                      ))}
                    </div>

                    <blockquote className="mb-8 text-xl font-medium leading-relaxed text-foreground md:text-2xl">
                      “{featured.comment}”
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgb(var(--agronoya-primary-rgb)/0.18)] bg-[rgb(var(--agronoya-primary-rgb)/0.10)] text-lg font-bold text-[rgb(var(--agronoya-primary-rgb))]">
                        {featured.initials}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-semibold text-foreground">
                            {featured.name}
                          </div>
                          {featured.verified && (
                            <CheckCircle className="h-5 w-5 text-blue-500" />
                          )}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {featured.company}
                        </div>
                        <div className="text-xs text-text-secondary/80">
                          {featured.location} • {featured.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-[rgb(var(--border-light-rgb))] bg-[rgb(var(--bg-primary-rgb))]/70 p-6 shadow-lg">
                    <div className="mb-4 inline-flex rounded-full border border-[rgb(var(--agronoya-primary-rgb)/0.18)] bg-[rgb(var(--agronoya-primary-rgb)/0.10)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--agronoya-primary-rgb))]">
                      Impact observé
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-foreground">
                      {featured.impact}
                    </h3>

                    <p className="mb-6 text-sm leading-7 text-text-secondary md:text-base">
                      Retour d’expérience lié à l’usage de{' '}
                      <span className="font-semibold text-foreground">
                        {featured.service}
                      </span>
                      , dans un contexte réel d’exploitation agricole.
                    </p>

                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={prevTestimonial}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgb(var(--border-light-rgb))] bg-[rgb(var(--bg-secondary-rgb))] text-[rgb(var(--agronoya-primary-rgb))] transition-all duration-300 hover:bg-[rgb(var(--agronoya-primary-rgb))] hover:text-white"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <div className="flex gap-2">
                        {TESTIMONIALS.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setCurrentTestimonial(index)}
                            className={`h-3 rounded-full transition-all duration-300 ${
                              index === currentTestimonial
                                ? 'w-8 bg-[rgb(var(--agronoya-primary-rgb))]'
                                : 'w-3 bg-[rgb(var(--border-medium-rgb))]'
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={nextTestimonial}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgb(var(--border-light-rgb))] bg-[rgb(var(--bg-secondary-rgb))] text-[rgb(var(--agronoya-primary-rgb))] transition-all duration-300 hover:bg-[rgb(var(--agronoya-primary-rgb))] hover:text-white"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {TESTIMONIALS.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="rounded-[26px] border border-[rgb(var(--border-light-rgb))] bg-[rgb(var(--bg-secondary-rgb))]/90 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgb(var(--agronoya-primary-rgb)/0.18)] bg-[rgb(var(--agronoya-primary-rgb)/0.10)] font-bold text-[rgb(var(--agronoya-primary-rgb))]">
                        {testimonial.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          {testimonial.verified && (
                            <CheckCircle className="h-4 w-4 text-blue-500" />
                          )}
                        </div>
                        <p className="text-sm text-text-secondary">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="mb-3 flex">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-current text-yellow-400"
                          />
                        )
                      )}
                    </div>

                    <p className="mb-4 line-clamp-4 text-sm leading-7 text-text-secondary">
                      “{testimonial.comment}”
                    </p>

                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-[rgb(var(--agronoya-primary-rgb)/0.10)] px-3 py-1 text-xs font-medium text-[rgb(var(--agronoya-primary-rgb))]">
                        {testimonial.service}
                      </span>
                      <span className="text-xs text-text-secondary/80">
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="rounded-[34px] border border-[rgb(var(--border-light-rgb))] bg-[rgb(var(--bg-secondary-rgb))]/95 p-8 shadow-2xl backdrop-blur-xl md:p-12">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="mb-8 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-foreground">
                      Partagez votre retour d’expérience
                    </h3>
                    <p className="mx-auto max-w-2xl text-text-secondary">
                      Votre avis nous aide à améliorer la plateforme et à mieux
                      répondre aux besoins des agriculteurs et des acteurs du
                      secteur.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange('name', e.target.value)
                        }
                        className="w-full rounded-xl border border-[rgb(var(--border-default-rgb))] bg-[rgb(var(--bg-primary-rgb))] px-4 py-3 text-foreground transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-[rgb(var(--agronoya-primary-rgb))]"
                        placeholder="Votre nom"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Exploitation / entreprise
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange('company', e.target.value)
                        }
                        className="w-full rounded-xl border border-[rgb(var(--border-default-rgb))] bg-[rgb(var(--bg-primary-rgb))] px-4 py-3 text-foreground transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-[rgb(var(--agronoya-primary-rgb))]"
                        placeholder="Nom de votre structure"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange('email', e.target.value)
                        }
                        className="w-full rounded-xl border border-[rgb(var(--border-default-rgb))] bg-[rgb(var(--bg-primary-rgb))] px-4 py-3 text-foreground transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-[rgb(var(--agronoya-primary-rgb))]"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Solution utilisée
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          handleInputChange('service', e.target.value)
                        }
                        className="w-full rounded-xl border border-[rgb(var(--border-default-rgb))] bg-[rgb(var(--bg-primary-rgb))] px-4 py-3 text-foreground transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-[rgb(var(--agronoya-primary-rgb))]"
                      >
                        <option value="">Sélectionnez une solution</option>
                        {SERVICES.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.icon} {service.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Votre évaluation *
                    </label>

                    <div className="mb-2 flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => {
                            setRating(star);
                            handleInputChange('rating', star);
                          }}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="transition-all duration-200 hover:scale-110"
                        >
                          <Star
                            className={`h-8 w-8 ${
                              star <= (hoveredRating || rating)
                                ? 'fill-current text-yellow-400'
                                : 'text-[rgb(var(--border-medium-rgb))]'
                            }`}
                          />
                        </button>
                      ))}

                      <span className="ml-2 text-sm text-text-secondary">
                        {rating > 0 ? `${rating}/5 étoiles` : 'Choisissez une note'}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Votre commentaire *
                    </label>
                    <textarea
                      value={formData.comment}
                      onChange={(e) =>
                        handleInputChange('comment', e.target.value)
                      }
                      rows={5}
                      className="w-full resize-none rounded-xl border border-[rgb(var(--border-default-rgb))] bg-[rgb(var(--bg-primary-rgb))] px-4 py-3 text-foreground transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-[rgb(var(--agronoya-primary-rgb))]"
                      placeholder="Expliquez ce que la plateforme vous a apporté, ce que vous appréciez, ou ce qui pourrait être encore amélioré."
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[rgb(var(--agronoya-primary-rgb))] to-[rgb(var(--agronoya-primary-hover-rgb))] px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <Send className="h-5 w-5" />
                      Publier mon avis
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    Merci pour votre retour
                  </h3>

                  <p className="mb-6 text-text-secondary">
                    Votre témoignage a bien été pris en compte et sera relu
                    avant publication.
                  </p>

                  <div className="flex justify-center">
                    <Heart className="h-6 w-6 animate-pulse text-red-500" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-16 text-center md:mt-20">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[34px] border border-[rgb(var(--agronoya-primary-rgb)/0.18)] bg-gradient-to-r from-[rgb(var(--agronoya-primary-rgb))] to-[rgb(var(--agronoya-primary-hover-rgb))] p-8 text-white shadow-2xl md:p-12">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
              Découvrez pourquoi les exploitations font confiance à AgroNoya
            </h3>

            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
              Passez d’une agriculture réactive à une agriculture mieux pilotée,
              plus précise et plus rentable grâce à une plateforme pensée pour
              le terrain.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-[rgb(var(--agronoya-primary-rgb))] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-2xl"
              >
                Demander une démo
              </button>

              <button
                type="button"
                onClick={() => navigate('/solutions')}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[rgb(var(--agronoya-primary-rgb))]"
              >
                Voir nos solutions
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;