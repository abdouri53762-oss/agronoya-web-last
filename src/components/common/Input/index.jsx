import React, { forwardRef } from 'react';
import { cn } from '../../../utils';
import styles from './Input.module.css';

const Input = forwardRef(({
  type = 'text',
  variant = 'default',
  size = 'medium',
  error = false,
  disabled = false,
  label,
  helperText,
  errorMessage,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}, ref) => {
  const inputClasses = cn(
    styles.input,
    styles[variant],
    styles[size],
    {
      [styles.error]: error,
      [styles.disabled]: disabled,
      [styles.withLeftIcon]: leftIcon,
      [styles.withRightIcon]: rightIcon,
    },
    className
  );

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}
      
      <div className={styles.inputWrapper}>
        {leftIcon && (
          <div className={styles.leftIcon}>
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          className={inputClasses}
          disabled={disabled}
          {...props}
        />
        
        {rightIcon && (
          <div className={styles.rightIcon}>
            {rightIcon}
          </div>
        )}
      </div>
      
      {(helperText || errorMessage) && (
        <div className={cn(styles.helperText, { [styles.errorText]: error })}>
          {error ? errorMessage : helperText}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

