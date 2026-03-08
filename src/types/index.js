/**
 * Types et interfaces pour AgroNoya
 * Définit les structures de données utilisées dans l'application
 */

/**
 * @typedef {Object} User
 * @property {string} id - Identifiant unique de l'utilisateur
 * @property {string} email - Email de l'utilisateur
 * @property {string} firstName - Prénom
 * @property {string} lastName - Nom de famille
 * @property {string} role - Rôle de l'utilisateur ('farmer', 'admin', 'investor')
 * @property {string} avatar - URL de l'avatar
 * @property {Date} createdAt - Date de création du compte
 * @property {Date} updatedAt - Date de dernière mise à jour
 * @property {UserPreferences} preferences - Préférences utilisateur
 */

/**
 * @typedef {Object} UserPreferences
 * @property {string} language - Langue préférée ('fr', 'en')
 * @property {string} theme - Thème préféré ('light', 'dark', 'auto')
 * @property {boolean} notifications - Notifications activées
 * @property {string} timezone - Fuseau horaire
 */

/**
 * @typedef {Object} Farm
 * @property {string} id - Identifiant unique de la ferme
 * @property {string} name - Nom de la ferme
 * @property {string} address - Adresse de la ferme
 * @property {number} area - Superficie en hectares
 * @property {string} type - Type d'agriculture
 * @property {Coordinates} coordinates - Coordonnées GPS
 * @property {string} ownerId - ID du propriétaire
 * @property {Field[]} fields - Parcelles de la ferme
 */

/**
 * @typedef {Object} Field
 * @property {string} id - Identifiant unique de la parcelle
 * @property {string} name - Nom de la parcelle
 * @property {number} area - Superficie en hectares
 * @property {string} cropType - Type de culture
 * @property {Coordinates[]} polygon - Polygone définissant la parcelle
 * @property {SensorData[]} sensors - Données des capteurs
 */

/**
 * @typedef {Object} Coordinates
 * @property {number} lat - Latitude
 * @property {number} lng - Longitude
 */

/**
 * @typedef {Object} SensorData
 * @property {string} id - Identifiant du capteur
 * @property {string} type - Type de capteur ('temperature', 'humidity', 'soil_moisture')
 * @property {number} value - Valeur mesurée
 * @property {string} unit - Unité de mesure
 * @property {Date} timestamp - Horodatage de la mesure
 * @property {string} deviceId - ID de l'appareil IoT
 */

/**
 * @typedef {Object} WeatherData
 * @property {string} id - Identifiant unique
 * @property {Date} date - Date de la prévision
 * @property {number} temperature - Température en °C
 * @property {number} humidity - Humidité en %
 * @property {number} precipitation - Précipitations en mm
 * @property {number} windSpeed - Vitesse du vent en km/h
 * @property {string} condition - Condition météo
 * @property {Coordinates} location - Localisation
 */

/**
 * @typedef {Object} SatelliteImage
 * @property {string} id - Identifiant unique
 * @property {string} url - URL de l'image
 * @property {Date} captureDate - Date de capture
 * @property {string} satellite - Nom du satellite
 * @property {number} resolution - Résolution en mètres
 * @property {BoundingBox} boundingBox - Zone couverte
 * @property {string} fieldId - ID de la parcelle associée
 */

/**
 * @typedef {Object} BoundingBox
 * @property {number} north - Latitude nord
 * @property {number} south - Latitude sud
 * @property {number} east - Longitude est
 * @property {number} west - Longitude ouest
 */

/**
 * @typedef {Object} AIAnalysis
 * @property {string} id - Identifiant unique
 * @property {string} type - Type d'analyse ('disease_detection', 'yield_prediction', 'soil_analysis')
 * @property {Object} input - Données d'entrée
 * @property {Object} result - Résultat de l'analyse
 * @property {number} confidence - Niveau de confiance (0-1)
 * @property {Date} createdAt - Date de création
 * @property {string} fieldId - ID de la parcelle analysée
 */

/**
 * @typedef {Object} Notification
 * @property {string} id - Identifiant unique
 * @property {string} title - Titre de la notification
 * @property {string} message - Message de la notification
 * @property {string} type - Type ('info', 'warning', 'error', 'success')
 * @property {boolean} read - Statut de lecture
 * @property {Date} createdAt - Date de création
 * @property {string} userId - ID de l'utilisateur destinataire
 */

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success - Succès de la requête
 * @property {*} data - Données de réponse
 * @property {string} message - Message de réponse
 * @property {Object} meta - Métadonnées (pagination, etc.)
 */

/**
 * @typedef {Object} PaginationMeta
 * @property {number} page - Page actuelle
 * @property {number} limit - Nombre d'éléments par page
 * @property {number} total - Nombre total d'éléments
 * @property {number} totalPages - Nombre total de pages
 * @property {boolean} hasNext - Y a-t-il une page suivante
 * @property {boolean} hasPrev - Y a-t-il une page précédente
 */

/**
 * @typedef {Object} FormField
 * @property {string} name - Nom du champ
 * @property {string} type - Type du champ ('text', 'email', 'password', etc.)
 * @property {string} label - Label du champ
 * @property {string} placeholder - Placeholder
 * @property {boolean} required - Champ requis
 * @property {Function} validate - Fonction de validation
 * @property {*} defaultValue - Valeur par défaut
 */

/**
 * @typedef {Object} MenuItem
 * @property {string} key - Clé unique du menu
 * @property {string} label - Label affiché
 * @property {string} path - Chemin de navigation
 * @property {string} icon - Icône du menu
 * @property {MenuItem[]} children - Sous-menus
 * @property {boolean} disabled - Menu désactivé
 */

/**
 * @typedef {Object} Theme
 * @property {string} name - Nom du thème
 * @property {Object} colors - Couleurs du thème
 * @property {Object} fonts - Polices du thème
 * @property {Object} spacing - Espacements du thème
 */

// Export des types pour une utilisation avec JSDoc ou TypeScript
export const Types = {
  User: 'User',
  UserPreferences: 'UserPreferences',
  Farm: 'Farm',
  Field: 'Field',
  Coordinates: 'Coordinates',
  SensorData: 'SensorData',
  WeatherData: 'WeatherData',
  SatelliteImage: 'SatelliteImage',
  BoundingBox: 'BoundingBox',
  AIAnalysis: 'AIAnalysis',
  Notification: 'Notification',
  ApiResponse: 'ApiResponse',
  PaginationMeta: 'PaginationMeta',
  FormField: 'FormField',
  MenuItem: 'MenuItem',
  Theme: 'Theme'
};

