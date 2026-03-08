import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../../utils';
import styles from './Typography.module.css';

/**
 * Composant Text avec hiérarchie et contraste optimisés
 * Supporte différentes tailles et variantes de texte
 */
const Text = ({
  size = 'base',
  weight = 'normal',
  color = 'tertiary',
  align = 'left',
  spacing = 'default',
  variant = 'body',
  as = 'p',
  children,
  className = '',
  ...props
}) => {
  const Tag = as;

  // Classes CSS basées sur les props
  const textClasses = cn(
    styles.text,
    styles[`size-${size}`],
    styles[`weight-${weight}`],
    styles[`color-${color}`],
    styles[`align-${align}`],
    styles[`spacing-${spacing}`],
    styles[`variant-${variant}`],
    className
  );

  return (
    <Tag className={textClasses} {...props}>
      {children}
    </Tag>
  );
};

Text.propTypes = {
  /** Taille du texte */
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl']),
  
  /** Graisse de la police */
  weight: PropTypes.oneOf(['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold']),
  
  /** Couleur du texte */
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'muted', 'subtle', 'disabled', 'accent', 'success', 'warning', 'error']),
  
  /** Alignement du texte */
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  
  /** Espacement en bas */
  spacing: PropTypes.oneOf(['none', 'tight', 'default', 'loose']),
  
  /** Variante de style */
  variant: PropTypes.oneOf(['body', 'caption', 'label', 'code', 'quote']),
  
  /** Élément HTML à rendre */
  as: PropTypes.oneOf(['p', 'span', 'div', 'small', 'strong', 'em', 'code', 'blockquote']),
  
  /** Contenu du texte */
  children: PropTypes.node.isRequired,
  
  /** Classes CSS additionnelles */
  className: PropTypes.string
};

export default Text;

