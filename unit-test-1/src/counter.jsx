import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  function Prime(count) {
    if (count <= 1) {
      return false;
    }
    for (let i = 2; i < count; i++) {
      if (count % i == 0) {
        return false;
      }
    }
    return true;
  }
  function Composite(count) {
    if (count <= 1) {
      return false;
    }
    for (let i = 2; i * i < count; i++) {
      if (count % i == 0) {
        return true;
      }
    }
    return false;
  }

  return (
    <div>
      <button onClick={() => setCount(count - 1)} disabled={count == 0}>
        -1
      </button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p><strong>Count:</strong> {count}</p>
      <div><strong>Composite:</strong> {Composite(count) ? "True" : "False"}</div>
      <div><strong>Prime: </strong>{Prime(count) ? "True" : "False"}</div>
    </div>
  );
}

export default Counter;
