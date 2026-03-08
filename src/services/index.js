/**
 * Services API pour AgroNoya
 * Centralise tous les appels API de l'application
 */

import { apiGet, apiPost, apiPut, apiDelete, apiUpload } from '../utils/api';

/**
 * Service d'authentification
 */
export const authService = {
  /**
   * Connexion utilisateur
   * @param {Object} credentials - Identifiants de connexion
   * @returns {Promise<Object>} Données utilisateur et token
   */
  login: (credentials) => apiPost('/auth/login', credentials),

  /**
   * Inscription utilisateur
   * @param {Object} userData - Données d'inscription
   * @returns {Promise<Object>} Données utilisateur créé
   */
  register: (userData) => apiPost('/auth/register', userData),

  /**
   * Déconnexion utilisateur
   * @returns {Promise<Object>} Confirmation de déconnexion
   */
  logout: () => apiPost('/auth/logout'),

  /**
   * Rafraîchissement du token
   * @param {string} refreshToken - Token de rafraîchissement
   * @returns {Promise<Object>} Nouveau token
   */
  refreshToken: (refreshToken) => apiPost('/auth/refresh', { refreshToken }),

  /**
   * Réinitialisation du mot de passe
   * @param {string} email - Email de l'utilisateur
   * @returns {Promise<Object>} Confirmation d'envoi
   */
  forgotPassword: (email) => apiPost('/auth/forgot-password', { email }),

  /**
   * Confirmation de réinitialisation du mot de passe
   * @param {Object} resetData - Données de réinitialisation
   * @returns {Promise<Object>} Confirmation de réinitialisation
   */
  resetPassword: (resetData) => apiPost('/auth/reset-password', resetData)
};

/**
 * Service utilisateur
 */
export const userService = {
  /**
   * Récupère le profil de l'utilisateur connecté
   * @returns {Promise<Object>} Profil utilisateur
   */
  getProfile: () => apiGet('/users/me'),

  /**
   * Met à jour le profil utilisateur
   * @param {Object} userData - Données à mettre à jour
   * @returns {Promise<Object>} Profil mis à jour
   */
  updateProfile: (userData) => apiPut('/users/me', userData),

  /**
   * Upload de l'avatar utilisateur
   * @param {File} file - Fichier image
   * @returns {Promise<Object>} URL de l'avatar
   */
  uploadAvatar: (file) => apiUpload('/users/me/avatar', file),

  /**
   * Met à jour les préférences utilisateur
   * @param {Object} preferences - Nouvelles préférences
   * @returns {Promise<Object>} Préférences mises à jour
   */
  updatePreferences: (preferences) => apiPut('/users/me/preferences', preferences),

  /**
   * Change le mot de passe
   * @param {Object} passwordData - Ancien et nouveau mot de passe
   * @returns {Promise<Object>} Confirmation du changement
   */
  changePassword: (passwordData) => apiPost('/users/me/change-password', passwordData)
};

/**
 * Service des fermes
 */
export const farmService = {
  /**
   * Récupère toutes les fermes de l'utilisateur
   * @param {Object} params - Paramètres de requête
   * @returns {Promise<Object>} Liste des fermes
   */
  getFarms: (params = {}) => apiGet('/farms', params),

  /**
   * Récupère une ferme par son ID
   * @param {string} farmId - ID de la ferme
   * @returns {Promise<Object>} Données de la ferme
   */
  getFarm: (farmId) => apiGet(`/farms/${farmId}`),

  /**
   * Crée une nouvelle ferme
   * @param {Object} farmData - Données de la ferme
   * @returns {Promise<Object>} Ferme créée
   */
  createFarm: (farmData) => apiPost('/farms', farmData),

  /**
   * Met à jour une ferme
   * @param {string} farmId - ID de la ferme
   * @param {Object} farmData - Données à mettre à jour
   * @returns {Promise<Object>} Ferme mise à jour
   */
  updateFarm: (farmId, farmData) => apiPut(`/farms/${farmId}`, farmData),

  /**
   * Supprime une ferme
   * @param {string} farmId - ID de la ferme
   * @returns {Promise<Object>} Confirmation de suppression
   */
  deleteFarm: (farmId) => apiDelete(`/farms/${farmId}`)
};

