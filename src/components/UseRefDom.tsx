import { useRef, useEffect } from "react";

export const UseRefDom = () => {
  // Non-null assertion operator (!) is used to tell TypeScript that the value is never null or undefined
  // Since we know that the input is always present, we can use the non-null assertion operator
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  );
};
