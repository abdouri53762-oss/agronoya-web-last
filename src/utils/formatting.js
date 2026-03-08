/**
 * Utilitaires de formatage pour AgroNoya
 * Fonctions pour formater les dates, nombres, textes, etc.
 */

import { DATE_FORMATS, NUMBER_FORMATS, SUPPORTED_LANGUAGES } from '../constants/languages';

/**
 * Formate une date selon la locale et le format spécifiés
 * @param {Date|string|number} date - Date à formatter
 * @param {string} format - Format de date ('short', 'medium', 'long', 'full')
 * @param {string} locale - Locale à utiliser (défaut: 'fr-FR')
 * @returns {string} Date formatée
 */
export function formatDate(date, format = 'medium', locale = 'fr-FR') {
  if (!date) return '';
  
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return '';

  const options = getDateFormatOptions(format);
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Formate une date relative (il y a X jours, dans X heures, etc.)
 * @param {Date|string|number} date - Date à formatter
 * @param {string} locale - Locale à utiliser
 * @returns {string} Date relative formatée
 */
export function formatRelativeDate(date, locale = 'fr-FR') {
  if (!date) return '';
  
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return '';

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const now = new Date();
  const diffInSeconds = Math.floor((dateObj - now) / 1000);
  
  const intervals = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2592000 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 }
  ];

  for (const interval of intervals) {
    const count = Math.floor(Math.abs(diffInSeconds) / interval.seconds);
    if (count >= 1) {
      return rtf.format(diffInSeconds < 0 ? -count : count, interval.unit);
    }
  }

  return rtf.format(0, 'second');
}

/**
 * Formate un nombre avec séparateurs de milliers
 * @param {number} number - Nombre à formatter
 * @param {string} locale - Locale à utiliser
 * @param {Object} options - Options de formatage
 * @returns {string} Nombre formaté
 */
export function formatNumber(number, locale = 'fr-FR', options = {}) {
  if (typeof number !== 'number' || isNaN(number)) return '0';
  
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options
  }).format(number);
}

/**
 * Formate un prix avec devise
 * @param {number} price - Prix à formatter
 * @param {string} currency - Code de devise (EUR, USD, etc.)
 * @param {string} locale - Locale à utiliser
 * @returns {string} Prix formaté
 */
export function formatPrice(price, currency = 'EUR', locale = 'fr-FR') {
  if (typeof price !== 'number' || isNaN(price)) return '0 €';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(price);
}

/**
 * Formate un pourcentage
 * @param {number} value - Valeur à formatter (0.5 = 50%)
 * @param {number} decimals - Nombre de décimales
 * @param {string} locale - Locale à utiliser
 * @returns {string} Pourcentage formaté
 */
export function formatPercentage(value, decimals = 1, locale = 'fr-FR') {
  if (typeof value !== 'number' || isNaN(value)) return '0%';
  
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

/**
 * Formate une taille de fichier en unités lisibles
 * @param {number} bytes - Taille en bytes
 * @param {number} decimals - Nombre de décimales
 * @returns {string} Taille formatée (ex: "1.5 MB")
 */
export function formatFileSize(bytes, decimals = 2) {
  if (bytes === 0) return '0 B';
  
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
}

/**
 * Tronque un texte à une longueur donnée
 * @param {string} text - Texte à tronquer
 * @param {number} maxLength - Longueur maximale
 * @param {string} suffix - Suffixe à ajouter (défaut: ...)
 * @returns {string} Texte tronqué
 */
export function truncateText(text, maxLength, suffix = '...') {
  if (!text || typeof text !== 'string') return '';
  if (text.length <= maxLength) return text;
  
  return text.substring(0, maxLength - suffix.length).trim() + suffix;
}

/**
 * Capitalise la première lettre d'une chaîne
 * @param {string} str - Chaîne à capitaliser
 * @returns {string} Chaîne capitalisée
 */
export function capitalize(str) {
  if (!str || typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Convertit une chaîne en titre (première lettre de chaque mot en majuscule)
 * @param {string} str - Chaîne à convertir
 * @returns {string} Chaîne en format titre
 */
export function toTitleCase(str) {
  if (!str || typeof str !== 'string') return '';
  
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

/**
 * Convertit une chaîne en slug URL-friendly
 * @param {string} text - Texte à convertir
 * @returns {string} Slug généré
 */
export function slugify(text) {
  if (!text || typeof text !== 'string') return '';
  
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9 -]/g, '') // Supprime les caractères spéciaux
    .replace(/\s+/g, '-') // Remplace les espaces par des tirets
    .replace(/-+/g, '-') // Supprime les tirets multiples
    .replace(/^-+|-+$/g, ''); // Supprime les tirets en début/fin
}

/**
 * Formate un numéro de téléphone français
 * @param {string} phone - Numéro de téléphone
 * @returns {string} Numéro formaté
 */
export function formatPhoneNumber(phone) {
  if (!phone || typeof phone !== 'string') return '';
  
  // Supprime tous les caractères non numériques
  const cleaned = phone.replace(/\D/g, '');
  
  // Formate selon le pattern français
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
  }
  
  return phone; // Retourne le numéro original si le format n'est pas reconnu
}

/**
 * Obtient les options de formatage de date selon le format demandé
 * @param {string} format - Format de date
 * @returns {Object} Options pour Intl.DateTimeFormat
 */
function getDateFormatOptions(format) {
  const formats = {
    short: { day: '2-digit', month: '2-digit', year: 'numeric' },
    medium: { day: '2-digit', month: 'short', year: 'numeric' },
    long: { day: '2-digit', month: 'long', year: 'numeric' },
    full: { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' },
    time: { hour: '2-digit', minute: '2-digit' },
    datetime: { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    }
  };
  
  return formats[format] || formats.medium;
}

