/**
 * Point d'entrée principal pour tous les utilitaires AgroNoya
 * Facilite l'importation des utilitaires dans l'application
 */

// Export de tous les utilitaires
export * from './formatting';
export * from './validation';
export * from './api';

// Utilitaires généraux
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine et merge les classes CSS avec Tailwind
 * @param {...string} inputs - Classes CSS à combiner
 * @returns {string} Classes CSS combinées
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Débounce une fonction
 * @param {Function} func - Fonction à débouncer
 * @param {number} wait - Délai d'attente en ms
 * @returns {Function} Fonction débouncée
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle une fonction
 * @param {Function} func - Fonction à throttler
 * @param {number} limit - Limite en ms
 * @returns {Function} Fonction throttlée
 */
export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Génère un ID unique
 * @param {string} prefix - Préfixe pour l'ID
 * @returns {string} ID unique
 */
export function generateId(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Copie du texte dans le presse-papiers
 * @param {string} text - Texte à copier
 * @returns {Promise<boolean>} True si succès
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
      console.error("Clipboard write failed", error);
    // Fallback pour les navigateurs plus anciens
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    } catch (err) {
      console.error('Fallback copy failed', err);
      document.body.removeChild(textArea);
      return false;
    }
  }
}

/**
 * Détecte si l'utilisateur est sur mobile
 * @returns {boolean} True si mobile
 */
export function isMobile() {
  if (typeof window === 'undefined') return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Détecte si l'utilisateur est sur tablette
 * @returns {boolean} True si tablette
 */
export function isTablet() {
  if (typeof window === 'undefined') return false;
  
  return /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent);
}

/**
 * Détecte le type d'appareil
 * @returns {string} Type d'appareil ('mobile', 'tablet', 'desktop')
 */
export function getDeviceType() {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
}

/**
 * Scroll fluide vers un élément
 * @param {string|Element} target - ID de l'élément ou élément DOM
 * @param {Object} options - Options de scroll
 */
export function scrollToElement(target, options = {}) {
  const element = typeof target === 'string' 
    ? document.getElementById(target) 
    : target;
    
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      ...options
    });
  }
}

/**
 * Scroll vers le haut de la page
 * @param {Object} options - Options de scroll
 */
export function scrollToTop(options = {}) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
    ...options
  });
}

/**
 * Obtient la position de scroll actuelle
 * @returns {Object} Position de scroll {x, y}
 */
export function getScrollPosition() {
  if (typeof window === 'undefined') return { x: 0, y: 0 };
  
  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop
  };
}

/**
 * Vérifie si un élément est visible dans le viewport
 * @param {Element} element - Élément à vérifier
 * @param {number} threshold - Seuil de visibilité (0-1)
 * @returns {boolean} True si visible
 */
export function isElementVisible(element) {
  if (!element || typeof window === 'undefined') return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
  
  return vertInView && horInView;
}

/**
 * Gère les erreurs de manière centralisée
 * @param {Error} error - Erreur à traiter
 * @param {Object} context - Contexte de l'erreur
 */
export function handleError(error, context = {}) {
  console.error('Erreur capturée:', error, context);
  
  // Envoi vers un service de monitoring (ex: Sentry)
  if (typeof window !== 'undefined' && window.Sentry) {
    window.Sentry.captureException(error, { extra: context });
  }
  
  // Analytics d'erreur
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      ...context
    });
  }
}

/**
 * Crée un délai (Promise)
 * @param {number} ms - Délai en millisecondes
 * @returns {Promise} Promise qui se résout après le délai
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retry une fonction avec un nombre maximum de tentatives
 * @param {Function} fn - Fonction à exécuter
 * @param {number} maxAttempts - Nombre maximum de tentatives
 * @param {number} delay - Délai entre les tentatives (ms)
 * @returns {Promise} Résultat de la fonction
 */
export async function retry(fn, maxAttempts = 3, delay = 1000) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      
      if (attempt === maxAttempts) {
        throw error;
      }
      
      await sleep(delay * attempt);
    }
  }
  
  throw lastError;
}

/**
 * Convertit une valeur en array si ce n'en est pas déjà un
 * @param {*} value - Valeur à convertir
 * @returns {Array} Array contenant la valeur
 */
export function ensureArray(value) {
  if (Array.isArray(value)) return value;
  if (value === null || value === undefined) return [];
  return [value];
}

/**
 * Supprime les doublons d'un array
 * @param {Array} array - Array à dédupliquer
 * @param {string|Function} key - Clé ou fonction pour la comparaison
 * @returns {Array} Array sans doublons
 */
export function uniqueArray(array, key = null) {
  if (!Array.isArray(array)) return [];
  
  if (!key) {
    return [...new Set(array)];
  }
  
  const seen = new Set();
  return array.filter(item => {
    const keyValue = typeof key === 'function' ? key(item) : item[key];
    if (seen.has(keyValue)) {
      return false;
    }
    seen.add(keyValue);
    return true;
  });
}

/**
 * Groupe un array par une clé
 * @param {Array} array - Array à grouper
 * @param {string|Function} key - Clé ou fonction pour le groupement
 * @returns {Object} Objet groupé
 */
export function groupBy(array, key) {
  if (!Array.isArray(array)) return {};
  
  return array.reduce((groups, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
    return groups;
  }, {});
}

