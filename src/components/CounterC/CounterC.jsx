import { useState } from "react";

export const CounterC = ({ setCount, currentCount }) => {
  const [insideComponentCount, setInsideComponentCount] = useState(0);

  const handleClick = () => {
    setCount(currentCount + 1);
  };

  return (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "10",
    }}
  >
    <button style={{ width:200, height:50 }} onClick={handleClick}>
    Click me C
    </button>
  </div>
  )
};
