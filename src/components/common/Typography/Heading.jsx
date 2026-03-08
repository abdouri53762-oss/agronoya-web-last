import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../../utils';
import styles from './Typography.module.css';

/**
 * Composant Heading avec hiérarchie typographique optimisée
 * Supporte 6 niveaux de titres avec styles cohérents
 */
const Heading = ({
  level = 1,
  children,
  variant = 'default',
  color = 'primary',
  align = 'left',
  spacing = 'default',
  className = '',
  ...props
}) => {
  // Validation du niveau
  const validLevel = Math.max(1, Math.min(6, level));
  const Tag = `h${validLevel}`;

  // Classes CSS basées sur les props
  const headingClasses = cn(
    styles.heading,
    styles[`heading${validLevel}`],
    styles[`variant-${variant}`],
    styles[`color-${color}`],
    styles[`align-${align}`],
    styles[`spacing-${spacing}`],
    className
  );

  return (
    <Tag className={headingClasses} {...props}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  /** Niveau du titre (1-6) */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  
  /** Contenu du titre */
  children: PropTypes.node.isRequired,
  
  /** Variante de style */
  variant: PropTypes.oneOf(['default', 'display', 'section', 'card']),
  
  /** Couleur du texte */
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'accent', 'muted']),
  
  /** Alignement du texte */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  
  /** Espacement en bas */
  spacing: PropTypes.oneOf(['none', 'tight', 'default', 'loose']),
  
  /** Classes CSS additionnelles */
  className: PropTypes.string
};

export default Heading;

