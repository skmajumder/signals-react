import { useState } from "react";

function App() {
  console.log("rendering app...");

  const [count, setCount] = useState(0);

  function update(value) {
    setCount((prevCount) => prevCount + value);
  }

  return (
    <div
      style={{
        padding: "5px",
      }}
    >
      <h1>Count: {count}</h1>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={() => update(-1)}>Decrement</button>
        <button onClick={() => update(1)}>Increment</button>
      </div>
    </div>
  );
}

export default App;
