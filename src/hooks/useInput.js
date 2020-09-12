import { useState, useEffect } from "react";

export default function useInput(defaultValue) {
  const [state, setState] = useState(defaultValue);
  const onChange = (e) => {
    setState(e.target.value);
  };
  useEffect(() => {
    setState(defaultValue);
  }, [defaultValue]);

  return {
    state,
    setState,
    onChange,
  };
}
