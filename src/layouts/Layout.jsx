import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';
import AccessibilityEnhancements from '../components/AccessibilityEnhancements';

// Loading component amélioré
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen" role="status" aria-label="Chargement en cours">
    <div className="relative">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-agronoya-primary"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-agronoya-primary rounded-full animate-pulse"></div>
      </div>
    </div>
    <span className="sr-only">Chargement de la page en cours...</span>
  </div>
);

// Error Boundary amélioré
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Erreur capturée par ErrorBoundary:', error, errorInfo);
    
    // Analytics d'erreur (si disponible)
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50" role="alert">
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="mb-6">
              <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Oups ! Une erreur s'est produite</h1>
            <p className="text-gray-600 mb-6">
              Nous nous excusons pour ce désagrément. Notre équipe technique a été notifiée.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-agronoya-primary hover:bg-agronoya-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Recharger la page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full border border-agronoya-primary text-agronoya-primary hover:bg-agronoya-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Retour à l'accueil
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Détails de l'erreur (développement)
                </summary>
                <pre className="mt-2 text-xs bg-gray-100 p-3 rounded overflow-auto">
                  {this.state.error?.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const Layout = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="App">
          {/* SEO par défaut */}
          <SEO />
          
          {/* Améliorations d'accessibilité */}
          <AccessibilityEnhancements />
          
          {/* Header avec navigation améliorée */}
          <Header />
          
          {/* Contenu principal avec ID pour skip link */}
          <main 
            id="main-content"
            className="min-h-screen bg-gradient-to-b from-transparent to-agronoya-primary/5 focus:outline-none"
            tabIndex="-1"
          >
            <Suspense fallback={<LoadingSpinner />}>
              <Outlet />
            </Suspense>
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Bouton retour en haut (mobile-friendly) */}
          <BackToTopButton />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

// Composant bouton retour en haut
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Annoncer aux lecteurs d'écran
    if (window.announceToScreenReader) {
      window.announceToScreenReader('Retour en haut de la page');
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        bg-agronoya-primary hover:bg-agronoya-primary-hover
        text-white p-3 rounded-full shadow-lg
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-agronoya-primary/30
        md:bottom-8 md:right-8
      `}
      aria-label="Retour en haut de la page"
      title="Retour en haut"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
};

export default Layout;


