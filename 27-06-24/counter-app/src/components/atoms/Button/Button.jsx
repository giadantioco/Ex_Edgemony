import "./Button.css";

function Button(props) {
  // ...attrs è un object con dentro tutti gli attributi menu "children" e "className"
  const { children, className, ...attrs } = props;

  const classes = "btn " + (className || ""); // "btn ${quellocheVieneDaFuori}"
  console.log({ attrs });

  // spread operator per "spalmare" gli attributi dentro button
  return (
    <button {...attrs} className={classes}>
      {children}
    </button>
  );
}

export { Button };
