import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";

function DefaultLayout() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
