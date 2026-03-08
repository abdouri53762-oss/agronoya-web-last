import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

const Navigation = ({ 
  navItems = [], 
  contactItems = [], 
  isActive, 
  className = '' 
}) => {
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

  return (
    <nav className={`${styles.navigation} ${className}`}>
      <ul className={styles.navList}>
        {navItems.map((item) => {
          // Si c'est le lien Contact avec dropdown
          if (item.hasDropdown && item.path === '/contact') {
            return (
              <li 
                key={item.path} 
                className={`${styles.navItem} ${styles.navItemDropdown}`}
                onMouseEnter={() => setIsContactDropdownOpen(true)}
                onMouseLeave={() => setIsContactDropdownOpen(false)}
              >
                <div className={`${styles.navLink} ${styles.navLinkDropdown} ${
                  isActive('/contact') || isActive('/investisseurs') ? styles.navLinkActive : ''
                }`}>
                  {item.label}
                  <ChevronDown 
                    size={16} 
                    className={`${styles.chevronIcon} ${
                      isContactDropdownOpen ? styles.chevronIconOpen : ''
                    }`}
                  />
                </div>
                
                {/* Menu déroulant */}
                <div className={`${styles.dropdown} ${
                  isContactDropdownOpen ? styles.dropdownOpen : ''
                }`}>
                  <ul className={styles.dropdownList}>
                    {contactItems.map((contactItem) => (
                      <li key={contactItem.path} className={styles.dropdownItem}>
                        <Link
                          to={contactItem.path}
                          className={`${styles.dropdownLink} ${
                            isActive(contactItem.path) ? styles.dropdownLinkActive : ''
                          }`}
                        >
                          {contactItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          }
          
          // Liens normaux
          return (
            <li key={item.path} className={styles.navItem}>
              <Link
                to={item.path}
                className={`${styles.navLink} ${
                  isActive(item.path) ? styles.navLinkActive : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      hasDropdown: PropTypes.bool
    })
  ),
  contactItems: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  isActive: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Navigation;