/**
 * Service des parcelles
 */
export const fieldService = {
  /**
   * Récupère les parcelles d'une ferme
   * @param {string} farmId - ID de la ferme
   * @param {Object} params - Paramètres de requête
   * @returns {Promise<Object>} Liste des parcelles
   */
  getFields: (farmId, params = {}) => apiGet(`/farms/${farmId}/fields`, params),

  /**
   * Récupère une parcelle par son ID
   * @param {string} fieldId - ID de la parcelle
   * @returns {Promise<Object>} Données de la parcelle
   */
  getField: (fieldId) => apiGet(`/fields/${fieldId}`),

  /**
   * Crée une nouvelle parcelle
   * @param {string} farmId - ID de la ferme
   * @param {Object} fieldData - Données de la parcelle
   * @returns {Promise<Object>} Parcelle créée
   */
  createField: (farmId, fieldData) => apiPost(`/farms/${farmId}/fields`, fieldData),

  /**
   * Met à jour une parcelle
   * @param {string} fieldId - ID de la parcelle
   * @param {Object} fieldData - Données à mettre à jour
   * @returns {Promise<Object>} Parcelle mise à jour
   */
  updateField: (fieldId, fieldData) => apiPut(`/fields/${fieldId}`, fieldData),

  /**
   * Supprime une parcelle
   * @param {string} fieldId - ID de la parcelle
   * @returns {Promise<Object>} Confirmation de suppression
   */
  deleteField: (fieldId) => apiDelete(`/fields/${fieldId}`)
};

/**
 * Service des capteurs IoT
 */
export const sensorService = {
  /**
   * Récupère les données des capteurs d'une parcelle
   * @param {string} fieldId - ID de la parcelle
   * @param {Object} params - Paramètres (période, type de capteur, etc.)
   * @returns {Promise<Object>} Données des capteurs
   */
  getSensorData: (fieldId, params = {}) => apiGet(`/fields/${fieldId}/sensors`, params),

  /**
   * Récupère les données en temps réel d'un capteur
   * @param {string} sensorId - ID du capteur
   * @returns {Promise<Object>} Données en temps réel
   */
  getRealTimeData: (sensorId) => apiGet(`/sensors/${sensorId}/realtime`),

  /**
   * Configure un capteur
   * @param {string} sensorId - ID du capteur
   * @param {Object} config - Configuration du capteur
   * @returns {Promise<Object>} Configuration mise à jour
   */
  configureSensor: (sensorId, config) => apiPut(`/sensors/${sensorId}/config`, config)
};

/**
 * Service météorologique
 */
export const weatherService = {
  /**
   * Récupère les prévisions météo pour une localisation
   * @param {Object} coordinates - Coordonnées GPS
   * @param {Object} params - Paramètres (période, détail, etc.)
   * @returns {Promise<Object>} Prévisions météo
   */
  getForecast: (coordinates, params = {}) => 
    apiGet('/weather/forecast', { ...coordinates, ...params }),

  /**
   * Récupère l'historique météo
   * @param {Object} coordinates - Coordonnées GPS
   * @param {Object} params - Paramètres (période, etc.)
   * @returns {Promise<Object>} Historique météo
   */
  getHistory: (coordinates, params = {}) => 
    apiGet('/weather/history', { ...coordinates, ...params }),

  /**
   * Récupère les alertes météo
   * @param {Object} coordinates - Coordonnées GPS
   * @returns {Promise<Object>} Alertes météo
   */
  getAlerts: (coordinates) => apiGet('/weather/alerts', coordinates)
};

/**
 * Service d'imagerie satellite
 */
