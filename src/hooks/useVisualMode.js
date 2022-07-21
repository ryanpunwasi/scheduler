import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      return setMode(newMode);
    }
    setMode(newMode);
    return setHistory([...history, newMode]);
  };

  const back = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setMode(newHistory.at(-1));
      return setHistory(newHistory);
    }
  };

  return { mode, transition, back };
}
