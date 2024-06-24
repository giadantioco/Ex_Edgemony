function getMainHTML() {
  const menuHTML = getMenuHTML();
  const articlesHTML = getArticlesHTML();

  return `
        <section class="left">${menuHTML}</section>
        <main class="main">${articlesHTML}</main>
        <aside class="right">Rigth Sidebar</aside>
       
    `;
}

// left sidebar con elementi statici

function getMenuHTML() {
  const menuItems = [
    { label: "dashboard" },
    { label: "search" },
    { label: "insights" },
    { label: "docs" },
    { label: "products" },
    { label: "setting" },
    { label: "messages" },
  ];

  return `${menuItems.map((item) => getMenuItemHTML(item)).join("")}`;
}

function getMenuItemHTML(options = {}) {
  const { label, id = "default" } = options;

  return `
      <li id="${id}">
      ${label}
      </li>
      `;
}

// Main con una lista di articoli presi da https://jsonplaceholder.typicode.com/posts.
// Per ogni articolo mostrare: titolo, testo ed autore.
// non capisco perche non funziona :(

async function getArticlesHTML() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return `${data.map((article) => getArticleHTML(article)).join("")}`;
  } catch (error) {
    console.error("fetch error: ", error);
    return "<p>error loading page</p>";
  }
}

function getArticleHTML(article) {
  return `
      <li>
        <h2>${article.title}</h2>
        <p>${article.body}</p>
      </li>`;
}

export { getMainHTML };
