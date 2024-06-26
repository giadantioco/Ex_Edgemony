import "./main.css";

function Main() {
  return (
    <main className="main">
      <MainMenu />
    </main>
    //   <aside className="right">{menuHTML}</aside>
  );
}

function MainMenu() {
  const items = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
  ];
  return (
    <section className="list-items">
      {items.map((item) => (
        <MainMenuItem
          userId={item.userId}
          title={item.title}
          body={item.body}
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

function Aside() {
  return (
    <aside className="aside-container">
      <Menu />
    </aside>
  );
}

//   function Menu() {
//     const menuItems = [
//       { label: "dashboard" },
//       { label: "search" },
//       { label: "insights" },
//       { label: "docs" },
//       { label: "products" },
//       { label: "setting" },
//       { label: "messages" },
//     ]
// }

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

export { Main, Aside };
