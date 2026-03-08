import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'lucide-react';
import { useHeader } from './useHeader';
import Logo from './Logo';
import Navigation from './Navigation';
//import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';

/**
 * Composant Header décomposé et optimisé
 * Utilise des sous-composants pour une meilleure maintenabilité
 */
const Header = ({ className = '' }) => {
  const {
    isMenuOpen,
    isContactDropdownOpen,
    isScrolled,
    toggleMenu,
    closeMenu,
    setIsContactDropdownOpen,
    isActive,
    navItems,
    contactItems
  } = useHeader();

  return (
    <>
      <header 
        className={`${styles.header} ${
          isScrolled ? styles.headerScrolled : ''
        } ${className}`}
      >
        <div className={styles.container}>
          <div className={styles.headerContent}>
            {/* Logo */}
            <Logo />

            {/* Navigation Desktop */}
            <Navigation
              navItems={navItems}
              contactItems={contactItems}
              isActive={isActive}
              isContactDropdownOpen={isContactDropdownOpen}
              setIsContactDropdownOpen={setIsContactDropdownOpen}
              className={styles.navigation}
            />

            {/* Actions Desktop */}
            <div className={styles.actions}>
  <LanguageSwitcher />
</div>

            {/* Bouton Menu Mobile */}
            <button
              onClick={toggleMenu}
              className={styles.mobileMenuButton}
              aria-label="Ouvrir le menu de navigation"
              aria-expanded={isMenuOpen}
            >
              <Menu className={styles.icon} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        navItems={navItems}
        contactItems={contactItems}
        isActive={isActive}
      />
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;

