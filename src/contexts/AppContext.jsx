import React, { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

// Actions pour le reducer
const APP_ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_USER: 'SET_USER',
  LOGOUT_USER: 'LOGOUT_USER',
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  SET_LANGUAGE: 'SET_LANGUAGE'
};

// État initial de l'application
const initialState = {
  // États de chargement et d'erreur
  isLoading: false,
  error: null,

  // Utilisateur
  user: null,
  isAuthenticated: false,

  // Notifications
  notifications: [],

  // Préférences
  language: 'fr',

  // Configuration
  config: {
    apiUrl: import.meta.env.VITE_API_URL || 'https://api.agronoya.com',
    version: '1.0.0'
  }
};

// Reducer pour gérer les actions
const appReducer = (state, action) => {
  switch (action.type) {
    case APP_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case APP_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case APP_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    case APP_ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false
      };

    case APP_ACTIONS.LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };

    case APP_ACTIONS.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload
      };

    case APP_ACTIONS.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      };

    case APP_ACTIONS.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        )
      };

    case APP_ACTIONS.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };

    default:
      return state;
  }
};

// Création du contexte
const AppContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }

  return context;
};

// Provider du contexte
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions pour manipuler l'état
  const actions = {
    // Gestion du chargement
    setLoading: (isLoading) => {
      dispatch({ type: APP_ACTIONS.SET_LOADING, payload: isLoading });
    },

    // Gestion des erreurs
    setError: (error) => {
      dispatch({ type: APP_ACTIONS.SET_ERROR, payload: error });
    },

    clearError: () => {
      dispatch({ type: APP_ACTIONS.CLEAR_ERROR });
    },

    // Gestion de l'utilisateur
    setUser: (user) => {
      dispatch({ type: APP_ACTIONS.SET_USER, payload: user });

      if (user) {
        localStorage.setItem('agronoya_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('agronoya_user');
      }
    },

    logout: () => {
      dispatch({ type: APP_ACTIONS.LOGOUT_USER });
      localStorage.removeItem('agronoya_user');
      localStorage.removeItem('agronoya_token');
    },

    // Gestion des notifications
    setNotifications: (notifications) => {
      dispatch({ type: APP_ACTIONS.SET_NOTIFICATIONS, payload: notifications });
    },

    addNotification: (notification) => {
      const notificationWithId = {
        ...notification,
        id: Date.now() + Math.random(),
        timestamp: new Date().toISOString()
      };

      dispatch({
        type: APP_ACTIONS.ADD_NOTIFICATION,
        payload: notificationWithId
      });

      if (notification.autoRemove !== false) {
        setTimeout(() => {
          dispatch({
            type: APP_ACTIONS.REMOVE_NOTIFICATION,
            payload: notificationWithId.id
          });
        }, notification.duration || 5000);
      }
    },

    removeNotification: (id) => {
      dispatch({ type: APP_ACTIONS.REMOVE_NOTIFICATION, payload: id });
    },

    // Gestion des préférences
    setLanguage: (language) => {
      dispatch({ type: APP_ACTIONS.SET_LANGUAGE, payload: language });
      localStorage.setItem('agronoya_language', language);
    }
  };

  // Initialisation depuis localStorage
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('agronoya_user');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        dispatch({ type: APP_ACTIONS.SET_USER, payload: user });
      }

      const savedLanguage = localStorage.getItem('agronoya_language');
      if (savedLanguage) {
        dispatch({ type: APP_ACTIONS.SET_LANGUAGE, payload: savedLanguage });
      }
    } catch (error) {
      console.error("Erreur lors de l'initialisation depuis localStorage:", error);
    }
  }, []);

  // Valeur du contexte
  const contextValue = {
    ...state,
    ...actions
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { APP_ACTIONS };
export default AppContext;