import { NavLink } from "react-router-dom";
import { labels } from "../data/labels";
import "@fortawesome/fontawesome-free/css/all.min.css";

const menuList = [
  // {
  //   name: labels.logoTitle,
  //   path: "/",
  // },
  {
    name: labels.navProfile,
    path: "profile",
    icon: <i className="fa-solid fa-user mr-2"></i>,
  },
  {
    name: labels.navCreate,
    path: "create",
    icon: <i className="fa-solid fa-plus mr-2"></i>,
  },
  {
    name: labels.navHome,
    path: "/",
    icon: <i className="fa-solid fa-bars mr-2"></i>,
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-slate-300 font-syne">
      <h1 className="font-bold">{labels.logoTitle}</h1>
      <ul className="flex gap-4">
        {menuList.map((item, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold underline" : " "
              }
              to={item.path}
            >
              {item.icon}
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
