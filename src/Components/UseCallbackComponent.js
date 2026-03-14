import React, { useState, useCallback } from "react";
import ButtonComponent from "./ButtonComponent";

function UseCallbackComponent() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <ButtonComponent handleClick={handleClick} />

    </div>
  );
}

export default UseCallbackComponent;