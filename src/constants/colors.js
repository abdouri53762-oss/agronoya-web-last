/**
 * Constantes de couleurs pour AgroNoya
 * Centralise toutes les couleurs utilisées dans l'application
 */

// Couleurs principales de la marque
export const BRAND_COLORS = {
  PRIMARY: '#57D53B',
  SECONDARY: '#28a745',
  ACCENT: '#10b981',
  SUCCESS: '#22c55e',
  WARNING: '#f59e0b',
  ERROR: '#ef4444',
  INFO: '#3b82f6'
};

// Couleurs de texte
export const TEXT_COLORS = {
  PRIMARY: '#1f2937',
  SECONDARY: '#4b5563',
  MUTED: '#6b7280',
  LIGHT: '#9ca3af',
  WHITE: '#ffffff',
  INVERSE: '#f9fafb'
};

// Couleurs de fond
export const BACKGROUND_COLORS = {
  PRIMARY: '#ffffff',
  SECONDARY: '#f9fafb',
  MUTED: '#f3f4f6',
  DARK: '#111827',
  OVERLAY: 'rgba(0, 0, 0, 0.5)'
};

// Couleurs de bordure
export const BORDER_COLORS = {
  DEFAULT: '#e5e7eb',
  LIGHT: '#f3f4f6',
  DARK: '#d1d5db',
  FOCUS: '#57D53B'
};

// Couleurs d'état
export const STATUS_COLORS = {
  ONLINE: '#22c55e',
  OFFLINE: '#ef4444',
  PENDING: '#f59e0b',
  PROCESSING: '#3b82f6'
};

// Gradients
export const GRADIENTS = {
  PRIMARY: 'linear-gradient(135deg, #57D53B 0%, #28a745 100%)',
  SECONDARY: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  HERO: 'linear-gradient(135deg, #57D53B 0%, #22c55e 50%, #10b981 100%)',
  DARK: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
};

// Export par défaut pour faciliter l'importation
export default {
  BRAND_COLORS,
  TEXT_COLORS,
  BACKGROUND_COLORS,
  BORDER_COLORS,
  STATUS_COLORS,
  GRADIENTS
};

