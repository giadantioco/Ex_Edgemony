import "./main.css";

import posts from "../../../data.json";

// functions for main menu
function Main() {
  return (
    <main className="main">
      <MainMenu />
    </main>
    //   <aside className="right">{menuHTML}</aside>
  );
}

function MainMenu() {
  const items = posts.slice(0, 10);

  return (
    <section className="list-items">
      {items.map((post, index) => (
        <MainMenuItem
          key={index}
          userId={post.userId}
          title={post.title}
          body={post.body}
        />
      ))}
    </section>
  );
}

function MainMenuItem({ userId, title, body }) {
  return (
    <div className="main-item">
      <h3>{userId}</h3>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

// functions for aside menu
function Aside() {
  const menuItems = [
    { label: "dashboard", id: "dashboard-link" },
    { label: "search", id: "search-link" },
    { label: "insights", id: "insights-link" },
    { label: "docs", id: "docs-link" },
    { label: "products", id: "products-link" },
    { label: "setting", id: "setting-link" },
    { label: "messages", id: "messages-link" },
  ];

  return (
    <aside className="aside-container">
      <Menu items={menuItems} />
    </aside>
  );
}

function Menu(props) {
  const { items } = propss;
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index} id={item.id}>
          {item.label}
        </li>
      ))}
    </ul>
  );
}

export { Main, Aside };
