import React from "react";

interface COUNTTYPE {
  count: number | null;
  handleIncrement: () => void;
  handleDecrement: () => void;
}
const EventHandling: React.FC<COUNTTYPE> = ({
  count,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>INC</button>
      <button onClick={handleDecrement}>DEC</button>
    </>
  );
};

export default EventHandling;
