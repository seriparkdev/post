import { ChangeEvent, useCallback, useState } from 'react';

export default function useInput(initialValue = '') {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  return {
    inputValue,
    handleInputChange,
  };
}