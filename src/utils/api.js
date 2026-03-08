/**
 * Utilitaires API pour AgroNoya
 * Fonctions helpers pour les appels API, gestion des erreurs, etc.
 */

import { API_CONFIG, ERROR_MESSAGES, STORAGE_KEYS } from '../constants';

/**
 * Classe pour gérer les erreurs API
 */
export class ApiError extends Error {
  constructor(message, status, data = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

/**
 * Configuration par défaut pour les requêtes fetch
 */
const DEFAULT_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: API_CONFIG.TIMEOUT
};

/**
 * Effectue une requête HTTP avec gestion d'erreurs et retry automatique
 * @param {string} url - URL de la requête
 * @param {Object} options - Options de la requête
 * @returns {Promise} Réponse de l'API
 */
export async function apiRequest(url, options = {}) {
  const config = {
    ...DEFAULT_CONFIG,
    ...options,
    headers: {
      ...DEFAULT_CONFIG.headers,
      ...options.headers
    }
  };

  // Ajouter le token d'authentification si disponible
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Construire l'URL complète
  const fullUrl = url.startsWith('http') ? url : `${API_CONFIG.BASE_URL}${url}`;

  let lastError;
  
  // Retry logic
  for (let attempt = 0; attempt <= API_CONFIG.RETRY_ATTEMPTS; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), config.timeout);

      const response = await fetch(fullUrl, {
        ...config,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // Gestion des erreurs HTTP
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new ApiError(
          errorData?.message || getErrorMessage(response.status),
          response.status,
          errorData
        );
      }

      // Retourner la réponse JSON
      const data = await response.json();
      return data;

    } catch (error) {
      lastError = error;

      // Ne pas retry sur certaines erreurs
      if (error instanceof ApiError && !shouldRetry(error.status)) {
        throw error;
      }

      // Ne pas retry sur la dernière tentative
      if (attempt === API_CONFIG.RETRY_ATTEMPTS) {
        throw error;
      }

      // Attendre avant le prochain retry
      await delay(API_CONFIG.RETRY_DELAY * (attempt + 1));
    }
  }

  throw lastError;
}

/**
 * Effectue une requête GET
 * @param {string} url - URL de la requête
 * @param {Object} params - Paramètres de requête
 * @param {Object} options - Options additionnelles
 * @returns {Promise} Réponse de l'API
 */
export function apiGet(url, params = {}, options = {}) {
  const searchParams = new URLSearchParams(params);
  const urlWithParams = searchParams.toString() ? `${url}?${searchParams}` : url;
  
  return apiRequest(urlWithParams, {
    method: 'GET',
    ...options
  });
}

/**
 * Effectue une requête POST
 * @param {string} url - URL de la requête
 * @param {Object} data - Données à envoyer
 * @param {Object} options - Options additionnelles
 * @returns {Promise} Réponse de l'API
 */
export function apiPost(url, data = {}, options = {}) {
  return apiRequest(url, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options
  });
}

/**
 * Effectue une requête PUT
 * @param {string} url - URL de la requête
 * @param {Object} data - Données à envoyer
 * @param {Object} options - Options additionnelles
 * @returns {Promise} Réponse de l'API
 */
export function apiPut(url, data = {}, options = {}) {
  return apiRequest(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    ...options
  });
}

/**
 * Effectue une requête PATCH
 * @param {string} url - URL de la requête
 * @param {Object} data - Données à envoyer
 * @param {Object} options - Options additionnelles
 * @returns {Promise} Réponse de l'API
 */
export function apiPatch(url, data = {}, options = {}) {
  return apiRequest(url, {
    method: 'PATCH',
    body: JSON.stringify(data),
    ...options
  });
}

/**
 * Effectue une requête DELETE
 * @param {string} url - URL de la requête
 * @param {Object} options - Options additionnelles
 * @returns {Promise} Réponse de l'API
 */
export function apiDelete(url, options = {}) {
  return apiRequest(url, {
    method: 'DELETE',
    ...options
  });
}

/**
 * Upload un fichier via FormData
 * @param {string} url - URL de la requête
 * @param {File|FormData} fileOrFormData - Fichier ou FormData à uploader
 * @param {Object} options - Options additionnelles
 * @returns {Promise} Réponse de l'API
 */
