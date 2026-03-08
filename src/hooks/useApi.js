import { useState, useEffect, useCallback } from 'react';
import { handleError } from '../utils';
import { API_CONFIG } from '../constants';

/**
 * Hook personnalisé pour gérer les appels API
 * @param {string} url - URL de l'API
 * @param {Object} options - Options de configuration
 * @returns {Object} État de l'API (data, loading, error, refetch)
 */
export function useApi(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    method = 'GET',
    body = null,
    headers = {},
    immediate = true,
    onSuccess,
    onError,
    ...fetchOptions
  } = options;

  const fetchData = useCallback(async (customUrl = url, customOptions = {}) => {
    if (!customUrl) return;

    setLoading(true);
    setError(null);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

      const response = await fetch(customUrl, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
          ...customOptions.headers
        },
        body: body ? JSON.stringify(body) : customOptions.body,
        signal: controller.signal,
        ...fetchOptions,
        ...customOptions
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
      
      if (onSuccess) {
        onSuccess(result);
      }

      return result;
    } catch (err) {
      const errorMessage = err.name === 'AbortError' 
        ? 'Timeout: La requête a pris trop de temps'
        : err.message;
      
      setError(errorMessage);
      handleError(err, { url: customUrl, method, body });
      
      if (onError) {
        onError(err);
      }
      
      throw err;
    } finally {
      setLoading(false);
    }
  }, [url, method, body, headers, fetchOptions, onSuccess, onError]);

  const refetch = useCallback(() => {
    return fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (immediate && url) {
      fetchData();
    }
  }, [fetchData, immediate, url]);

  return {
    data,
    loading,
    error,
    refetch,
    execute: fetchData
  };
}

/**
 * Hook pour les mutations (POST, PUT, DELETE)
 * @param {string} url - URL de l'API
 * @param {Object} options - Options de configuration
 * @returns {Object} État de la mutation
 */
export function useMutation(url, options = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const mutate = useCallback(async (mutationData, customOptions = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
          ...customOptions.headers
        },
        body: JSON.stringify(mutationData),
        ...options,
        ...customOptions
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);

      if (options.onSuccess) {
        options.onSuccess(result);
      }

      return result;
    } catch (err) {
      setError(err.message);
      handleError(err, { url, data: mutationData });
      
      if (options.onError) {
        options.onError(err);
      }
      
      throw err;
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    mutate,
    loading,
    error,
    data,
    reset
  };
}

