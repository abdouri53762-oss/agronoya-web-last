/**
 * Constantes de langues et internationalisation pour AgroNoya
 */

// Langues supportées
export const SUPPORTED_LANGUAGES = {
  FR: 'fr',
  EN: 'en'
};

// Configuration des langues
export const LANGUAGE_CONFIG = {
  [SUPPORTED_LANGUAGES.FR]: {
    code: 'fr',
    name: 'Français',
    nativeName: 'Français',
    flag: '🇫🇷',
    locale: 'fr-FR',
    direction: 'ltr'
  },
  [SUPPORTED_LANGUAGES.EN]: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    locale: 'en-US',
    direction: 'ltr'
  }
};

// Langue par défaut
export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.FR;

// Clés de stockage
export const LANGUAGE_STORAGE_KEY = 'agronoya-language';

// Namespaces de traduction
export const TRANSLATION_NAMESPACES = {
  COMMON: 'common',
  NAVIGATION: 'navigation',
  FORMS: 'forms',
  ERRORS: 'errors',
  SOLUTIONS: 'solutions',
  TECHNOLOGIES: 'technologies',
  PRICING: 'pricing'
};

// Configuration i18next
export const I18N_CONFIG = {
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: Object.values(SUPPORTED_LANGUAGES),
  defaultNS: TRANSLATION_NAMESPACES.COMMON,
  ns: Object.values(TRANSLATION_NAMESPACES),
  interpolation: {
    escapeValue: false
  },
  detection: {
    order: ['localStorage', 'navigator', 'htmlTag'],
    caches: ['localStorage'],
    lookupLocalStorage: LANGUAGE_STORAGE_KEY
  }
};

// Formats de date par langue
export const DATE_FORMATS = {
  [SUPPORTED_LANGUAGES.FR]: {
    short: 'dd/MM/yyyy',
    medium: 'dd MMM yyyy',
    long: 'dd MMMM yyyy',
    full: 'EEEE dd MMMM yyyy'
  },
  [SUPPORTED_LANGUAGES.EN]: {
    short: 'MM/dd/yyyy',
    medium: 'MMM dd, yyyy',
    long: 'MMMM dd, yyyy',
    full: 'EEEE, MMMM dd, yyyy'
  }
};

// Formats de nombre par langue
export const NUMBER_FORMATS = {
  [SUPPORTED_LANGUAGES.FR]: {
    decimal: ',',
    thousands: ' ',
    currency: '€'
  },
  [SUPPORTED_LANGUAGES.EN]: {
    decimal: '.',
    thousands: ',',
    currency: '$'
  }
};

// Export par défaut
export default {
  SUPPORTED_LANGUAGES,
  LANGUAGE_CONFIG,
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  TRANSLATION_NAMESPACES,
  I18N_CONFIG,
  DATE_FORMATS,
  NUMBER_FORMATS
};

