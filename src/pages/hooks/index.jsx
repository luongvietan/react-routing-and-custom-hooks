import { useEffect, useRef } from "react";

export default function Hook() {
  const countValue = useRef(0);
  const divElementRef = useRef();
  const inputRefElement = useRef();
  const handleClick = () => {
    countValue.current++;
  };
  useEffect(() => {
    const getDivRef = divElementRef.current;
    getDivRef.style.color = "red";
    setTimeout(() => {
      getDivRef.style.color = "yellow";
      setTimeout(() => {
        getDivRef.style.color = "green";
      }, 2000);
    }, 2000);
    const getNameRef = inputRefElement.current;
    getNameRef.focus();
    console.log(getNameRef);
  }, []);
  return (
    <div>
      <h1>useRef, useCallback & useMemoHook</h1>
      <button onClick={handleClick}>Click</button>
      <div ref={divElementRef}>
        <h3>Random text 1</h3>
        <h4>Random text 2</h4>
      </div>
      <input
        name="name"
        type="text"
        placeholder="Input your name"
        ref={inputRefElement}
      ></input>
    </div>
  );
}
