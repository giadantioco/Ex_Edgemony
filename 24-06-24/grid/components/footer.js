function getFooterHTML() {
  const menuHTML = getMenuHTML();

  return `<footer class="footer">
          <div class="container">
              <div class="wrapper">
                  <div class="logo">Logo</div>
                  <nav class="nav">
                      ${menuHTML}
                  </nav>
              </div>
          </div>
      </footer>`;
}

function getMenuHTML() {
  const menuItems = [
    {
      label: "About us",
      children: [
        { label: "Company info" },
        { label: "Careers" },
        { label: "Altre cose" },
      ],
    },

    {
      label: "About us",
      children: [
        { label: "Company info" },
        { label: "Careers" },
        { label: "Altre cose" },
      ],
    },
  ];

  return `
      <ul class="menu">
          ${menuItems.map((item) => getMenuItemHTML(item)).join("")}
      </ul>
      `;
}

function getMenuItemHTML(options) {
  const { label, href = "#", children = [] } = options;

  // se abbiamo dei figli costruiamo un HTML con una serie di LI
  //   const subItemsHTML = children.map((item) => getMenuItemHTML(item)).join("");

  const subitemsHTML = children
    .map((item) => `<li class="item subitem">${item.label}</li>`)
    .join("");
  const subMenuHTML = "<ul>" + subitemsHTML + "</ul>";

  // stampiamo la lista di prima solo se abbiamo dei figli
  return `<li class="item">
      <a href="${href}">${label}</a>
      ${children.length > 0 ? subMenuHTML : ""}
    </li>`;
}

export { getFooterHTML };

// [ { children: [ { children: [] } ] } ]
