import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Hook personnalisé pour gérer la logique du Header
 * Centralise toute la logique métier du composant Header
 */
export const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const { t } = useTranslation();

  // Gestion du scroll pour l'effet de transparence
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer les menus lors du changement de route
  useEffect(() => {
    setIsMenuOpen(false);
    setIsContactDropdownOpen(false);
  }, [location.pathname]);

  // Fermer les menus lors du clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('[data-dropdown]')) {
        setIsContactDropdownOpen(false);
      }
    };

    if (isContactDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isContactDropdownOpen]);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Configuration des éléments de navigation
  const navItems = [
    { path: '/', label: t('home') },
    { path: '/solutions', label: 'Nos solutions' },
    { path: '/technologies', label: t('technologies') },
    { path: '/agriculture-durable', label: 'Agriculture Durable' },
    { path: '/pricing', label: t('pricing') },
    { path: '/about', label: t('about') },
    { path: '/contact', label: 'Contact', hasDropdown: true }
  ];

  const contactItems = [
    { path: '/contact', label: 'Agriculteur' },
    { path: '/investisseurs', label: 'Investisseur' }
  ];

  return {
    // États
    isMenuOpen,
    isContactDropdownOpen,
    isScrolled,
    
    // Actions
    toggleMenu,
    closeMenu,
    setIsContactDropdownOpen,
    isActive,
    
    // Données
    navItems,
    contactItems
  };
};

