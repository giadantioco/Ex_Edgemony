import "./Component.css";
import { useState, useEffect } from "react";

function Component() {
  const [light, setLight] = useState(true);
  const [message, setMessage] = useState("light is on");

  const handleClick = () => {
    // console.log(light);
    // setLight(false);
    setLight(!light);
  };

  useEffect(() => {
    if (light) {
      setMessage("luce accesa");
    } else {
      setMessage("luce spenta");
    }
  }, [light]);

  // ********************

  return (
    <>
      <div className="lightContainer">
        <button onClick={handleClick}>{message}</button>
      </div>
    </>
  );
}

export default Component;
