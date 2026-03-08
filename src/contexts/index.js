/**
 * Contexts Index
 * Exports all application contexts and providers
 */

export { default as AppContext, AppProvider, useApp } from './AppContext';
export { default as UIContext, UIProvider, useUI } from './UIContext';

// Combined Provider pour simplifier l'utilisation
import React from 'react';
import PropTypes from 'prop-types';
import { AppProvider } from './AppContext';
import { UIProvider } from './UIContext';

/**
 * Provider combiné qui englobe tous les contextes de l'application
 * Simplifie l'utilisation en évitant d'imbriquer manuellement tous les providers
 */
export const CombinedProvider = ({ children }) => {
  return (
    <AppProvider>
      <UIProvider>
        {children}
      </UIProvider>
    </AppProvider>
  );
};

CombinedProvider.propTypes = {
  children: PropTypes.node.isRequired
};

