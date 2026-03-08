import React, { useEffect } from 'react';

const AccessibilityEnhancements = () => {
  useEffect(() => {
    // Skip link pour navigation clavier
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Aller au contenu principal';
    skipLink.className = 'skip-link';
    skipLink.setAttribute('accesskey', 's');
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Amélioration des focus states
    const addFocusEnhancements = () => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      focusableElements.forEach(element => {
        element.addEventListener('focus', (e) => {
          e.target.classList.add('enhanced-focus');
        });

        element.addEventListener('blur', (e) => {
          e.target.classList.remove('enhanced-focus');
        });
      });
    };

    // Gestion des raccourcis clavier
    const handleKeyboardShortcuts = (e) => {
      // Alt + H : Aller à l'accueil
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        window.location.href = '/';
      }

      // Alt + M : Ouvrir le menu
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const menuButton = document.querySelector('[aria-label="Menu principal"]');
        if (menuButton) menuButton.click();
      }

      // Alt + S : Aller à la recherche
      if (e.altKey && e.key === 's') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) searchInput.focus();
      }

      // Échap : Fermer les modales/dropdowns
      if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
        const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
        
        openModals.forEach(modal => {
          const closeButton = modal.querySelector('[aria-label*="fermer"], [aria-label*="close"]');
          if (closeButton) closeButton.click();
        });

        openDropdowns.forEach(dropdown => {
          dropdown.setAttribute('aria-expanded', 'false');
        });
      }
    };

    // Amélioration des annonces pour les lecteurs d'écran
    const createAriaLiveRegion = () => {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'aria-live-region';
      document.body.appendChild(liveRegion);

      // Fonction globale pour annoncer des messages
      window.announceToScreenReader = (message) => {
        const region = document.getElementById('aria-live-region');
        if (region) {
          region.textContent = message;
          setTimeout(() => {
            region.textContent = '';
          }, 1000);
        }
      };
    };

    // Amélioration de la navigation au clavier
    const enhanceKeyboardNavigation = () => {
      let focusedElement = null;

      document.addEventListener('keydown', (e) => {
        // Tab navigation améliorée
        if (e.key === 'Tab') {
          focusedElement = document.activeElement;
          
          // Assurer que l'élément focusé est visible
          setTimeout(() => {
            if (document.activeElement && document.activeElement !== focusedElement) {
              document.activeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }
          }, 0);
        }

        // Navigation par flèches dans les listes
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
          const currentElement = document.activeElement;
          const parent = currentElement.closest('[role="menu"], [role="listbox"], [role="grid"]');
          
          if (parent) {
            e.preventDefault();
            const items = parent.querySelectorAll('[role="menuitem"], [role="option"], [role="gridcell"]');
            const currentIndex = Array.from(items).indexOf(currentElement);
            
            let nextIndex;
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
              nextIndex = (currentIndex + 1) % items.length;
            } else {
              nextIndex = (currentIndex - 1 + items.length) % items.length;
            }
            
            items[nextIndex].focus();
          }
        }
      });
    };

    // Détection des préférences utilisateur
    const handleUserPreferences = () => {
      // Respect de prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduce-motion');
      }

      // Respect de prefers-color-scheme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark && !document.documentElement.classList.contains('dark')) {
        // Suggérer le mode sombre si pas déjà activé
        console.log('L\'utilisateur préfère le mode sombre');
      }

      // Respect de prefers-contrast
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.documentElement.classList.add('high-contrast');
      }
    };

    // Amélioration des formulaires
    const enhanceForms = () => {
      const forms = document.querySelectorAll('form');
      
      forms.forEach(form => {
        // Validation en temps réel
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
          input.addEventListener('blur', () => {
            validateField(input);
          });

          input.addEventListener('input', () => {
            if (input.classList.contains('error-state')) {
              validateField(input);
            }
          });
        });

        // Soumission de formulaire améliorée
        form.addEventListener('submit', (e) => {
          let isValid = true;
          
          inputs.forEach(input => {
            if (!validateField(input)) {
              isValid = false;
            }
          });

          if (!isValid) {
            e.preventDefault();
            const firstError = form.querySelector('.error-state');
            if (firstError) {
              firstError.focus();
              window.announceToScreenReader('Veuillez corriger les erreurs dans le formulaire');
            }
          }
        });
      });
    };

    // Fonction de validation des champs
    const validateField = (field) => {
      const value = field.value.trim();
      let isValid = true;
      let errorMessage = '';

      // Validation des champs requis
      if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Ce champ est requis';
      }

      // Validation email
      if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Veuillez entrer une adresse email valide';
        }
      }

      // Validation téléphone
      if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
          isValid = false;
          errorMessage = 'Veuillez entrer un numéro de téléphone valide';
        }
      }

      // Appliquer les styles d'erreur/succès
      if (isValid) {
        field.classList.remove('error-state');
        field.classList.add('success-state');
        field.setAttribute('aria-invalid', 'false');
      } else {
        field.classList.remove('success-state');
        field.classList.add('error-state');
        field.setAttribute('aria-invalid', 'true');
      }

      // Gestion des messages d'erreur
      let errorElement = field.parentNode.querySelector('.error-message');
      if (!isValid) {
        if (!errorElement) {
          errorElement = document.createElement('div');
          errorElement.className = 'error-message text-red-600 text-sm mt-1';
          errorElement.setAttribute('role', 'alert');
          field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = errorMessage;
        field.setAttribute('aria-describedby', errorElement.id || 'error-' + field.name);
      } else if (errorElement) {
        errorElement.remove();
        field.removeAttribute('aria-describedby');
      }

      return isValid;
    };

    // Initialisation
    addFocusEnhancements();
    createAriaLiveRegion();
    enhanceKeyboardNavigation();
    handleUserPreferences();
    enhanceForms();

    // Event listeners
    document.addEventListener('keydown', handleKeyboardShortcuts);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcuts);
      const skipLinkElement = document.querySelector('.skip-link');
      if (skipLinkElement) skipLinkElement.remove();
      const liveRegion = document.getElementById('aria-live-region');
      if (liveRegion) liveRegion.remove();
    };
  }, []);

  return null; // Ce composant n'affiche rien, il améliore juste l'accessibilité
};

export default AccessibilityEnhancements;

