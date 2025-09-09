import { useState } from "react";
export default Counter;

// Destructering hook

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
