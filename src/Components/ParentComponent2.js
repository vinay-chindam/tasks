import { useState } from "react";
import ChildComponent2 from "./ChildComponent2";

function ParentComponent2() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChildComponent2 name="Vinay" />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span>{count}</span>
    </>
  );
}


export default  ParentComponent2