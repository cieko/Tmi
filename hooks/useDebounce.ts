// hook to fetch the songs when user stops typing
import React, { useEffect, useState } from 'react'

// useDebounce takes tha value which is T types and return a T
function useDebounce<T>(value: T, delay?: number): T {

  const [debouncedValue, setDebouncedValue] = useState<T>(value); // type of the value is T

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer); // clear timeout to prevent overflow
    }
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
