import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { cn } from '../../../utils';
import styles from './Typography.module.css';

/**
 * Composant Link avec styles optimisés et accessibilité
 * Supporte les liens internes (React Router) et externes
 */
const Link = ({
  to,
  href,
  external = false,
  variant = 'default',
  size = 'base',
  weight = 'medium',
  color = 'accent',
  underline = 'hover',
  showExternalIcon = true,
  children,
  className = '',
  ...props
}) => {
  // Déterminer si c'est un lien externe
  const isExternal = external || href || (to && (to.startsWith('http') || to.startsWith('mailto') || to.startsWith('tel')));
  
  // Classes CSS
  const linkClasses = cn(
    styles.link,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`weight-${weight}`],
    styles[`color-${color}`],
    styles[`underline-${underline}`],
    className
  );

  // Props communes
  const commonProps = {
    className: linkClasses,
    ...props
  };

  // Lien externe
  if (isExternal) {
    return (
      <a
        href={href || to}
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
      >
        {children}
        {showExternalIcon && (
          <ExternalLink className={styles.externalIcon} />
        )}
      </a>
    );
  }

  // Lien interne avec React Router
  return (
    <RouterLink to={to} {...commonProps}>
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  /** URL de destination (React Router) */
  to: PropTypes.string,
  
  /** URL de destination (lien externe) */
  href: PropTypes.string,
  
  /** Force le traitement comme lien externe */
  external: PropTypes.bool,
  
  /** Variante de style */
  variant: PropTypes.oneOf(['default', 'button', 'nav', 'footer']),
  
  /** Taille du lien */
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl']),
  
  /** Graisse de la police */
  weight: PropTypes.oneOf(['light', 'normal', 'medium', 'semibold', 'bold']),
  
  /** Couleur du lien */
  color: PropTypes.oneOf(['accent', 'primary', 'secondary', 'muted', 'inherit']),
  
  /** Style du soulignement */
  underline: PropTypes.oneOf(['none', 'always', 'hover', 'focus']),
  
  /** Afficher l'icône pour les liens externes */
  showExternalIcon: PropTypes.bool,
  
  /** Contenu du lien */
  children: PropTypes.node.isRequired,
  
  /** Classes CSS additionnelles */
  className: PropTypes.string
};

export default Link;

