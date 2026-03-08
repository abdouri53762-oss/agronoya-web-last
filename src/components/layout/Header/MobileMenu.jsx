import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Header.module.css';

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  navItems = [], 
  contactItems = [], 
  isActive 
}) => {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={styles.mobileMenuOverlay}>
      <div className={styles.mobileMenu}>
        {/* Header du menu mobile */}
        <div className={styles.mobileMenuHeader}>
          <h2 className={styles.mobileMenuTitle}>Menu</h2>
          <button
            onClick={onClose}
            className={styles.mobileMenuClose}
            aria-label="Fermer le menu"
          >
            <X className={styles.icon} />
          </button>
        </div>

        {/* Navigation principale */}
        <nav className={styles.mobileNavigation}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.path} className={styles.mobileNavItem}>
                <Link
                  to={item.path}
                  className={`${styles.mobileNavLink} ${
                    isActive(item.path) ? styles.mobileNavLinkActive : ''
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            {/* Contact Link */}
            <li className={styles.mobileNavItem}>
              <Link
                to="/contact"
                className={`${styles.mobileNavLink} ${
                  isActive('/contact') ? styles.mobileNavLinkActive : ''
                }`}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Section Contact */}
        <div className={styles.mobileContactSection}>
          <h3 className={styles.mobileContactTitle}>Contact</h3>
          <ul className={styles.mobileContactList}>
            {contactItems.map((item) => (
              <li key={item.path} className={styles.mobileContactItem}>
                <Link
                  to={item.path}
                  className={styles.mobileContactLink}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions du menu mobile */}
        <div className={styles.mobileMenuActions}>
          <ThemeToggle className={styles.mobileAction} />
          <LanguageSwitcher className={styles.mobileAction} />
        </div>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  contactItems: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  isActive: PropTypes.func.isRequired
};

export default MobileMenu;