export function apiUpload(url, fileOrFormData, options = {}) {
  let formData;
  
  if (fileOrFormData instanceof FormData) {
    formData = fileOrFormData;
  } else {
    formData = new FormData();
    formData.append('file', fileOrFormData);
  }

  return apiRequest(url, {
    method: 'POST',
    body: formData,
    headers: {
      // Ne pas définir Content-Type pour FormData (le navigateur le fait automatiquement)
      ...options.headers
    },
    ...options
  });
}

/**
 * Récupère le token d'authentification
 * @returns {string|null} Token d'authentification
 */
export function getAuthToken() {
  try {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  } catch {
    return null;
  }
}

/**
 * Sauvegarde le token d'authentification
 * @param {string} token - Token à sauvegarder
 */
export function setAuthToken(token) {
  try {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  } catch (error) {
    console.warn('Impossible de sauvegarder le token:', error);
  }
}

/**
 * Supprime le token d'authentification
 */
export function removeAuthToken() {
  try {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  } catch (error) {
    console.warn('Impossible de supprimer le token:', error);
  }
}

/**
 * Vérifie si l'utilisateur est authentifié
 * @returns {boolean} True si authentifié
 */
export function isAuthenticated() {
  const token = getAuthToken();
  if (!token) return false;
  
  try {
    // Vérifier si le token n'est pas expiré (basique)
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

/**
 * Rafraîchit le token d'authentification
 * @returns {Promise<string>} Nouveau token
 */
export async function refreshAuthToken() {
  const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
  if (!refreshToken) {
    throw new Error('Aucun refresh token disponible');
  }

  try {
    const response = await apiPost('/auth/refresh', { refreshToken });
    setAuthToken(response.accessToken);
    
    if (response.refreshToken) {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, response.refreshToken);
    }
    
    return response.accessToken;
  } catch (error) {
    removeAuthToken();
    throw error;
  }
}

/**
 * Gère les erreurs API de manière centralisée
 * @param {Error} error - Erreur à traiter
 * @param {Object} context - Contexte de l'erreur
 */
export function handleApiError(error, context = {}) {
  console.error('Erreur API:', error, context);

  // Redirection vers login si non authentifié
  if (error instanceof ApiError && error.status === 401) {
    removeAuthToken();
    // Rediriger vers la page de login
    window.location.href = '/login';
    return;
  }

  // Notification à l'utilisateur (à adapter selon votre système de notifications)
  if (typeof window !== 'undefined' && window.showNotification) {
    window.showNotification({
      type: 'error',
      message: error.message || ERROR_MESSAGES.GENERIC_ERROR
    });
  }
}

/**
 * Détermine si une requête doit être retentée selon le code d'erreur
 * @param {number} status - Code de statut HTTP
 * @returns {boolean} True si la requête doit être retentée
 */
function shouldRetry(status) {
  // Ne pas retry sur les erreurs client (4xx) sauf 408, 429
  if (status >= 400 && status < 500) {
    return status === 408 || status === 429;
  }
  
  // Retry sur les erreurs serveur (5xx)
  return status >= 500;
}

/**
 * Obtient un message d'erreur selon le code de statut
 * @param {number} status - Code de statut HTTP
 * @returns {string} Message d'erreur
 */
function getErrorMessage(status) {
  const messages = {
    400: 'Requête invalide',
    401: 'Non authentifié',
    403: 'Accès interdit',
    404: 'Ressource non trouvée',
    408: 'Timeout de la requête',
    409: 'Conflit de données',
    422: 'Données invalides',
    429: 'Trop de requêtes',
    500: 'Erreur serveur interne',
    502: 'Passerelle défaillante',
    503: 'Service indisponible',
    504: 'Timeout de la passerelle'
  };
  
  return messages[status] || ERROR_MESSAGES.GENERIC_ERROR;
}

/**
 * Utilitaire pour créer un délai
 * @param {number} ms - Délai en millisecondes
 * @returns {Promise} Promise qui se résout après le délai
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Crée une URL avec des paramètres de requête
 * @param {string} baseUrl - URL de base
 * @param {Object} params - Paramètres à ajouter
 * @returns {string} URL complète
 */
export function buildUrl(baseUrl, params = {}) {
  const url = new URL(baseUrl, API_CONFIG.BASE_URL);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      url.searchParams.append(key, value);
    }
  });
  
  return url.toString();
}

