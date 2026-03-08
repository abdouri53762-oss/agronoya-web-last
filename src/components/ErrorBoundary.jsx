import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };
  
  static getDerivedStateFromError() { 
    return { hasError: true }; 
  }
  
  componentDidCatch(err, info) { 
    console.error('ErrorBoundary caught an error:', err, info); 
  }
  
  render() { 
    return this.state.hasError ? (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Un problème est survenu
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Veuillez rafraîchir la page ou réessayer plus tard.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Rafraîchir la page
          </button>
        </div>
      </div>
    ) : this.props.children; 
  }
}

