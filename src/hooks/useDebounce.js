import { useEffect, useState } from "react";

const useDebounce = value => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => setDebounceValue(value), 350);

    return () => clearInterval(timerId);
  }, [value]);

  return debounceValue;
};
export default useDebounce;
