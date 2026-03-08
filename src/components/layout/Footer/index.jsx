import React from "react";
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";

const TikTokIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61579487317817",
    label: "Facebook",
    icon: <Facebook className="h-4 w-4" />,
  },
  {
    href: "https://www.linkedin.com/feed/",
    label: "LinkedIn",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    href: "https://www.tiktok.com/@agronoya.tn?_t=ZM-8z4AFZEH7E0&_r=1",
    label: "TikTok",
    icon: <TikTokIcon />,
  },
  {
    href: "https://youtube.com/@agronoya?si=ccGDELIV-BOUwA70",
    label: "YouTube",
    icon: <YoutubeIcon />,
  },
];

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Technologies", href: "/#technologies" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "À propos", href: "/#apropos" },
];

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-slate-200/70 bg-[#fcfdfc] text-slate-900 dark:border-white/10 dark:bg-[#081420] dark:text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-400/10" />
        <div className="absolute -right-12 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/10" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img
              src="/src/assets/agronoya_logo.png"
              alt="AgroNoya Logo"
              className="mb-5 h-12 w-auto"
            />

            <p className="max-w-md text-sm leading-7 text-slate-600/90 dark:text-slate-300/90">
              Révolutionnons l’agriculture avec des solutions de smart farming
              innovantes. Optimisez vos rendements, réduisez vos coûts et
              préservez l’environnement.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 shadow-[0_8px_25px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold tracking-[0.02em] text-slate-950 dark:text-white">
              Liens rapides
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
              Contact
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:admin@agronoya.ai"
                className="group flex items-start gap-3 text-sm text-slate-600 transition-colors duration-300 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                <span className="mt-0.5 rounded-full bg-emerald-500/10 p-2 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="leading-6">admin@agronoya.ai</span>
              </a>

              <a
                href="tel:+21695569319"
                className="group flex items-start gap-3 text-sm text-slate-600 transition-colors duration-300 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                <span className="mt-0.5 rounded-full bg-emerald-500/10 p-2 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="leading-6">+216 95 569 319</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="mt-0.5 rounded-full bg-emerald-500/10 p-2 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="leading-6">Kairouan, Tunisia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200/80 pt-6 dark:border-white/10">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2024 AgroNoya. Tous droits réservés.
            </p>

            <div className="flex flex-col gap-2 text-sm md:flex-row md:gap-6">
              <a
                href="#"
                className="text-slate-500 transition-colors duration-300 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
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