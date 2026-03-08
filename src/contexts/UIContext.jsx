import React, { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

// Actions pour le reducer UI
const UI_ACTIONS = {
  SET_SIDEBAR_OPEN: 'SET_SIDEBAR_OPEN',
  SET_MOBILE_MENU_OPEN: 'SET_MOBILE_MENU_OPEN',
  SET_MODAL_OPEN: 'SET_MODAL_OPEN',
  SET_TOAST: 'SET_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
  SET_LOADING_STATE: 'SET_LOADING_STATE',
  SET_VIEWPORT_SIZE: 'SET_VIEWPORT_SIZE',
  SET_SCROLL_POSITION: 'SET_SCROLL_POSITION'
};

// État initial de l'UI
const initialUIState = {
  // Navigation
  isSidebarOpen: false,
  isMobileMenuOpen: false,
  
  // Modales
  modals: {},
  
  // Toasts/Notifications
  toasts: [],
  
  // États de chargement spécifiques
  loadingStates: {},
  
  // Viewport et responsive
  viewport: {
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  },
  
  // Position de scroll
  scrollPosition: 0,
  isScrolled: false
};

// Reducer pour gérer les actions UI
const uiReducer = (state, action) => {
  switch (action.type) {
    case UI_ACTIONS.SET_SIDEBAR_OPEN:
      return {
        ...state,
        isSidebarOpen: action.payload
      };

    case UI_ACTIONS.SET_MOBILE_MENU_OPEN:
      return {
        ...state,
        isMobileMenuOpen: action.payload
      };

    case UI_ACTIONS.SET_MODAL_OPEN:
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.payload.modalId]: action.payload.isOpen
        }
      };

    case UI_ACTIONS.SET_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.payload]
      };

    case UI_ACTIONS.REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload)
      };

    case UI_ACTIONS.SET_LOADING_STATE:
      return {
        ...state,
        loadingStates: {
          ...state.loadingStates,
          [action.payload.key]: action.payload.isLoading
        }
      };

    case UI_ACTIONS.SET_VIEWPORT_SIZE:
      const { width, height } = action.payload;
      return {
        ...state,
        viewport: {
          width,
          height,
          isMobile: width < 768,
          isTablet: width >= 768 && width < 1024,
          isDesktop: width >= 1024
        }
      };

    case UI_ACTIONS.SET_SCROLL_POSITION:
      return {
        ...state,
        scrollPosition: action.payload,
        isScrolled: action.payload > 50
      };

    default:
      return state;
  }
};

// Création du contexte UI
const UIContext = createContext();

// Hook personnalisé pour utiliser le contexte UI
export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};

// Provider du contexte UI
export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialUIState);

  // Actions pour manipuler l'état UI
  const actions = {
    // Navigation
    setSidebarOpen: (isOpen) => {
      dispatch({ type: UI_ACTIONS.SET_SIDEBAR_OPEN, payload: isOpen });
    },

    toggleSidebar: () => {
      dispatch({ type: UI_ACTIONS.SET_SIDEBAR_OPEN, payload: !state.isSidebarOpen });
    },

    setMobileMenuOpen: (isOpen) => {
      dispatch({ type: UI_ACTIONS.SET_MOBILE_MENU_OPEN, payload: isOpen });
    },

    toggleMobileMenu: () => {
      dispatch({ type: UI_ACTIONS.SET_MOBILE_MENU_OPEN, payload: !state.isMobileMenuOpen });
    },

    // Modales
    setModalOpen: (modalId, isOpen) => {
      dispatch({ 
        type: UI_ACTIONS.SET_MODAL_OPEN, 
        payload: { modalId, isOpen } 
      });
    },

    openModal: (modalId) => {
      actions.setModalOpen(modalId, true);
    },

    closeModal: (modalId) => {
      actions.setModalOpen(modalId, false);
    },

    // Toasts
    showToast: (toast) => {
      const toastWithId = {
        ...toast,
        id: Date.now() + Math.random(),
        timestamp: new Date().toISOString()
      };
      
      dispatch({ type: UI_ACTIONS.SET_TOAST, payload: toastWithId });

      // Auto-suppression
      if (toast.autoRemove !== false) {
        setTimeout(() => {
          actions.removeToast(toastWithId.id);
        }, toast.duration || 4000);
      }

      return toastWithId.id;
    },

    removeToast: (id) => {
      dispatch({ type: UI_ACTIONS.REMOVE_TOAST, payload: id });
    },

    // États de chargement
    setLoadingState: (key, isLoading) => {
      dispatch({ 
        type: UI_ACTIONS.SET_LOADING_STATE, 
        payload: { key, isLoading } 
      });
    },

    // Helpers pour les toasts courants
    showSuccess: (message, options = {}) => {
      return actions.showToast({
        type: 'success',
        message,
        ...options
      });
    },

    showError: (message, options = {}) => {
      return actions.showToast({
        type: 'error',
        message,
        autoRemove: false,
        ...options
      });
    },

    showWarning: (message, options = {}) => {
      return actions.showToast({
        type: 'warning',
        message,
        ...options
      });
    },

    showInfo: (message, options = {}) => {
      return actions.showToast({
        type: 'info',
        message,
        ...options
      });
    }
  };

  // Gestion du redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      dispatch({
        type: UI_ACTIONS.SET_VIEWPORT_SIZE,
        payload: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      dispatch({
        type: UI_ACTIONS.SET_SCROLL_POSITION,
        payload: scrollTop
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer les menus lors du changement de taille d'écran
  useEffect(() => {
    if (state.viewport.isDesktop && state.isMobileMenuOpen) {
      actions.setMobileMenuOpen(false);
    }
  }, [state.viewport.isDesktop, state.isMobileMenuOpen]);

  // Empêcher le scroll du body quand un menu mobile est ouvert
  useEffect(() => {
    if (state.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [state.isMobileMenuOpen]);

  // Valeur du contexte
  const contextValue = {
    ...state,
    ...actions
  };

  return (
    <UIContext.Provider value={contextValue}>
      {children}
    </UIContext.Provider>
  );
};

UIProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { UI_ACTIONS };
export default UIContext;

