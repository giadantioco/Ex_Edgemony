import { NavLink } from "react-router-dom";
import { labels } from "../data/labels";

const menuList = [{ name: labels.navHome, path: "/" }];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-slate-300">
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
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
