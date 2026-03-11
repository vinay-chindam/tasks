import { useState } from "react";
import "../App.css"

export const Counter = () => {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount((prev) => prev + 1);
  }
  function decreaseCount() {
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <div className="counter-container">
        <button onClick={decreaseCount} className="btn">-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
        <button onClick={()=>setCount(0)}> Reset</button>
      </div>
    </>
  );
};
