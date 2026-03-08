/**
 * Utilitaires de validation pour AgroNoya
 * Fonctions pour valider emails, téléphones, mots de passe, etc.
 */

import { LIMITS, ACCEPTED_FILE_TYPES } from '../constants';

/**
 * Valide une adresse email
 * @param {string} email - Email à valider
 * @returns {boolean} True si l'email est valide
 */
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim()) && email.length <= LIMITS.MAX_EMAIL_LENGTH;
}

/**
 * Valide un numéro de téléphone français
 * @param {string} phone - Numéro à valider
 * @returns {boolean} True si le numéro est valide
 */
export function isValidPhoneNumber(phone) {
  if (!phone || typeof phone !== 'string') return false;
  
  // Formats acceptés: 01 23 45 67 89, 0123456789, +33123456789, etc.
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  return phoneRegex.test(phone.trim());
}

/**
 * Valide un mot de passe selon les critères de sécurité
 * @param {string} password - Mot de passe à valider
 * @returns {Object} Résultat de validation avec détails
 */
export function validatePassword(password) {
  if (!password || typeof password !== 'string') {
    return {
      isValid: false,
      errors: ['Le mot de passe est requis'],
      strength: 0
    };
  }

  const errors = [];
  let strength = 0;

  // Longueur minimale
  if (password.length < LIMITS.MIN_PASSWORD_LENGTH) {
    errors.push(`Le mot de passe doit contenir au moins ${LIMITS.MIN_PASSWORD_LENGTH} caractères`);
  } else {
    strength += 1;
  }

  // Longueur maximale
  if (password.length > LIMITS.MAX_PASSWORD_LENGTH) {
    errors.push(`Le mot de passe ne peut pas dépasser ${LIMITS.MAX_PASSWORD_LENGTH} caractères`);
  }

  // Au moins une minuscule
  if (!/[a-z]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins une lettre minuscule');
  } else {
    strength += 1;
  }

  // Au moins une majuscule
  if (!/[A-Z]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins une lettre majuscule');
  } else {
    strength += 1;
  }

  // Au moins un chiffre
  if (!/\d/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins un chiffre');
  } else {
    strength += 1;
  }

  // Au moins un caractère spécial
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins un caractère spécial');
  } else {
    strength += 1;
  }

  // Bonus pour la longueur
  if (password.length >= 12) strength += 1;
  if (password.length >= 16) strength += 1;

  return {
    isValid: errors.length === 0,
    errors,
    strength: Math.min(strength, 5), // Max 5
    strengthLabel: getPasswordStrengthLabel(Math.min(strength, 5))
  };
}

/**
 * Valide un nom d'utilisateur
 * @param {string} username - Nom d'utilisateur à valider
 * @returns {Object} Résultat de validation
 */
