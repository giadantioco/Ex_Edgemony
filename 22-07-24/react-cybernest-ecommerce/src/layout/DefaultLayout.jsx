import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
        {/* <Outlet /> corripsonde all'import di children in createBrowserRouter (nel main) RICORDATI */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default DefaultLayout;
