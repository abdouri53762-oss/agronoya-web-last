/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // === COULEURS PRINCIPALES AGRONOYA ===
        primary: 'rgb(var(--agronoya-primary-rgb) / <alpha-value>)',
        'primary-hover': 'rgb(var(--agronoya-primary-hover-rgb) / <alpha-value>)',
        'primary-light': 'rgb(var(--agronoya-primary-light-rgb) / <alpha-value>)',
        'primary-dark': 'rgb(var(--agronoya-primary-dark-rgb) / <alpha-value>)',
        
        // === SYSTÈME DE THÈME UNIFIÉ ===
        // Couleurs de base (alias principaux)
        background: 'rgb(var(--bg-primary-rgb) / <alpha-value>)',
        foreground: 'rgb(var(--text-primary-rgb) / <alpha-value>)',
        overlay: 'rgb(var(--overlay-rgb) / <alpha-value>)',
        
        // Couleurs de texte (hiérarchie)
        'text-secondary': 'rgb(var(--text-secondary-rgb) / <alpha-value>)',
        'text-tertiary': 'rgb(var(--text-tertiary-rgb) / <alpha-value>)',
        'text-muted': 'rgb(var(--text-muted-rgb) / <alpha-value>)',
        'text-subtle': 'rgb(var(--text-subtle-rgb) / <alpha-value>)',
        'text-disabled': 'rgb(var(--text-disabled-rgb) / <alpha-value>)',
        
        // Couleurs de fond (hiérarchie)
        'bg-secondary': 'rgb(var(--bg-secondary-rgb) / <alpha-value>)',
        'bg-tertiary': 'rgb(var(--bg-tertiary-rgb) / <alpha-value>)',
        'bg-muted': 'rgb(var(--bg-muted-rgb) / <alpha-value>)',
        'bg-accent': 'rgb(var(--bg-accent-rgb) / <alpha-value>)',
        'bg-accent-hover': 'rgb(var(--bg-accent-hover-rgb) / <alpha-value>)',
        
        // Couleurs de bordure (hiérarchie)
        'border-light': 'rgb(var(--border-light-rgb) / <alpha-value>)',
        'border-default': 'rgb(var(--border-default-rgb) / <alpha-value>)',
        'border-medium': 'rgb(var(--border-medium-rgb) / <alpha-value>)',
        'border-strong': 'rgb(var(--border-strong-rgb) / <alpha-value>)',
        
        // === COULEURS D'ÉTAT ===
        success: 'rgb(var(--success-rgb) / <alpha-value>)',
        'success-light': 'rgb(var(--success-light-rgb) / <alpha-value>)',
        warning: 'rgb(var(--warning-rgb) / <alpha-value>)',
        'warning-light': 'rgb(var(--warning-light-rgb) / <alpha-value>)',
        error: 'rgb(var(--error-rgb) / <alpha-value>)',
        'error-light': 'rgb(var(--error-light-rgb) / <alpha-value>)',
        info: 'rgb(var(--info-rgb) / <alpha-value>)',
        'info-light': 'rgb(var(--info-light-rgb) / <alpha-value>)',
      },
      
      // === TYPOGRAPHIE ===
      fontFamily: {
        primary: 'var(--font-family-primary)',
        mono: 'var(--font-family-mono)',
      },
      
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
      },
      
      fontWeight: {
        thin: 'var(--font-thin)',
        light: 'var(--font-light)',
        normal: 'var(--font-normal)',
        medium: 'var(--font-medium)',
        semibold: 'var(--font-semibold)',
        bold: 'var(--font-bold)',
        extrabold: 'var(--font-extrabold)',
      },
      
      lineHeight: {
        tight: 'var(--leading-tight)',
        normal: 'var(--leading-normal)',
        relaxed: 'var(--leading-relaxed)',
      },
      
      letterSpacing: {
        tight: 'var(--tracking-tight)',
        normal: 'var(--tracking-normal)',
        wide: 'var(--tracking-wide)',
      },
      
      // === DESIGN SYSTEM ===
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },
      
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
        '5xl': 'var(--space-5xl)',
        '6xl': 'var(--space-6xl)',
        '8xl': 'var(--space-8xl)',
        '10xl': 'var(--space-10xl)',
      },
      
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        accent: 'var(--shadow-accent)',
      },
    },
  },
  plugins: [],
}

