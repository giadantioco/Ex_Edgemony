import { Button } from "../button/button";
import "./keyboard.css";

function Keyboard() {
  const buttons = [
    { text: "AC" },
    { text: "+/-" },
    { text: "%" },
    { text: "/", className: "operator" },
    { text: "7" },
    { text: "8" },
    { text: "9" },
    { text: "X", className: "operator" },
    { text: "4" },
    { text: "5" },
    { text: "6" },
    { text: "−", className: "operator" },
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { text: "+", className: "operator" },
    { text: "Reset", className: "reset" },
    { text: "0", className: "zero" },
    { text: "." },
    { text: "=", className: "operator" },
  ];

  return (
    <div className="keyboard">
      {buttons.map((button, index) => (
        <Button key={index} className={button.className} text={button.text} />
      ))}
    </div>
  );
}

export { Keyboard };
