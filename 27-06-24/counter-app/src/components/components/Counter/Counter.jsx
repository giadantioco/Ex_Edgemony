import { useState } from "react";
import "./Counter.css";
import { Button } from "../../atoms/Button/Button";

function Counter() {
  const [count, setCount] = useState(0);

  const handleMinusClick = () => {
    if (count === 0) {
      return;
    }

    setCount(count - 1);
  };

  const handleResetClick = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <span className="count" style={{ color: "black" }}>
        {count}
      </span>
      <div className="btn-container">
        <Button className="minus" onClick={() => setCount(count + 1)}>
          +1
        </Button>
        <Button className="reset" onClick={handleResetClick}>
          Reset
        </Button>
        <Button className="plus" onClick={handleMinusClick}>
          -1
        </Button>
      </div>
    </div>
  );
}

export { Counter };
