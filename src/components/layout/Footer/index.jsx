import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '/src/assets/agronoya_logo.png';

const TikTokIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  {
    href: 'https://www.facebook.com/profile.php?id=61579487317817',
    label: 'Facebook',
    icon: <Facebook className="h-4 w-4" />
  },
  {
    href: 'https://www.linkedin.com/company/agronoya',
    label: 'LinkedIn',
    icon: <Linkedin className="h-4 w-4" />
  },
  {
    href: 'https://www.tiktok.com/@agronoya.tn?_t=ZM-8z4AFZEH7E0&_r=1',
    label: 'TikTok',
    icon: <TikTokIcon />
  },
  {
    href: 'https://youtube.com/@agronoya?si=ccGDELIV-BOUwA70',
    label: 'YouTube',
    icon: <YoutubeIcon />
  }
];

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const quickLinks = [
    { label: t('accueil'), href: '/' },
    { label: t('solutions'), href: '/solutions' },
    { label: t('technologies'), href: '/#technologies' },
    { label: t('aPropos'), href: '/#apropos' },
    { label: t('contact'), href: '/contact' }
  ];

  const solutionLinks = [
    { label: t('agrosol'), href: '/solutions#agrosol' },
    { label: t('agroIrrigation'), href: '/solutions#irrigation' },
    { label: t('agrosat'), href: '/solutions#agrosat' },
    { label: t('noyaGpt'), href: '/solutions#noyagpt' },
    { label: t('agroDashboard'), href: '/solutions#dashboard' }
  ];

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-slate-200/70 bg-[#fbfdfb] text-slate-900 dark:border-white/10 dark:bg-[#081420] dark:text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-400/10" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/10" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-14 lg:px-8">
        <div className="mb-10 overflow-hidden rounded-[30px] border border-emerald-200/60 bg-white/80 p-8 shadow-[0_20px_60px_-35px_rgba(16,185,129,0.35)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                <Sparkles className="h-4 w-4" />
                {t('agricultureDonnee')}
              </div>

              <h3 className="mb-4 text-2xl font-bold leading-tight text-slate-950 dark:text-white md:text-3xl">
                {t('passezAgriculture')}
                <span className="text-emerald-600 dark:text-emerald-400">
                  {' '}{t('plusDurable')}
                </span>
              </h3>

              <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
                {t('agronoyaAccompagne')}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Demander une démo</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/solutions')}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-600 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-emerald-400 dark:hover:text-emerald-400"
              >
                Voir les solutions
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="xl:col-span-1">
            <img
              src={logo}
              alt="AgroNoya Logo"
              className="mb-5 h-12 w-auto"
            />

            <p className="max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300">
              Solutions AgriTech conçues pour aider les acteurs agricoles à mieux
              observer, mieux anticiper et mieux décider sur le terrain.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 shadow-[0_8px_25px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:bg-emerald-500"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold tracking-[0.02em] text-slate-950 dark:text-white">
              Navigation
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold tracking-[0.02em] text-slate-950 dark:text-white">
              Solutions
            </h3>

            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold tracking-[0.02em] text-slate-950 dark:text-white">
              Contact
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:admin@agronoya.ai"
                className="group flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
              >
                <span className="mt-0.5 rounded-full bg-emerald-500/10 p-2 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="leading-6">admin@agronoya.ai</span>
              </a>

              <a
                href="tel:+21695569319"
                className="group flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
              >
                <span className="mt-0.5 rounded-full bg-emerald-500/10 p-2 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="leading-6">+216 95 569 319</span>
              </a>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                <span className="mt-0.5 rounded-full bg-emerald-500/10 p-2 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="leading-6">Kairouan, Tunisie</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200/80 pt-6 dark:border-white/10">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} AgroNoya. Tous droits réservés.
            </p>

            <div className="flex flex-col gap-2 text-sm md:flex-row md:gap-6">
              <a
                href="/privacy-policy"
                className="text-slate-500 transition-colors duration-300 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                Politique de confidentialité
              </a>
              <a
                href="/terms-of-use"
                className="text-slate-500 transition-colors duration-300 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                Conditions d’utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;