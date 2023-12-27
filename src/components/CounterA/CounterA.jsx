export const CounterA = ({ setCount, currentCount, isDisabled }) => {
  const handleCount = () => {
    setCount((currentCount || 0) + 1);
  };

  return (
    <button
      style={{ width: 200, height: 50 }}
      onClick={handleCount}
      disabled={isDisabled}
    >
      {" "}
      Click me A{" "}
    </button>
  );
};
