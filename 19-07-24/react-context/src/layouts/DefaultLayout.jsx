import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

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
