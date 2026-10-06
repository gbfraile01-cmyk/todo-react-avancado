import { useEffect, useState } from 'react';

/**
 * Hook customizado: funciona como useState, mas persiste o valor no localStorage.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localStorage indisponível (modo privado, cota cheia): ignora
    }
  }, [key, value]);

  return [value, setValue];
}
