import React from "react";

const ChildComponent2 = React.memo(function Child({ name }) {
  console.log("Child rendered");
  return <h1>{name}</h1>;
});

export default ChildComponent2