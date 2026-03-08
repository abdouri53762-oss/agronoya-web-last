import { useState, useEffect, useCallback } from 'react';
import { handleError } from '../utils';

/**
 * Hook personnalisé pour gérer le localStorage de manière sécurisée
 * @param {string} key - Clé du localStorage
 * @param {*} initialValue - Valeur initiale
 * @returns {Array} [value, setValue, removeValue]
 */
export function useLocalStorage(key, initialValue) {
  // Fonction pour lire la valeur du localStorage
  const readValue = useCallback(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      handleError(error, { context: 'useLocalStorage.readValue', key });
      return initialValue;
    }
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState(readValue);

  // Fonction pour sauvegarder une valeur
  const setValue = useCallback((value) => {
    if (typeof window === 'undefined') {
      console.warn('localStorage n\'est pas disponible côté serveur');
      return;
    }

    try {
      // Permet de passer une fonction comme dans useState
      const newValue = value instanceof Function ? value(storedValue) : value;
      
      // Sauvegarde dans le state
      setStoredValue(newValue);
      
      // Sauvegarde dans localStorage
      if (newValue === undefined) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      }
      
      // Dispatch un événement personnalisé pour synchroniser les onglets
      window.dispatchEvent(new CustomEvent('local-storage', {
        detail: { key, newValue }
      }));
    } catch (error) {
      handleError(error, { context: 'useLocalStorage.setValue', key, value });
    }
  }, [key, storedValue]);

  // Fonction pour supprimer une valeur
  const removeValue = useCallback(() => {
    if (typeof window === 'undefined') {
      console.warn('localStorage n\'est pas disponible côté serveur');
      return;
    }

    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
      
      // Dispatch un événement personnalisé
      window.dispatchEvent(new CustomEvent('local-storage', {
        detail: { key, newValue: initialValue }
      }));
    } catch (error) {
      handleError(error, { context: 'useLocalStorage.removeValue', key });
    }
  }, [key, initialValue]);

  // Écoute les changements du localStorage (synchronisation entre onglets)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue !== e.oldValue) {
        try {
          setStoredValue(e.newValue ? JSON.parse(e.newValue) : initialValue);
        } catch (error) {
          handleError(error, { context: 'useLocalStorage.handleStorageChange', key });
        }
      }
    };

    const handleCustomStorageChange = (e) => {
      if (e.detail.key === key) {
        setStoredValue(e.detail.newValue);
      }
    };

    // Écoute les événements natifs du localStorage
    window.addEventListener('storage', handleStorageChange);
    
    // Écoute les événements personnalisés (même onglet)
    window.addEventListener('local-storage', handleCustomStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('local-storage', handleCustomStorageChange);
    };
  }, [key, initialValue]);

  // Synchronise avec le localStorage au montage du composant
  useEffect(() => {
    setStoredValue(readValue());
  }, [readValue]);

  return [storedValue, setValue, removeValue];
}

/**
 * Hook pour gérer les préférences utilisateur
 * @param {Object} defaultPreferences - Préférences par défaut
 * @returns {Object} Préférences et fonctions de gestion
 */
export function useUserPreferences(defaultPreferences = {}) {
  const [preferences, setPreferences, removePreferences] = useLocalStorage(
    'agronoya-preferences',
    defaultPreferences
  );

  const updatePreference = useCallback((key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  }, [setPreferences]);

  const resetPreferences = useCallback(() => {
    setPreferences(defaultPreferences);
  }, [setPreferences, defaultPreferences]);

  return {
    preferences,
    updatePreference,
    resetPreferences,
    removePreferences
  };
}

