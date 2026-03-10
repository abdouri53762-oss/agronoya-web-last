import React from 'react';
import PropTypes from 'prop-types';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';
import styles from './Header.module.css';

const ThemeToggle = ({ className = '' }) => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.themeToggle} ${className}`}
      aria-label={`Basculer vers le thème ${isDark ? 'clair' : 'sombre'}`}
      title={`Mode ${isDark ? 'clair' : 'sombre'}`}
    >
      <div className={styles.themeToggleIcon}>
        {isDark ? (
          <Sun className={styles.icon} />
        ) : (
          <Moon className={styles.icon} />
        )}
      </div>
    </button>
  );
};

ThemeToggle.propTypes = {
  className: PropTypes.string
};

export default ThemeToggle;

