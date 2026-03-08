import React from 'react';
import PropTypes from 'prop-types';
import { Sparkles } from 'lucide-react';
import styles from './ProblematiquesSection.module.css';

const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`${styles.sectionHeader} ${className}`}>
      {/* Badge */}
      <div className={styles.headerBadge}>
        <Sparkles className={styles.headerBadgeIcon} />
        <span className={styles.headerBadgeText}>Problématiques Agricoles</span>
      </div>

      {/* Titre principal */}
      <h2 className={styles.sectionTitle}>
        {title}
      </h2>

      {/* Sous-titre */}
      {subtitle && (
        <h3 className={styles.sectionSubtitle}>
          {subtitle}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p className={styles.sectionDescription}>
          {description}
        </p>
      )}

      {/* Ligne décorative */}
      <div className={styles.decorativeLine}>
        <div className={styles.decorativeLineInner}></div>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string
};

export default SectionHeader;