export const satelliteService = {
  /**
   * Récupère les images satellite d'une parcelle
   * @param {string} fieldId - ID de la parcelle
   * @param {Object} params - Paramètres (période, type d'image, etc.)
   * @returns {Promise<Object>} Images satellite
   */
  getImages: (fieldId, params = {}) => apiGet(`/fields/${fieldId}/satellite`, params),

  /**
   * Demande une nouvelle analyse satellite
   * @param {string} fieldId - ID de la parcelle
   * @param {Object} analysisParams - Paramètres d'analyse
   * @returns {Promise<Object>} Demande d'analyse
   */
  requestAnalysis: (fieldId, analysisParams) => 
    apiPost(`/fields/${fieldId}/satellite/analyze`, analysisParams),

  /**
   * Récupère les indices de végétation (NDVI, etc.)
   * @param {string} fieldId - ID de la parcelle
   * @param {Object} params - Paramètres
   * @returns {Promise<Object>} Indices de végétation
   */
  getVegetationIndices: (fieldId, params = {}) => 
    apiGet(`/fields/${fieldId}/vegetation-indices`, params)
};

/**
 * Service d'intelligence artificielle
 */
export const aiService = {
  /**
   * Détection de maladies sur une image
   * @param {File} image - Image à analyser
   * @param {Object} metadata - Métadonnées (type de culture, etc.)
   * @returns {Promise<Object>} Résultat de l'analyse
   */
  detectDisease: (image, metadata = {}) => {
    const formData = new FormData();
    formData.append('image', image);
    Object.entries(metadata).forEach(([key, value]) => {
      formData.append(key, value);
    });
    return apiUpload('/ai/disease-detection', formData);
  },

  /**
   * Prédiction de rendement
   * @param {string} fieldId - ID de la parcelle
   * @param {Object} params - Paramètres de prédiction
   * @returns {Promise<Object>} Prédiction de rendement
   */
  predictYield: (fieldId, params = {}) => 
    apiPost(`/ai/yield-prediction`, { fieldId, ...params }),

  /**
   * Analyse de sol
   * @param {Object} soilData - Données de sol
   * @returns {Promise<Object>} Analyse de sol
   */
  analyzeSoil: (soilData) => apiPost('/ai/soil-analysis', soilData),

  /**
   * Recommandations personnalisées
   * @param {string} fieldId - ID de la parcelle
   * @param {Object} context - Contexte (météo, historique, etc.)
   * @returns {Promise<Object>} Recommandations
   */
  getRecommendations: (fieldId, context = {}) => 
    apiPost('/ai/recommendations', { fieldId, ...context }),

  /**
   * Chat avec l'IA (RAG)
   * @param {string} message - Message de l'utilisateur
   * @param {Object} context - Contexte de la conversation
   * @returns {Promise<Object>} Réponse de l'IA
   */
  chat: (message, context = {}) => 
    apiPost('/ai/chat', { message, context })
};

/**
 * Service de notifications
 */
export const notificationService = {
  /**
   * Récupère les notifications de l'utilisateur
   * @param {Object} params - Paramètres (pagination, filtre, etc.)
   * @returns {Promise<Object>} Liste des notifications
   */
  getNotifications: (params = {}) => apiGet('/notifications', params),

  /**
   * Marque une notification comme lue
   * @param {string} notificationId - ID de la notification
   * @returns {Promise<Object>} Confirmation
   */
  markAsRead: (notificationId) => apiPut(`/notifications/${notificationId}/read`),

  /**
   * Marque toutes les notifications comme lues
   * @returns {Promise<Object>} Confirmation
   */
  markAllAsRead: () => apiPut('/notifications/read-all'),

  /**
   * Supprime une notification
   * @param {string} notificationId - ID de la notification
   * @returns {Promise<Object>} Confirmation
   */
  deleteNotification: (notificationId) => apiDelete(`/notifications/${notificationId}`)
};

// Export de tous les services
export default {
  auth: authService,
  user: userService,
  farm: farmService,
  field: fieldService,
  sensor: sensorService,
  weather: weatherService,
  satellite: satelliteService,
  ai: aiService,
  notification: notificationService
};

