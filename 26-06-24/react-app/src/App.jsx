import { Fragment } from "react"; // Fragment is a component tag, it can also be empty <></>
import "./style/layout.css"; // this is possible because we're using Vite --> CSS inline in HTML
import { Header } from "./components/layout/header/header";
import { Aside, Main } from "./components/layout/main/main";
import { Footer } from "./components/layout/footer/footer";

import posts from "./data.json";

function App() {
  console.log(posts);

  return (
    <Fragment>
      <Header>Logo</Header>
      <Aside />
      <Main posts={posts} />
      <Footer />
    </Fragment>
  );
}

export default App;
