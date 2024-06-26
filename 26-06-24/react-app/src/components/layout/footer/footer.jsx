import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Menu />
    </footer>
  );
}

function Menu() {
  return (
    <ul className="list">
      <MenuItem label={"dashboard"} />
      <MenuItem label={"search"} />
      <MenuItem label={"insights"} />
      <MenuItem label={"docs"} />
      <MenuItem label={"products"} />
      <MenuItem label={"setting"} />
      <MenuItem label={"messages"} />
    </ul>
  );
}

function MenuItem(props) {
  const { label, id = "default" } = props;
  return <li id={id}>{label}</li>;
}

export { Footer };
