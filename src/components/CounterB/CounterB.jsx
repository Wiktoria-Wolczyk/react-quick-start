import { useState } from "react";

export const CounterB = ({ setCount, currentCount }) => {
  const [insideComponentCount, setInsideComponentCount] = useState(0);

  const handleClick = () => {
    setCount(currentCount + 1);
  };

  const handleInternalButtonClick = () => {
    setInsideComponentCount(insideComponentCount + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 10,
      }}
    >
      <button style={{ width: 200, height: 50 }} onClick={handleClick}>
        Click me B
      </button>

      <button
        style={{ width: 200, height: 50 }}
        onClick={handleInternalButtonClick}
      >
        Click me B 22222
      </button>

      <span>Inside component counter: {insideComponentCount}</span>
    </div>
  );
};
