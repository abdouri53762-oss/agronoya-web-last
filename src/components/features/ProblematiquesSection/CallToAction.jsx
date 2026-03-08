import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import styles from './ProblematiquesSection.module.css';

const CallToAction = ({ 
  title, 
  description, 
  primaryButton, 
  secondaryButton, 
  className = '' 
}) => {
  return (
    <div className={`${styles.callToAction} ${className}`}>
      <div className={styles.ctaContainer}>
        {/* Contenu */}
        <div className={styles.ctaContent}>
          {/* Icône décorative */}
          <div className={styles.ctaIcon}>
            <Sparkles className={styles.ctaIconSvg} />
          </div>

          {/* Titre */}
          <h3 className={styles.ctaTitle}>
            {title}
          </h3>

          {/* Description */}
          <p className={styles.ctaDescription}>
            {description}
          </p>

          {/* Boutons d'action */}
          <div className={styles.ctaButtons}>
            {primaryButton && (
              <Button
                variant="primary"
                size="large"
                className={styles.ctaPrimaryButton}
                onClick={primaryButton.onClick}
              >
                {primaryButton.text}
                <ArrowRight className={styles.buttonIcon} />
              </Button>
            )}

            {secondaryButton && (
              <Button
                variant="outline"
                size="large"
                className={styles.ctaSecondaryButton}
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>

        {/* Élément décoratif */}
        <div className={styles.ctaDecoration}>
          <div className={styles.ctaDecorationCircle}></div>
          <div className={styles.ctaDecorationGradient}></div>
        </div>
      </div>
    </div>
  );
};

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }),
  secondaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }),
  className: PropTypes.string
};

export default CallToAction;

