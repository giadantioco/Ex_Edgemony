import { Fragment } from "react"; // Fragment is a component tag, it can also be empty <></>
import "./style/layout.css"; // this is possible because we're using Vite --> CSS inline in HTML
import { Header } from "./components/layout/header/header";
import { Aside, Main } from "./components/layout/main/main";
import { Footer } from "./components/layout/footer/footer";

function App() {
  return (
    <Fragment>
      <Header>Logo</Header>
      <Aside />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