export function validateUsername(username) {
  if (!username || typeof username !== 'string') {
    return {
      isValid: false,
      errors: ['Le nom d\'utilisateur est requis']
    };
  }

  const errors = [];
  const trimmed = username.trim();

  // Longueur
  if (trimmed.length < 3) {
    errors.push('Le nom d\'utilisateur doit contenir au moins 3 caractères');
  }

  if (trimmed.length > LIMITS.MAX_USERNAME_LENGTH) {
    errors.push(`Le nom d\'utilisateur ne peut pas dépasser ${LIMITS.MAX_USERNAME_LENGTH} caractères`);
  }

  // Caractères autorisés (lettres, chiffres, tirets, underscores)
  if (!/^[a-zA-Z0-9_-]+$/.test(trimmed)) {
    errors.push('Le nom d\'utilisateur ne peut contenir que des lettres, chiffres, tirets et underscores');
  }

  // Ne peut pas commencer ou finir par un tiret ou underscore
  if (/^[-_]|[-_]$/.test(trimmed)) {
    errors.push('Le nom d\'utilisateur ne peut pas commencer ou finir par un tiret ou underscore');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Valide un fichier uploadé
 * @param {File} file - Fichier à valider
 * @param {Object} options - Options de validation
 * @returns {Object} Résultat de validation
 */
export function validateFile(file, options = {}) {
  if (!file) {
    return {
      isValid: false,
      errors: ['Aucun fichier sélectionné']
    };
  }

  const {
    maxSize = LIMITS.MAX_FILE_SIZE,
    allowedTypes = ACCEPTED_FILE_TYPES.ALL,
    allowedExtensions = []
  } = options;

  const errors = [];

  // Taille du fichier
  if (file.size > maxSize) {
    errors.push(`Le fichier est trop volumineux (max: ${formatFileSize(maxSize)})`);
  }

  // Type MIME
  if (allowedTypes.length > 0) {
    const isTypeAllowed = allowedTypes.some(type => {
      if (type.endsWith('/*')) {
        return file.type.startsWith(type.slice(0, -1));
      }
      return file.type === type;
    });

    if (!isTypeAllowed) {
      errors.push('Type de fichier non autorisé');
    }
  }

  // Extension
  if (allowedExtensions.length > 0) {
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      errors.push(`Extension non autorisée (autorisées: ${allowedExtensions.join(', ')})`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Valide une URL
 * @param {string} url - URL à valider
 * @returns {boolean} True si l'URL est valide
 */
export function isValidUrl(url) {
  if (!url || typeof url !== 'string') return false;
  
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Valide un code postal français
 * @param {string} postalCode - Code postal à valider
 * @returns {boolean} True si le code postal est valide
 */
export function isValidPostalCode(postalCode) {
  if (!postalCode || typeof postalCode !== 'string') return false;
  
  // Format français: 5 chiffres
  const postalCodeRegex = /^\d{5}$/;
  return postalCodeRegex.test(postalCode.trim());
}

/**
 * Valide un numéro SIRET français
 * @param {string} siret - Numéro SIRET à valider
 * @returns {boolean} True si le SIRET est valide
 */
export function isValidSiret(siret) {
  if (!siret || typeof siret !== 'string') return false;
  
  const cleaned = siret.replace(/\s/g, '');
  
  // Doit contenir exactement 14 chiffres
  if (!/^\d{14}$/.test(cleaned)) return false;
  
  // Algorithme de validation SIRET (Luhn modifié)
  let sum = 0;
  for (let i = 0; i < 14; i++) {
    let digit = parseInt(cleaned[i]);
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  
  return sum % 10 === 0;
}

/**
 * Valide une date
 * @param {string|Date} date - Date à valider
 * @param {Object} options - Options de validation
 * @returns {Object} Résultat de validation
 */
export function validateDate(date, options = {}) {
  const { minDate, maxDate, required = false } = options;
  
  if (!date) {
    return {
      isValid: !required,
      errors: required ? ['La date est requise'] : []
    };
  }

  const errors = [];
  const dateObj = new Date(date);

  // Date valide
  if (isNaN(dateObj.getTime())) {
    errors.push('Date invalide');
    return { isValid: false, errors };
  }

  // Date minimale
  if (minDate && dateObj < new Date(minDate)) {
    errors.push(`La date doit être postérieure au ${formatDate(minDate)}`);
  }

  // Date maximale
  if (maxDate && dateObj > new Date(maxDate)) {
    errors.push(`La date doit être antérieure au ${formatDate(maxDate)}`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Obtient le label de force du mot de passe
 * @param {number} strength - Force du mot de passe (0-5)
 * @returns {string} Label de force
 */
function getPasswordStrengthLabel(strength) {
  const labels = {
    0: 'Très faible',
    1: 'Faible',
    2: 'Moyen',
    3: 'Bon',
    4: 'Fort',
    5: 'Très fort'
  };
  
  return labels[strength] || 'Inconnu';
}

/**
 * Formate la taille de fichier (fonction helper)
 * @param {number} bytes - Taille en bytes
 * @returns {string} Taille formatée
 */
function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * Formate une date (fonction helper)
 * @param {Date|string} date - Date à formatter
 * @returns {string} Date formatée
 */
function formatDate(date) {
  return new Intl.DateTimeFormat('fr-FR').format(new Date(date));
}

