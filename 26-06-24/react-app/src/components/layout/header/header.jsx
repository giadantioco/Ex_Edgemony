import "./header.css";

function Header(props) {
  // console.log(arguments);
  console.log(props.children);
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="logo">Logo</div>
          <Menu />
        </div>
      </div>
    </header>
  );
}

function Menu() {
  const menuItems = [
    { label: "About us", href: "#" },
    { label: "Blog", href: "https://google.it" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav className="nav">
      <ul className="list">
        {menuItems.map((item, index) => (
          <MenuItem key={index} label={item.label} href={item.href} />
        ))}
      </ul>
    </nav>
  );
}

function MenuItem(props) {
  const { label, href } = props;
  return (
    <li className="item">
      <a href={href}>{label}</a>
    </li>
  );
}

export { Header };
