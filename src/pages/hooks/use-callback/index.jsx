import { useCallback, useState } from "react";
import Counter from "./counter";

export default function UseCallBackHook() {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const memorizeSetFirstCount = useCallback(
    () => setFirstCount(firstCount + 1),
    [firstCount]
  );
  const memorizeSetSecondCount = useCallback(
    () => setSecondCount(secondCount + 1),
    [secondCount]
  );
  return (
    <div>
      <h1>Use Callback</h1>
      <Counter CountValue={firstCount} onClick={memorizeSetFirstCount} />
      <Counter CountValue={secondCount} onClick={memorizeSetSecondCount} />
    </div>
  );
}
