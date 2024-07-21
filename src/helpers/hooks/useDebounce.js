import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebaouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebaouncedValue(value);
    }, delay)

    return () => {
      clearTimeout(handler);
    }
  }, [value, delay])

  return debouncedValue 
}