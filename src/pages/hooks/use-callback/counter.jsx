import { memo } from "react";

function Counter({ CountValue, onClick }) {
  console.log(CountValue);

  return (
    <div>
      <p>{CountValue}</p>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
export default memo(Counter);
