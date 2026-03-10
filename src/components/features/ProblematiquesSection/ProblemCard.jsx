import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import VideoPlaceholder from './VideoPlaceholder';
import styles from './ProblematiquesSection.module.css';

const ProblemCard = ({ 
  problem, 
  index, 
  isExpanded, 
  onToggle, 
  className = '' 
}) => {
  const isLeft = index % 2 === 1;

  return (
    <div className={`${styles.problemCard} ${className}`}>
      <div className={`${styles.problemLayout} ${isLeft ? styles.layoutLeft : styles.layoutRight}`}>
        {/* Vidéo */}
        <div className={styles.videoSection}>
          <VideoPlaceholder 
            index={index} 
            isLeft={isLeft}
          />
        </div>

        {/* Contenu */}
        <div className={styles.contentSection}>
          <div className={styles.problemContent}>
            {/* En-tête */}
            <div className={styles.problemHeader}>
              <div className={styles.problemBadge}>
                <span className={styles.problemNumber}>{index}</span>
              </div>
              <h3 className={styles.problemTitle}>
                {problem.title}
              </h3>
            </div>

            {/* Description courte */}
            <p className={styles.problemDescription}>
              {problem.shortDescription}
            </p>

            {/* Bouton d'expansion */}
            <button
              onClick={onToggle}
              className={styles.expandButton}
              aria-expanded={isExpanded}
              aria-label={`${isExpanded ? 'Réduire' : 'Développer'} la problématique ${problem.title}`}
            >
              <span className={styles.expandButtonText}>
                {isExpanded ? 'Voir moins' : 'En savoir plus'}
              </span>
              {isExpanded ? (
                <ChevronUp className={styles.expandIcon} />
              ) : (
                <ChevronDown className={styles.expandIcon} />
              )}
            </button>

            {/* Contenu étendu */}
            {isExpanded && (
              <div className={styles.expandedContent}>
                <div className={styles.expandedInner}>
                  <p className={styles.expandedDescription}>
                    {problem.fullDescription}
                  </p>
                  
                  {problem.features && problem.features.length > 0 && (
                    <div className={styles.featuresSection}>
                      <h4 className={styles.featuresTitle}>Fonctionnalités clés :</h4>
                      <ul className={styles.featuresList}>
                        {problem.features.map((feature, idx) => (
                          <li key={idx} className={styles.featureItem}>
                            <span className={styles.featureBullet}>•</span>
                            <span className={styles.featureText}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {problem.benefits && problem.benefits.length > 0 && (
                    <div className={styles.benefitsSection}>
                      <h4 className={styles.benefitsTitle}>Avantages :</h4>
                      <ul className={styles.benefitsList}>
                        {problem.benefits.map((benefit, idx) => (
                          <li key={idx} className={styles.benefitItem}>
                            <span className={styles.benefitBullet}>✓</span>
                            <span className={styles.benefitText}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProblemCard.propTypes = {
  problem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    fullDescription: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    benefits: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  index: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default ProblemCard;

