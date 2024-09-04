import { useEffect, useRef, useState } from "react";

export const UseRefMutable = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) {
      clearInterval(interValRef.current);
    }
  };

  useEffect(() => {
    interValRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};
