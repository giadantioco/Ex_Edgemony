import "./button.css";

function Button({ text, className = "" }) {
  return <button className={`button ${className}`}>{text}</button>;
}

export { Button };
