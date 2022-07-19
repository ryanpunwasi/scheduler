import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      return setMode(newMode);
    }

    setMode(newMode);
    setHistory([...history, newMode]);

    // const newHistory = [...history];

    // if (replace) {
    //   newHistory.pop();
    // }

    // newHistory.push(newMode);
    // setHistory(newHistory);
  };

  const back = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setMode(newHistory.at(-1));
      setHistory(newHistory);
    }
  };

  return { mode, transition, back };
}
