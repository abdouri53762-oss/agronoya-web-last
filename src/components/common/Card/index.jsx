import React from 'react';
import { cn } from '../../../utils';
import styles from './Card.module.css';

const Card = ({
  children,
  variant = 'default',
  padding = 'medium',
  shadow = 'medium',
  hover = false,
  className = '',
  ...props
}) => {
  const cardClasses = cn(
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    styles[`shadow-${shadow}`],
    {
      [styles.hover]: hover,
    },
    className
  );

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={cn(styles.header, className)} {...props}>
    {children}
  </div>
);

const CardBody = ({ children, className = '', ...props }) => (
  <div className={cn(styles.body, className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={cn(styles.footer, className)} {...props}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;

