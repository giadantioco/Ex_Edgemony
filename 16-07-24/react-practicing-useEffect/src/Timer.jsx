import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(1);

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setCount((count) => count + 1);
  //     console.log("first count", { count });
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      console.log("count right first rendering", { count });
    }, 1000);
  });

  // useEffect(() => {
  //   console.log(count);
  // });

  return (
    <div>
      <h1>I have rendered {count} times!</h1>;
    </div>
  );
}

export default Timer;
