import React from "react";

const ButtonComponent = React.memo(({ handleClick }) => {
  console.log("Child component rendered");

  return (
    <div>
      <button onClick={handleClick}>Click Child Button</button>
    </div>
  );
});

export default ButtonComponent;