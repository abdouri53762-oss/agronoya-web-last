/**
 * Point d'entrée principal pour toutes les constantes AgroNoya
 * Facilite l'importation des constantes dans l'application
 */

// Import des constantes par catégorie
export * from './colors';
export * from './routes';
export * from './languages';

// Import des objets par défaut
export { default as COLORS } from './colors';
export { default as ROUTES } from './routes';
export { default as LANGUAGES } from './languages';

// Configuration générale de l'application
export const APP_CONFIG = {
  name: 'AgroNoya',
  version: '1.0.0',
  description: 'Plateforme intelligente pour une agriculture connectée et durable',
  author: 'AgroNoya Team',
  website: 'https://agronoya.com',
  supportEmail: 'support@agronoya.com',
  contactEmail: 'contact@agronoya.com'
};

// Thèmes disponibles
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
};

// Breakpoints responsive (Tailwind CSS)
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px'
};

// Configuration des animations
export const ANIMATIONS = {
  DURATION: {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
    VERY_SLOW: 1000
  },
  EASING: {
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out',
    LINEAR: 'linear'
  },
  SPRING: {
    BOUNCY: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    SMOOTH: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }
};

// Configuration du localStorage
export const STORAGE_KEYS = {
  THEME: 'agronoya-theme',
  LANGUAGE: 'agronoya-language',
  USER_PREFERENCES: 'agronoya-preferences',
  AUTH_TOKEN: 'agronoya-auth-token',
  REFRESH_TOKEN: 'agronoya-refresh-token'
};

// Messages d'erreur standardisés
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Erreur de connexion réseau',
  VALIDATION_ERROR: 'Erreur de validation des données',
  AUTHENTICATION_ERROR: 'Erreur d\'authentification',
  AUTHORIZATION_ERROR: 'Accès non autorisé',
  NOT_FOUND_ERROR: 'Ressource non trouvée',
  SERVER_ERROR: 'Erreur serveur interne',
  GENERIC_ERROR: 'Une erreur inattendue s\'est produite'
};

// Configuration des API
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL ?? 'https://api.agronoya.com',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000
};

// Limites et contraintes
export const LIMITS = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_UPLOAD_FILES: 10,
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,
  MAX_USERNAME_LENGTH: 50,
  MAX_EMAIL_LENGTH: 254
};

// Types de fichiers acceptés
export const ACCEPTED_FILE_TYPES = {
  IMAGES: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  DOCUMENTS: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  SPREADSHEETS: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  ALL: ['image/*', 'application/pdf', '.doc', '.docx', '.xls', '.xlsx']
};

// Configuration des notifications
export const NOTIFICATION_CONFIG = {
  DURATION: {
    SHORT: 3000,
    MEDIUM: 5000,
    LONG: 8000,
    PERSISTENT: 0
  },
  POSITION: {
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    TOP_CENTER: 'top-center',
    BOTTOM_CENTER: 'bottom-center'
  }
};

