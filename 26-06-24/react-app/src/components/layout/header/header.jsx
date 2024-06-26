import "./header.css";

function Header(props) {
  // console.log(arguments);
  console.log(props.children);
  const { children } = props;
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="logo">Logo - {children}</div>
          <Menu />
        </div>
      </div>
    </header>
  );
}

function Menu() {
  return (
    <nav className="nav">
      <ul className="list">
        <MenuItem label={"About us"} />
        <MenuItem label={"Blog"} />
        {MenuItem({ label: "blog" })}
      </ul>
    </nav>
  );
}

function MenuItem(props) {
  const { label, href = "#" } = props;
  return (
    <li className="item">
      <a href="#">{label}</a>
    </li>
  );
}

export { Header };
