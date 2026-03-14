import React, { useMemo, useState } from "react";

function UseMemoComponent() {
  const [inputValue, setInputValue] = useState(0);
  const [theme, setTheme] = useState("light");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  const doubleValue = useMemo(() => {
    console.log("Expensive calculation running");

    for (let i = 0; i <= 10000000; i++) {}

    return inputValue * 2;
  }, [inputValue]);

  

  return (
    <div>
      <input type="number" value={inputValue} onChange={handleChange} />
      <span>{doubleValue}</span>
      <div>
        <p>{theme}</p>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Change theme
        </button>
      </div>
    </div>
  );
}

export default UseMemoComponent;
