import { useCallback, useState } from 'react';

/**
 * Hook customizado: controla o valor de um input.
 */
export function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event) => setValue(event.target.value), []);
  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  return { value, onChange, reset };
}
