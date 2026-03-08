/**
 * Constantes de routes pour AgroNoya
 * Centralise toutes les routes de l'application
 */

// Routes principales
export const MAIN_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRICING: '/pricing',
  INVESTORS: '/investisseurs'
};

// Routes des solutions
export const SOLUTION_ROUTES = {
  INDEX: '/solutions',
  AGRO_SOL: '/solutions/agro-sol',
  AGRO_SAT: '/solutions/agro-sat',
  AGRO_IRRIGATION: '/solutions/agro-irrigation',
  AGRO_WEATHER: '/solutions/agro-weather',
  DRONE_MULTISPECTRAL: '/solutions/drone-multispectral',
  NOYA_GPT: '/solutions/noya-gpt',
  NOYA_DIAG: '/solutions/noya-diag',
  DASHBOARD_AGRONOYA: '/solutions/dashboard-agronoya',
  MARKETPLACE_AGRO_STORE: '/solutions/marketplace-agro-store',
  COLLECTIVE_ALERT_SYSTEM: '/solutions/collective-alert-system',
  IRRIGATION_FAILURE_MONITORING: '/solutions/irrigation-failure-monitoring',
  CARBON_CERTIFICATION: '/solutions/carbon-certification',
  MODULE_ESG: '/solutions/module-esg'
};

// Routes des technologies
export const TECHNOLOGY_ROUTES = {
  INDEX: '/technologies',
  AI: '/technologies/ai',
  IOT: '/technologies/iot',
  COMPUTER_VISION: '/technologies/computer-vision',
  BIG_DATA: '/technologies/big-data',
  CAPTEUR_IOT: '/technologies/capteur-iot',
  IMAGERIE_SATELLITE: '/technologies/imagerie-satellite',
  DJI_MAVIC_3: '/technologies/dji-mavic-3',
  NOYA_DIAG: '/technologies/noya-diag',
  VALIDATION_DONNEES: '/technologies/validation-donnees',
  ANALYSE_CONTEXTUELLE: '/technologies/analyse-contextuelle',
  SYNTHESE_STRATEGIQUE: '/technologies/synthese-strategique',
  SUPABASE_SECURITE: '/technologies/supabase-securite',
  MOTEURS_ANALYSE: '/technologies/moteurs-analyse',
  MOTEURS_DIALOGUE: '/technologies/moteurs-dialogue',
  NOYA_GPT: '/technologies/noya-gpt',
  DASHBOARD_PRINCIPAL: '/technologies/dashboard-principal-agronoya',
  DASHBOARD_IRRIGATION: '/technologies/dashboard-irrigation-unifie',
  APPLICATIONS_MOBILES: '/technologies/applications-mobiles',
  AUTOMATISATION_INTELLIGENTE: '/technologies/automatisation-intelligente',
  ANALYSE_DONNEES_TEMPS_REEL: '/technologies/analyse-donnees-temps-reel',
  ENRICHISSEMENT_IA: '/technologies/enrichissement-ia',
  ENRICHISSEMENT_IA_RAG: '/technologies/enrichissement-ia-rag'
};

// Routes des services
export const SERVICE_ROUTES = {
  INDEX: '/services',
  DRONE_SURVEILLANCE: '/services/drone-surveillance',
  FULL_AUTOMATION: '/services/full-automation',
  IOT_INSTALLATION: '/services/iot-installation',
  PHYTOSANITARY_PROTECTION: '/services/phytosanitary-protection',
  SMART_WATER_MANAGEMENT: '/services/smart-water-management',
  STRATEGIC_CONSULTATION: '/services/strategic-consultation'
};

// Routes des détails de services
export const SERVICE_DETAIL_ROUTES = {
  AGRO_SOL_DETAIL: '/services-details/agro-sol',
  AGRO_IRRIGATION_SMART_DETAIL: '/services-details/agro-irrigation-smart',
  AGRO_IRRIGATION_STANDARD_DETAIL: '/services-details/agro-irrigation-standard',
  AGRO_STORE_DETAIL: '/services-details/agro-store',
  PACK_PREMIUM_DETAIL: '/services-details/pack-premium',
  SERVICE_DRONE_FERTILISATION_DETAIL: '/services-details/service-drone-fertilisation',
  SERVICE_DRONE_GROUND_TRUTH_DETAIL: '/services-details/service-drone-ground-truth'
};

// Routes des pages spécialisées
export const SPECIALIZED_ROUTES = {
  FIELD_DETECTION: '/field-detection',
  DISEASE_DETECTION: '/disease-detection',
  SOIL_ANALYSIS: '/soil-analysis',
  SATELLITE_ANALYSIS: '/satellite-analysis',
  CHATBOT: '/chatbot',
  DRONE_SCANNING: '/drone-scanning',
  DRONE_SPRAY: '/drone-spray',
  WEATHER_FORECAST: '/weather-forecast',
  IRRIGATION: '/irrigation',
  DASHBOARD: '/dashboard'
};

// Routes du marketplace
export const MARKETPLACE_ROUTES = {
  PRODUCT_DETAIL: '/marketplace/product/:id'
};

// Toutes les routes combinées
export const ALL_ROUTES = {
  ...MAIN_ROUTES,
  ...SOLUTION_ROUTES,
  ...TECHNOLOGY_ROUTES,
  ...SERVICE_ROUTES,
  ...SERVICE_DETAIL_ROUTES,
  ...SPECIALIZED_ROUTES,
  ...MARKETPLACE_ROUTES
};

// Navigation principale (pour les menus)
export const NAVIGATION_ITEMS = [
  { path: MAIN_ROUTES.HOME, label: 'Accueil', key: 'home' },
  { path: SOLUTION_ROUTES.INDEX, label: 'Solutions', key: 'solutions' },
  { path: TECHNOLOGY_ROUTES.INDEX, label: 'Technologies', key: 'technologies' },
  { path: MAIN_ROUTES.PRICING, label: 'Tarifs', key: 'pricing' },
  { path: MAIN_ROUTES.ABOUT, label: 'À propos', key: 'about' }
];

// Export par défaut
export default {
  MAIN_ROUTES,
  SOLUTION_ROUTES,
  TECHNOLOGY_ROUTES,
  SERVICE_ROUTES,
  SERVICE_DETAIL_ROUTES,
  SPECIALIZED_ROUTES,
  MARKETPLACE_ROUTES,
  ALL_ROUTES,
  NAVIGATION_ITEMS
};

